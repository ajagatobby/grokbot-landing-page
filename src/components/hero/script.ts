/**
 * The hero demo timeline: absolute timestamps in milliseconds from the moment the
 * window enters view.
 */
export type Cue =
  | { at: number; kind: "pending"; label: string; state: string }
  | { at: number; kind: "message"; content: string; first?: boolean }
  | { at: number; kind: "user-message"; content: string }
  | { at: number; kind: "rename"; name: string }
  | { at: number; kind: "computer"; instruction: string }
  | { at: number; kind: "computer-phase"; phase: "in-control" | "working" | "done" }
  | { at: number; kind: "context"; sources: string[] }
  | { at: number; kind: "routine"; name: string }
  | { at: number; kind: "react"; emoji: string }

export const AGENT_NAME = "Sales Outbound"

const GREETING =
  "Hey Armand, good to meet you. What do you want me around for? Anything concrete, or more of a general sidekick?"
const OUTBOUND_PROMPT =
  "Overnight pipeline generation and outbound.\n\nPick eligible prospects from this Google Sheet, research them on the web, grab context on contacts and accounts from Hex, Sumble, and Salesforce. Draft email and LinkedIn sequences in my voice."
const COMPUTER_INSTRUCTION = "Sign in to Salesforce so I can see the accounts you own."
const CONNECTIONS = "Checking what's connected. Hex, Gmail, and LinkedIn are already signed in. Salesforce isn't."
const RECEIPTS =
  "✓ **Salesforce** → list pulled · 52 accounts\n✓ **Hex** → 3 lookalike segments pulled\n✓ **LinkedIn** → 4 profiles skipped · recently contacted\n✓ **Sequencer** → 36 drafts queued · 0 sent"
const CONTEXT =
  "@[Account Manager] sent over the Acme + Globex threads and @[Chief] flagged the priority accounts. Both are folded into tonight's list."
const QUEUE =
  "The 36 drafts are sitting in the LinkedIn queue on my screen: recipient, opener, and a Draft badge on each. Nothing goes out until you've had a look."
const APPROVAL = "The top 10 look good. Send it. Run this every week."

export const HERO_CUES: Cue[] = [
  { at: 500, kind: "pending", label: "Thinking", state: "thinking" },
  { at: 2000, kind: "pending", label: "Spawning", state: "spawning" },
  { at: 3000, kind: "message", content: GREETING, first: true },
  { at: 4000, kind: "user-message", content: OUTBOUND_PROMPT },
  { at: 4500, kind: "rename", name: AGENT_NAME },
  { at: 4600, kind: "pending", label: "Thinking", state: "thinking" },
  { at: 6000, kind: "pending", label: "Checking connections", state: "searching" },
  { at: 7000, kind: "message", content: CONNECTIONS },
  { at: 7100, kind: "computer", instruction: COMPUTER_INSTRUCTION },
  { at: 9500, kind: "computer-phase", phase: "in-control" },
  { at: 14100, kind: "computer-phase", phase: "working" },
  { at: 15600, kind: "pending", label: "Thinking", state: "thinking" },
  { at: 16600, kind: "pending", label: "Wrapping the run", state: "working" },
  { at: 18100, kind: "message", content: RECEIPTS },
  { at: 18600, kind: "computer-phase", phase: "done" },
  { at: 20100, kind: "context", sources: ["Account Manager", "Chief"] },
  { at: 21100, kind: "pending", label: "Thinking", state: "thinking" },
  { at: 22600, kind: "pending", label: "Receiving context", state: "receiving" },
  { at: 23100, kind: "message", content: CONTEXT },
  { at: 24100, kind: "pending", label: "Thinking", state: "thinking" },
  { at: 25700, kind: "pending", label: "Drafting", state: "writing" },
  { at: 26700, kind: "message", content: QUEUE },
  { at: 28200, kind: "user-message", content: APPROVAL },
  { at: 28700, kind: "react", emoji: "👍" },
  { at: 29700, kind: "routine", name: "Overnight outbound" },
  { at: 29800, kind: "pending", label: "Thinking", state: "thinking" },
  { at: 31200, kind: "pending", label: "Exploring", state: "searching" },
  { at: 31700, kind: "message", content: "Done." },
]

/** The demo holds on the finished thread, then replays. */
export const HERO_HOLD_MS = 20000
