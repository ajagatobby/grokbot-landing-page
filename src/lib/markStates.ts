import { useEffect, useRef, useState } from "react"

/**
 * The characters do not sit in one pose: each drives the mascot engine through a
 * schedule of states.
 *
 * A step with no `ms` is terminal — the character stays in it.
 */
export type MarkStep = { state: string; ms?: number }

/** Headline character: a clean 21s loop, the same on every pass. */
export const HEADLINE_STATES: MarkStep[] = [
  { state: "idle", ms: 6800 },
  { state: "happy", ms: 3200 },
  { state: "idle", ms: 7400 },
  { state: "curious", ms: 3600 },
]

/** Statement card: wakes up once when it scrolls in, then hums indefinitely. */
export const STATEMENT_STATES: MarkStep[] = [{ state: "waking", ms: 2800 }, { state: "humming" }]

/** Footer character: a longer rotation through four moods, each bracketed by idle. */
export const FOOTER_STATES: MarkStep[] = [
  { state: "curious", ms: 4200 },
  { state: "idle", ms: 6400 },
  { state: "bored", ms: 4600 },
  { state: "idle", ms: 6800 },
  { state: "happy", ms: 4200 },
  { state: "idle", ms: 6400 },
  { state: "playful", ms: 4400 },
  { state: "idle", ms: 6400 },
]

/**
 * Steps through a schedule, starting when the element first scrolls into view —
 * each character mounts lazily, so its opening state plays on arrival rather
 * than on load.
 */
export function useMarkStates(steps: MarkStep[]) {
  const ref = useRef<HTMLSpanElement>(null)
  const [seen, setSeen] = useState(false)
  const [i, setI] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!seen) return
    const step = steps[i % steps.length]
    if (step.ms === undefined) return
    const id = window.setTimeout(() => setI((n) => (n + 1) % steps.length), step.ms)
    return () => window.clearTimeout(id)
  }, [seen, i, steps])

  return { ref, state: steps[i % steps.length].state }
}
