export default function Guides() {
  return (
    <section id="guides">
      <div className="mx-auto w-full max-w-[var(--site-content-width)] px-4 sm:px-6">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <h2 className="font-display text-3xl tracking-tight text-balance sm:text-4xl">
              {"Grok Bot Guides"}
            </h2>
            <p className="text-secondary text-sm leading-relaxed text-balance sm:text-base">
              {"How PMs, designers, and GTM run Grok Bot day to day."}
            </p>
          </div>
          <a href="/bot/guides" className="inline-flex items-center justify-center rounded-full transition-colors bg-theme-card-03-hex text-theme-text transition-[filter] hover:brightness-90 h-11 gap-1.5 px-6 text-base font-normal">
            {"Read the guides"}
          </a>
        </div>
      </div>
    </section>
  );
}
