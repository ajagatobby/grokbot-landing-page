import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import PhoneFrame from "../components/usecases/PhoneFrame"
import SalesOutboundTranscript from "../components/usecases/SalesOutboundTranscript"
import TalentScoutTranscript from "../components/usecases/TalentScoutTranscript"
import PaidMediaTranscript from "../components/usecases/PaidMediaTranscript"
import ExpenseManagerTranscript from "../components/usecases/ExpenseManagerTranscript"
import ProductPerformanceTranscript from "../components/usecases/ProductPerformanceTranscript"
import BugReproductionTranscript from "../components/usecases/BugReproductionTranscript"
import AccountHealthTranscript from "../components/usecases/AccountHealthTranscript"
import ChiefofStaffTranscript from "../components/usecases/ChiefofStaffTranscript"
import BotMark from "../components/hero/BotMark"

type UseCase = {
  slug: string
  name: string
  lead: string
  rest: string
  hue: string
  color: string
  Transcript: React.ComponentType
}

const USE_CASES: UseCase[] = [
  {
    slug: "sales-outbound", name: "Sales Outbound", hue: "cyan", color: "#54B9A6", Transcript: SalesOutboundTranscript,
    lead: "Generate pipeline overnight.",
    rest: "Researches accounts, scores contacts with intent, drafts email and LinkedIn in your voice, and leaves a review list for you to approve.",
  },
  {
    slug: "talent-scout", name: "Talent Scout", hue: "violet", color: "#885CF5", Transcript: TalentScoutTranscript,
    lead: "Keep your talent pipeline moving.",
    rest: "Runs screen-to-offer: sources, drafts outreach in your voice, skips profiles already in the ATS, and handles scheduling once you approve.",
  },
  {
    slug: "paid-media", name: "Paid Media", hue: "magenta", color: "#EB4699", Transcript: PaidMediaTranscript,
    lead: "Pulls live channel and campaign data,",
    rest: "sends recommended reallocations against your monthly budget, and holds bids for your approval before making adjustments.",
  },
  {
    slug: "expense-manager", name: "Expense Manager", hue: "green", color: "#5BC67A", Transcript: ExpenseManagerTranscript,
    lead: "Stay on top of money.",
    rest: "Builds the weekly summary from your expense manager and sheets, logs new receipts from email, and nudges owners on missing categories before weekly review.",
  },
  {
    slug: "product-performance", name: "Product Performance", hue: "red", color: "#EA4045", Transcript: ProductPerformanceTranscript,
    lead: "Get a clear view of the metrics that matter.",
    rest: "Logs into observability tools, walks the flamegraphs, and comes back with hotspots plus a short writeup with screenshots.",
  },
  {
    slug: "bug-reproduction", name: "Bug Reproduction", hue: "red", color: "#EA4045", Transcript: BugReproductionTranscript,
    lead: "Give engineers reports they can trust.",
    rest: "Catches the thread, clicks the same path in staging, captures the failure, and drops a repro pack (steps, screenshots, network notes).",
  },
  {
    slug: "account-health", name: "Account Health", hue: "blue", color: "#3C82F6", Transcript: AccountHealthTranscript,
    lead: "See risk and expansion before the QBR.",
    rest: "Reads usage and signals across your book and turns portfolio noise into a clear watch list.",
  },
  {
    slug: "chief-of-staff", name: "Chief of Staff", hue: "orange", color: "#ED712E", Transcript: ChiefofStaffTranscript,
    lead: "Your always-on assistant.",
    rest: "Scans Slack, email, calendar, and meeting notes and surfaces what's new and what maps to your priorities. Helps follow up on dropped threads, coordinate schedules, and update deliverables.",
  },
]

const CTA_CLASS =
  "relative isolate inline-flex shrink-0 items-center justify-center border-0 text-sm font-medium transition-colors duration-150 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:shrink-0 gap-x-3 px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 bg-[--btn-bg] text-[--btn-text] ring-1 ring-[--btn-border] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/15%)] [--btn-hover:theme(colors.primary/5%)] [--btn-text:theme(colors.primary)]"

const PILL_BASE =
  "inline-flex h-8 cursor-pointer items-center rounded-full pr-3 text-sm font-medium whitespace-nowrap transition-[background-color,color,box-shadow,padding] duration-300"

function Pill({ item, active, onSelect }: { item: UseCase; active: boolean; onSelect: () => void }) {
  const style = active
    ? {
        background: `light-dark(var(--color-brand-${item.hue}-100), color-mix(in srgb, var(--color-brand-${item.hue}-550) 32%, transparent))`,
        color: `light-dark(var(--color-brand-${item.hue}-400), var(--color-brand-${item.hue}-300))`,
        boxShadow: `inset 0 0 0 1px color-mix(in srgb, var(--color-brand-${item.hue}-300) 28%, transparent)`,
      }
    : { background: "transparent", boxShadow: "inset 0 0 0 1px var(--color-theme-border)" }

  return (
    <button
      type="button"
      data-pill-item="true"
      aria-pressed={active}
      onClick={onSelect}
      className={`${PILL_BASE} ${active ? "pl-[5px] " : "pl-3 text-theme-text/70"}`}
      style={style}
    >
      <motion.span
        className="flex shrink-0 overflow-hidden"
        initial={false}
        animate={{ width: active ? 28 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <span
          className="flex shrink-0 items-center justify-center overflow-hidden rounded-full"
          style={{ width: "22px", height: "22px", "--fg": item.color, "--bg": "var(--color-theme-bg)" } as React.CSSProperties}
        >
          <BotMark className="grok-bot-mark grok-bot-mark--fill" />
        </span>
      </motion.span>
      {item.name}
    </button>
  )
}

function useMinWidth(px: number) {
  const query = `(min-width: ${px}px)`
  const [match, setMatch] = useState(() => (typeof window === "undefined" ? true : window.matchMedia(query).matches))
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setMatch(mq.matches)
    on()
    mq.addEventListener("change", on)
    return () => mq.removeEventListener("change", on)
  }, [query])
  return match
}

const PILL_GAP = 8

/**
 * Greedily packs the pills into centred rows that fit the measured column width.
 *
 * Pill widths come from a hidden probe row that is mounted only while a measurement is
 * outstanding and unmounted as soon as the widths are known, so the probe never lingers
 * in the markup. Widths depend on the text, not the viewport,
 * so a resize re-packs from the stored widths without remounting the probe.
 */
function usePillRows(active: number, count: number) {
  const containerRef = useRef<HTMLDivElement>(null)
  const inactiveRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef<HTMLDivElement>(null)
  const widthsRef = useRef<{ inactive: number[]; active: number[] } | null>(null)
  const [probing, setProbing] = useState(true)
  const [rows, setRows] = useState<number[][]>(() => [Array.from({ length: count }, (_, i) => i)])

  const pack = useCallback(() => {
    const box = containerRef.current
    const widths = widthsRef.current
    if (!box || !widths || !widths.inactive.length) return
    // The column is a grid item with `min-width: auto`, so it stretches to whatever the
    // rows need; measure the track from the grid instead.
    const grid = box.parentElement
    let avail = box.getBoundingClientRect().width
    if (grid) {
      const cs = getComputedStyle(grid)
      const content = grid.getBoundingClientRect().width - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)
      const twoUp = window.matchMedia("(min-width: 1024px)").matches
      avail = twoUp ? (content - parseFloat(cs.columnGap || "0")) / 2 : content
    }
    if (!avail) return
    const out: number[][] = []
    let cur: number[] = []
    let used = 0
    widths.inactive.forEach((w, i) => {
      // Rows are packed against the widest state so the layout does not reflow when the selection moves.
      const width = widths.active[i] ?? w
      const add = cur.length ? width + PILL_GAP : width
      if (cur.length && used + add > avail + 0.5) {
        out.push(cur)
        cur = [i]
        used = width
      } else {
        cur.push(i)
        used += add
      }
    })
    if (cur.length) out.push(cur)
    setRows((prev) => (JSON.stringify(prev) === JSON.stringify(out) ? prev : out))
  }, [])

  // Read the probe row, then take it back out of the document.
  useLayoutEffect(() => {
    if (!probing) return
    const inactive = inactiveRef.current
    const activeRow = activeRef.current
    if (!inactive || !activeRow) return
    widthsRef.current = {
      inactive: Array.from(inactive.children, (c) => c.getBoundingClientRect().width),
      active: Array.from(activeRow.children, (c) => c.getBoundingClientRect().width),
    }
    setProbing(false)
    pack()
  }, [probing, pack])

  // Pill widths shift once the web fonts land, so measure again when they are ready.
  useEffect(() => {
    if (typeof document === "undefined" || !document.fonts) return
    let live = true
    document.fonts.ready.then(() => live && setProbing(true)).catch(() => {})
    return () => {
      live = false
    }
  }, [])

  useLayoutEffect(() => {
    pack()
  }, [active, count, pack])

  useEffect(() => {
    const box = containerRef.current
    const ro = new ResizeObserver(pack)
    if (box) ro.observe(box)
    window.addEventListener("resize", pack)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", pack)
    }
  }, [pack])

  return { rows, probing, containerRef, inactiveRef, activeRef }
}

const SLIDE_WIDTH = 300
const SLIDE_GAP = 20

export default function UseCases() {
  const [active, setActive] = useState(0)
  const { rows, probing, containerRef, inactiveRef, activeRef } = usePillRows(active, USE_CASES.length)
  // The column layout splits at `lg`, but the phone stops being a swipeable
  // carousel one step earlier, at `sm`.
  const singlePhone = useMinWidth(640)
  const [carouselOffset, setCarouselOffset] = useState(45)
  // The carousel only builds a phone for the slides near the one in view — the rest are
  // caption plus an empty spacer — and keeps them once built.
  const [reach, setReach] = useState(2)
  useEffect(() => {
    setReach((r) => Math.max(r, active + 2))
  }, [active])

  useEffect(() => {
    if (singlePhone) return
    const measure = () => setCarouselOffset(Math.round((window.innerWidth - SLIDE_WIDTH) / 2))
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [singlePhone])
  const item = USE_CASES[active]
  const Transcript = item.Transcript

  return (
    <section id="use-cases">
      <div className="mx-auto grid w-full max-w-[var(--site-content-width)] gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div ref={containerRef} className="flex flex-col gap-8 text-center lg:min-h-[730px] lg:py-10 lg:text-left">
          <h2 className="font-display text-3xl tracking-tight text-balance sm:text-4xl">Give each Bot a job</h2>
          {probing && (
            <div aria-hidden="true" style={{ visibility: "hidden", position: "absolute", left: -9999, top: 0, display: "flex", gap: 8, pointerEvents: "none" }}>
              <div ref={inactiveRef} className="flex gap-2">
                {USE_CASES.map((u) => (
                  <Pill key={u.slug} item={u} active={false} onSelect={() => {}} />
                ))}
              </div>
              <div ref={activeRef} className="flex gap-2">
                {USE_CASES.map((u) => (
                  <Pill key={u.slug} item={u} active onSelect={() => {}} />
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-2">
            {rows.map((row, ri) => (
              <div className="flex justify-center gap-2 lg:justify-start " key={ri}>
                {row.map((i) => (
                  <Pill key={USE_CASES[i].slug} item={USE_CASES[i]} active={i === active} onSelect={() => setActive(i)} />
                ))}
              </div>
            ))}
          </div>
          <div className="hidden lg:mt-2 lg:block lg:min-h-[6.5rem]">
            <motion.p
              key={item.slug}
              className="max-w-md text-pretty text-base "
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="text-theme-text font-medium">{item.lead}</span>{" "}
              <span className="text-theme-text-muted font-normal">{item.rest}</span>
            </motion.p>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className={CTA_CLASS}
            >
              <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true" />
              See more ways to use Grok Bot
            </button>
          </div>
        </div>
        <div className="min-w-0" style={{ minHeight: "730px" }}>
          {/* The phone is deliberately unkeyed: one phone stays mounted and scrolls its
              transcript to the new conversation rather than building a fresh one. */}
          {singlePhone ? (
            <PhoneFrame agentName={item.name} agentColor={item.color} transcript={<Transcript />} />
          ) : (
            <div role="region" aria-roledescription="carousel" aria-label="Ways to use Grok Bot" className="-mx-4 overflow-hidden">
              <div
                className="flex touch-pan-y items-start gap-5"
                style={{ transform: `translate3d(${carouselOffset - active * (SLIDE_WIDTH + SLIDE_GAP)}px, 0px, 0px)`, transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                {USE_CASES.map((u, i) => {
                  const Slide = u.Transcript
                  return (
                    <div className="flex-none" style={{ width: `${SLIDE_WIDTH}px` }} key={u.slug}>
                      {i <= reach ? (
                        <PhoneFrame agentName={u.name} agentColor={u.color} transcript={<Slide />} scale={0.9} frameHeight={620} />
                      ) : (
                        <div style={{ height: "620px" }} />
                      )}
                      <p
                        className="max-w-md text-pretty text-sm leading-snug mx-auto mt-6 text-left"
                        style={{ width: "270px", opacity: 1, transform: "none" }}
                      >
                        <span className="text-theme-text font-medium">{u.lead}</span>{" "}
                        <span className="text-theme-text-muted font-normal">{u.rest}</span>
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
        {/* Between `sm` and `lg` the phone is a single frame, so the active use case's
            caption moves out of the left column and sits under it, centred. */}
        <motion.p
          key={item.slug}
          className="max-w-md text-pretty text-base mx-auto hidden text-center sm:block lg:hidden"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="text-theme-text font-medium">{item.lead}</span>{" "}
          <span className="text-theme-text-muted font-normal">{item.rest}</span>
        </motion.p>
      </div>
      <div className="mt-10 flex justify-center lg:hidden">
        <button type="button" className={CTA_CLASS}>
          <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true" />
          See more ways to use Grok Bot
        </button>
      </div>
    </section>
  )
}
