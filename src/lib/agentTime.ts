/**
 * Clock stamps for the hero's fake app chrome.
 *
 * Everything is stamped off the visitor's own clock in 24-hour time, so a page
 * opened at 23:30 shows "23:30", not "11:30". Sidebar rows carry a fixed age and
 * fall back to "Yesterday" once that age crosses midnight — which is why the same row
 * reads "0:55" at six in the morning and "Yesterday" an hour earlier.
 */
export function clockNow(now: Date = new Date()): string {
  return `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`
}

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

/** Hours each sidebar conversation sits behind the current time. */
export const AGENT_AGE_HOURS = {
  chief: 20,
  salesOutbound: 0,
  inboxManager: 3,
  accountManager: 5,
  talentScout: 8,
  expenseManager: 4,
  offsiteCrew: 6,
} as const

export function agentStamp(hoursAgo: number, now: Date = new Date()): string {
  const then = new Date(now.getTime() - hoursAgo * 3_600_000)
  return sameDay(then, now) ? clockNow(then) : "Yesterday"
}

/**
 * Transcript time dividers: a bare time for today, a "Yesterday" prefix for the day
 * before, and a day and month beyond that.
 */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function dividerStamp(hoursAgo: number, now: Date = new Date()): string {
  const then = new Date(now.getTime() - hoursAgo * 3_600_000)
  const clock = clockNow(then)
  if (sameDay(then, now)) return clock
  const yesterday = new Date(now.getTime() - 86_400_000)
  if (sameDay(then, yesterday)) return `Yesterday ${clock}`
  return `${then.getDate()} ${MONTHS[then.getMonth()]} ${clock}`
}
