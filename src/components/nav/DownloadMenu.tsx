type Item = { label: string; href: string; external?: boolean }
type Group = { label: string; items: Item[] }

export const DOWNLOAD_GROUPS: Group[] = [
  {
    label: "Products",
    items: [
      { label: "Grok", href: "https://grok.com/?referrer=website", external: true },
      { label: "Business", href: "/grok/business" },
      { label: "Government", href: "/grok/government" },
    ],
  },
  {
    label: "Download",
    items: [
      { label: "iOS", href: "https://apps.apple.com/app/apple-store/id6670324846", external: true },
      { label: "Android", href: "https://play.google.com/store/apps/details?id=ai.x.grok", external: true },
      { label: "Grok on X", href: "https://x.com/i/grok", external: true },
      { label: "Grok Bot", href: "/bot#download" },
    ],
  },
  {
    label: "Developers",
    items: [
      { label: "API Console", href: "https://console.x.ai?utm_source=website&utm_medium=referral&utm_campaign=site-nav&utm_content=try-dropdown-api-console", external: true },
      { label: "Documentation", href: "https://docs.x.ai", external: true },
      { label: "Grok Build", href: "/build" },
    ],
  },
]

const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-slot="icon" className="stroke-[2] text-secondary size-2.5 opacity-0 transition-opacity group-hover:opacity-100">
    <g id="name=arrow-up-right">
      <path id="vector" d="M18 16.5H16V9.41406L6.99998 18.4141L5.58591 17L14.5859 8H7.49998V6H18V16.5Z" fill="currentColor" />
    </g>
  </svg>
)

/** The list body shared by the desktop split-button menu and the mobile drawer. */
export default function DownloadMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <HoverHighlight>
      {DOWNLOAD_GROUPS.map((group, gi) => (
        <div key={group.label}>
          {gi > 0 && <div className="border-border/20 mx-2 my-1.5 border-t" />}
          <div className="text-primary/40 mb-1 px-2 pt-1 text-[10px] font-medium uppercase tracking-wider">{group.label}</div>
          {group.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: "_blank" } : {})}
              data-dropdown-link="true"
              onClick={onNavigate}
              className="text-primary group flex h-[36px] items-center gap-1.5 rounded-md px-2 text-sm font-medium transition-colors"
            >
              <span>{item.label}</span>
              {item.external && <ArrowUpRight />}
            </a>
          ))}
        </div>
      ))}
    </HoverHighlight>
  )
}

/** Follows the pointer with a rounded highlight behind the hovered menu item. */
export function HoverHighlight({ children, className = "bg-primary/[0.04] pointer-events-none absolute rounded-md" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        const root = e.currentTarget
        const hl = root.firstElementChild as HTMLElement | null
        const target = (e.target as HTMLElement).closest("[data-dropdown-link]") as HTMLElement | null
        if (!hl || !target || !root.contains(target)) return
        const place = () => {
          hl.style.top = `${target.offsetTop}px`
          hl.style.left = `${target.offsetLeft}px`
          hl.style.width = `${target.offsetWidth}px`
          hl.style.height = `${target.offsetHeight}px`
        }
        if (hl.dataset.armed === "1") {
          place()
          hl.style.opacity = "1"
        } else {
          hl.style.transition = "none"
          place()
          hl.getBoundingClientRect()
          hl.style.transition = "top 150ms cubic-bezier(0.16,1,0.3,1), height 150ms cubic-bezier(0.16,1,0.3,1), opacity 120ms ease"
          hl.style.opacity = "1"
          hl.dataset.armed = "1"
        }
      }}
      onMouseLeave={(e) => {
        const hl = e.currentTarget.firstElementChild as HTMLElement | null
        if (hl) {
          hl.style.opacity = "0"
          hl.dataset.armed = "0"
        }
      }}
    >
      <div aria-hidden="true" className={className} style={{ opacity: 0, top: 0, left: 0, width: 0, height: 0, transition: "opacity 150ms" }} />
      {children}
    </div>
  )
}
