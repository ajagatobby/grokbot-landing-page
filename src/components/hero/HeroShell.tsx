import { GrokBot } from "../../lib/grok-bot-mark"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import BotMark from "./BotMark"
import { AGENT_AGE_HOURS, agentStamp } from "../../lib/agentTime"
import { useIsDark } from "../../lib/theme"
import { HEADLINE_STATES, useMarkStates } from "../../lib/markStates"

/**
 * The hero's entrance: the headline words fade up one
 * after another, then the eyebrow rises and the subheading and buttons settle down
 * toward it, each un-blurring as it arrives.
 */
const ENTER_EASE = [0.16, 1, 0.3, 1] as const
const word = (i: number) => ({
  // The words flip up into place rather than just fading -- which is what the
  // perspective on the h1 is there for.
  initial: { opacity: 0, rotateX: -40, y: "45%" },
  animate: { opacity: 1, rotateX: 0, y: "0%" },
  transition: { duration: 0.605, delay: i * 0.055, ease: ENTER_EASE },
})
const settle = (y: number, delay: number, duration: number) => ({
  initial: { opacity: 0, y, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration, delay, ease: ENTER_EASE },
})

export type HeroShellProps = {
  agentName: string
  agentTime: string
  agentPreview: React.ReactNode
  transcript: React.ReactNode
  /** Title of the conversation currently open in the main pane. */
  selected: string
  onSelect: (name: string) => void
}

const SIDEBAR_FULL = 280
const SIDEBAR_RAIL = 84
const COLLAPSE_BELOW = 768

export default function HeroShell({ agentName, agentTime, agentPreview, transcript, selected, onSelect }: HeroShellProps) {
  // The sidebar rows are tabs: the open one keeps a standing background, the rest light up on hover.
  const headline = useMarkStates(HEADLINE_STATES)
  // The fake app carries its own product theme, which follows the site theme.
  const dark = useIsDark()

  const rowProps = (name: string) => ({
    type: "button" as const,
    title: name,
    onClick: () => onSelect(name),
    ...(selected === name ? { "data-active": "" } : {}),
    className: `baby-grok-bot-agent-row cursor-pointer${selected === name ? "" : " hover:bg-[var(--grok-bot-sidebar-hover)]"}`,
  })
  const shellRef = useRef<HTMLDivElement>(null)
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_FULL)
  const collapsed = sidebarWidth === SIDEBAR_RAIL

  useEffect(() => {
    const el = shellRef.current
    if (!el) return
    const measure = () => setSidebarWidth(el.getBoundingClientRect().width < COLLAPSE_BELOW ? SIDEBAR_RAIL : SIDEBAR_FULL)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section id="hero">
      <div className="mx-auto flex w-full max-w-[var(--site-content-width)] flex-col items-center gap-12 px-4 pt-32 pb-20 text-center sm:gap-16 sm:px-6 sm:pt-[148px] sm:pb-28">
        <div className="flex flex-col items-center">
          <motion.a href="/news/introducing-grok-bot" className="group/launch mx-auto inline-flex max-w-full items-center gap-1 rounded-full py-1.5 pe-1 ps-2 sm:gap-2.5 sm:pe-1.5 sm:ps-2.5 border-primary/[0.08] dark:bg-card/60 border backdrop-blur-sm hover:border-primary/15 dark:hover:bg-card transition-colors mb-4 sm:mb-5" {...settle(10, 0.416, 1.024)}>
            <span className="border-sunset/45 text-sunset inline-flex shrink-0 items-center whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase leading-none tracking-wide">
              {"Early beta"}
            </span>
            <span className="text-[13px] tracking-tight whitespace-nowrap">
              <span className="text-primary font-semibold">
                {"Grok Bot is here"}
              </span>
              <span className="hidden sm:inline">
                <span className="text-primary/30">
                  {" • "}
                </span>
                <span className="text-primary/55 group-hover/launch:text-primary/80 transition-colors">
                  {"Read the launch post"}
                </span>
              </span>
            </span>
            <span className="bg-primary/[0.06] text-primary/60 group-hover/launch:bg-primary/10 group-hover/launch:text-primary flex size-6 shrink-0 items-center justify-center rounded-full transition-colors">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-3">
                <path d="M5 11 11 5M6.5 5H11v4.5" />
              </svg>
            </span>
          </motion.a>
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl" style={{ "perspective": "1200px" } as React.CSSProperties}>
            <motion.span style={{ display: "inline-block", position: "relative" }} {...word(0)}>
              {"Meet"}
            </motion.span>
            {" "}
            <motion.span style={{ display: "inline-block", position: "relative", verticalAlign: "bottom" }} {...word(1)}>
              <span aria-hidden="true" className="ml-[-0.04em] mr-[-0.14em] inline-block size-[1em] translate-y-[0.12em] align-baseline" style={{ "--fg": "hsl(var(--primary))", "--bg": "hsl(var(--background))" } as React.CSSProperties}>
                <span ref={headline.ref} className="grok-bot-lazy">
                  {/* The headline character follows the cursor and cycles moods. */}
                  <GrokBot state={headline.state} mouseInteractive />
                </span>
              </span>
            </motion.span>
            {" "}
            {" "}
            <motion.span style={{ display: "inline-block", position: "relative" }} {...word(2)}>
              {"Grok"}
            </motion.span>
            {" "}
            <motion.span style={{ display: "inline-block", position: "relative" }} {...word(3)}>
              {"Bot"}
            </motion.span>
          </h1>
          <motion.p className="text-theme-text-muted mt-4 max-w-xl text-base leading-relaxed text-pretty sm:mt-5 sm:max-w-2xl sm:text-lg sm:leading-relaxed" {...settle(-10, 0.416, 1.024)}>
            {"AI teammates you can give real work to. Bots can sign in to your tools, use them just like you do, and come back with finished work."}
          </motion.p>
          <motion.div className="mt-6 sm:mt-7" {...settle(-10, 0.567, 0.926)}>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <a href="https://api2.cursor.sh/updates/download/stable/darwin-arm64/grok-bot-bd824e1890d8b96f" download="" className="inline-flex items-center justify-center rounded-full transition-colors bg-theme-accent hover:bg-theme-accent-hover text-theme-accent-contrast h-9 gap-1.5 px-4 text-sm font-normal md:h-11 md:px-6 md:text-base">
                  <svg viewBox="0 0 384 512" aria-hidden="true" className="size-[1.1em] shrink-0 -translate-y-[0.05em]">
                    <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  {"Download for macOS"}
                </a>
                <a href="https://cursor.com/contact-sales?product=grok-bot" className="inline-flex items-center justify-center rounded-full transition-colors bg-theme-card-03-hex text-theme-text transition-[filter] hover:brightness-90 h-9 gap-1.5 px-4 text-sm font-normal md:h-11 md:px-6 md:text-base">
                  {"Contact sales"}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div className="w-full" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.967, delay: 0.716, ease: ENTER_EASE }}>
          <div className="w-full rounded-3xl text-left media-border-container overflow-hidden hero-frame-edge">
            <div className="relative w-full" style={{ "height": "660px" } as React.CSSProperties}>
              <div className="relative h-full w-full">
                <div className="baby-grok-bot-mount-fade relative w-full overflow-hidden" style={{ "height": "660px" } as React.CSSProperties}>
                  <div className="absolute inset-0 z-10 overflow-hidden rounded-3xl">
                    <div className="baby-grok-bot h-full w-full overflow-hidden rounded-3xl" data-theme={dark ? "cursor-dark" : "cursor-light"} style={{ "--grok-bot-current-agent-tint": "light-dark(var(--color-brand-yellow-350), var(--color-brand-yellow-450))", "--grok-bot-current-agent-bubble": "light-dark(var(--color-brand-yellow-450), var(--color-brand-yellow-350))", "--grok-bot-current-agent-bubble-ink": "#FFFFFF", "--grok-bot-current-agent-accent": "light-dark(var(--color-brand-yellow-450), var(--color-brand-yellow-350))", "--grok-bot-current-agent-coat": "#F19D38" } as React.CSSProperties}>
                      <div ref={shellRef} className="baby-grok-bot-shell">
                        <div className="baby-grok-bot-traffic-lights" aria-hidden="true">
                          <span className="relative h-3 w-[52px] shrink-0">
                            <span className="absolute inset-y-0 left-0 w-3 rounded-full bg-[#ff5f57] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.2)]" />
                            <span className="absolute inset-y-0 left-1/2 w-3 -translate-x-1/2 rounded-full bg-[#febc2e] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.2)]" />
                            <span className="absolute inset-y-0 right-0 w-3 rounded-full bg-[#28c840] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.2)]" />
                          </span>
                        </div>
                        <div className="baby-grok-bot-sidebar-slot" style={{ width: `${sidebarWidth}px` } as React.CSSProperties}>
                          <aside className="baby-grok-bot-sidebar" {...(collapsed ? { "data-collapsed": "" } : {})}>
                            <div className="baby-grok-bot-sidebar-header">
                              <div className="baby-grok-bot-sidebar-header__lead">
                                <div className="baby-grok-bot-traffic-lights-spacer" aria-hidden="true" />
                              </div>
                              <div className="baby-grok-bot-sidebar-header__actions" style={{ "color": "var(--grok-bot-sidebar-text-secondary)" } as React.CSSProperties}>
                                <button type="button" aria-label="New agent" className="baby-grok-bot-sidebar-header__action" data-demo-target="sidebar-new-agent">
                                  <span className="shrink-0" style={{ "fontFamily": "CursorIcons16", "fontSize": "14px", "lineHeight": "1", "display": "inline-flex", "width": "14px", "height": "14px", "alignItems": "center", "justifyContent": "center" } as React.CSSProperties}>
                                    {""}
                                  </span>
                                </button>
                              </div>
                            </div>
                            {!collapsed && (
                            <label className="baby-grok-bot-chat-search">
                              <span className="shrink-0" style={{ "fontFamily": "CursorIcons16", "fontSize": "14px", "lineHeight": "1", "display": "inline-flex", "width": "14px", "height": "14px", "alignItems": "center", "justifyContent": "center" } as React.CSSProperties}>
                                {""}
                              </span>
                              <input aria-label="Search chats" className="baby-grok-bot-chat-search__input" placeholder="Search" type="search" defaultValue="" />
                            </label>
                            )}
                            <div className="baby-grok-bot-sidebar-list flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden pb-2">
                              <div className="flex flex-col gap-0.5">
                                <button {...rowProps("Chief")}>
                                  <span className="baby-grok-bot-agent-row__avatar">
                                    <div className="relative shrink-0" style={{ "width": "32px", "height": "32px" } as React.CSSProperties}>
                                      <div className="flex h-full w-full items-center justify-center overflow-visible" style={{ "--fg": "#54B9A6", "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                                        <span className="grok-bot-lazy grok-bot-mark--fill">
                                          <GrokBot state="idle" />
                                        </span>
                                      </div>
                                    </div>
                                  </span>
                                  <div className="baby-grok-bot-agent-row__body min-w-0 flex-1" style={{ "transform": "none" } as React.CSSProperties}>
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="relative min-w-0 flex-1">
                                        <span className="block truncate text-[14px] leading-5 tracking-[-0.15px]" style={{ "color": "var(--grok-bot-sidebar-text-primary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                          {"Chief"}
                                        </span>
                                      </span>
                                      <span className="baby-grok-bot-agent-row__time shrink-0 text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-tertiary)" } as React.CSSProperties}>
                                        {agentStamp(AGENT_AGE_HOURS.chief)}
                                      </span>
                                    </div>
                                    <div className="mt-px flex h-4 items-center gap-1.5" style={{ "opacity": "1" } as React.CSSProperties}>
                                      <span className="min-w-0 flex-1 truncate text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-secondary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                        {"booked the venue and sent the confirmation around."}
                                      </span>
                                    </div>
                                  </div>
                                </button>
                                <button {...rowProps(agentName)}>
                                  <span className="baby-grok-bot-agent-row__avatar">
                                    <div className="relative shrink-0" style={{ "width": "32px", "height": "32px" } as React.CSSProperties}>
                                      <div className="flex h-full w-full items-center justify-center overflow-visible" style={{ "--fg": "#F19D38", "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                                        <span className="grok-bot-lazy grok-bot-mark--fill">
                                          <GrokBot state="working" />
                                        </span>
                                      </div>
                                    </div>
                                  </span>
                                  <div className="baby-grok-bot-agent-row__body min-w-0 flex-1" style={{ "transform": "none" } as React.CSSProperties}>
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="relative min-w-0 flex-1">
                                        <span className="block truncate text-[14px] leading-5 tracking-[-0.15px]" style={{ "color": "var(--grok-bot-sidebar-text-primary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                          {agentName}
                                        </span>
                                      </span>
                                      <span className="baby-grok-bot-agent-row__time shrink-0 text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-tertiary)" } as React.CSSProperties}>
                                        {agentTime}
                                      </span>
                                    </div>
                                    <div className="mt-px flex h-4 items-center gap-1.5" style={{ "opacity": "1" } as React.CSSProperties}>
                                      <span className="min-w-0 flex-1 truncate text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-secondary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                        {agentPreview}
                                      </span>
                                    </div>
                                  </div>
                                </button>
                                <button {...rowProps("Inbox Manager")}>
                                  <span className="baby-grok-bot-agent-row__avatar">
                                    <div className="relative shrink-0" style={{ "width": "32px", "height": "32px" } as React.CSSProperties}>
                                      <div className="flex h-full w-full items-center justify-center overflow-visible" style={{ "--fg": "#6464EF", "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                                        <span className="grok-bot-lazy">
                                          <GrokBot state="notifying" shape="wedge" badgeColor="#FF3B30" />
                                        </span>
                                      </div>
                                    </div>
                                  </span>
                                  <div className="baby-grok-bot-agent-row__body min-w-0 flex-1" style={{ "transform": "none" } as React.CSSProperties}>
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="relative min-w-0 flex-1">
                                        <span className="block truncate text-[14px] leading-5 tracking-[-0.15px]" style={{ "color": "var(--grok-bot-sidebar-text-primary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                          {"Inbox Manager"}
                                        </span>
                                      </span>
                                      <span className="baby-grok-bot-agent-row__time shrink-0 text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-tertiary)" } as React.CSSProperties}>
                                        {agentStamp(AGENT_AGE_HOURS.inboxManager)}
                                      </span>
                                    </div>
                                    <div className="mt-px flex h-4 items-center gap-1.5" style={{ "opacity": "1" } as React.CSSProperties}>
                                      <span className="min-w-0 flex-1 truncate text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-secondary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                        {"sent. inbox at zero, 5 drafts parked for tomorrow."}
                                      </span>
                                    </div>
                                  </div>
                                </button>
                                <button {...rowProps("Account Manager")}>
                                  <span className="baby-grok-bot-agent-row__avatar">
                                    <div className="relative shrink-0" style={{ "width": "32px", "height": "32px" } as React.CSSProperties}>
                                      <div className="flex h-full w-full items-center justify-center overflow-visible" style={{ "--fg": "#885CF5", "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                                        <span className="grok-bot-lazy">
                                          <GrokBot state="idle" shape="gem" />
                                        </span>
                                      </div>
                                    </div>
                                  </span>
                                  <div className="baby-grok-bot-agent-row__body min-w-0 flex-1" style={{ "transform": "none" } as React.CSSProperties}>
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="relative min-w-0 flex-1">
                                        <span className="block truncate text-[14px] leading-5 tracking-[-0.15px]" style={{ "color": "var(--grok-bot-sidebar-text-primary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                          {"Account Manager"}
                                        </span>
                                      </span>
                                      <span className="baby-grok-bot-agent-row__time shrink-0 text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-tertiary)" } as React.CSSProperties}>
                                        {agentStamp(AGENT_AGE_HOURS.accountManager)}
                                      </span>
                                    </div>
                                    <div className="mt-px flex h-4 items-center gap-1.5" style={{ "opacity": "1" } as React.CSSProperties}>
                                      <span className="min-w-0 flex-1 truncate text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-secondary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                        {"invite's out to vicky. globex note held in drafts."}
                                      </span>
                                    </div>
                                  </div>
                                </button>
                                <button {...rowProps("Talent Scout")}>
                                  <span className="baby-grok-bot-agent-row__avatar">
                                    <div className="relative shrink-0" style={{ "width": "32px", "height": "32px" } as React.CSSProperties}>
                                      <div className="flex h-full w-full items-center justify-center overflow-visible" style={{ "--fg": "#3C82F6", "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                                        <span className="grok-bot-lazy grok-bot-mark--fill">
                                          <GrokBot state="idle" />
                                        </span>
                                      </div>
                                    </div>
                                  </span>
                                  <div className="baby-grok-bot-agent-row__body min-w-0 flex-1" style={{ "transform": "none" } as React.CSSProperties}>
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="relative min-w-0 flex-1">
                                        <span className="block truncate text-[14px] leading-5 tracking-[-0.15px]" style={{ "color": "var(--grok-bot-sidebar-text-primary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                          {"Talent Scout"}
                                        </span>
                                      </span>
                                      <span className="baby-grok-bot-agent-row__time shrink-0 text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-tertiary)" } as React.CSSProperties}>
                                        {agentStamp(AGENT_AGE_HOURS.talentScout)}
                                      </span>
                                    </div>
                                    <div className="mt-px flex h-4 items-center gap-1.5" style={{ "opacity": "1" } as React.CSSProperties}>
                                      <span className="min-w-0 flex-1 truncate text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-secondary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                        {"3 intros drafted in your voice, held for your ok."}
                                      </span>
                                    </div>
                                  </div>
                                </button>
                                <button {...rowProps("Expense Manager")}>
                                  <span className="baby-grok-bot-agent-row__avatar">
                                    <div className="relative shrink-0" style={{ "width": "32px", "height": "32px" } as React.CSSProperties}>
                                      <div className="flex h-full w-full items-center justify-center overflow-visible" style={{ "--fg": "#ED712E", "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                                        <span className="grok-bot-lazy grok-bot-mark--fill">
                                          <GrokBot state="idle" />
                                        </span>
                                      </div>
                                    </div>
                                  </span>
                                  <div className="baby-grok-bot-agent-row__body min-w-0 flex-1" style={{ "transform": "none" } as React.CSSProperties}>
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="relative min-w-0 flex-1">
                                        <span className="block truncate text-[14px] leading-5 tracking-[-0.15px]" style={{ "color": "var(--grok-bot-sidebar-text-primary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                          {"Expense Manager"}
                                        </span>
                                      </span>
                                      <span className="baby-grok-bot-agent-row__time shrink-0 text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-tertiary)" } as React.CSSProperties}>
                                        {agentStamp(AGENT_AGE_HOURS.expenseManager)}
                                      </span>
                                    </div>
                                    <div className="mt-px flex h-4 items-center gap-1.5" style={{ "opacity": "1" } as React.CSSProperties}>
                                      <span className="min-w-0 flex-1 truncate text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-secondary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                        {"report filed. 9 receipts, nothing outstanding."}
                                      </span>
                                    </div>
                                  </div>
                                </button>
                                <button {...rowProps("Offsite crew")}>
                                  <span className="baby-grok-bot-agent-row__avatar">
                                    <div className="relative shrink-0" style={{ "width": "32px", "height": "32px" } as React.CSSProperties}>
                                      <span className="absolute overflow-hidden rounded-full" style={{ "width": "18px", "height": "18px", "left": "7px", "top": "0px", "zIndex": "1", "boxShadow": "0 0 0 2px var(--cursor-bg-elevated, #fff)" } as React.CSSProperties}>
                                        <span className="flex h-full w-full items-center justify-center" style={{ "--fg": "#54B9A6", "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                                          <BotMark className="grok-bot-mark grok-bot-mark--fill" />
                                        </span>
                                      </span>
                                      <span className="absolute overflow-hidden rounded-full" style={{ "width": "18px", "height": "18px", "left": "0px", "top": "14px", "zIndex": "2", "boxShadow": "0 0 0 2px var(--cursor-bg-elevated, #fff)" } as React.CSSProperties}>
                                        <span className="flex h-full w-full items-center justify-center" style={{ "--fg": "#6464EF", "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                                          <BotMark className="grok-bot-mark grok-bot-mark--fill" />
                                        </span>
                                      </span>
                                      <span className="absolute overflow-hidden rounded-full" style={{ "width": "18px", "height": "18px", "left": "14px", "top": "14px", "zIndex": "3", "boxShadow": "0 0 0 2px var(--cursor-bg-elevated, #fff)" } as React.CSSProperties}>
                                        <span className="flex h-full w-full items-center justify-center" style={{ "--fg": "#885CF5", "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                                          <BotMark className="grok-bot-mark grok-bot-mark--fill" />
                                        </span>
                                      </span>
                                    </div>
                                  </span>
                                  <div className="baby-grok-bot-agent-row__body min-w-0 flex-1" style={{ "transform": "none" } as React.CSSProperties}>
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="relative min-w-0 flex-1">
                                        <span className="block truncate text-[14px] leading-5 tracking-[-0.15px]" style={{ "color": "var(--grok-bot-sidebar-text-primary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                          {"Offsite crew"}
                                        </span>
                                      </span>
                                      <span className="baby-grok-bot-agent-row__time shrink-0 text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-tertiary)" } as React.CSSProperties}>
                                        {agentStamp(AGENT_AGE_HOURS.offsiteCrew)}
                                      </span>
                                    </div>
                                    <div className="mt-px flex h-4 items-center gap-1.5" style={{ "opacity": "1" } as React.CSSProperties}>
                                      <span className="min-w-0 flex-1 truncate text-[12px] leading-4" style={{ "color": "var(--grok-bot-sidebar-text-secondary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                        {"that leaves the pipeline. i'd spin up a dedicated agent."}
                                      </span>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div className="baby-grok-bot-sidebar-footer">
                              <div className="flex size-7 shrink-0 items-center justify-center rounded-full text-[10px] font-medium" style={{ "background": "var(--grok-bot-sidebar-selected)", "color": "var(--grok-bot-sidebar-text-secondary)" } as React.CSSProperties}>
                                {"AS"}
                              </div>
                              <span className="baby-grok-bot-sidebar-footer__name text-[13px] leading-[18px] tracking-[-0.08px]" style={{ "color": "var(--grok-bot-sidebar-text-primary)" } as React.CSSProperties}>
                                {"Armand Segall"}
                              </span>
                            </div>
                          </aside>
                          <div aria-label="Resize sidebar" aria-orientation="vertical" className="absolute inset-y-0 -right-1.5 z-10 w-3 cursor-col-resize" role="separator" />
                        </div>
                        <div className="baby-grok-bot-chat">
                          <div className="relative shrink-0" style={{ "height": "var(--grok-bot-toolbar-height)" } as React.CSSProperties}>
                            <div className="absolute inset-x-0 top-0" style={{ "opacity": "1" } as React.CSSProperties}>
                              <header className="relative z-[3] flex shrink-0 items-center justify-between gap-2 px-2" style={{ "height": "var(--grok-bot-toolbar-height)", "color": "var(--cursor-text-primary)", "borderBottom": "0.5px solid var(--grok-bot-border-default)" } as React.CSSProperties}>
                                <div className="flex min-w-0 items-center gap-1.5">
                                  <button type="button" aria-label={`Open ${selected}'s computer`} className="flex min-w-0 items-center gap-1.5 rounded-md px-1 py-0.5 transition-colors hover:bg-[color-mix(in_srgb,var(--cursor-text-primary)_4%,transparent)]">
                                    <div className="relative shrink-0" style={{ "width": "18px", "height": "18px" } as React.CSSProperties}>
                                      <div className="flex h-full w-full items-center justify-center overflow-visible" style={{ "--fg": "#F19D38", "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                                        <span className="grok-bot-lazy grok-bot-mark--fill">
                                          <GrokBot state="working" />
                                        </span>
                                      </div>
                                    </div>
                                    <span className="relative min-w-0">
                                      <span className="block truncate text-[13px] leading-[18px] tracking-[-0.08px]" style={{ "color": "var(--cursor-text-primary)", "opacity": "1", "transform": "none" } as React.CSSProperties}>
                                        {selected}
                                      </span>
                                    </span>
                                  </button>
                                </div>
                                <div className="flex items-center gap-0.5">
                                  <button type="button" aria-label="Open computer" aria-pressed="false" className="flex size-6 items-center justify-center rounded-md transition-colors hover:bg-[var(--cursor-bg-hover)] text-[var(--cursor-text-secondary)] hover:text-[var(--cursor-text-primary)]">
                                    <span className="shrink-0" style={{ "fontFamily": "CursorIcons16", "fontSize": "14px", "lineHeight": "1", "display": "inline-flex", "width": "14px", "height": "14px", "alignItems": "center", "justifyContent": "center" } as React.CSSProperties}>
                                      {""}
                                    </span>
                                  </button>
                                </div>
                              </header>
                            </div>
                          </div>
                          <div className="baby-grok-bot-transcript flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pt-2 pb-12">
                            {transcript}
                          </div>
                          <div className="shrink-0">
                            <form className="relative z-[1] px-5 pb-3">
                              <div aria-hidden="true" className="baby-grok-bot-composer-fade pointer-events-none absolute inset-x-0 bottom-full h-12" />
                              <div className="baby-grok-bot-composer flex items-center gap-2 rounded-full px-2 py-2" data-demo-target="composer-field">
                                <span className="flex size-7 shrink-0 items-center justify-center rounded-full" style={{ "background": "var(--grok-bot-fill-secondary)", "color": "var(--cursor-text-secondary)" } as React.CSSProperties}>
                                  <span className="shrink-0" style={{ "fontFamily": "CursorIcons16", "fontSize": "14px", "lineHeight": "1", "display": "inline-flex", "width": "14px", "height": "14px", "alignItems": "center", "justifyContent": "center" } as React.CSSProperties}>
                                    {""}
                                  </span>
                                </span>
                                <div className="relative min-w-0 flex-1">
                                  <div aria-multiline="true" aria-readonly="true" className="baby-grok-bot-composer-field-input" contentEditable="false" data-empty="" data-placeholder={`Message ${selected}`} role="textbox" />
                                </div>
                                <button type="button" aria-label="Voice message" data-demo-target="composer-send" className="flex size-7 shrink-0 items-center justify-center rounded-full" tabIndex={-1} style={{ "background": "var(--grok-bot-fill-emphasis)", "color": "var(--grok-bot-bubble-user-ink)" } as React.CSSProperties}>
                                  <span className="shrink-0" style={{ "fontFamily": "CursorIcons16", "fontSize": "14px", "lineHeight": "1", "display": "inline-flex", "width": "14px", "height": "14px", "alignItems": "center", "justifyContent": "center" } as React.CSSProperties}>
                                    {""}
                                  </span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-50">
                  <div className="absolute left-0 top-0" style={{ "opacity": "0", "transform": "none" } as React.CSSProperties}>
                    <div className="flex items-start gap-0">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" data-cursor-arrow="" className="-scale-x-100 drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.3)] shrink-0 transition-opacity duration-200">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4775 2.375C15.1508 2.37522 15.5719 3.10428 15.2353 3.6875L8.63861 15.1143C8.19099 15.8892 7.00618 15.5716 7.00579 14.6768V7.56348L0.845638 4.00781C0.0708241 3.56015 0.388339 2.37535 1.28314 2.375H14.4775ZM7.69329 6.51758C8.04109 6.7186 8.25579 7.09044 8.25579 7.49219V13.2764L13.8271 3.625H2.68353L7.69329 6.51758Z" fill="white" />
                        <path d="M7.69329 6.51758C8.04109 6.7186 8.25579 7.09044 8.25579 7.49219V13.2764L13.8271 3.625H2.68353L7.69329 6.51758Z" fill="#1a1a1a" />
                      </svg>
                      <span className="mt-2.5 -ml-0.5 whitespace-nowrap rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white">
                        {"You"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}