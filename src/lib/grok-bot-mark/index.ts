import { getModule } from "./turbopack"
import "./support.js"
import "./core.js"
import type { ComponentType, Ref } from "react"

export type GrokBotState =
  | "sleeping" | "waking" | "idle" | "listening" | "thinking" | "searching" | "working"
  | "excited" | "surprised" | "suspicious" | "angry" | "drowsy" | "happy" | "curious"
  | "confused" | "bored" | "proud" | "shy" | "sad" | "laughing" | "scared" | "playful" | "celebrate"
  | "orbit" | "radar" | "progress"
  | "spawning" | "humming" | "receiving" | "writing" | "success" | "error"
  | string

export type GrokBotProps = {
  state?: GrokBotState
  shape?: string
  size?: number
  className?: string
  gazeTarget?: { x: number; y: number } | null
  mouseInteractive?: boolean
  flipX?: boolean
  emphasis?: boolean
  spinSignal?: number
  badgeColor?: string
  badgeScale?: number
  ref?: Ref<{ spin: (n?: number) => void; bounce: () => void; burst: () => void }>
}

const mod = getModule(111605) as {
  GrokBot: ComponentType<GrokBotProps>
  GrokBotMark: ComponentType<{ className?: string; state?: string; shape?: string }>
  GROK_BOT_STATES: string[]
  GROK_BOT_SHAPES: string[]
}

export const GrokBot = mod.GrokBot
export const GrokBotMark = mod.GrokBotMark
export const GROK_BOT_STATES = mod.GROK_BOT_STATES
export const GROK_BOT_SHAPES = mod.GROK_BOT_SHAPES
