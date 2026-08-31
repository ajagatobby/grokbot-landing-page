import { useState, type ReactNode } from "react"
import { AnimatePresence, motion } from "motion/react"

type Faq = { q: string; a: ReactNode; text: string }

const FAQS: Faq[] = [
  {
    q: "How is Grok Bot different from AI assistants?",
    text: "Bots have their own computer, so they can work inside your apps and tools. They also run in parallel, 24/7, even when your laptop is closed.",
    a: <p>Bots have their own computer, so they can work inside your apps and tools. They also run in parallel, 24/7, even when your laptop is closed.</p>,
  },
  {
    q: "Who is Grok Bot available for today?",
    text: "Grok Bot is accessible today for Cursor Pro, Pro+, and Ultra, SuperGrok, SuperGrok Plus, and Heavy, and Cursor Standard and Premium Teams subscribers.",
    a: <p>Grok Bot is accessible today for Cursor Pro, Pro+, and Ultra, SuperGrok, SuperGrok Plus, and Heavy, and Cursor Standard and Premium Teams subscribers.</p>,
  },
  {
    q: "Is Grok Bot available for enterprises?",
    text: "Soon. We expect to open Grok Bot to teams and enterprises in the coming weeks. For now, you can join our waitlist here.",
    a: (
      <p>
        Soon. We expect to open Grok Bot to teams and enterprises in the coming weeks. For now, you can join our waitlist{" "}
        <a
          href="https://cursor.com/contact-sales?product=grok-bot"
          className="text-primary/80 hover:text-primary underline underline-offset-2 transition-colors"
        >
          here
        </a>
        .
      </p>
    ),
  },
  {
    q: "Where do I talk to Grok Bot?",
    text: "Work with Grok Bot from your desktop (macOS or Windows) or your phone with the iOS app.",
    a: <p>Work with Grok Bot from your desktop (macOS or Windows) or your phone with the iOS app.</p>,
  },
  {
    q: "How much does Grok Bot cost?",
    text: "Grok Bot subscriptions come with weekly usage included, with additional usage billed based on token cost. Enterprise customers should talk to their Cursor account teams for early access.",
    a: <p>Grok Bot subscriptions come with weekly usage included, with additional usage billed based on token cost. Enterprise customers should talk to their Cursor account teams for early access.</p>,
  },
  {
    q: "Do Bots share one computer?",
    text: "Yes. Every Grok Bot shares one persistent cloud computer. Your Bots share that machine (files, browser, logins), so they can hand work off and keep context. Isolation is per user, not per Grok Bot.",
    a: <p>Yes. Every Grok Bot shares one persistent cloud computer. Your Bots share that machine (files, browser, logins), so they can hand work off and keep context. Isolation is per user, not per Grok Bot.</p>,
  },
  {
    q: "How does Grok Bot handle my data & privacy?",
    text: "Grok Bot uses the same Cursor SSO, auth, and privacy mode you already trust. Your cloud computer is encrypted in transit and at rest, with training opt-out. Sensitive actions can go through Auto Review before they run. Enterprise admins can set DLP, certs, proxies, and network controls at boot.",
    a: <p>Grok Bot uses the same Cursor SSO, auth, and privacy mode you already trust. Your cloud computer is encrypted in transit and at rest, with training opt-out. Sensitive actions can go through Auto Review before they run. Enterprise admins can set DLP, certs, proxies, and network controls at boot.</p>,
  },
]

const FAQ_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.text },
  })),
})

export default function Faqs() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faqs">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_JSONLD }} />
      <div className="mx-auto grid w-full max-w-[var(--site-content-width)] gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <h2 className="lg:sticky lg:top-8 lg:self-start font-display text-3xl tracking-tight text-balance sm:text-4xl">
          FAQs
        </h2>
        <div>
          {FAQS.map((item, i) => {
            const expanded = open === i
            return (
              <div className="border-border border-b" key={item.q}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="pr-4 text-sm font-medium">{item.q}</span>
                  <svg
                    className={`text-primary/25 size-5 shrink-0 transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M10 4v12M4 10h12" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="text-primary/60 flex flex-col gap-3 pb-6 text-sm leading-7">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
