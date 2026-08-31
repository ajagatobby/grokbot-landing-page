import type { ReactNode } from "react"
import { GrokBot } from "../../lib/grok-bot-mark"
import ScreenActionNeeded from "./ScreenActionNeeded"
import ScreenWorking from "./ScreenWorking"
import ScreenDone from "./ScreenDone"

export const AGENT_COLORS: Record<string, string> = {
  "Account Manager": "#885CF5",
  Chief: "#54B9A6",
  "Inbox Manager": "#6464EF",
  "Talent Scout": "#3B82F6",
  "Expense Manager": "#F97316",
  "Sales Outbound": "#F19D38",
}

const bubbleAgent = {
  background: "var(--grok-bot-bubble-agent)",
  color: "var(--cursor-text-primary)",
  borderRadius: "16px",
} as const

const bubbleUser = {
  background: "var(--grok-bot-bubble-user)",
  color: "var(--grok-bot-bubble-user-ink)",
  borderRadius: "16px",
} as const

/** Renders the site's lightweight markdown: **bold** plus @[Agent Name] mentions. */
export function renderMarkdown(content: string): ReactNode[] {
  const out: ReactNode[] = []
  const re = /\*\*(.+?)\*\*|@\[([^\]]+)\]/g
  let last = 0
  let m: RegExpExecArray | null
  let key = 0
  while ((m = re.exec(content))) {
    if (m.index > last) out.push(<span key={key++}>{content.slice(last, m.index)}</span>)
    if (m[1]) out.push(<strong key={key++}>{m[1]}</strong>)
    else if (m[2]) out.push(<Mention key={key++} name={m[2]} />)
    last = m.index + m[0].length
  }
  if (last < content.length) out.push(<span key={key++}>{content.slice(last)}</span>)
  return out
}

function hexToRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16)
  return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`
}

function Mention({ name }: { name: string }) {
  const color = AGENT_COLORS[name] ?? "#885CF5"
  const rgb = hexToRgb(color)
  return (
    <span
      className="baby-grok-bot-message-mention"
      style={{ color: `light-dark(color-mix(in srgb, ${rgb} 62%, rgb(16, 16, 20)), color-mix(in srgb, ${rgb} 82%, rgb(255, 255, 255)))` }}
    >
      <span className="baby-grok-bot-message-mention__face">
        <div className="relative shrink-0" style={{ width: "14px", height: "14px" }}>
          <div className="flex h-full w-full items-center justify-center overflow-visible" style={{ "--fg": color, "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
            <span className="grok-bot-lazy grok-bot-mark--fill">
              <GrokBot />
            </span>
          </div>
        </div>
      </span>
      {name}
    </span>
  )
}

export function TimeDivider({ time }: { time: string }) {
  return (
    <div className="mb-2">
      <div className="flex items-center justify-center py-1 text-[12px] leading-4" style={{ color: "var(--cursor-text-secondary)" }}>
        {time}
      </div>
    </div>
  )
}

export function AgentMessage({
  content,
  time,
  author,
  reaction,
  spacing = "mt-3 first:mt-0",
  delay,
}: { content: string; time?: string; author?: string; reaction?: string; spacing?: string; delay?: number }) {
  return (
    <div
      className={["baby-grok-bot-entry-enter", reaction ? "mb-[14px]" : "", spacing].filter(Boolean).join(" ")}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {time && <TimeDivider time={time} />}
      <div className="flex max-w-[min(560px,92%)] flex-col items-start">
        {author && (
          <div className="mb-1 px-1 text-[12px] font-medium" style={{ color: "var(--cursor-text-tertiary)" }}>
            {author}
          </div>
        )}
        <div className="relative">
          <div
            className="baby-grok-bot-md px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap"
            style={
              reaction
                ? {
                    ...bubbleAgent,
                    maskImage: "radial-gradient(circle at 20px calc(100% + 4px), transparent 11.5px, rgb(0, 0, 0) 12px)",
                    maskComposite: "source-in",
                  }
                : bubbleAgent
            }
          >
            {renderMarkdown(content)}
          </div>
          {reaction && (
            <span className="baby-grok-bot-reactions baby-grok-bot-reactions--agent">
              <span className="baby-grok-bot-reaction">{reaction}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export function UserMessage({ content, reaction, time, spacing = "mt-3 first:mt-0", delay }: { content: string; reaction?: string; time?: string; spacing?: string; delay?: number }) {
  return (
    <div
      className={["baby-grok-bot-entry-enter", reaction ? "mb-[14px]" : "", spacing].filter(Boolean).join(" ")}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {time && <TimeDivider time={time} />}
      <div className="flex justify-end">
        <div className="relative max-w-[min(420px,85%)]">
          <div
            className="px-3 py-2 text-[14px] leading-5 tracking-[-0.15px] whitespace-pre-wrap"
            style={
              reaction
                ? {
                    ...bubbleUser,
                    maskImage: "radial-gradient(circle at calc(100% - 20px) calc(100% + 4px), transparent 11.5px, rgb(0, 0, 0) 12px)",
                    maskComposite: "source-in",
                  }
                : bubbleUser
            }
          >
            {content}
          </div>
          {reaction && (
            <span className="baby-grok-bot-reactions baby-grok-bot-reactions--user">
              <span className="baby-grok-bot-reaction">{reaction}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export function SystemRenamed({ name }: { name: string }) {
  return (
    <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
      <div className="flex min-w-0 items-center justify-center gap-1.5 overflow-hidden py-1 text-[13px] leading-4" style={{ color: "var(--cursor-text-secondary)" }}>
        <span className="truncate">Renamed to {name}</span>
      </div>
    </div>
  )
}

function AgentPill({ name }: { name: string }) {
  const color = AGENT_COLORS[name] ?? "#885CF5"
  return (
    <button
      className="baby-grok-bot-system-agent"
      type="button"
      style={
        {
          "--grok-bot-system-agent-pill": `light-dark(color-mix(in srgb, ${color} 14%, #ffffff), color-mix(in srgb, ${color} 22%, #16161a))`,
          "--grok-bot-system-agent-ink": `light-dark(color-mix(in srgb, ${color} 62%, #101014), color-mix(in srgb, ${color} 82%, #ffffff))`,
        } as React.CSSProperties
      }
    >
      <div className="relative shrink-0" style={{ width: "12px", height: "12px" }}>
        <div className="flex h-full w-full items-center justify-center overflow-visible" style={{ "--fg": color, "--bg": "var(--grok-bot-bg-editor, #FFFFFF)" } as React.CSSProperties}>
          <span className="grok-bot-lazy grok-bot-mark--fill">
            <GrokBot />
          </span>
        </div>
      </div>
      <span className="truncate">{name}</span>
    </button>
  )
}

export function SystemReceivedContext({ sources }: { sources: string[] }) {
  return (
    <div className="baby-grok-bot-entry-enter mt-3 first:mt-0">
      <div className="flex min-w-0 items-center justify-center gap-1.5 overflow-hidden py-1 text-[13px] leading-4" style={{ color: "var(--cursor-text-secondary)" }}>
        <span className="shrink-0">Messages from</span>
        {sources.map((s, i) => (
          <span key={s} className="contents">
            <AgentPill name={s} />
            {i < sources.length - 1 && <span className="shrink-0">and</span>}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SystemMemoryUpdated({ delay }: { delay?: number }) {
  return (
    <div className="baby-grok-bot-entry-enter mt-3 first:mt-0" style={delay ? { animationDelay: `${delay}ms` } : undefined}>
      <div className="flex min-w-0 items-center justify-center gap-1.5 overflow-hidden py-1 text-[13px] leading-4" style={{ color: "var(--cursor-text-secondary)" }}>
        <span className="truncate">Memory updated</span>
      </div>
    </div>
  )
}

export function SystemCreatedRoutine({ name, time, spacing = "mt-3 first:mt-0", delay }: { name: string; time?: string; spacing?: string; delay?: number }) {
  return (
    <div
      className={["baby-grok-bot-entry-enter", spacing].filter(Boolean).join(" ")}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {time && <TimeDivider time={time} />}
      <div className="flex min-w-0 items-center justify-center gap-1.5 overflow-hidden py-1 text-[13px] leading-4" style={{ color: "var(--cursor-text-secondary)" }}>
        <span className="shrink-0">Created routine</span>
        <span className="flex shrink-0 items-center">
          <span
            className="shrink-0"
            style={{ fontFamily: "CursorIcons16", fontSize: "15px", lineHeight: 1, display: "inline-flex", width: "15px", height: "15px", alignItems: "center", justifyContent: "center" }}
          >
            {""}
          </span>
        </span>
        <span className="truncate" style={{ color: "var(--cursor-text-primary)" }}>
          {name}
        </span>
      </div>
    </div>
  )
}

export type ComputerPhase = "action-needed" | "in-control" | "working" | "done"

const BADGE: Record<ComputerPhase, { tone: string; label: string; spinner: boolean }> = {
  "action-needed": { tone: "warning", label: "Action needed", spinner: true },
  "in-control": { tone: "warning", label: "You\u2019re in control", spinner: false },
  working: { tone: "accent", label: "Working", spinner: true },
  done: { tone: "success", label: "Done", spinner: false },
}

const Spinner = () => (
  <span className="baby-grok-bot-spinner size-3">
    <span
      className="shrink-0"
      style={{ fontFamily: "CursorIcons16", fontSize: "12px", lineHeight: 1, display: "inline-flex", width: "12px", height: "12px", alignItems: "center", justifyContent: "center" }}
    >
      {"\uedca"}
    </span>
  </span>
)

export function ComputerCard({ phase, instruction }: { phase: ComputerPhase; instruction: string }) {
  const badge = BADGE[phase]
  const Screen = phase === "working" ? ScreenWorking : phase === "done" ? ScreenDone : ScreenActionNeeded
  return (
    <div className="baby-grok-bot-entry-enter">
      <div className="max-w-[min(420px,92%)]">
        <div className="baby-grok-bot-card">
          <div className="flex items-start gap-2">
            <button className="baby-grok-bot-card-title" type="button">
              Computer
            </button>
            <span className="flex-1" />
            <span className="baby-grok-bot-card-badge" data-tone={badge.tone}>
              {badge.spinner ? <Spinner /> : <span className="baby-grok-bot-card-badge__dot" aria-hidden="true" />}
              {badge.label}
            </span>
          </div>
          <p className="mt-0.5">{instruction}</p>
          <Screen />
          {(phase === "action-needed" || phase === "in-control") && (
            <div className="mt-2.5 flex items-center gap-2">
              <button className="baby-grok-bot-card-action" data-variant="primary" type="button">
                Take over
              </button>
              <button className="baby-grok-bot-card-action" data-variant="secondary" type="button">
                I&rsquo;m done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function Pending({ label, state = "thinking" }: { label: string; state?: string }) {
  return (
    <div className="baby-grok-bot-pending mt-3">
      <span aria-hidden="true" className="baby-grok-bot-pending__avatar" style={{ "--fg": "var(--grok-bot-current-agent-coat)", "--bg": "var(--grok-bot-bg-editor)" } as React.CSSProperties}>
        <GrokBot state={state} />
      </span>
      <span className="baby-grok-bot-pending__label">{label}</span>
    </div>
  )
}
