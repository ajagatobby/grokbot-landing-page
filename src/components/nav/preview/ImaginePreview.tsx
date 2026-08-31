import type React from "react"

export default function ImaginePreview() {
  return (
    <div className="absolute inset-0" style={{ pointerEvents: "none" } as React.CSSProperties}>
      <div className="grid h-full grid-cols-3 grid-rows-2 gap-[3px]">
        <div className="relative overflow-hidden" style={{ "gridArea": "1 / 1 / span 2 / span 2", "borderTopLeftRadius": "var(--tile-r,0.375rem)", "borderTopRightRadius": "0.375rem", "borderBottomLeftRadius": "var(--tile-r,0.375rem)", "borderBottomRightRadius": "0.375rem" } as React.CSSProperties}>
          <div className="absolute inset-0" style={{ "opacity": "1" } as React.CSSProperties}>
            <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover/card:scale-[1.02]">
              <img alt="" className="!max-h-none !max-w-none absolute inset-0 h-full w-full" sizes="320px" loading="lazy" decoding="async" role="presentation" srcSet="/media/nav/320-nav-2.jpg 320w,\n/media/nav/640-nav-2.jpg 640w" src="/media/nav/320-nav-2.jpg" style={{ "objectFit": "cover", "maxWidth": "320px", "maxHeight": "320px", "aspectRatio": "1 / 1", "width": "100%" } as React.CSSProperties} />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ "gridArea": "1 / 3", "borderTopLeftRadius": "0.375rem", "borderTopRightRadius": "var(--tile-r,0.375rem)", "borderBottomLeftRadius": "0.375rem", "borderBottomRightRadius": "0.375rem" } as React.CSSProperties}>
          <div className="absolute inset-0" style={{ "opacity": "1" } as React.CSSProperties}>
            <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover/card:scale-[1.02]">
              <img alt="" className="!max-h-none !max-w-none absolute inset-0 h-full w-full" sizes="320px" loading="lazy" decoding="async" role="presentation" srcSet="/media/nav/320-nav-9.jpg 320w,\n/media/nav/640-nav-9.jpg 640w" src="/media/nav/320-nav-9.jpg" style={{ "objectFit": "cover", "maxWidth": "320px", "maxHeight": "320px", "aspectRatio": "1 / 1", "width": "100%" } as React.CSSProperties} />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ "gridArea": "2 / 3", "borderTopLeftRadius": "0.375rem", "borderTopRightRadius": "0.375rem", "borderBottomLeftRadius": "0.375rem", "borderBottomRightRadius": "var(--tile-r,0.375rem)" } as React.CSSProperties}>
          <div className="absolute inset-0" style={{ "opacity": "1" } as React.CSSProperties}>
            <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover/card:scale-[1.02]">
              <img alt="" className="!max-h-none !max-w-none absolute inset-0 h-full w-full dark:hidden" sizes="320px" loading="lazy" decoding="async" role="presentation" srcSet="/media/nav/320-nav-10.jpg 320w,\n/media/nav/640-nav-10.jpg 640w" src="/media/nav/320-nav-10.jpg" style={{ "objectFit": "cover", "maxWidth": "320px", "maxHeight": "320px", "aspectRatio": "1 / 1", "width": "100%" } as React.CSSProperties} />
              <img alt="" className="!max-h-none !max-w-none absolute inset-0 hidden h-full w-full dark:block" sizes="320px" loading="lazy" decoding="async" role="presentation" srcSet="/media/nav/320-nav-10-night.jpg 320w,\n/media/nav/640-nav-10-night.jpg 640w" src="/media/nav/320-nav-10-night.jpg" style={{ "objectFit": "cover", "background": "radial-gradient(at 0px 0px, rgb(45, 44, 40), rgba(0, 0, 0, 0) 50%), radial-gradient(at 33% 0px, rgb(35, 41, 37), rgba(0, 0, 0, 0) 50%), radial-gradient(at 67% 0px, rgb(46, 50, 50), rgba(0, 0, 0, 0) 50%), radial-gradient(at 100% 0px, rgb(48, 41, 28), rgba(0, 0, 0, 0) 50%), radial-gradient(at 0px 50%, rgb(26, 14, 24), rgba(0, 0, 0, 0) 50%), radial-gradient(at 33% 50%, rgb(55, 53, 53), rgba(0, 0, 0, 0) 50%), radial-gradient(at 67% 50%, rgb(42, 34, 37), rgba(0, 0, 0, 0) 50%), radial-gradient(at 100% 50%, rgb(48, 38, 34), rgba(0, 0, 0, 0) 50%), radial-gradient(at 0px 100%, rgb(45, 43, 44), rgba(0, 0, 0, 0) 50%), radial-gradient(at 33% 100%, rgb(101, 101, 93), rgba(0, 0, 0, 0) 50%), radial-gradient(at 67% 100%, rgb(74, 73, 67), rgba(0, 0, 0, 0) 50%), radial-gradient(at 100% 100%, rgb(50, 34, 34), rgba(0, 0, 0, 0) 50%)", "maxWidth": "320px", "maxHeight": "320px", "aspectRatio": "1 / 1", "width": "100%" } as React.CSSProperties} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
