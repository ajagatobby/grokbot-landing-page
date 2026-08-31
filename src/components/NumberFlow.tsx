import { useEffect, useRef, useState } from "react"

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const EASE = "cubic-bezier(0.23, 1, 0.32, 1)"
const DURATION = 700

// Rendering through the number-flow custom-element tag keeps the wrapper's
// inline-block box metrics stable whether or not the element is defined.
const NumberFlowTag = "number-flow-react" as unknown as "span"

function Digit({ from, to, delay }: { from: number; to: number; delay: number }) {
  const [current, setCurrent] = useState(from)
  useEffect(() => {
    const id = window.setTimeout(() => setCurrent(to), 20)
    return () => window.clearTimeout(id)
  }, [to])
  return (
    <span className="relative inline-block overflow-hidden align-top" style={{ height: "1em", lineHeight: "1em" }}>
      <span aria-hidden="true" className="invisible">{DIGITS[to]}</span>
      <span
        className="absolute left-0 top-0 flex flex-col"
        style={{ transform: `translateY(${-current}em)`, transition: `transform ${DURATION}ms ${EASE} ${delay}ms` }}
      >
        {DIGITS.map((d) => (
          <span key={d} style={{ height: "1em", lineHeight: "1em" }}>
            {d}
          </span>
        ))}
      </span>
    </span>
  )
}

/**
 * Rolling-digit currency display built on NumberFlow-style markup.
 * The digits only split into strips while a value change is animating, so the resting
 * state keeps the exact metrics of a single text run.
 */
export default function NumberFlow({ value, prefix = "$" }: { value: number; prefix?: string }) {
  const [rolling, setRolling] = useState<{ from: string; to: string } | null>(null)
  const prev = useRef(value)

  useEffect(() => {
    if (prev.current === value) return
    const from = String(prev.current)
    const to = String(value)
    prev.current = value
    setRolling({ from, to })
    const id = window.setTimeout(() => setRolling(null), DURATION + 200)
    return () => window.clearTimeout(id)
  }, [value])

  const digits = String(value).split("")

  return (
    <NumberFlowTag aria-label={`${prefix}${value}`} role="img" style={{ display: "inline-block", lineHeight: "1em" }}>
      <span
        style={{
          fontKerning: "none",
          display: "inline-block",
          lineHeight: "var(--number-flow-char-height, 1em)",
          padding: "var(--number-flow-mask-height, 0.25em) 0",
        }}
      >
        {rolling ? (
          <span className="inline-flex items-start" style={{ transition: `width ${DURATION}ms ${EASE}` }}>
            <span style={{ lineHeight: "1em" }}>{prefix}</span>
            {digits.map((d, i) => {
              const fromDigits = rolling.from.split("")
              const offset = digits.length - fromDigits.length
              const fromDigit = Number(fromDigits[i - offset] ?? "0")
              return <Digit key={`${digits.length}-${i}`} from={Number.isFinite(fromDigit) ? fromDigit : 0} to={Number(d)} delay={i * 40} />
            })}
          </span>
        ) : (
          <>
            {prefix}
            {value}
          </>
        )}
      </span>
    </NumberFlowTag>
  )
}
