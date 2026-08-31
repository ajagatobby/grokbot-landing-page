import { useEffect, useState } from "react"

export type Theme = "light" | "dark" | "system"

const KEY = "theme"

function systemDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function apply(theme: Theme) {
  const resolved = theme === "system" ? (systemDark() ? "dark" : "light") : theme
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(resolved)
  root.style.colorScheme = resolved
  return resolved
}

const listeners = new Set<() => void>()
let current: Theme = "system"

export function initTheme() {
  try {
    current = (localStorage.getItem(KEY) as Theme) || "system"
  } catch {
    current = "system"
  }
  apply(current)
}

export function setTheme(theme: Theme) {
  current = theme
  try {
    localStorage.setItem(KEY, theme)
  } catch {
    /* storage may be unavailable */
  }
  apply(theme)
  listeners.forEach((l) => l())
}

export function useTheme() {
  const [, force] = useState(0)
  useEffect(() => {
    const l = () => force((n) => n + 1)
    listeners.add(l)
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => {
      if (current === "system") {
        apply(current)
        l()
      }
    }
    mq.addEventListener("change", onChange)
    return () => {
      listeners.delete(l)
      mq.removeEventListener("change", onChange)
    }
  }, [])
  const resolved = current === "system" ? (typeof window !== "undefined" && systemDark() ? "dark" : "light") : current
  return { theme: current, resolved, setTheme }
}

export function useIsDark() {
  return useTheme().resolved === "dark"
}
