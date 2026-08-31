import BotMark from "./BotMark"
import type React from "react"

export default function ScreenWorking() {
  return (
    <div className="mt-2.5">
      <div className="overflow-hidden" style={{ "borderRadius": "10px", "transform": "none", "transformOrigin": "50% 50% 0px" } as React.CSSProperties}>
        <div className="group/desktop relative max-h-full w-full overflow-hidden rounded-md aspect-[16/10] !rounded-none" style={{ "--rd-base-width": "360px", "--rd-base-height": "224.99999999999997px", "--rd-content-scale": "1.1" } as React.CSSProperties}>
          <img alt="" className="absolute inset-0 h-full w-full object-cover remote-desktop-wallpaper remote-desktop-wallpaper--light" draggable="false" src="/media/cloud-agents-2.webp" />
          <img alt="" className="remote-desktop-wallpaper remote-desktop-wallpaper--dark absolute inset-0 h-full w-full object-cover" draggable="false" src="/media/cloud-agents-3.webp" />
          <div className="rd-interactive bg-theme-bg absolute touch-none overflow-hidden rounded-[5px] !overflow-visible" style={{ "top": "11%", "left": "25%", "width": "50%", "height": "72%", "zIndex": "4", "boxShadow": "rgba(0, 0, 0, 0.14) 0px 3px 12px, rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px" } as React.CSSProperties}>
            <div className="flex origin-top-left flex-col" style={{ "width": "calc(var(--rd-base-width, 100%) * 0.5)", "height": "calc(var(--rd-base-height, 100%) * 0.72)", "transform": "scale(var(--rd-content-scale, 1))" } as React.CSSProperties}>
              <div className="flex h-full w-full flex-col">
                <div className="flex h-[11px] shrink-0 items-center gap-[2px] px-[4px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)" } as React.CSSProperties}>
                  <div className="h-[3px] w-[3px] rounded-full" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.15" } as React.CSSProperties} />
                  <div className="h-[3px] w-[3px] rounded-full" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.15" } as React.CSSProperties} />
                  <div className="h-[3px] w-[3px] rounded-full" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.15" } as React.CSSProperties} />
                </div>
                <div aria-hidden="true" className="flex h-[9px] shrink-0 items-center justify-center" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)" } as React.CSSProperties}>
                  <div className="h-[4px] w-[36%] rounded-full" style={{ "backgroundColor": "color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties} />
                </div>
                <div className="relative flex min-h-0 flex-1">
                  <div aria-hidden="true" className="baby-grok-bot-portal-agent-cursor pointer-events-none absolute z-10 origin-top-left scale-[0.6]">
                    <div className="relative h-[18px] w-[18px]">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" data-cursor-arrow="" className="-scale-x-100 drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.3)] shrink-0 transition-opacity duration-200">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4775 2.375C15.1508 2.37522 15.5719 3.10428 15.2353 3.6875L8.63861 15.1143C8.19099 15.8892 7.00618 15.5716 7.00579 14.6768V7.56348L0.845638 4.00781C0.0708241 3.56015 0.388339 2.37535 1.28314 2.375H14.4775ZM7.69329 6.51758C8.04109 6.7186 8.25579 7.09044 8.25579 7.49219V13.2764L13.8271 3.625H2.68353L7.69329 6.51758Z" fill="white" />
                        <path d="M7.69329 6.51758C8.04109 6.7186 8.25579 7.09044 8.25579 7.49219V13.2764L13.8271 3.625H2.68353L7.69329 6.51758Z" fill="var(--grok-bot-current-agent-coat, #885cf5)" />
                      </svg>
                      <span className="absolute top-[12px] left-[11px] flex size-[16px] items-center justify-center overflow-hidden rounded-full border-[1.5px] border-white drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.3)]" style={{ "--fg": "var(--grok-bot-current-agent-coat, #885cf5)", "--bg": "#fff" } as React.CSSProperties}>
                        <BotMark className="grok-bot-mark grok-bot-mark--fill" />
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[19%] shrink-0 flex-col gap-[7px] px-[5px] py-[7px]" style={{ "borderRight": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)", "backgroundColor": "color-mix(in srgb, var(--color-theme-fg) 2%, transparent)" } as React.CSSProperties}>
                    <div className="flex flex-col gap-[5px]">
                      <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "62%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.09" } as React.CSSProperties} />
                      <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "48%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.09" } as React.CSSProperties} />
                      <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "70%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.09" } as React.CSSProperties} />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "54%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.09" } as React.CSSProperties} />
                      <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "66%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.09" } as React.CSSProperties} />
                      <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "44%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.09" } as React.CSSProperties} />
                      <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "58%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.09" } as React.CSSProperties} />
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col px-[8px] py-[7px]">
                    <div className="flex items-center gap-[5px] pb-[7px]">
                      <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "30%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.16" } as React.CSSProperties} />
                      <div aria-hidden="true" className="ml-auto h-[7px] w-[13%] shrink-0 rounded-full" style={{ "backgroundColor": "color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties} />
                      <div aria-hidden="true" className="h-[7px] w-[17%] shrink-0 rounded-full" style={{ "backgroundColor": "color-mix(in srgb, var(--color-theme-fg) 8%, transparent)" } as React.CSSProperties} />
                    </div>
                    <div className="flex items-center gap-[5px] pb-[4px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)" } as React.CSSProperties}>
                      <span aria-hidden="true" className="shrink-0" style={{ "width": "6px" } as React.CSSProperties} />
                      <div className="flex shrink-0 items-center" style={{ "width": "calc(40% + 11px)" } as React.CSSProperties}>
                        <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "45%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.14" } as React.CSSProperties} />
                      </div>
                      <div className="flex shrink-0 items-center" style={{ "width": "28%" } as React.CSSProperties}>
                        <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "50%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.14" } as React.CSSProperties} />
                      </div>
                      <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full ml-auto" style={{ "width": "11%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.14" } as React.CSSProperties} />
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col">
                      <div className="flex flex-1 items-center gap-[5px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                        <span aria-hidden="true" className="text-theme-product-ansi-green baby-grok-bot-receipt-check shrink-0" style={{ "animationDelay": "200ms" } as React.CSSProperties}>
                          <svg viewBox="0 0 12 12" width="6" height="6" fill="none">
                            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
                            <path d="M3.75 6.25l1.6 1.6 2.9-3.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span aria-hidden="true" className="shrink-0 rounded-full" style={{ "width": "6px", "height": "6px", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                        <div className="flex shrink-0 items-center" style={{ "width": "40%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "86%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.1" } as React.CSSProperties} />
                        </div>
                        <div className="flex shrink-0 items-center" style={{ "width": "28%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "70%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                        </div>
                        <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full ml-auto" style={{ "width": "11%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                      </div>
                      <div className="flex flex-1 items-center gap-[5px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                        <span aria-hidden="true" className="text-theme-product-ansi-green baby-grok-bot-receipt-check shrink-0" style={{ "animationDelay": "460ms" } as React.CSSProperties}>
                          <svg viewBox="0 0 12 12" width="6" height="6" fill="none">
                            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
                            <path d="M3.75 6.25l1.6 1.6 2.9-3.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span aria-hidden="true" className="shrink-0 rounded-full" style={{ "width": "6px", "height": "6px", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                        <div className="flex shrink-0 items-center" style={{ "width": "40%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "68%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.1" } as React.CSSProperties} />
                        </div>
                        <div className="flex shrink-0 items-center" style={{ "width": "28%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "90%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                        </div>
                        <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full ml-auto" style={{ "width": "11%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                      </div>
                      <div className="flex flex-1 items-center gap-[5px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                        <span aria-hidden="true" className="text-theme-product-ansi-green baby-grok-bot-receipt-check shrink-0" style={{ "animationDelay": "720ms" } as React.CSSProperties}>
                          <svg viewBox="0 0 12 12" width="6" height="6" fill="none">
                            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
                            <path d="M3.75 6.25l1.6 1.6 2.9-3.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span aria-hidden="true" className="shrink-0 rounded-full" style={{ "width": "6px", "height": "6px", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                        <div className="flex shrink-0 items-center" style={{ "width": "40%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "80%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.1" } as React.CSSProperties} />
                        </div>
                        <div className="flex shrink-0 items-center" style={{ "width": "28%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "58%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                        </div>
                        <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full ml-auto" style={{ "width": "11%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                      </div>
                      <div className="flex flex-1 items-center gap-[5px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                        <span aria-hidden="true" className="text-theme-product-ansi-green baby-grok-bot-receipt-check shrink-0" style={{ "animationDelay": "980ms" } as React.CSSProperties}>
                          <svg viewBox="0 0 12 12" width="6" height="6" fill="none">
                            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
                            <path d="M3.75 6.25l1.6 1.6 2.9-3.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span aria-hidden="true" className="shrink-0 rounded-full" style={{ "width": "6px", "height": "6px", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                        <div className="flex shrink-0 items-center" style={{ "width": "40%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "58%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.1" } as React.CSSProperties} />
                        </div>
                        <div className="flex shrink-0 items-center" style={{ "width": "28%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "82%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                        </div>
                        <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full ml-auto" style={{ "width": "11%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                      </div>
                      <div className="flex flex-1 items-center gap-[5px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                        <span aria-hidden="true" className="text-theme-product-ansi-green baby-grok-bot-receipt-check shrink-0" style={{ "animationDelay": "1240ms" } as React.CSSProperties}>
                          <svg viewBox="0 0 12 12" width="6" height="6" fill="none">
                            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
                            <path d="M3.75 6.25l1.6 1.6 2.9-3.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span aria-hidden="true" className="shrink-0 rounded-full" style={{ "width": "6px", "height": "6px", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                        <div className="flex shrink-0 items-center" style={{ "width": "40%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "88%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.1" } as React.CSSProperties} />
                        </div>
                        <div className="flex shrink-0 items-center" style={{ "width": "28%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "66%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                        </div>
                        <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full ml-auto" style={{ "width": "11%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                      </div>
                      <div className="flex flex-1 items-center gap-[5px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                        <span aria-hidden="true" className="text-theme-product-ansi-green baby-grok-bot-receipt-check shrink-0" style={{ "animationDelay": "1500ms" } as React.CSSProperties}>
                          <svg viewBox="0 0 12 12" width="6" height="6" fill="none">
                            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
                            <path d="M3.75 6.25l1.6 1.6 2.9-3.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span aria-hidden="true" className="shrink-0 rounded-full" style={{ "width": "6px", "height": "6px", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                        <div className="flex shrink-0 items-center" style={{ "width": "40%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "66%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.1" } as React.CSSProperties} />
                        </div>
                        <div className="flex shrink-0 items-center" style={{ "width": "28%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "88%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                        </div>
                        <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full ml-auto" style={{ "width": "11%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                      </div>
                      <div className="flex flex-1 items-center gap-[5px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                        <span aria-hidden="true" className="text-theme-product-ansi-green baby-grok-bot-receipt-check shrink-0" style={{ "animationDelay": "1760ms" } as React.CSSProperties}>
                          <svg viewBox="0 0 12 12" width="6" height="6" fill="none">
                            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
                            <path d="M3.75 6.25l1.6 1.6 2.9-3.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span aria-hidden="true" className="shrink-0 rounded-full" style={{ "width": "6px", "height": "6px", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                        <div className="flex shrink-0 items-center" style={{ "width": "40%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "76%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.1" } as React.CSSProperties} />
                        </div>
                        <div className="flex shrink-0 items-center" style={{ "width": "28%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "54%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                        </div>
                        <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full ml-auto" style={{ "width": "11%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                      </div>
                      <div className="flex flex-1 items-center gap-[5px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                        <span aria-hidden="true" className="text-theme-product-ansi-green baby-grok-bot-receipt-check shrink-0" style={{ "animationDelay": "2020ms" } as React.CSSProperties}>
                          <svg viewBox="0 0 12 12" width="6" height="6" fill="none">
                            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
                            <path d="M3.75 6.25l1.6 1.6 2.9-3.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span aria-hidden="true" className="shrink-0 rounded-full" style={{ "width": "6px", "height": "6px", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                        <div className="flex shrink-0 items-center" style={{ "width": "40%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "62%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.1" } as React.CSSProperties} />
                        </div>
                        <div className="flex shrink-0 items-center" style={{ "width": "28%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "78%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                        </div>
                        <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full ml-auto" style={{ "width": "11%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                      </div>
                      <div className="flex flex-1 items-center gap-[5px]" style={{ "borderBottom": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 5%, transparent)" } as React.CSSProperties}>
                        <span aria-hidden="true" className="text-theme-product-ansi-green baby-grok-bot-receipt-check shrink-0" style={{ "animationDelay": "2280ms" } as React.CSSProperties}>
                          <svg viewBox="0 0 12 12" width="6" height="6" fill="none">
                            <circle cx="6" cy="6" r="5.25" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
                            <path d="M3.75 6.25l1.6 1.6 2.9-3.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span aria-hidden="true" className="shrink-0 rounded-full" style={{ "width": "6px", "height": "6px", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.08" } as React.CSSProperties} />
                        <div className="flex shrink-0 items-center" style={{ "width": "40%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "82%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.1" } as React.CSSProperties} />
                        </div>
                        <div className="flex shrink-0 items-center" style={{ "width": "28%" } as React.CSSProperties}>
                          <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full" style={{ "width": "64%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                        </div>
                        <div aria-hidden="true" className="h-[3px] shrink-0 rounded-full ml-auto" style={{ "width": "11%", "backgroundColor": "var(--color-theme-fg)", "opacity": "0.06" } as React.CSSProperties} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-[6px] text-[5px] leading-none" style={{ "color": "var(--color-theme-fg)" } as React.CSSProperties}>
                      <span style={{ "opacity": "0.4" } as React.CSSProperties}>
                        {"52 accounts"}
                      </span>
                      <span style={{ "opacity": "0.55" } as React.CSSProperties}>
                        {"36 contacts"}
                      </span>
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
  );
}
