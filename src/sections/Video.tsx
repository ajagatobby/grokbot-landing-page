import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "motion/react"

const SRC = "/media/launch-trailer.mp4"
const POSTER = "/media/launch-trailer-poster.jpg"

function fmt(t: number) {
  if (!Number.isFinite(t)) return "0:00"
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m}:${String(s).padStart(2, "0")}`
}

const PlayGlyph = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" d="M8.00 5.50L13.75 8.75L13.75 15.25L8.00 18.50Z" />
    <path fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" d="M13.75 8.75L19.50 12.00L19.50 12.00L13.75 15.25Z" />
  </svg>
)

const PauseGlyph = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" d="M8.00 5.50L11.00 5.50L11.00 18.50L8.00 18.50Z" />
    <path fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" d="M13.00 5.50L16.00 5.50L16.00 18.50L13.00 18.50Z" />
  </svg>
)

function Lightbox({ onClose }: { onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const [waiting, setWaiting] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [volume, setVolume] = useState(1)
  const [muted, setMuted] = useState(false)
  const [showVolume, setShowVolume] = useState(false)
  const [controlsVisible, setControlsVisible] = useState(true)
  const hideTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === " ") { e.preventDefault(); toggle() }
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggle = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play()
    else v.pause()
  }, [])

  const nudgeControls = () => {
    setControlsVisible(true)
    window.clearTimeout(hideTimer.current)
    hideTimer.current = window.setTimeout(() => setControlsVisible(false), 2600)
  }

  const seekFromEvent = (e: React.PointerEvent<HTMLDivElement> | PointerEvent, el: HTMLDivElement) => {
    const r = el.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, ((e as PointerEvent).clientX - r.left) / r.width))
    const v = videoRef.current
    if (v && duration) v.currentTime = ratio * duration
  }

  const progress = duration ? time / duration : 0

  return createPortal(
    <>
      <motion.div
        className="bg-background/95 fixed inset-0 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={nudgeControls}
      >
        <div className="border-primary/10 aspect-video w-full max-w-[min(960px,calc(85vh*16/9),calc(100%_-_2px))] box-content overflow-hidden rounded-2xl border shadow-2xl">
          <div className="relative overflow-hidden size-full bg-transparent">
            <video
              ref={videoRef}
              src={SRC}
              className="h-full w-full object-contain"
              playsInline
              autoPlay
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onWaiting={() => setWaiting(true)}
              onPlaying={() => setWaiting(false)}
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
              onTimeUpdate={(e) => {
                setTime(e.currentTarget.currentTime)
                const b = e.currentTarget.buffered
                if (b.length) setBuffered(b.end(b.length - 1) / (e.currentTarget.duration || 1))
              }}
            />
            <button type="button" tabIndex={-1} className="absolute inset-0 cursor-pointer" aria-label={playing ? "Pause" : "Play"} onClick={toggle} />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className={`flex size-12 items-center justify-center rounded-full bg-black/50 transition-opacity duration-300 ${waiting ? "opacity-100" : "opacity-0"}`}>
                <svg viewBox="0 0 24 24" fill="none" className="animate-spin size-5 text-white" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                  <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className={`flex size-16 items-center justify-center rounded-full bg-black/45 backdrop-blur-sm transition-all duration-300 ${playing ? "scale-90 opacity-0" : "scale-100 opacity-100"}`}>
                <PlayGlyph className="ml-0.5 size-7 text-white" />
              </div>
            </div>

            <div className={`absolute inset-x-0 bottom-0 flex flex-col gap-1.5 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8 transition-opacity duration-300 ${controlsVisible || !playing ? "opacity-100" : "opacity-0"}`}>
              <div
                role="slider"
                tabIndex={0}
                aria-label="Seek"
                aria-valuemin={0}
                aria-valuemax={Math.round(duration)}
                aria-valuenow={Math.round(time)}
                aria-valuetext={`${fmt(time)} of ${fmt(duration)}`}
                className="group relative flex h-4 cursor-pointer touch-none items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                onPointerDown={(e) => {
                  const el = e.currentTarget
                  el.setPointerCapture(e.pointerId)
                  seekFromEvent(e, el)
                }}
                onPointerMove={(e) => {
                  if (e.currentTarget.hasPointerCapture(e.pointerId)) seekFromEvent(e, e.currentTarget)
                }}
              >
                <div className="relative w-full overflow-hidden rounded-full bg-white/20 transition-[height] duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] h-[3px] group-hover:h-[6px]">
                  <div className="absolute inset-0 origin-left rounded-full bg-white/30 will-change-transform" style={{ transform: `scaleX(${buffered})` }} />
                  <div className="absolute inset-0 origin-left rounded-full bg-white will-change-transform" style={{ transform: `scaleX(${progress})` }} />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button type="button" aria-label={playing ? "Pause" : "Play"} onClick={toggle} className="rounded p-1 text-white transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.92]">
                  {playing ? <PauseGlyph className="size-5" /> : <PlayGlyph className="size-5" />}
                </button>
                <div className="flex-1" />
                <span className="text-sm font-medium tabular-nums text-white">{fmt(time)} / {fmt(duration)}</span>
                <div className="relative" onMouseEnter={() => setShowVolume(true)} onMouseLeave={() => setShowVolume(false)}>
                  <div className={`absolute bottom-full left-1/2 mb-2 flex -translate-x-1/2 flex-col items-center rounded-md border border-white/10 bg-black/75 px-2.5 py-3 shadow-lg backdrop-blur-sm transition-[opacity,translate] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${showVolume ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}>
                    <div
                      role="slider"
                      tabIndex={0}
                      aria-label="Volume"
                      aria-orientation="vertical"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Math.round((muted ? 0 : volume) * 100)}
                      aria-valuetext={`${Math.round((muted ? 0 : volume) * 100)}%`}
                      className="relative h-20 w-1 cursor-pointer touch-none rounded-full bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                      onPointerDown={(e) => {
                        const r = e.currentTarget.getBoundingClientRect()
                        const val = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height))
                        setVolume(val); setMuted(val === 0)
                        if (videoRef.current) { videoRef.current.volume = val; videoRef.current.muted = val === 0 }
                      }}
                    >
                      <div className="absolute bottom-0 w-full rounded-full bg-white" style={{ height: `${(muted ? 0 : volume) * 100}%` }} />
                      <div className="absolute left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-white" style={{ bottom: `calc(${(muted ? 0 : volume) * 100}% - 5px)` }} />
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={muted ? "Unmute" : "Mute"}
                    onClick={() => {
                      const next = !muted
                      setMuted(next)
                      if (videoRef.current) videoRef.current.muted = next
                    }}
                    className="rounded p-1 text-white transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.92]"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 22H11.6494L11.375 21.7812L6.64844 18H4.5C2.567 18 1 16.433 1 14.5V9.5C1 7.567 2.567 6 4.5 6H6.64844L11.375 2.21875L11.6494 2H14V22ZM7.625 7.78125L7.35059 8H4.5C3.67157 8 3 8.67157 3 9.5V14.5C3 15.3284 3.67157 16 4.5 16H7.35059L7.625 16.2188L12 19.7188V4.28125L7.625 7.78125Z" />
                      <path d="M17.5654 7.42773C18.4696 8.72394 19 10.3016 19 12C19 13.6984 18.4696 15.2761 17.5654 16.5723L15.9248 15.4277C16.6024 14.4563 17 13.2761 17 12C17 10.7239 16.6024 9.54371 15.9248 8.57227L17.5654 7.42773Z" style={{ transformBox: "view-box", transformOrigin: "15.9px 12px", transform: muted ? "scale(0.4)" : "scale(1)", opacity: muted ? 0 : 1, transition: "opacity 300ms cubic-bezier(0.22, 1, 0.36, 1), transform 300ms cubic-bezier(0.22, 1, 0.36, 1)" }} />
                      <path d="M20.8174 5.09766C22.1922 7.05003 23 9.43242 23 12C23 14.5676 22.1922 16.95 20.8174 18.9023L19.1826 17.75C20.3277 16.1238 21 14.1419 21 12C21 9.85812 20.3277 7.87625 19.1826 6.25L20.8174 5.09766Z" style={{ transformBox: "view-box", transformOrigin: "19.1px 12px", transform: muted ? "scale(0.4)" : "scale(1)", opacity: muted ? 0 : 1, transition: "opacity 300ms cubic-bezier(0.22, 1, 0.36, 1), transform 300ms cubic-bezier(0.22, 1, 0.36, 1)" }} />
                      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ transformBox: "view-box", transformOrigin: "18px 12px", transform: muted ? "scale(1)" : "scale(0.4)", opacity: muted ? 1 : 0, transition: "opacity 300ms cubic-bezier(0.22, 1, 0.36, 1), transform 300ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                        <line x1="16" y1="10" x2="20" y2="14" />
                        <line x1="20" y1="10" x2="16" y2="14" />
                      </g>
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  aria-label="Fullscreen"
                  onClick={() => videoRef.current?.parentElement?.requestFullscreen?.()}
                  className="rounded p-1 text-white transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.92]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
                    <path d="M4 9V6a2 2 0 0 1 2-2h3" />
                    <path d="M20 9V6a2 2 0 0 0-2-2h-3" />
                    <path d="M4 15v3a2 2 0 0 0 2 2h3" />
                    <path d="M20 15v3a2 2 0 0 1-2 2h-3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="fixed right-4 top-4 z-50">
        <button type="button" aria-label="Close video" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-slot="icon" className="stroke-[2] text-primary/40 hover:text-primary size-8 transition-colors">
            <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" />
          </svg>
        </button>
      </div>
    </>,
    document.body,
  )
}

export default function Video() {
  const [open, setOpen] = useState(false)
  const cardVideo = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = cardVideo.current
    if (!v) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !open) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.2 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [open])

  return (
    <section id="video">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl pt-28 pb-24 sm:pt-40 sm:pb-36">
        <h2 className="font-display text-3xl tracking-tight text-balance sm:text-4xl mb-10 text-center">
          The SpaceXAI team runs on Grok Bot
        </h2>
        <div>
          <button
            type="button"
            aria-label="Play launch trailer"
            aria-expanded={open}
            data-video-card=""
            onClick={() => setOpen(true)}
            className="group bg-card relative aspect-video w-full cursor-pointer overflow-hidden rounded-3xl text-left"
          >
            <video ref={cardVideo} src={SRC} poster={POSTER} className="absolute inset-0 size-full object-cover" muted loop playsInline preload="metadata" aria-hidden="true" />
            <span className="pointer-events-none absolute inset-0 flex items-center px-6 sm:px-10 lg:px-14">
              <span className="inline-flex items-center gap-[0.35em] group-hover:-translate-x-0.5 sm:group-hover:-translate-x-1 text-2xl leading-none font-medium text-white transition-transform duration-300 ease-out sm:text-4xl lg:text-5xl">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-[0.7em]">
                  <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.89l11.02-6.86a1.05 1.05 0 0 0 0-1.78L9.56 4.25A1.05 1.05 0 0 0 8 5.14Z" />
                </svg>
                Play
              </span>
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>{open && <Lightbox onClose={() => setOpen(false)} />}</AnimatePresence>
    </section>
  )
}
