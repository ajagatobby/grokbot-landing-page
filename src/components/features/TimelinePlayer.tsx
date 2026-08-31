import { useEffect, useRef } from "react"
import { useIsDark } from "../../lib/theme"

type TextNode = [index: number, value: string]
type Entry = [path: string, style: string, hidden: string, className: string, textNodes: TextNode[]]
type Op = { t: number; html?: string; p?: Entry[] }
export type Timeline = { ops: Op[]; duration: number; baseHtml: string }

/**
 * The card timelines carry the light product theme baked into their markup.
 * Retheme the HTML so the cards follow the site theme.
 */
const retheme = (html: string, dark: boolean) =>
  dark ? html.replace(/data-theme="cursor-light"/g, 'data-theme="cursor-dark"') : html

function resolve(root: HTMLElement, path: string): Element | null {
  let node: Element = root
  for (const seg of path.split(".")) {
    const child = node.children[Number(seg)]
    if (!child) return null
    node = child
  }
  return node
}

function apply(root: HTMLElement, e: Entry) {
  const el = resolve(root, e[0])
  if (!el) return
  const [, style, hidden, className, textNodes] = e
  if (style) el.setAttribute("style", style)
  else el.removeAttribute("style")
  if (hidden) el.setAttribute("data-hidden", "true")
  else el.removeAttribute("data-hidden")
  if (className && el.getAttribute("class") !== className) el.setAttribute("class", className)
  if (!textNodes.length) return
  // innerHTML round-trips merge adjacent text nodes, so match positionally rather than by index.
  const nodes: Text[] = []
  el.childNodes.forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE) nodes.push(n as Text)
  })
  if (nodes.length === textNodes.length) {
    textNodes.forEach(([, value], i) => {
      if (nodes[i].nodeValue !== value) nodes[i].nodeValue = value
    })
    return
  }
  const joined = textNodes.map(([, value]) => value).join("")
  if (el.children.length === 0) {
    if (el.textContent !== joined) el.textContent = joined
  } else if (nodes.length) {
    if (nodes[0].nodeValue !== joined) nodes[0].nodeValue = joined
    for (let i = 1; i < nodes.length; i++) nodes[i].nodeValue = ""
  }
}

/**
 * Replays a timeline — structural keyframes plus per-element style/text patches —
 * looping while the card is on screen.
 */
export default function TimelinePlayer({ data }: { data: Timeline }) {
  const dark = useIsDark()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    let raf = 0
    let start = performance.now()
    let cursor = 0
    let running = false

    const reset = () => {
      root.innerHTML = retheme(data.baseHtml, dark)
      cursor = 0
      start = performance.now()
    }

    const tick = (now: number) => {
      const elapsed = now - start
      if (elapsed >= data.duration) {
        reset()
      } else {
        while (cursor < data.ops.length && data.ops[cursor].t <= elapsed) {
          const op = data.ops[cursor]
          if (op.html !== undefined) root.innerHTML = retheme(op.html, dark)
          else op.p?.forEach((e) => apply(root, e))
          cursor++
        }
      }
      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true
          reset()
          raf = requestAnimationFrame(tick)
        } else if (!entry.isIntersecting && running) {
          running = false
          cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 },
    )
    io.observe((root.parentElement as HTMLElement | null) ?? root)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [data, dark])

  return <div ref={ref} className="contents" dangerouslySetInnerHTML={{ __html: retheme(data.baseHtml, dark) }} />
}
