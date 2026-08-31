/**
 * The six side conversations in the hero's fake app.
 *
 * "Sales Outbound" is not here: it is the scripted demo that plays on load (see script.ts).
 * Timestamps are stored as whole hours behind the visitor's clock, so every stamp reads
 * relative to now no matter when the page is opened.
 */
export type ChatEntry =
  | { kind: "agent"; hoursAgo?: number; author?: string; content: string; reaction?: string }
  | { kind: "user"; hoursAgo?: number; content: string; reaction?: string }
  | { kind: "routine"; hoursAgo?: number; name: string }
  | { kind: "memory"; hoursAgo?: number }

export const HERO_CHATS: Record<string, ChatEntry[]> = {
  "Chief": [
    { kind: "routine", hoursAgo: 216, name: "Morning briefing" },
    { kind: "agent", hoursAgo: 24, content: "morning briefing:\n✓ **Calendar** → 2pm double-booking resolved · board review kept\n✓ **Deck** → numbers checked against finance's sheet · 2 stale slides flagged\n✓ **Offsite** → 3 venues shortlisted · dates held on each\n\ntwo things need you today: the deck review at 2pm, and a yes/no on the venue. everything else is handled." },
    { kind: "user", hoursAgo: 21, content: "take the venue, i'll do the deck" },
    { kind: "agent", content: "the marina house is the pick: seats all 40, the mid-week rate came in 15% under budget, and they'll hold the date until tomorrow." },
    { kind: "user", hoursAgo: 20, content: "book it", reaction: "👍" },
    { kind: "agent", content: "✓ **Venue** → marina house booked · deposit paid\n✓ **Calendar** → invites updated for all 40\n✓ **Holds** → other two released with a thank-you" },
    { kind: "agent", content: "booked the venue and sent the confirmation around. you're clear until the 2pm deck review." },
  ],
  "Inbox Manager": [
    { kind: "user", hoursAgo: 4, content: "inbox got away from me over the weekend, sweep it?" },
    { kind: "agent", content: "on it. **41 unread** since friday. archiving the noise, drafting the rest." },
    { kind: "agent", hoursAgo: 3, content: "✓ **Archived** → 26 newsletters + receipts\n✓ **Replied** → 9 routine threads · scheduling and intros\n✓ **Drafted** → 6 that sound like you · held for your read\n✓ **Flagged** → 1 from dana · contract question" },
    { kind: "agent", content: "dana's asking whether the renewal covers the new seats. her draft answers yes and quotes the contract line. it's at the top of the held pile." },
    { kind: "user", content: "send dana's, i'll take the rest tomorrow", reaction: "👍" },
    { kind: "agent", content: "sent. inbox is at **zero**, with 5 drafts parked for tomorrow." },
  ],
  "Account Manager": [
    { kind: "user", hoursAgo: 6, content: "where are we with acme? renewal can't sneak up on us" },
    { kind: "agent", content: "pulling usage, open threads, and the exec notes together now." },
    { kind: "agent", hoursAgo: 5, content: "**acme** renews in 60 days:\n✓ **Usage** → 214 seats active · up 18% this quarter\n✓ **Threads** → 2 open · security review + a pricing question\n✓ **Next step** → renewal call with vicky drafted · week of the 18th" },
    { kind: "agent", content: "globex is the quiet one: nothing since the pilot wrapped. i wrote a re-engagement note that leads with their own pilot numbers. it's in drafts, not sent." },
    { kind: "user", content: "send the acme invite. hold globex until i've read the note", reaction: "👍" },
    { kind: "memory" },
    { kind: "agent", content: "invite's out to vicky. the globex note is holding in drafts, and quiet-account sends wait for your read from now on." },
  ],
  "Talent Scout": [
    { kind: "user", hoursAgo: 24, content: "take the platform engineer req: senior, infra-heavy, remote ok. source quietly." },
    { kind: "agent", content: "on it. i'll screen overnight against the req and skip anyone already in the ats." },
    { kind: "agent", hoursAgo: 9, content: "overnight run:\n✓ **Sourced** → 64 profiles matched the req\n✓ **Skipped** → 11 already in the ats\n✓ **Shortlist** → 12 screened · notes on each" },
    { kind: "agent", content: "three worth your time first:\n**Mara Iyer** → scaled ingest 40× at a data startup · writes like an owner\n**Tomás Rivera** → runs a 6-person infra team · wants to build again\n**Grace Osei** → your exact stack end to end · shipped the migration you keep citing" },
    { kind: "user", hoursAgo: 8, content: "strong list, mara especially. draft the intros", reaction: "👍" },
    { kind: "agent", content: "3 intros drafted in your voice and held for your ok. nothing sends until you've read them." },
  ],
  "Expense Manager": [
    { kind: "user", hoursAgo: 24, content: "month-end is friday, close out the card for me?" },
    { kind: "agent", content: "i'll match every charge to a receipt and file the report. anything that doesn't line up, i ask instead of guessing." },
    { kind: "routine", name: "Month-end close" },
    { kind: "agent", hoursAgo: 5, content: "✓ **Receipts** → 9 matched to card charges\n✓ **Report** → drafted · $2,340 across 3 trips\n✓ **Flagged** → 1 charge · harbor hotel, $412 twice" },
    { kind: "agent", content: "the harbor hotel charged $412 on the 12th and again on the 14th. double-billed, or two separate nights?" },
    { kind: "user", hoursAgo: 4, content: "two nights, mia stayed the second one" },
    { kind: "agent", content: "that clears it. report filed: **9 receipts** matched, $2,340 across 3 trips, nothing outstanding." },
  ],
  "Offsite crew": [
    { kind: "user", hoursAgo: 7, content: "let's close out the offsite. what's left?" },
    { kind: "agent", author: "Account Manager", content: "recap doc is done and owners are tagged. **3 follow-ups** land this week." },
    { kind: "agent", author: "Inbox Manager", content: "thank-you notes went out to the venue and the speakers this morning." },
    { kind: "agent", hoursAgo: 6, author: "Chief", content: "recap's shared. follow-ups, assigned:\n✓ **Acme pricing follow-up** → @[Account Manager] · numbers by thursday\n✓ **Speaker + venue thank-yous** → @[Inbox Manager] · done this morning\n✓ **Final invoice** → me · reconciling against the expense report", reaction: "\ud83d\udc4d" },
    { kind: "user", content: "great close-out. anything we missed?" },
    { kind: "agent", author: "Chief", content: "that leaves the pipeline: nobody's touched the quiet accounts. i'd spin up a dedicated agent for outbound." },
  ],
}
