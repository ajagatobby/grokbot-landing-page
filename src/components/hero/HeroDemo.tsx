import { useEffect, useMemo, useRef, useState } from "react"
import HeroShell from "./HeroShell"
import { clockNow, dividerStamp } from "../../lib/agentTime"
import { HERO_CHATS } from "./chats"
import {
  AgentMessage,
  ComputerCard,
  Pending,
  SystemCreatedRoutine,
  SystemMemoryUpdated,
  SystemReceivedContext,
  SystemRenamed,
  UserMessage,
  type ComputerPhase,
} from "./entries"
import { HERO_CUES, HERO_HOLD_MS } from "./script"

/** Gap between consecutive messages as a thread cascades in. */
const ENTRY_STAGGER_MS = 44

type Entry =
  | { id: number; kind: "agent"; content: string; time?: string }
  | { id: number; kind: "user"; content: string; reaction?: string }
  | { id: number; kind: "renamed"; name: string }
  | { id: number; kind: "context"; sources: string[] }
  | { id: number; kind: "routine"; name: string }
  | { id: number; kind: "computer"; instruction: string; phase: ComputerPhase }

type State = {
  entries: Entry[]
  pending: { label: string; state: string } | null
  agentName: string
  agentTime: string
  agentPreview: string
  typing: boolean
}

/** Sidebar previews show the plain text of a message, without markdown or mention syntax. */
function previewText(content: string) {
  return content
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/@\[([^\]]+)\]/g, "$1")
    .replace(/\s+/g, " ")
    .trim()
}

const initialState = (): State => ({
  entries: [],
  pending: null,
  agentName: "New agent",
  agentTime: clockNow(),
  agentPreview: "",
  typing: true,
})

/** Plays the scripted Grok Bot conversation once the window scrolls into view, then loops. */
export default function HeroDemo() {
  const [state, setState] = useState<State>(initialState)
  const [run, setRun] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = document.querySelector(".baby-grok-bot")
    if (!el) {
      setStarted(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    setState(initialState())
    const timers: number[] = []
    let id = 0

    for (const cue of HERO_CUES) {
      timers.push(
        window.setTimeout(() => {
          setState((s) => {
            switch (cue.kind) {
              case "pending":
                return { ...s, typing: true, pending: { label: cue.label, state: cue.state } }
              case "message":
                return {
                  ...s,
                  typing: false,
                  pending: null,
                  agentPreview: previewText(cue.content),
                  entries: [...s.entries, { id: id++, kind: "agent", content: cue.content, time: cue.first ? clockNow() : undefined }],
                }
              case "user-message":
                return { ...s, agentPreview: previewText(cue.content), entries: [...s.entries, { id: id++, kind: "user", content: cue.content }] }
              case "rename":
                return { ...s, agentName: cue.name, entries: [...s.entries, { id: id++, kind: "renamed", name: cue.name }] }
              case "computer":
                return { ...s, entries: [...s.entries, { id: id++, kind: "computer", instruction: cue.instruction, phase: "action-needed" }] }
              case "computer-phase":
                return { ...s, entries: s.entries.map((e) => (e.kind === "computer" ? { ...e, phase: cue.phase } : e)) }
              case "context":
                return {
                  ...s,
                  typing: false,
                  pending: null,
                  agentPreview: `Messages from ${cue.sources.join(" and ")}`,
                  entries: [...s.entries, { id: id++, kind: "context", sources: cue.sources }],
                }
              case "routine":
                return { ...s, typing: false, pending: null, entries: [...s.entries, { id: id++, kind: "routine", name: cue.name }] }
              case "react": {
                const entries = [...s.entries]
                for (let i = entries.length - 1; i >= 0; i--) {
                  const e = entries[i]
                  if (e.kind === "user") {
                    entries[i] = { ...e, reaction: cue.emoji }
                    break
                  }
                }
                return { ...s, entries }
              }
            }
          })
        }, cue.at),
      )
    }

    const end = HERO_CUES[HERO_CUES.length - 1].at + HERO_HOLD_MS
    timers.push(window.setTimeout(() => setRun((n) => n + 1), end))

    return () => timers.forEach(window.clearTimeout)
  }, [started, run])

  useEffect(() => {
    const el = document.querySelector(".baby-grok-bot-transcript")
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
  }, [state.entries, state.pending])

  // The sidebar rows are tabs. "Sales Outbound" is the scripted demo; the rest are
  // finished conversations swapped into the same pane.
  const [selected, setSelected] = useState(state.agentName)
  useEffect(() => {
    setSelected(state.agentName)
  }, [state.agentName])

  // Opening another conversation starts that thread at the top and scrolls to its end --
  // every switch begins from 0, so a shorter thread still animates instead of landing
  // already at the bottom.
  const opened = useRef(false)
  useEffect(() => {
    if (!opened.current) {
      opened.current = true
      return
    }
    const el = document.querySelector(".baby-grok-bot-transcript")
    if (!el) return
    el.scrollTop = 0
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
  }, [selected])

  const sideTranscript = useMemo(() => {
    const chat = HERO_CHATS[selected]
    if (!chat) return null
    return (
      <div className="flex flex-col gap-1">
        {chat.map((e, i) => {
          // Consecutive bot messages group tightly; one carrying a time divider keeps a
          // small gap rather than none. The opening entry always uses the small gap.
          const prev = chat[i - 1]
          const grouped = prev !== undefined && prev.kind === "agent" && e.kind === "agent"
          const time = e.hoursAgo === undefined ? undefined : dividerStamp(e.hoursAgo)
          const spacing = i === 0 ? "mt-2 first:mt-0" : grouped ? (time ? "mt-2 first:mt-0" : "") : "mt-3 first:mt-0"
          // Opening a thread replays the entry-enter animation down the list, one
          // message every 44ms, cascading the conversation in.
          const delay = i * ENTRY_STAGGER_MS
          switch (e.kind) {
            case "agent":
              return (
                <AgentMessage
                  key={`${selected}:${i}`}
                  content={e.content}
                  author={e.author}
                  time={time}
                  reaction={e.reaction}
                  spacing={spacing}
                  delay={delay}
                />
              )
            case "user":
              return <UserMessage key={`${selected}:${i}`} content={e.content} reaction={e.reaction} time={time} spacing={spacing} delay={delay} />
            case "routine":
              return <SystemCreatedRoutine key={`${selected}:${i}`} name={e.name} time={time} spacing={spacing} delay={delay} />
            case "memory":
              return <SystemMemoryUpdated key={`${selected}:${i}`} delay={delay} />
          }
        })}
      </div>
    )
  }, [selected])

  const transcript = useMemo(
    () => (
      <div className="flex flex-col gap-1">
        {state.entries.map((e, i) => {
          // Consecutive bot output is grouped: an agent message that lands straight after
          // another agent message, or after the computer card it reports on, gets no gap.
          const prev = state.entries[i - 1]
          const grouped = prev !== undefined && (prev.kind === "agent" || prev.kind === "computer")
          switch (e.kind) {
            case "agent":
              return (
                <AgentMessage
                  key={e.id}
                  content={e.content}
                  time={e.time}
                  spacing={grouped ? "" : e.time ? "mt-2 first:mt-0" : "mt-3 first:mt-0"}
                />
              )
            case "user":
              return <UserMessage key={e.id} content={e.content} reaction={e.reaction} />
            case "renamed":
              return <SystemRenamed key={e.id} name={e.name} />
            case "context":
              return <SystemReceivedContext key={e.id} sources={e.sources} />
            case "routine":
              return <SystemCreatedRoutine key={e.id} name={e.name} />
            case "computer":
              return <ComputerCard key={e.id} phase={e.phase} instruction={e.instruction} />
          }
        })}
        {state.pending && <Pending key="pending" label={state.pending.label} state={state.pending.state} />}
      </div>
    ),
    [state.entries, state.pending],
  )

  return (
    <HeroShell
      agentName={state.agentName}
      agentTime={state.agentTime}
      agentPreview={state.typing ? "Typing…" : state.agentPreview}
      transcript={sideTranscript ?? transcript}
      selected={selected}
      onSelect={setSelected}
    />
  )
}
