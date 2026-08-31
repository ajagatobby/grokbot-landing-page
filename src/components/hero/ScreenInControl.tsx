import type React from "react"

export default function ScreenInControl() {
  return (
    <div className="mt-2.5">
      <div className="overflow-hidden" style={{ "borderRadius": "10px", "opacity": "1" } as React.CSSProperties}>
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
                <div className="flex flex-1 flex-col items-center justify-center gap-[7px] px-[22%] pb-[10%]">
                  <span aria-hidden="true" className="mb-[3px] h-[14px] w-[14px] shrink-0 rounded-full" style={{ "backgroundColor": "var(--color-theme-fg)", "opacity": "0.12" } as React.CSSProperties} />
                  <div className="flex w-full flex-col gap-[4px]">
                    <div data-demo-target="portal-email" className="flex h-[12px] w-full items-center rounded-[3px] px-[5px] text-[5px] leading-none" style={{ "border": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)", "backgroundColor": "color-mix(in srgb, var(--color-theme-fg) 3%, transparent)" } as React.CSSProperties}>
                      <span style={{ "color": "var(--color-theme-fg)", "opacity": "0.3" } as React.CSSProperties}>
                        {"Email"}
                      </span>
                    </div>
                    <div data-demo-target="portal-password" className="flex h-[12px] w-full items-center rounded-[3px] px-[5px] text-[5px] leading-none" style={{ "border": "0.5px solid color-mix(in srgb, var(--color-theme-fg) 8%, transparent)", "backgroundColor": "color-mix(in srgb, var(--color-theme-fg) 3%, transparent)" } as React.CSSProperties}>
                      <span style={{ "color": "var(--color-theme-fg)", "opacity": "0.3" } as React.CSSProperties}>
                        {"Password"}
                      </span>
                    </div>
                  </div>
                  <button type="button" data-demo-target="portal-submit" className="h-[12px] w-full cursor-default rounded-[3px] text-[5px] leading-none" tabIndex={-1} style={{ "backgroundColor": "var(--color-theme-fg)", "color": "var(--color-theme-bg)", "opacity": "0.85" } as React.CSSProperties}>
                    {"Sign in"}
                  </button>
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
