import * as React from "react"
import * as jsxRuntime from "react/jsx-runtime"

type Module = Record<string, unknown>

const registry = new Map<number, Module>()
const BUILTINS: Record<number, unknown> = {
  73709: jsxRuntime,
  533885: React,
}

function moduleFor(id: number): Module {
  let m = registry.get(id)
  if (!m) {
    m = {}
    registry.set(id, m)
  }
  return m
}

/**
 * Minimal stand-in for the Turbopack runtime, so the site's compiled mascot
 * modules can be executed unmodified.
 */
function makeContext(defaultId: number) {
  return {
    i(id: number) {
      if (id in BUILTINS) return BUILTINS[id]
      return moduleFor(id)
    },
    s(spec: unknown[], id?: number) {
      const target = moduleFor(id ?? defaultId)
      let k = 0
      while (k < spec.length) {
        const name = spec[k] as string
        const next = spec[k + 1]
        if (typeof next === "function") {
          Object.defineProperty(target, name, { get: next as () => unknown, enumerable: true, configurable: true })
          k += 2
        } else {
          target[name] = spec[k + 2]
          k += 3
        }
      }
    },
  }
}

type Entry = unknown[]

const g = globalThis as unknown as { TURBOPACK?: { push(e: Entry): void } }

g.TURBOPACK = {
  push(entry: Entry) {
    const ids: number[] = []
    for (const part of entry) {
      if (typeof part === "number") ids.push(part)
      else if (typeof part === "function") {
        const defaultId = ids[ids.length - 1] ?? 0
        ;(part as (ctx: unknown) => void)(makeContext(defaultId))
        ids.length = 0
      }
    }
  },
}

export function getModule(id: number): Module {
  return moduleFor(id)
}
