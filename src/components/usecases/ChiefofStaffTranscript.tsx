import { GrokBot } from "../../lib/grok-bot-mark"
import type React from "react"

export default function ChiefofStaffTranscript() {
  return (
      <div className="flex flex-col gap-1">
        <div className="baby-grok-bot-entry-enter mt-2 first:mt-0">
          <div className="mb-2">
            <div className="flex items-center justify-center py-1 text-[12px] leading-4" style={{ "color": "var(--cursor-text-secondary)" } as React.CSSProperties}>
              {"22 Aug 1:58"}
            </div>
          </div>
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
              {"Morning scan"}
            </span>
          </div>
        </div>
        <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
          <div className="mb-2">
            <div className="flex items-center justify-center py-1 text-[12px] leading-4" style={{ "color": "var(--cursor-text-secondary)" } as React.CSSProperties}>
              {"Yesterday 21:58"}
            </div>
          </div>
          <div className="flex max-w-[min(560px,92%)] flex-col items-start">
            <div className="relative">
              <div className="baby-grok-bot-md px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap" style={{ "background": "var(--grok-bot-bubble-agent)", "color": "var(--cursor-text-primary)", "borderRadius": "16px" } as React.CSSProperties}>
                <span>
                  {"morning: 3 meetings, 2 flagged emails, meeting at 3:00pm needs prep. reply drafts ready on the two flagged emails."}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
          <div className="flex min-w-0 items-center justify-center gap-1.5 overflow-hidden py-1 text-[13px] leading-4" style={{ "color": "var(--cursor-text-secondary)" } as React.CSSProperties}>
            <button className="baby-grok-bot-system-agent" type="button" style={{ "--grok-bot-system-agent-pill": "light-dark(color-mix(in srgb, #3C82F6 14%, #ffffff), color-mix(in srgb, #3C82F6 22%, #16161a))", "--grok-bot-system-agent-ink": "light-dark(color-mix(in srgb, #3C82F6 62%, #101014), color-mix(in srgb, #3C82F6 82%, #ffffff))" } as React.CSSProperties}>
              <div className="relative shrink-0" style={{ "width": "12px", "height": "12px" } as React.CSSProperties}>
                <div className="flex h-full w-full items-center justify-center overflow-visible" style={{ "--fg": "#3C82F6", "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
                  <span className="grok-bot-lazy grok-bot-mark--fill">
                    <GrokBot />
                  </span>
                </div>
              </div>
              <span className="truncate">
                {"Account Health"}
              </span>
            </button>
            <span className="shrink-0">
              {"shared"}
            </span>
            <span className="truncate" style={{ "color": "var(--cursor-text-primary)" } as React.CSSProperties}>
              {"the acme usage brief"}
            </span>
          </div>
        </div>
        <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
          <div className="max-w-[min(420px,92%)]">
            <div className="baby-grok-bot-card">
              <div className="flex items-start gap-2">
                <span className="baby-grok-bot-card-title">
                  {"New email"}
                </span>
                <span className="flex-1" />
                <span className="baby-grok-bot-card-badge" data-tone="muted">
                  <span aria-hidden="true" className="baby-grok-bot-card-badge__dot" />
                  {"Ready to send"}
                </span>
              </div>
              <dl className="baby-grok-bot-message-panel mt-2">
                <div className="baby-grok-bot-message-row">
                  <dt>
                    {"From"}
                  </dt>
                  <dd>
                    {"sam@x.ai"}
                  </dd>
                </div>
                <div className="baby-grok-bot-message-row">
                  <dt>
                    {"To"}
                  </dt>
                  <dd>
                    {"vicky@acme.co"}
                  </dd>
                </div>
                <div className="baby-grok-bot-message-row">
                  <dt>
                    {"Subject"}
                  </dt>
                  <dd>
                    {"Re: Thursday's numbers"}
                  </dd>
                </div>
                <div className="baby-grok-bot-message-body">
                  <p>
                    {"Hi Vicky,"}
                  </p>
                  <p>
                    {"Thursday works. I'll bring the usage summary. Seats and the integration counts are both in there."}
                  </p>
                  <p>
                    {"Sam"}
                  </p>
                </div>
              </dl>
              <div className="mt-2.5 flex items-center gap-2">
                <button className="baby-grok-bot-card-action" data-variant="primary" type="button">
                  {"Send email"}
                </button>
                <button className="baby-grok-bot-card-action" data-variant="secondary" type="button">
                  {"Discard"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
          <div className="mb-2">
            <div className="flex items-center justify-center py-1 text-[12px] leading-4" style={{ "color": "var(--cursor-text-secondary)" } as React.CSSProperties}>
              {"Yesterday 22:53"}
            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative max-w-[min(420px,85%)]">
              <div className="px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap" style={{ "background": "var(--grok-bot-bubble-user)", "color": "var(--grok-bot-bubble-user-ink)", "borderRadius": "16px" } as React.CSSProperties}>
                {"send the easy one, leave legal"}
              </div>
            </div>
          </div>
        </div>
        <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
          <div className="flex max-w-[min(560px,92%)] flex-col items-start">
            <div className="relative">
              <div className="baby-grok-bot-md px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap" style={{ "background": "var(--grok-bot-bubble-agent)", "color": "var(--cursor-text-primary)", "borderRadius": "16px" } as React.CSSProperties}>
                <span>
                  {"sent one. legal stays. meeting brief for acme is in the thread."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
