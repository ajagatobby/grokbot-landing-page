import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import SpaceXaiLogo from "../components/SpaceXaiLogo"
import DownloadMenu from "../components/nav/DownloadMenu"
import ProductsPanel from "../components/nav/ProductsPanel"
import SolutionsPanel from "../components/nav/SolutionsPanel"
import DeveloperPanel from "../components/nav/DeveloperPanel"
import CompanyPanel from "../components/nav/CompanyPanel"
import MobileMenu from "../components/nav/MobileMenu"

const DMG = "https://api2.cursor.sh/updates/download/stable/darwin-arm64/grok-bot-bd824e1890d8b96f"

type NavItem = { label: string; href: string; panel?: React.ComponentType }

const NAV: NavItem[] = [
  { label: "Products", href: "/grok", panel: ProductsPanel },
  { label: "Solutions", href: "/solutions", panel: SolutionsPanel },
  { label: "Developer", href: "/api", panel: DeveloperPanel },
  { label: "Company", href: "/company", panel: CompanyPanel },
  { label: "Pricing", href: "/pricing" },
  { label: "News", href: "/news" },
]

const PANELS = NAV.filter((n) => n.panel)

const SPRING_X = { type: "spring", bounce: 0.15, duration: 0.4 } as const
const SPRING_SIZE = { type: "spring", bounce: 0.1, duration: 0.4 } as const
const SPRING_SWAP = { type: "spring", bounce: 0, duration: 0.35 } as const

const Chevron = ({ open, className }: { open: boolean; className: string }) => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points={open ? "4,10 8,6 12,10" : "4,6 8,10 12,6"} />
  </svg>
)

export default function Header() {
  const [open, setOpen] = useState<string | null>(null)
  const [lastOpen, setLastOpen] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [panelX, setPanelX] = useState(0)
  const [size, setSize] = useState({ width: 220, height: 240 })
  const [navOffset, setNavOffset] = useState(30)
  const [borderOpacity, setBorderOpacity] = useState(0)
  const [downloadOpen, setDownloadOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({})
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const shown = open ?? lastOpen

  useEffect(() => {
    if (open || !mounted) return
    const id = window.setTimeout(() => {
      setMounted(false)
      setLastOpen(null)
    }, 200)
    return () => window.clearTimeout(id)
  }, [open, mounted])

  useLayoutEffect(() => {
    if (!shown) return
    const el = panelRefs.current[shown]
    if (el && el.offsetWidth > 0 && el.offsetHeight > 0) {
      setSize({ width: el.offsetWidth, height: el.offsetHeight })
    }
  }, [shown, mounted])

  useLayoutEffect(() => {
    if (!shown) return
    const li = itemRefs.current[shown]
    if (li) setPanelX(li.offsetLeft)
  }, [shown])

  useEffect(() => {
    const onScroll = () => setBorderOpacity(window.scrollY > 0 ? 1 : 0)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!downloadOpen) return
    const onDown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-download-menu]")) setDownloadOpen(false)
    }
    window.addEventListener("mousedown", onDown)
    return () => window.removeEventListener("mousedown", onDown)
  }, [downloadOpen])

  const openPanel = useCallback((label: string) => {
    setLastOpen(label)
    setMounted(true)
    setOpen(label)
  }, [])

  const activeIndex = shown ? PANELS.findIndex((p) => p.label === shown) : -1
  const openIndex = open ? PANELS.findIndex((p) => p.label === open) : -1

  return (
    <header className="group fixed inset-x-0 top-0 z-50 duration-200">
      <div aria-hidden="true" className="bg-background/85 pointer-events-none absolute inset-0 -z-10" style={{ WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" }} />
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl relative">
        <div aria-hidden="true" className="bg-border/50 pointer-events-none absolute inset-x-0 bottom-0 h-px" style={{ opacity: borderOpacity }} />
        <nav className="flex items-center justify-between gap-4 py-4 nav:h-16">
          <a aria-label="SpaceXAI Homepage" className="-me-[30px] -translate-y-[1px]" href="/" style={{ marginInlineEnd: `-${navOffset}px` }}>
            <div
              style={{ WebkitTouchCallout: "none" }}
              aria-label="SpaceXAI Logo - Right click to copy SVG"
              className="-m-1 inline-flex cursor-pointer items-center justify-center p-1 outline-none"
            >
              <SpaceXaiLogo className="h-8 w-[173px]" onNavOffset={setNavOffset} />
            </div>
          </a>

          <div data-nav-hover-zone="true" className="relative ml-6 hidden flex-grow nav:block" onMouseLeave={() => setOpen(null)}>
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li
                  key={item.label}
                  ref={(el) => {
                    itemRefs.current[item.label] = el
                  }}
                  onMouseEnter={() => (item.panel ? openPanel(item.label) : setOpen(null))}
                >
                  <a
                    href={item.href}
                    onClick={() => {
                      setOpen(null)
                      setLastOpen(null)
                      setMounted(false)
                    }}
                    className={`${open === item.label ? "text-primary" : "text-primary/50"} hover:text-primary flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors`}
                  >
                    {item.label}
                    {item.panel && <Chevron open={open === item.label} className="size-3" />}
                  </a>
                </li>
              ))}
            </ul>

            <motion.div
              className="absolute top-full pt-2"
              initial={false}
              animate={{ x: panelX }}
              transition={SPRING_X}
              style={{ pointerEvents: open || mounted ? "auto" : "none" }}
              onMouseEnter={() => shown && openPanel(shown)}
            >
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.96 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "top left" }}
                >
                  <motion.div
                    className="bg-card relative overflow-hidden rounded-xl shadow-xl shadow-black/10"
                    initial={false}
                    animate={{ width: size.width, height: size.height }}
                    transition={SPRING_SIZE}
                  >
                    <div className="absolute left-0 top-0" style={{ pointerEvents: "none" }}>
                      {PANELS.map((p, i) => {
                        const isActive = activeIndex === i
                        const x = activeIndex >= 0 ? (i === activeIndex ? 0 : i < activeIndex ? -80 : 80) : 0
                        const opacity = activeIndex >= 0 ? (i === activeIndex ? 1 : 0) : openIndex === i ? 1 : 0
                        const Panel = p.panel!
                        return (
                          <motion.div
                            key={p.label}
                            ref={(el) => {
                              panelRefs.current[p.label] = el
                            }}
                            data-active={isActive ? "true" : undefined}
                            className="absolute left-0 top-0"
                            style={{ pointerEvents: isActive ? "auto" : "none" }}
                            initial={false}
                            animate={{ x, opacity }}
                            transition={SPRING_SWAP}
                          >
                            <Panel />
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://cursor.com/contact-sales?product=grok-bot"
              className={"relative isolate inline-flex shrink-0 items-center justify-center border-0 text-sm font-medium transition-colors duration-150 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:shrink-0 gap-x-3 px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 bg-[--btn-bg] text-[--btn-text] ring-1 ring-[--btn-border] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/15%)] [--btn-hover:theme(colors.primary/5%)] [--btn-text:theme(colors.primary)] hidden nav:flex"}
            >
              <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true" />
              Contact Sales
            </a>

            <div className="relative hidden nav:block" data-download-menu>
              <div className="bg-primary flex items-stretch rounded-full">
                <a download="" className="text-background flex items-center rounded-l-full py-2 pl-4 pr-3 text-sm font-medium transition-colors hover:bg-white/10" href={DMG}>
                  Download
                </a>
                <div className="bg-background/20 w-px" />
                <button
                  type="button"
                  aria-expanded={downloadOpen}
                  onClick={() => setDownloadOpen((v) => !v)}
                  className="text-background flex items-center self-stretch rounded-r-full pl-2 pr-3 transition-colors hover:bg-white/10"
                >
                  <Chevron open={downloadOpen} className="size-4" />
                </button>
              </div>
              <div
                className="absolute right-0 top-full z-50 pt-2"
                style={{
                  opacity: downloadOpen ? 1 : 0,
                  pointerEvents: downloadOpen ? "auto" : "none",
                  transform: downloadOpen ? "translateY(0)" : "translateY(-4px)",
                  transition: "opacity 0.12s ease, transform 0.12s ease",
                }}
              >
                <div className="bg-card overflow-hidden rounded-xl shadow-xl shadow-black/10">
                  <div className="whitespace-nowrap px-2 py-2">
                    <DownloadMenu onNavigate={() => setDownloadOpen(false)} />
                  </div>
                </div>
              </div>
            </div>

            <a
              download=""
              aria-hidden="true"
              href={DMG}
              className={"relative isolate inline-flex shrink-0 items-center justify-center border-0 text-sm font-medium transition-colors duration-150 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:shrink-0 gap-x-3 px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 bg-[--btn-bg] text-[--btn-text] hover:brightness-90 rounded-full [--btn-bg:theme(colors.primary)] [--btn-border:theme(colors.primary)] [--btn-hover:theme(colors.nimbus)] [--btn-text:theme(colors.background)] nav:hidden pointer-events-none opacity-0 transition-opacity duration-200"}
            >
              <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true" />
              Download
            </a>
            <div>
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={drawerOpen}
                onClick={() => setDrawerOpen((v) => !v)}
                className={"relative isolate inline-flex shrink-0 items-center justify-center border-0 text-sm font-medium transition-colors duration-150 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:shrink-0 aspect-square gap-x-3 px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 bg-[--btn-bg] text-[--btn-text] ring-1 ring-[--btn-border] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/15%)] [--btn-hover:theme(colors.primary/5%)] [--btn-text:theme(colors.primary)] visible nav:hidden"}
              >
                <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-slot="icon" className="stroke-[2] ">
                  <g id="name=drawer">
                    <path id="vector" d="M20 7H4V5H20V7ZM20 13H4V11H20V13ZM20 19H4V17H20V19Z" fill="currentColor" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <MobileMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} dmg={DMG} />
      </div>
    </header>
  )
}
