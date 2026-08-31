import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import SpaceXaiLogo from "../SpaceXaiLogo"

/**
 * The small-screen menu: a full-screen sheet carrying its own logo and close button,
 * with the four nav groups as accordions above a Download button and a legal row.
 */
type MenuLink = { label: string; href: string; desc?: string }
type MenuGroup = { label: string; links: MenuLink[] }

const GROUPS: MenuGroup[] = [
  {
    label: "Products",
    links: [
      { label: "Chat", href: "/grok", desc: "Frontier reasoning with real-time knowledge and web search." },
      { label: "Build", href: "/build", desc: "Plan, edit, and ship code from your terminal with AI." },
      { label: "Imagine", href: "/api/imagine", desc: "Generate and edit images and video from text." },
      { label: "Voice", href: "/voice", desc: "Build voice agents with sub-second latency." },
      { label: "Bot", href: "/bot", desc: "A new kind of colleague with its own computer." },
    ],
  },
  {
    label: "Solutions",
    links: [
      { label: "Business", href: "/grok/business" },
      { label: "Government", href: "/grok/government" },
      { label: "Customer Support", href: "/solutions/customer-support" },
      { label: "Legal", href: "/solutions/legal" },
      { label: "Security", href: "/solutions/security" },
    ],
  },
  {
    label: "Developer",
    links: [
      { label: "API Overview", href: "/api" },
      { label: "Documentation", href: "https://docs.x.ai" },
      {
        label: "Console",
        href: "https://console.x.ai?utm_source=website&utm_medium=referral&utm_campaign=site-nav&utm_content=developer-console",
      },
      { label: "Pricing", href: "https://docs.x.ai/developers/models" },
      { label: "Status", href: "https://status.x.ai" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Company", href: "/company" },
      { label: "Colossus", href: "/colossus" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

const FLAT: MenuLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "News", href: "/news" },
]

const CLOSE_BUTTON =
  "relative isolate inline-flex shrink-0 items-center justify-center border-0 text-sm font-medium transition-colors duration-150 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:shrink-0 aspect-square gap-x-3 px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 bg-[--btn-bg] text-[--btn-text] ring-1 ring-[--btn-border] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/15%)] [--btn-hover:theme(colors.primary/5%)] [--btn-text:theme(colors.primary)]"

const DOWNLOAD_BUTTON =
  "relative isolate inline-flex shrink-0 items-center justify-center border-0 text-sm font-medium transition-colors duration-150 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:shrink-0 sm:text-md [&>[data-slot=icon]]:sm:size-4.5 gap-x-3 px-5 py-3 [&>[data-slot=icon]]:size-5 bg-[--btn-bg] text-[--btn-text] hover:brightness-90 rounded-full [--btn-bg:theme(colors.primary)] [--btn-border:theme(colors.primary)] [--btn-hover:theme(colors.nimbus)] [--btn-text:theme(colors.background)] w-full"

export default function MobileMenu({ open, onClose, dmg }: { open: boolean; onClose: () => void; dmg: string }) {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-background fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto outline-none"
        >
          <div className="flex items-center justify-between p-4">
            <a aria-label="SpaceXAI Homepage" className="translate-x-[0.5px] -translate-y-[0.6px]" href="/">
              <SpaceXaiLogo className="h-8 w-[173px]" />
            </a>
            <button type="button" aria-label="Close menu" onClick={onClose} className={CLOSE_BUTTON}>
              <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-slot="icon" className="stroke-[2] ">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" />
              </svg>
            </button>
          </div>

          <div className="grow px-6">
            <ul className="divide-border flex flex-col divide-y py-4">
              {GROUPS.map((group) => {
                const isOpen = expanded === group.label
                return (
                  <li key={group.label}>
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : group.label)}
                      className="text-primary flex w-full items-center justify-between py-3 text-left text-lg font-medium"
                    >
                      {group.label}
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30 size-4">
                        <polyline points={isOpen ? "4,10 8,6 12,10" : "4,6 8,10 12,6"} />
                      </svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="space-y-1 pb-3">
                            {group.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                className="hover:bg-primary/[0.04] flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors"
                              >
                                <div className="min-w-0">
                                  <div className="text-primary text-sm font-medium">{link.label}</div>
                                  {link.desc && <div className="text-primary/40 mt-0.5 text-xs leading-relaxed">{link.desc}</div>}
                                </div>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
              {FLAT.map((link) => (
                <li key={link.label}>
                  <a className="text-primary/70 hover:text-primary block py-3 text-lg font-medium transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-6 pb-8 pt-4">
            <a download="" className={DOWNLOAD_BUTTON} href={dmg}>
              <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true" />
              Download
            </a>
            <div className="text-primary/30 mt-4 flex items-center justify-center gap-4 text-xs">
              <a className="hover:text-primary/60 transition-colors" href="/contact">
                Contact
              </a>
              <span>·</span>
              <a className="hover:text-primary/60 transition-colors" href="/legal">
                Legal
              </a>
              <span>·</span>
              <a className="hover:text-primary/60 transition-colors" href="/news">
                News
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
