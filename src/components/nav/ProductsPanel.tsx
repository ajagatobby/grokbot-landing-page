import { useState } from "react"
import { HoverHighlight } from "./DownloadMenu"
import ChatPreview from "./preview/ChatPreview"
import BuildPreview from "./preview/BuildPreview"
import ImaginePreview from "./preview/ImaginePreview"
import VoicePreview from "./preview/VoicePreview"
import BotPreview from "./preview/BotPreview"

const PRODUCTS = [
  { href: "/grok", label: "Chat", subtitle: "Frontier reasoning with real-time knowledge and web search.", Preview: ChatPreview },
  { href: "/build", label: "Build", subtitle: "Plan, edit, and ship code from your terminal with AI.", Preview: BuildPreview },
  { href: "/api/imagine", label: "Imagine", subtitle: "Generate and edit images and video from text.", Preview: ImaginePreview },
  { href: "/voice", label: "Voice", subtitle: "Build voice agents with sub-second latency.", Preview: VoicePreview },
  { href: "/bot", label: "Bot", subtitle: "A new kind of colleague with its own computer.", Preview: BotPreview },
]

export default function ProductsPanel() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex">
      <div className="w-[220px] shrink-0 px-2 py-2">
        <HoverHighlight>
          {PRODUCTS.map((p, i) => (
            <a
              key={p.label}
              className="text-primary group flex items-center gap-1.5 rounded-lg px-4 text-sm font-medium transition-colors py-3"
              data-dropdown-link="true"
              href={p.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <div>
                <span className="block">{p.label}</span>
                <span className="text-primary/40 block text-[11px] font-normal leading-snug">{p.subtitle}</span>
              </div>
            </a>
          ))}
        </HoverHighlight>
      </div>
      <div className="flex w-[480px] shrink-0 flex-col p-3">
        <div className="bg-primary/[0.03] min-h-[280px] flex-1 overflow-hidden rounded-lg" style={{ "--tile-r": "0.5rem" } as React.CSSProperties}>
          <div className="relative h-full w-full">
            {PRODUCTS.map((p, i) => (
              <div key={p.label} className="absolute inset-0" style={{ opacity: i === active ? 1 : 0, transition: "opacity 200ms", pointerEvents: "none" }}>
                <p.Preview />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
