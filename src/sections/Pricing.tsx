import { useLayoutEffect, useRef, useState } from "react"
import NumberFlow from "../components/NumberFlow"

type Tier = {
  id: string
  toggleLabel: string
  priceMonthly: number
  ctaLabel: string
  includesLabel: string
  features: string[]
}

type Plan = {
  id: string
  name: string
  toggleAriaLabel: string
  priceSuffix: string
  note: string
  cta: { variant: "primary" | "secondary"; href: string; openInNewTab?: boolean }
  tiers: Tier[]
}

const PLANS: Plan[] = [
  {
    id: "cursor",
    name: "Cursor",
    toggleAriaLabel: "Choose a Cursor plan",
    priceSuffix: "/ month",
    note: "Billed monthly",
    cta: { variant: "primary", href: "https://cursor.com/bot/onboarding?product=grok-bot" },
    tiers: [
      {
        id: "pro", toggleLabel: "Pro", priceMonthly: 20, ctaLabel: "Pro", includesLabel: "Includes:",
        features: ["Grok Bot's own computer", "Signs into your tools", "Routines on a schedule", "Work anywhere: desktop, mobile, and more", "Weekly Grok Bot usage included"],
      },
      {
        id: "pro-plus", toggleLabel: "Pro+", priceMonthly: 60, ctaLabel: "Pro+", includesLabel: "Includes:",
        features: ["Grok Bot's own computer", "Signs into your tools", "Routines on a schedule", "Work anywhere: desktop, mobile, and more", "Weekly Grok Bot usage included"],
      },
      {
        id: "ultra", toggleLabel: "Ultra", priceMonthly: 200, ctaLabel: "Ultra", includesLabel: "Includes:",
        features: ["Grok Bot's own computer", "Signs into your tools", "Routines on a schedule", "Work anywhere: desktop, mobile, and more", "Extended limits on AI tokens"],
      },
    ],
  },
  {
    id: "grok",
    name: "Grok",
    toggleAriaLabel: "Choose a Grok plan",
    priceSuffix: "/ month",
    note: "Billed monthly",
    cta: { variant: "primary", href: "https://grok.com/plans?product=grok-bot", openInNewTab: true },
    tiers: [
      {
        id: "supergrok", toggleLabel: "SuperGrok", priceMonthly: 30, ctaLabel: "SuperGrok", includesLabel: "Includes:",
        features: ["Grok Bot access", "Grok 4.6 model", "Higher rate limits across all features", "Expert", "Image and video generation", "Connectors"],
      },
      {
        id: "plus", toggleLabel: "Plus", priceMonthly: 100, ctaLabel: "SuperGrok Plus", includesLabel: "Everything in SuperGrok, plus:",
        features: ["Create 1080p videos", "Significantly higher usage across Chat, Imagine, Voice & Build", "Lightning-fast replies", "Priority access at peak times", "Early access to new features"],
      },
      {
        id: "heavy", toggleLabel: "Heavy", priceMonthly: 300, ctaLabel: "SuperGrok Heavy", includesLabel: "Everything in SuperGrok, plus:",
        features: ["Highest usage at the fastest speed", "Solve extremely hard problems", "Most powerful intelligence", "Dedicated support & early access"],
      },
    ],
  },
  {
    id: "teams",
    name: "Cursor Teams",
    toggleAriaLabel: "Choose a Cursor Teams plan",
    priceSuffix: "/ seat / month",
    note: "Billed monthly",
    cta: { variant: "secondary", href: "https://cursor.com/create-team?product=grok-bot", openInNewTab: true },
    tiers: [
      {
        id: "standard", toggleLabel: "Standard", priceMonthly: 40, ctaLabel: "Standard Teams", includesLabel: "Everything in Cursor Pro+, plus:",
        features: ["Centralized team billing and settings", "Team marketplace for skills and plugins", "Shared usage analytics"],
      },
      {
        id: "premium", toggleLabel: "Premium", priceMonthly: 120, ctaLabel: "Premium Teams", includesLabel: "Everything in Cursor Ultra, plus:",
        features: ["Centralized team billing and settings", "Team marketplace for skills and plugins", "Shared usage analytics", "SAML/OIDC SSO"],
      },
    ],
  },
]

const Check = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-secondary mt-0.5 size-4 shrink-0">
    <path d="m3.5 8.5 3 3 6-6" />
  </svg>
)

/**
 * Only the part of a label that actually changes animates: the words every variant shares
 * at the front and back are peeled off and left as static text, so
 * "Get SuperGrok"→"Get SuperGrok Plus" slides just the word "Plus" into place.
 * Returns null when nothing varies, in which case the label is plain text.
 */
function splitAffixes(labels: string[]) {
  if (labels.every((l) => l === labels[0])) return null
  const words = labels.map((l) => l.split(" "))
  const shortest = Math.min(...words.map((w) => w.length))
  let lead = 0
  while (lead < shortest && words.every((w) => w[lead] === words[0][lead])) lead++
  let trail = 0
  while (trail < shortest - lead && words.every((w) => w[w.length - 1 - trail] === words[0][words[0].length - 1 - trail])) trail++
  return {
    prefix: words[0].slice(0, lead).join(" "),
    suffix: words[0].slice(words[0].length - trail).join(" "),
    middles: words.map((w) => w.slice(lead, w.length - trail).join(" ")),
  }
}

/** A label whose changing middle swaps with a blur/slide transition. */
function SwapLabel({ lead = "", labels, activeIndex }: { lead?: string; labels: string[]; activeIndex: number }) {
  const sizerRef = useRef<HTMLSpanElement>(null)
  const [width, setWidth] = useState<number | null>(null)
  const split = splitAffixes(labels)

  useLayoutEffect(() => {
    // Round the measured text width to whole pixels (59.563 → 60px) so the box never jitters.
    const measure = () => {
      if (sizerRef.current) setWidth(Math.round(sizerRef.current.getBoundingClientRect().width))
    }
    measure()
    // Measured at mount the text is still in the fallback face, so the stored width is a
    // pixel or two off; re-measure once the real face lands.
    if (typeof document !== "undefined" && document.fonts) document.fonts.ready.then(measure).catch(() => {})
  }, [activeIndex, labels])

  if (!split) return <>{lead + labels[0]}</>
  const { prefix, suffix, middles } = split

  return (
    <>
      {lead + (prefix ? `${prefix} ` : "")}
      <span
        className="relative inline-block whitespace-nowrap transition-[width] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
        style={width === null ? undefined : { width: `${width}px` }}
      >
        <span ref={sizerRef} aria-hidden="true" className="invisible whitespace-nowrap">
          {middles[activeIndex]}
        </span>
        <span className="absolute inset-0 [clip-path:inset(0_-100%)]">
          {middles.map((m, i) => {
            const active = i === activeIndex
            return (
              <span
                key={i}
                aria-hidden={active ? undefined : "true"}
                className={`absolute left-0 top-0 whitespace-nowrap transition-[transform,opacity,filter] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none motion-reduce:transform-none ${
                  active ? "duration-700" : "duration-300 opacity-0 blur-[2px] translate-y-[45%]"
                }`}
              >
                {m}
              </span>
            )
          })}
        </span>
      </span>
      {suffix ? ` ${suffix}` : ""}
    </>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  const [active, setActive] = useState(0)
  const tier = plan.tiers[active]
  // The two variants order their utilities differently, and the secondary one carries
  // a dark-mode override for the card colour.
  const ctaClass =
    plan.cta.variant === "primary"
      ? "bg-theme-accent hover:bg-theme-accent-hover text-theme-accent-contrast h-11 gap-1.5 px-6 text-base mt-6 w-full font-normal"
      : "bg-theme-card-03-hex text-theme-text transition-[filter] hover:brightness-90 h-11 gap-1.5 px-6 text-base font-normal mt-6 w-full dark:[--color-theme-card-03-hex:oklch(32%_0_0)]"

  return (
    <article className="bg-card flex flex-col rounded-3xl p-6 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-secondary text-sm font-medium">{plan.name}</h3>
        <div role="group" aria-label={plan.toggleAriaLabel} className="bg-primary/5 flex shrink-0 rounded-full p-0.5">
          {plan.tiers.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                i === active ? "bg-background text-primary shadow-sm" : "text-secondary hover:text-primary"
              }`}
            >
              {t.toggleLabel}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 flex min-w-0 items-baseline gap-1.5">
        <span className="font-display shrink-0 text-4xl font-medium tracking-tight">
          <NumberFlow value={tier.priceMonthly} />
        </span>
        <span className="text-secondary min-w-0 truncate text-sm">{plan.priceSuffix}</span>
      </p>
      <p className="text-secondary mt-1 text-sm">{plan.note}</p>
      <a
        href={plan.cta.href}
        {...(plan.cta.openInNewTab ? { target: "_blank" } : {})}
        className={`inline-flex items-center justify-center rounded-full transition-colors ${ctaClass}`}
      >
        <span>
          <SwapLabel lead="Get " labels={plan.tiers.map((t) => t.ctaLabel)} activeIndex={active} />
        </span>
      </a>
      <p className="text-primary mt-8 text-sm font-medium">
        {splitAffixes(plan.tiers.map((t) => t.includesLabel)) ? (
          <span>
            <SwapLabel labels={plan.tiers.map((t) => t.includesLabel)} activeIndex={active} />
          </span>
        ) : (
          tier.includesLabel
        )}
      </p>
      <div className="grid flex-1">
        {plan.tiers.map((t, i) => (
          <ul
            key={t.id}
            className={`col-start-1 row-start-1 mt-3 grid content-start gap-2.5 ${i === active ? "" : "invisible"}`}
          >
            {t.features.map((f) => (
              <li className="flex items-start gap-2 text-sm" key={f}>
                <Check />
                <span className="text-secondary">{f}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </article>
  )
}

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="mx-auto flex w-full max-w-[var(--site-content-width)] flex-col gap-10 px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl tracking-tight text-balance sm:text-4xl text-center">Pricing</h2>
          <a
            href="https://cursor.com/contact-sales?product=grok-bot"
            className="inline-flex items-center justify-center rounded-full transition-colors bg-theme-card-03-hex text-theme-text transition-[filter] hover:brightness-90 h-11 gap-1.5 px-6 text-base font-normal"
          >
            Contact sales
          </a>
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="grid w-full max-w-5xl gap-4 md:grid-cols-3">
            {PLANS.map((p) => (
              <PlanCard key={p.id} plan={p} />
            ))}
          </div>
          <div className="bg-card flex w-full max-w-5xl flex-col items-center gap-x-4 gap-y-3 rounded-3xl px-6 py-5 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:px-8 sm:text-left">
            <span className="flex flex-col items-center gap-3 sm:flex-row">
              <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block text-primary h-5 w-auto shrink-0">
                <path d="M13.374 20.5407L24.4555 12.3506C24.9988 11.9491 25.7753 12.1057 26.0342 12.7294C27.3966 16.0185 26.7879 19.9712 24.0772 22.6851C21.3666 25.3989 17.595 25.9941 14.1477 24.6386L10.3818 26.3843C15.7832 30.0806 22.3422 29.1665 26.4409 25.0601C29.692 21.8051 30.6989 17.3683 29.7574 13.3673L29.7659 13.3758C28.4006 7.49809 30.1016 5.14871 33.5859 0.344576C33.6683 0.230667 33.7508 0.116757 33.8333 0L29.2482 4.59055V4.57631L13.3712 20.5436" fill="currentColor" />
                <path d="M11.0867 22.5312C7.20979 18.8234 7.87821 13.0852 11.1862 9.77618C13.6323 7.3271 17.64 6.32755 21.1385 7.79698L24.8959 6.05986C24.219 5.57005 23.3514 5.04322 22.3559 4.67301C17.8562 2.81914 12.469 3.7418 8.81115 7.40114C5.29271 10.9238 4.18626 16.3402 6.08628 20.9621C7.5056 24.4164 5.17893 26.8597 2.8352 29.3259C2.00465 30.2001 1.17126 31.0744 0.5 31.9999L11.0838 22.534" fill="currentColor" />
              </svg>
              <span className="text-primary text-sm">
                Already on an eligible Cursor, SuperGrok, or Teams plan?{" "}
                <span className="text-secondary">Grok Bot is included.</span>
              </span>
            </span>
            <a href="https://grok.com/?product=grok-bot" target="_blank" className="bg-primary/5 text-primary hover:bg-primary/10 inline-flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-medium transition-colors">
              Sign in with your plan
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
