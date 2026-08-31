import type React from "react"

export default function BugReproductionTranscript() {
  return (
      <div className="flex flex-col gap-1">
        <div className="baby-grok-bot-entry-enter mt-2 first:mt-0">
          <div className="mb-2">
            <div className="flex items-center justify-center py-1 text-[12px] leading-4" style={{ "color": "var(--cursor-text-secondary)" } as React.CSSProperties}>
              {"Yesterday 20:58"}
            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative max-w-[min(420px,85%)]">
              <div className="px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap" style={{ "background": "var(--grok-bot-bubble-user)", "color": "var(--grok-bot-bubble-user-ink)", "borderRadius": "16px" } as React.CSSProperties}>
                {"when a bug report lands in support, try to reproduce it before it goes to eng."}
              </div>
            </div>
          </div>
        </div>
        <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
          <div className="mb-2">
            <div className="flex items-center justify-center py-1 text-[12px] leading-4" style={{ "color": "var(--cursor-text-secondary)" } as React.CSSProperties}>
              {"Yesterday 23:58"}
            </div>
          </div>
          <div className="max-w-[min(420px,92%)]">
            <div className="baby-grok-bot-card">
              <div className="flex items-start gap-2">
                <button className="baby-grok-bot-card-title" type="button">
                  {"Computer"}
                </button>
                <span className="flex-1" />
                <span className="baby-grok-bot-card-badge" data-tone="success">
                  <span aria-hidden="true" className="baby-grok-bot-card-badge__dot" />
                  {"Done"}
                </span>
              </div>
              <p className="mt-0.5">
                {"Approve the staging login so I can run checkout the way the customer did."}
              </p>
              <div className="mt-2.5">
                <div className="overflow-hidden" style={{ "borderRadius": "10px", "opacity": "1" } as React.CSSProperties}>
                  <div className="group/desktop relative max-h-full w-full overflow-hidden rounded-md aspect-[16/10] !rounded-none" style={{ "--rd-base-width": "360px", "--rd-base-height": "224.99011351153422px", "--rd-content-scale": "0.5926649305555556" } as React.CSSProperties}>
                    <img alt="" className="absolute inset-0 h-full w-full object-cover remote-desktop-wallpaper remote-desktop-wallpaper--light" draggable="false" src="/media/cloud-agents-3.webp" />
                    <img alt="" className="remote-desktop-wallpaper remote-desktop-wallpaper--dark absolute inset-0 h-full w-full object-cover" draggable="false" src="/media/cloud-agents-2.webp" />
                    <div className="rd-interactive bg-theme-bg absolute touch-none overflow-hidden rounded-[5px]" style={{ "top": "14%", "left": "6%", "width": "42%", "height": "44%", "zIndex": "2", "boxShadow": "rgba(0, 0, 0, 0.14) 0px 3px 12px, rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px" } as React.CSSProperties}>
                      <div className="flex origin-top-left flex-col" style={{ "width": "calc(var(--rd-base-width, 100%) * 0.42)", "height": "calc(var(--rd-base-height, 100%) * 0.44)", "transform": "scale(var(--rd-content-scale, 1))" } as React.CSSProperties}>
                        <div className="flex h-[11px] shrink-0 items-center gap-[2px] px-[4px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)" } as React.CSSProperties}>
                          <div className="h-[3px] w-[3px] rounded-full" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.15" } as React.CSSProperties} />
                          <div className="h-[3px] w-[3px] rounded-full" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.15" } as React.CSSProperties} />
                          <div className="h-[3px] w-[3px] rounded-full" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.15" } as React.CSSProperties} />
                        </div>
                        <div className="flex-1 px-[4px] pt-[3px] pb-0" style={{ "fontFamily": "var(--font-mono, ui-monospace, monospace)", "fontSize": "5px", "lineHeight": "1.35", "letterSpacing": "-0.02em", "color": "var(--color-theme-fg)" } as React.CSSProperties}>
                          <div className="space-y-[1px] whitespace-nowrap">
                            <div style={{ "opacity": "0.4" } as React.CSSProperties}>
                              {"$ npm run dev"}
                            </div>
                            <div style={{ "opacity": "0.25" } as React.CSSProperties}>
                              {"ready - started on 0.0.0.0:3000"}
                            </div>
                            <div style={{ "opacity": "0.25" } as React.CSSProperties}>
                              {"✓ compiled in 1.2s"}
                            </div>
                            <div style={{ "opacity": "0.25" } as React.CSSProperties}>
                              {"○ compiling /dashboard..."}
                            </div>
                            <div style={{ "opacity": "0.25" } as React.CSSProperties}>
                              {"✓ compiled in 340ms"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rd-interactive bg-theme-bg absolute touch-none overflow-hidden rounded-[5px]" style={{ "top": "22%", "left": "38%", "width": "52%", "height": "56%", "zIndex": "4", "boxShadow": "rgba(0, 0, 0, 0.14) 0px 3px 12px, rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px" } as React.CSSProperties}>
                      <div className="flex origin-top-left flex-col" style={{ "width": "calc(var(--rd-base-width, 100%) * 0.52)", "height": "calc(var(--rd-base-height, 100%) * 0.56)", "transform": "scale(var(--rd-content-scale, 1))" } as React.CSSProperties}>
                        <div className="flex h-[11px] shrink-0 items-center gap-[2px] px-[4px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)" } as React.CSSProperties}>
                          <div className="h-[3px] w-[3px] rounded-full" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.15" } as React.CSSProperties} />
                          <div className="h-[3px] w-[3px] rounded-full" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.15" } as React.CSSProperties} />
                          <div className="h-[3px] w-[3px] rounded-full" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.15" } as React.CSSProperties} />
                        </div>
                        <div className="flex flex-1 overflow-hidden">
                          <div className="flex w-[22%] shrink-0 flex-col gap-[3px] p-[4px]" style={{ "borderRight": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)" } as React.CSSProperties}>
                            <div className="h-[2px] w-[70%] rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.12" } as React.CSSProperties} />
                            <div className="h-[2px] w-[50%] rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                            <div className="h-[2px] w-[60%] rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                            <div className="h-[2px] w-[45%] rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                          </div>
                          <div className="flex-1 p-[5px]">
                            <div className="mb-[4px] flex gap-[3px]">
                              <div className="flex-1 rounded-[2px] p-[3px]" style={{ "border": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)" } as React.CSSProperties}>
                                <div className="mb-[2px] h-[1.5px] w-[50%] rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                                <div className="h-[2px] w-[70%] rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.12" } as React.CSSProperties} />
                              </div>
                              <div className="flex-1 rounded-[2px] p-[3px]" style={{ "border": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)" } as React.CSSProperties}>
                                <div className="mb-[2px] h-[1.5px] w-[50%] rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                                <div className="h-[2px] w-[60%] rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.12" } as React.CSSProperties} />
                              </div>
                              <div className="flex-1 rounded-[2px] p-[3px]" style={{ "border": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)" } as React.CSSProperties}>
                                <div className="mb-[2px] h-[1.5px] w-[50%] rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                                <div className="h-[2px] w-[65%] rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.12" } as React.CSSProperties} />
                              </div>
                            </div>
                            <div className="mb-[4px] rounded-[2px]" style={{ "height": "40%", "backgroundColor": "color-mix(in srgb, var(--color-theme-fg) 4%, transparent)", "border": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 6%, transparent)" } as React.CSSProperties} />
                            <div className="flex flex-col gap-[2px]">
                              <div className="flex items-center gap-[3px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                                <div className="h-[1.5px] w-[8px] shrink-0 rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                                <div className="h-[1.5px] rounded-sm" style={{ "width": "75%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                              </div>
                              <div className="flex items-center gap-[3px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                                <div className="h-[1.5px] w-[8px] shrink-0 rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                                <div className="h-[1.5px] rounded-sm" style={{ "width": "60%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                              </div>
                              <div className="flex items-center gap-[3px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                                <div className="h-[1.5px] w-[8px] shrink-0 rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                                <div className="h-[1.5px] rounded-sm" style={{ "width": "50%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                              </div>
                              <div className="flex items-center gap-[3px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                                <div className="h-[1.5px] w-[8px] shrink-0 rounded-sm" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                                <div className="h-[1.5px] rounded-sm" style={{ "width": "65%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 z-[25] cursor-pointer" role="button" tabIndex={0} aria-label="Open screen" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="baby-grok-bot-entry-enter mt-2 first:mt-0">
          <div className="mb-2">
            <div className="flex items-center justify-center py-1 text-[12px] leading-4" style={{ "color": "var(--cursor-text-secondary)" } as React.CSSProperties}>
              {"0:58"}
            </div>
          </div>
          <div className="flex max-w-[min(560px,92%)] flex-col items-start">
            <div className="relative">
              <div className="baby-grok-bot-md px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap" style={{ "background": "var(--grok-bot-bubble-agent)", "color": "var(--cursor-text-primary)", "borderRadius": "16px" } as React.CSSProperties}>
                <span>
                  {"caught the “pay button spins” thread. repro'd in staging: fails on discounted annual + tax. steps, screenshots, har in the doc."}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="baby-grok-bot-entry-enter">
          <div className="flex max-w-[min(560px,92%)] flex-col items-start">
            <div className="relative">
              <div className="baby-grok-bot-md px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap" style={{ "background": "var(--grok-bot-bubble-agent)", "color": "var(--cursor-text-primary)", "borderRadius": "16px" } as React.CSSProperties}>
                <span />
                <strong>
                  {"4 of 4 attempts"}
                </strong>
                <span>
                  {" fail with a discount code on an annual plan in a taxed region. monthly is clean, and annual without a code is clean, so it's the two together."}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
          <div className="flex justify-end">
            <div className="relative max-w-[min(420px,85%)]">
              <div className="px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap" style={{ "background": "var(--grok-bot-bubble-user)", "color": "var(--grok-bot-bubble-user-ink)", "borderRadius": "16px" } as React.CSSProperties}>
                {"send to eng"}
              </div>
            </div>
          </div>
        </div>
        <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
          <div className="max-w-[min(420px,92%)]">
            <div className="baby-grok-bot-card">
              <div className="flex items-start gap-2">
                <svg className="mt-[3px] size-3.5 shrink-0" viewBox="-2.45 0 2452.5 2452.5" xmlns="http://www.w3.org/2000/svg">
                  <g clipRule="evenodd" fillRule="evenodd">
                    <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0" />
                    <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d" />
                    <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e" />
                    <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a" />
                  </g>
                </svg>
                <span className="baby-grok-bot-card-title">
                  {"Slack message"}
                </span>
                <span className="flex-1" />
                <span className="baby-grok-bot-card-badge" data-tone="success">
                  <span aria-hidden="true" className="baby-grok-bot-card-badge__dot" />
                  {"Sent"}
                </span>
              </div>
              <dl className="baby-grok-bot-message-panel mt-2">
                <div className="baby-grok-bot-message-row">
                  <dt>
                    {"Workspace"}
                  </dt>
                  <dd>
                    {"Grok Bot"}
                  </dd>
                </div>
                <div className="baby-grok-bot-message-row">
                  <dt>
                    {"To"}
                  </dt>
                  <dd>
                    {"#eng-checkout"}
                  </dd>
                </div>
                <div className="baby-grok-bot-message-row">
                  <dt>
                    {"Thread"}
                  </dt>
                  <dd>
                    {"Pay button spins on discounted annual"}
                  </dd>
                </div>
                <div className="baby-grok-bot-message-body">
                  <p>
                    {"Reproduced the support thread in staging: the pay button hangs on an annual plan with a discount code in a taxed region. 4 of 4 attempts."}
                  </p>
                  <p>
                    {"Steps, screenshots, and the HAR are in the doc. Monthly and undiscounted annual both pass."}
                  </p>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="baby-grok-bot-entry-enter">
          <div className="flex max-w-[min(560px,92%)] flex-col items-start">
            <div className="relative">
              <div className="baby-grok-bot-md px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap" style={{ "background": "var(--grok-bot-bubble-agent)", "color": "var(--cursor-text-primary)", "borderRadius": "16px" } as React.CSSProperties}>
                <span>
                  {"dropped in #eng-checkout. i'll re-run when the pr updates."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
