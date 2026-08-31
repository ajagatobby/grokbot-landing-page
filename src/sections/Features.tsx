import TimelinePlayer, { type Timeline } from "../components/features/TimelinePlayer"
import animWorks from "../data/anim2-works.json"
import animShowbot from "../data/anim2-showbot.json"
import animSmarter from "../data/anim2-smarter.json"
import animConnect from "../data/anim2-connect.json"

export default function Features() {
  return (
    <section id="features">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl flex flex-col gap-10 py-20 sm:py-28 lg:gap-14">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <h2 className="font-display text-3xl tracking-tight text-balance sm:text-4xl">
            {"Work with many Bots at once"}
          </h2>
          <p className="text-secondary text-base leading-relaxed text-pretty sm:text-lg sm:leading-relaxed">
            {"Create a Bot, give it a task, and add another when the work grows—one on a project, one on outbound, one on systems. AI teammates work in parallel, collaborate where it makes sense, and keep working 24/7."}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <article className="bg-card flex flex-col overflow-hidden rounded-3xl p-6 sm:p-8">
            <h3 className="text-primary text-base leading-relaxed font-medium text-pretty">
              {"Grok Bot works where you work"}
            </h3>
            <p className="text-secondary text-base leading-relaxed text-pretty">
              {"Log Grok Bot in once. It uses your apps and websites just like you would, including the tools that are harder to navigate."}
            </p>
            <figure className="mt-auto pt-8">
              <TimelinePlayer data={animWorks as unknown as Timeline} />
            </figure>
          </article>
          <article className="bg-card flex flex-col overflow-hidden rounded-3xl p-6 sm:p-8">
            <h3 className="text-primary text-base leading-relaxed font-medium text-pretty">
              {"Show a Bot how it’s done"}
            </h3>
            <p className="text-secondary text-base leading-relaxed text-pretty">
              {"Ask a Bot to follow along as you complete a workflow once. It saves it as a routine and runs it on its own next time."}
            </p>
            <figure className="mt-auto pt-8">
              <TimelinePlayer data={animShowbot as unknown as Timeline} />
            </figure>
          </article>
          <article className="bg-card flex flex-col overflow-hidden rounded-3xl p-6 sm:p-8">
            <h3 className="text-primary text-base leading-relaxed font-medium text-pretty">
              {"Bots get smarter over time"}
            </h3>
            <p className="text-secondary text-base leading-relaxed text-pretty">
              {"Bots keep context and learn from each other. Show one a workflow today, hand off the project by Friday."}
            </p>
            <figure className="mt-auto pt-8">
              <TimelinePlayer data={animSmarter as unknown as Timeline} />
            </figure>
          </article>
          <article className="bg-card flex flex-col overflow-hidden rounded-3xl p-6 sm:p-8">
            <h3 className="text-primary text-base leading-relaxed font-medium text-pretty">
              {"Connect the Bots"}
            </h3>
            <p className="text-secondary text-base leading-relaxed text-pretty">
              {"Put a few Bots in the same thread and they pass work between themselves. You watch them take action instead of approving every step."}
            </p>
            <figure className="mt-auto pt-8">
              <TimelinePlayer data={animConnect as unknown as Timeline} />
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
}