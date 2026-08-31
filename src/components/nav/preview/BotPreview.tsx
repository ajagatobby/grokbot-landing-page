import { GrokBot } from "../../../lib/grok-bot-mark"
import { useIsDark } from "../../../lib/theme"
import type React from "react"

export default function BotPreview() {
  const dark = useIsDark()
  return (
    <div className="absolute inset-0" style={{ pointerEvents: "none" } as React.CSSProperties}>
      <div className="h-full w-full overflow-hidden [&>div]:h-full" style={{ "--font-system": "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif" } as React.CSSProperties}>
        <div className="baby-grok-bot transition-opacity duration-300 ease-out motion-reduce:transition-none" data-theme={dark ? "cursor-dark" : "cursor-light"} inert style={{ "--grok-bot-current-agent-tint": "light-dark(var(--color-brand-orange-350), var(--color-brand-orange-450))", "--grok-bot-current-agent-bubble": "light-dark(var(--color-brand-orange-450), var(--color-brand-orange-350))", "--grok-bot-current-agent-bubble-ink": "#FFFFFF", "--grok-bot-current-agent-accent": "light-dark(var(--color-brand-orange-450), var(--color-brand-orange-350))", "--grok-bot-current-agent-coat": "#ED712E", "opacity": "1" } as React.CSSProperties}>
          <div className="flex h-full flex-col justify-end transition-opacity duration-300 ease-out" style={{ "opacity": "1", "maskImage": "linear-gradient(transparent 0px, black 44px)" } as React.CSSProperties}>
            <div className="flex max-h-full min-h-0 flex-col" style={{ "transform": "translate3d(0px, 7.19648px, 0px)", "transformOrigin": "50% 50% 0px" } as React.CSSProperties}>
              <div className="baby-grok-bot-transcript flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pt-6 pb-4">
                <div className="flex flex-col gap-1">
                  <div className="baby-grok-bot-entry-enter">
                    <div className="flex justify-end">
                      <div className="relative max-w-[min(420px,85%)]">
                        <div className="px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap" style={{ "background": "var(--grok-bot-bubble-user)", "color": "var(--grok-bot-bubble-user-ink)", "borderRadius": "16px" } as React.CSSProperties}>
                          {"month-end is friday, close out the card for me?"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
                    <div className="flex max-w-[min(560px,92%)] flex-col items-start">
                      <div className="relative">
                        <div className="baby-grok-bot-md px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap" style={{ "background": "var(--grok-bot-bubble-agent)", "color": "var(--cursor-text-primary)", "borderRadius": "16px" } as React.CSSProperties}>
                          <span>
                            {"i'll match every charge to a receipt and file the report. anything that doesn't line up, i ask instead of guessing."}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
                    <div className="flex min-w-0 items-center justify-center gap-1.5 overflow-hidden py-1 text-[13px] leading-4" style={{ "color": "var(--cursor-text-secondary)" } as React.CSSProperties}>
                      <span className="shrink-0">
                        {"Created routine"}
                      </span>
                      <span className="flex shrink-0 items-center">
                        <span className="shrink-0" style={{ "fontFamily": "CursorIcons16", "fontSize": "15px", "lineHeight": "1", "display": "inline-flex", "width": "15px", "height": "15px", "alignItems": "center", "justifyContent": "center" } as React.CSSProperties}>
                          {""}
                        </span>
                      </span>
                      <span className="truncate" style={{ "color": "var(--cursor-text-primary)" } as React.CSSProperties}>
                        {"Month-end close"}
                      </span>
                    </div>
                  </div>
                  <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
                    <div className="flex max-w-[min(560px,92%)] flex-col items-start">
                      <div className="relative">
                        <div className="baby-grok-bot-md px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap" style={{ "background": "var(--grok-bot-bubble-agent)", "color": "var(--cursor-text-primary)", "borderRadius": "16px" } as React.CSSProperties}>
                          <span>
                            {"✓ "}
                          </span>
                          <strong>
                            {"Receipts"}
                          </strong>
                          <span>
                            {" → 9 matched to card charges\n✓ "}
                          </span>
                          <strong>
                            {"Report"}
                          </strong>
                          <span>
                            {" → drafted · $2,340 across 3 trips\n✓ "}
                          </span>
                          <strong>
                            {"Flagged"}
                          </strong>
                          <span>
                            {" → 1 charge · harbor hotel, $412 twice"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="baby-grok-bot-pending mt-3">
                    <span aria-hidden="true" className="baby-grok-bot-pending__avatar" style={{ "--fg": "var(--grok-bot-current-agent-coat)", "--bg": "var(--grok-bot-bg-editor)" } as React.CSSProperties}>
                      <GrokBot state="idle" />
                    </span>
                    <span className="baby-grok-bot-pending__label">
                      {"Thinking"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
