import { GrokBot } from "../lib/grok-bot-mark"
import { STATEMENT_STATES, useMarkStates } from "../lib/markStates"
export default function Statement() {
  const statement = useMarkStates(STATEMENT_STATES)
  return (
    <section id="statement" className="overflow-x-clip">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl py-12 sm:py-16">
        <div className="statement-card bg-card relative flex rounded-3xl md:min-h-[22rem]">
          <div className="relative z-10 flex w-full min-w-0 flex-col justify-center gap-4 p-8 pb-44 sm:gap-5 sm:px-12 sm:py-10 md:pr-[42%] md:pb-10">
            <h2 className="font-display text-3xl tracking-tight text-balance sm:text-4xl">
              {"Message Bots like teammates"}
            </h2>
            <p className="text-theme-text-muted max-w-md text-base leading-relaxed text-pretty sm:text-lg sm:leading-relaxed">
              {"Give tasks to Bots like you would a teammate on desktop or iOS. Your AI teammates take projects from start to end, keep context on how you work and get smarter over time, and come back when your approval is needed."}
            </p>
          </div>
          <div aria-hidden="true" className="statement-pop">
            <div className="statement-pop__frame">
              <div className="statement-character-panel">
                <span ref={statement.ref} className="grok-bot-lazy statement-character">
                  <GrokBot state={statement.state} flipX mouseInteractive />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
