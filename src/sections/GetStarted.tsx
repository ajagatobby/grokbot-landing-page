import { GrokBot } from "../lib/grok-bot-mark"
import { FOOTER_STATES, useMarkStates } from "../lib/markStates"
export default function GetStarted() {
  const footer = useMarkStates(FOOTER_STATES)
  return (
    <section id="get-started">
      <div className="mx-auto w-full max-w-[var(--site-content-width)] px-4 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <h2 className="font-display text-3xl tracking-tight text-balance sm:text-4xl">
              {"Meet your first Bot"}
            </h2>
            <p className="text-secondary text-sm leading-relaxed text-balance sm:text-base">
              {"An AI teammate you can trust to get work done"}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a href="https://api2.cursor.sh/updates/download/stable/darwin-arm64/grok-bot-bd824e1890d8b96f" download="" className="inline-flex items-center justify-center rounded-full transition-colors bg-theme-accent hover:bg-theme-accent-hover text-theme-accent-contrast h-11 gap-1.5 px-6 text-base font-normal">
                {"Get started for free"}
              </a>
              <a href="https://cursor.com/contact-sales?product=grok-bot" className="inline-flex items-center justify-center rounded-full transition-colors bg-theme-card-03-hex text-theme-text transition-[filter] hover:brightness-90 h-11 gap-1.5 px-6 text-base font-normal">
                {"Contact sales"}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-20">
          <span ref={footer.ref} className="grok-bot-lazy footer-character">
            <GrokBot state={footer.state} mouseInteractive />
          </span>
        </div>
      </div>
    </section>
  );
}
