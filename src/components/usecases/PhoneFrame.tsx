import { GrokBot } from "../../lib/grok-bot-mark"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useIsDark } from "../../lib/theme"

type PhoneFrameProps = {
  agentName: string
  agentColor: string
  transcript: React.ReactNode
  /** 1 on desktop, 0.9 in the mobile carousel. */
  scale?: number
  /** Height of the stage the phone is centred in. */
  frameHeight?: number
  centreOffset?: string
}

export default function PhoneFrame({ agentName, agentColor, transcript, scale = 1, frameHeight = 730, centreOffset = "calc(50% - 150px)" }: PhoneFrameProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  // The phone carries its own product theme, which follows the site theme.
  const dark = useIsDark()

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // The first conversation is already at its end when the phone appears. Switching to
  // another one starts that thread at the top and scrolls down to its end -- without
  // the reset, moving to a shorter conversation would land already at the bottom and
  // never animate.
  const settled = useRef(false)
  useEffect(() => {
    const el = scrollRef.current?.querySelector(".baby-grok-bot-transcript")
    if (!el) return
    if (!settled.current) {
      el.scrollTop = el.scrollHeight
      settled.current = true
      return
    }
    el.scrollTop = 0
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
  }, [agentName])
  return (
          <div ref={scrollRef} className="baby-grok-bot-mount-fade relative w-full" {...(inView ? {} : { "data-demo-offscreen": "" })} style={{ height: `${frameHeight}px` } as React.CSSProperties}>
            <div className="relative z-10 h-full w-full">
              <div className="relative w-full overflow-hidden rounded-xs" style={{ height: `${frameHeight}px` } as React.CSSProperties}>
                <div className={scale === 1 ? "absolute top-1/2 -translate-y-1/2" : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} style={{ left: scale === 1 ? centreOffset : undefined, width: `${300 * scale}px`, height: `${650 * scale}px` } as React.CSSProperties}>
                  <div className="absolute rounded-r-[2px]" style={{ "right": "-3px", "top": "120px", "height": "42px", "width": "4px", "background": "linear-gradient(to right, rgb(28, 28, 30), rgb(44, 44, 46))" } as React.CSSProperties} />
                  <div className="absolute rounded-l-[2px]" style={{ "left": "-3px", "top": "75px", "height": "20px", "width": "4px", "background": "linear-gradient(to left, rgb(28, 28, 30), rgb(44, 44, 46))" } as React.CSSProperties} />
                  <div className="absolute rounded-l-[2px]" style={{ "left": "-3px", "top": "105px", "height": "36px", "width": "4px", "background": "linear-gradient(to left, rgb(28, 28, 30), rgb(44, 44, 46))" } as React.CSSProperties} />
                  <div className="absolute rounded-l-[2px]" style={{ "left": "-3px", "top": "150px", "height": "36px", "width": "4px", "background": "linear-gradient(to left, rgb(28, 28, 30), rgb(44, 44, 46))" } as React.CSSProperties} />
                  <div className="relative overflow-hidden" style={{ width: `${300 * scale}px`, height: `${650 * scale}px`, borderRadius: `${44 * scale}px`, clipPath: `inset(0px round ${44 * scale}px)`, contain: "paint", padding: "4px" } as React.CSSProperties}>
                    <div className="absolute inset-0" style={{ borderRadius: `${44 * scale}px`, backgroundColor: "rgb(58, 58, 60)" } as React.CSSProperties} />
                    <div className="bg-theme-product-editor border-theme-border relative h-full w-full overflow-hidden border mobile-phone-screen" style={{ borderRadius: `${40 * scale}px`, clipPath: `inset(0px round ${40 * scale}px)`, contain: "paint" } as React.CSSProperties}>
                      <div className="relative h-[48px]">
                        <div className="absolute left-1/2 z-50 -translate-x-1/2 rounded-full bg-black" style={{ "top": "8px", "width": "96px", "height": "28px" } as React.CSSProperties} />
                      </div>
                      <div className="baby-grok-bot relative h-[calc(100%-48px)] overflow-hidden" data-theme={dark ? "cursor-dark" : "cursor-light"} style={{ "background": "var(--cursor-bg-editor)", "--grok-bot-current-agent-tint": "light-dark(var(--color-brand-cyan-350), var(--color-brand-cyan-450))", "--grok-bot-current-agent-bubble": "light-dark(var(--color-brand-cyan-450), var(--color-brand-cyan-350))", "--grok-bot-current-agent-bubble-ink": "#FFFFFF", "--grok-bot-current-agent-accent": "light-dark(var(--color-brand-cyan-450), var(--color-brand-cyan-350))", "--grok-bot-current-agent-coat": "#54B9A6" } as React.CSSProperties}>
                        <div className="absolute inset-0" style={{ "opacity": "1", "transform": "none" } as React.CSSProperties}>
                          <div className="relative flex h-full flex-col">
                            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 z-10 top-0 h-12" style={{ "background": "linear-gradient(to bottom, var(--cursor-bg-editor) 42%, transparent)" } as React.CSSProperties} />
                            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 z-10 bottom-0 h-16" style={{ "background": "linear-gradient(to top, var(--cursor-bg-editor) 42%, transparent)" } as React.CSSProperties} />
                            <div className="absolute inset-x-3 top-0 z-20 flex h-12 items-center justify-between gap-2">
                              <button type="button" className="ios-glass flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--mobile-phone-bg)] text-[color:var(--mobile-phone-control-text)] enabled:cursor-pointer" aria-label="Back to chats">
                                <span className="relative z-10 flex items-center justify-center">
                                  <span className="shrink-0" style={{ "fontFamily": "CursorIcons16", "fontSize": "15px", "lineHeight": "1", "display": "inline-flex", "width": "15px", "height": "15px", "alignItems": "center", "justifyContent": "center" } as React.CSSProperties}>
                                    {""}
                                  </span>
                                </span>
                              </button>
                              <div className="ios-glass baby-grok-bot-agent-title-pill flex h-8 min-w-0 items-center gap-2 rounded-full pr-3 pl-1">
                                <span className="relative z-10 flex min-w-0 items-center gap-2">
                                  <div className="relative shrink-0" style={{ "width": "22px", "height": "22px" } as React.CSSProperties}>
                                    <div className="flex h-full w-full items-center justify-center overflow-visible" style={{ "--fg": agentColor, "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                                      <span className="grok-bot-lazy grok-bot-mark--fill">
                                        <GrokBot />
                                      </span>
                                    </div>
                                  </div>
                                  <span className="truncate text-[13px] leading-4 font-medium tracking-[-0.15px]" style={{ "color": "var(--cursor-text-primary)" } as React.CSSProperties}>
                                    {agentName}
                                  </span>
                                </span>
                              </div>
                              <button type="button" className="ios-glass flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--mobile-phone-bg)] text-[color:var(--mobile-phone-control-text)] enabled:cursor-pointer" aria-label="Open Sales Outbound's screen" aria-pressed="false">
                                <span className="relative z-10 flex items-center justify-center">
                                  <span className="shrink-0" style={{ "fontFamily": "CursorIcons16", "fontSize": "15px", "lineHeight": "1", "display": "inline-flex", "width": "15px", "height": "15px", "alignItems": "center", "justifyContent": "center" } as React.CSSProperties}>
                                    {""}
                                  </span>
                                </span>
                              </button>
                            </div>
                            <div className="baby-grok-bot-transcript flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pt-14 pb-20">
                              {transcript}
                            </div>
                            <form className="absolute inset-x-3 bottom-3 z-20 flex items-end gap-2">
                              <button aria-label="Add context" className="ios-glass flex size-10 shrink-0 items-center justify-center rounded-full text-[color:var(--mobile-phone-control-text)]" type="button">
                                <span className="relative z-10 flex items-center justify-center">
                                  <span className="shrink-0" style={{ "fontFamily": "CursorIcons16", "fontSize": "16px", "lineHeight": "1", "display": "inline-flex", "width": "16px", "height": "16px", "alignItems": "center", "justifyContent": "center" } as React.CSSProperties}>
                                    {""}
                                  </span>
                                </span>
                              </button>
                              <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-[20px] border py-1.5 pr-1.5 pl-3.5" style={{ "borderColor": "var(--grok-bot-border-default)", "borderWidth": "0.5px", "background": "var(--cursor-bg-elevated)", "boxShadow": "rgba(0, 0, 0, 0.1) 0px 2px 12px" } as React.CSSProperties}>
                                <div className="relative min-w-0 flex-1">
                                  <div aria-multiline="true" className="baby-grok-bot-composer-field-input max-h-[84px]" contentEditable="true" data-empty="" data-placeholder={`Message ${agentName}`} role="textbox" />
                                </div>
                                <button aria-label="Voice message" className="flex size-7 shrink-0 items-center justify-center rounded-full" type="button" style={{ "background": "var(--grok-bot-fill-secondary)", "color": "var(--cursor-text-secondary)" } as React.CSSProperties}>
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
              </div>
            </div>
          </div>
  )
}
