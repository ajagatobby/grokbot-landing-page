import { useEffect, useRef, useState } from "react"
import { Alignment, EventType, Fit, Layout, RuntimeLoader, useRive } from "@rive-app/react-canvas"
import type { EventCallback } from "@rive-app/react-canvas"
import riveWasmUrl from "@rive-app/canvas/rive.wasm?url"
import { useIsDark } from "../lib/theme"

// Left to itself the runtime pulls its wasm from unpkg, so the wordmark depends on a
// third-party CDN at render time — and when that fetch is slow the load-failure timeout
// below fires and the logo never appears at all. Serve the runtime from our own origin
// instead, using the build that ships with the installed package so the wasm and the JS
// driving it can never disagree on version.
RuntimeLoader.setWasmUrl(riveWasmUrl)

const ANIMATION = "SPACE X WEB"

// The reveal is a page-load moment, not a per-instance one: once it has run, any later
// mark (the one inside the mobile menu, say) renders already revealed instead of
// replaying the wordmark.
let hasPlayed = false

/** Matches the site's easing for the logo reveal: eased over the 0.55s–1.10s window. */
function progress(t: number) {
  const x = (t - 0.55) / 0.55
  if (x <= 0) return 0
  if (x >= 1) return 1
  return x < 0.5 ? 2 * x * x : 1 - (-2 * x + 2) ** 2 / 2
}

const navOffsetFor = (t: number) => 30 + 92 * progress(t)

function RiveLogo({ src, className, onNavOffset }: { src: string; className?: string; onNavOffset?: (px: number) => void }) {
  const [failed, setFailed] = useState(false)
  const [visible, setVisible] = useState(false)
  const scaleRef = useRef<HTMLSpanElement>(null)
  const offsetRef = useRef(onNavOffset)
  offsetRef.current = onNavOffset

  const { rive, RiveComponent } = useRive({
    src,
    animations: ANIMATION,
    autoplay: false,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    onLoadError: () => setFailed(true),
  })

  useEffect(() => {
    if (rive) return
    const id = window.setTimeout(() => setFailed(true), 4000)
    return () => window.clearTimeout(id)
  }, [rive])

  useEffect(() => {
    if (failed) offsetRef.current?.(122)
  }, [failed])

  useEffect(() => {
    if (!rive || failed) return
    const setScale = (t: number) => {
      const el = scaleRef.current
      if (el) el.style.transform = `scale(${0.9 + 0.1 * progress(t)})`
    }
    let raf = 0
    const resize = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => rive.resizeDrawingSurfaceToCanvas())
    }
    const show = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))

    if (hasPlayed) {
      rive.scrub(ANIMATION, 1.6)
      setScale(1.6)
      offsetRef.current?.(122)
      resize()
      return () => {
        cancelAnimationFrame(show)
        cancelAnimationFrame(raf)
      }
    }

    rive.scrub(ANIMATION, 0)
    setScale(0)
    offsetRef.current?.(navOffsetFor(0))

    let elapsed = 0
    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      hasPlayed = true
      rive.pause()
      rive.scrub(ANIMATION, 1.6)
      setScale(1.6)
      rive.off(EventType.Advance, advance as EventCallback)
      rive.off(EventType.Loop, finish)
      offsetRef.current?.(122)
      resize()
    }
    function advance(e?: { data?: unknown }) {
      if (finished) return
      elapsed += typeof e?.data === "number" ? e.data : 0
      setScale(elapsed)
      offsetRef.current?.(navOffsetFor(elapsed))
      if (elapsed >= 1.6) finish()
    }
    rive.on(EventType.Advance, advance as EventCallback)
    rive.on(EventType.Loop, finish)

    const zone = document.querySelector("[data-nav-hover-zone]")
    let armed = false
    let hovering = false
    let started = false
    const start = () => {
      if (started || !armed || hovering) return
      started = true
      rive.play(ANIMATION)
    }
    const onEnter = () => { hovering = true }
    const onLeave = () => { hovering = false; start() }
    zone?.addEventListener("mouseenter", onEnter)
    zone?.addEventListener("mouseleave", onLeave)
    const timer = window.setTimeout(() => {
      armed = true
      if (zone?.matches(":hover")) hovering = true
      start()
    }, 1500)

    return () => {
      cancelAnimationFrame(show)
      cancelAnimationFrame(raf)
      window.clearTimeout(timer)
      zone?.removeEventListener("mouseenter", onEnter)
      zone?.removeEventListener("mouseleave", onLeave)
      rive.off(EventType.Advance, advance as EventCallback)
      rive.off(EventType.Loop, finish)
    }
  }, [rive, failed])

  return (
    <span ref={scaleRef} className={`inline-block origin-left ${className ?? ""}`}>
      <RiveComponent className={`block h-full w-full transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`} />
    </span>
  )
}

export default function SpaceXaiLogo({ className, onNavOffset }: { className?: string; onNavOffset?: (px: number) => void }) {
  const dark = useIsDark()
  const src = dark ? "/rive/logo-dark.riv" : "/rive/logo-light.riv"
  return <RiveLogo key={src} src={src} className={className} onNavOffset={onNavOffset} />
}
