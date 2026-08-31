import type React from "react"

export default function SolutionsPanel() {
  return (
    <div className="w-[220px]">
      <div className="px-2 py-2">
        <div className="relative">
          <div className="bg-primary/[0.04] pointer-events-none absolute rounded-md" style={{ "opacity": "0", "top": "0px", "left": "0px", "width": "0px", "height": "0px", "transition": "opacity 150ms" } as React.CSSProperties} />
          <a className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="/grok/business">
            <div>
              <span className="block">
                {"Business"}
              </span>
            </div>
          </a>
          <a className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="/grok/government">
            <div>
              <span className="block">
                {"Government"}
              </span>
            </div>
          </a>
          <a className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="/solutions/customer-support">
            <div>
              <span className="block">
                {"Customer Support"}
              </span>
            </div>
          </a>
          <a className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="/solutions/legal">
            <div>
              <span className="block">
                {"Legal"}
              </span>
            </div>
          </a>
          <a className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="/solutions/security">
            <div>
              <span className="block">
                {"Security"}
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="px-1.5 pb-2">
        <div className="bg-primary/[0.02] border-border/10 overflow-hidden rounded-lg border-t">
          <a className="text-primary/50 hover:text-primary flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors" href="/grok/use-cases">
            {"Explore all use cases"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-slot="icon" className="stroke-[2] size-3">
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