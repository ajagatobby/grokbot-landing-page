import type React from "react"

export default function DeveloperPanel() {
  return (
    <div className="w-[220px]">
      <div className="px-2 py-2">
        <div className="relative">
          <div className="bg-primary/[0.04] pointer-events-none absolute rounded-md" style={{ "opacity": "0", "top": "0px", "left": "0px", "width": "0px", "height": "0px", "transition": "opacity 150ms" } as React.CSSProperties} />
          <a className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="/api">
            <div>
              <span className="block">
                {"API Overview"}
              </span>
            </div>
          </a>
          <a target="_blank" className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="https://docs.x.ai">
            <div>
              <span className="block">
                {"Documentation"}
              </span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-slot="icon" className="stroke-[2] text-secondary ml-auto size-2.5 opacity-0 transition-opacity group-hover:opacity-100">
              <g id="name=arrow-up-right">
                <path id="vector" d="M18 16.5H16V9.41406L6.99998 18.4141L5.58591 17L14.5859 8H7.49998V6H18V16.5Z" fill="currentColor" />
              </g>
            </svg>
          </a>
          <a target="_blank" className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="https://console.x.ai?utm_source=website&utm_medium=referral&utm_campaign=site-nav&utm_content=developer-console">
            <div>
              <span className="block">
                {"Console"}
              </span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-slot="icon" className="stroke-[2] text-secondary ml-auto size-2.5 opacity-0 transition-opacity group-hover:opacity-100">
              <g id="name=arrow-up-right">
                <path id="vector" d="M18 16.5H16V9.41406L6.99998 18.4141L5.58591 17L14.5859 8H7.49998V6H18V16.5Z" fill="currentColor" />
              </g>
            </svg>
          </a>
          <a target="_blank" className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="https://docs.x.ai/developers/models">
            <div>
              <span className="block">
                {"Pricing"}
              </span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-slot="icon" className="stroke-[2] text-secondary ml-auto size-2.5 opacity-0 transition-opacity group-hover:opacity-100">
              <g id="name=arrow-up-right">
                <path id="vector" d="M18 16.5H16V9.41406L6.99998 18.4141L5.58591 17L14.5859 8H7.49998V6H18V16.5Z" fill="currentColor" />
              </g>
            </svg>
          </a>
          <a target="_blank" className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="https://status.x.ai">
            <div>
              <span className="block">
                {"Status"}
              </span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-slot="icon" className="stroke-[2] text-secondary ml-auto size-2.5 opacity-0 transition-opacity group-hover:opacity-100">
              <g id="name=arrow-up-right">
                <path id="vector" d="M18 16.5H16V9.41406L6.99998 18.4141L5.58591 17L14.5859 8H7.49998V6H18V16.5Z" fill="currentColor" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}