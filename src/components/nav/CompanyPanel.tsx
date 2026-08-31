import type React from "react"

export default function CompanyPanel() {
  return (
    <div className="w-[220px]">
      <div className="px-2 py-2">
        <div className="relative">
          <div className="bg-primary/[0.04] pointer-events-none absolute rounded-md" style={{ "opacity": "0", "top": "0px", "left": "0px", "width": "0px", "height": "0px", "transition": "opacity 150ms" } as React.CSSProperties} />
          <a className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="/company">
            <div>
              <span className="block">
                {"Company"}
              </span>
            </div>
          </a>
          <a className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="/colossus">
            <div>
              <span className="block">
                {"Colossus"}
              </span>
            </div>
          </a>
          <a className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="/careers">
            <div>
              <span className="block">
                {"Careers"}
              </span>
            </div>
          </a>
          <a className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors h-[36px] py-1.5" data-dropdown-link="true" href="/contact">
            <div>
              <span className="block">
                {"Contact"}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}