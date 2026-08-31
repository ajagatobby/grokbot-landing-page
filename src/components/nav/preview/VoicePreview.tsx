import { useEffect, useRef } from "react"

const SIZE = 283
const STAR_COUNT = 220

type Star = { x: number; y: number; z: number; r: number; tw: number }

/** Canvas-rendered voice orb: a dark sphere of drifting stars with an iridescent rim. */
export default function VoicePreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = SIZE * dpr
    canvas.height = SIZE * dpr
    ctx.scale(dpr, dpr)

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => {
      // uniform point on the unit sphere
      const u = Math.random() * 2 - 1
      const theta = Math.random() * Math.PI * 2
      const s = Math.sqrt(1 - u * u)
      return { x: s * Math.cos(theta), y: u, z: s * Math.sin(theta), r: 0.4 + Math.random() * 1.4, tw: Math.random() * Math.PI * 2 }
    })

    const cx = SIZE / 2
    const cy = SIZE / 2
    const radius = SIZE / 2

    let raf = 0
    let t = 0
    const draw = () => {
      t += 0.0035
      ctx.clearRect(0, 0, SIZE, SIZE)

      // sphere body
      const body = ctx.createRadialGradient(cx - radius * 0.25, cy - radius * 0.3, radius * 0.05, cx, cy, radius)
      body.addColorStop(0, "#23202c")
      body.addColorStop(0.55, "#141218")
      body.addColorStop(1, "#08070a")
      ctx.fillStyle = body
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.fill()

      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.clip()

      // drifting stars, rotated about the Y axis
      const cos = Math.cos(t)
      const sin = Math.sin(t)
      for (const st of stars) {
        const x = st.x * cos - st.z * sin
        const z = st.x * sin + st.z * cos
        if (z < -0.15) continue
        const depth = (z + 1) / 2
        const px = cx + x * radius * 0.95
        const py = cy + st.y * radius * 0.95
        const alpha = Math.max(0, depth * (0.45 + 0.55 * Math.sin(t * 12 + st.tw)) * 0.9)
        ctx.globalAlpha = Math.min(1, alpha)
        ctx.fillStyle = "#ffffff"
        ctx.beginPath()
        ctx.arc(px, py, st.r * (0.5 + depth * 0.8), 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      // soft internal glows
      for (const [gx, gy, gr, color] of [
        [0.32, 0.72, 0.3, "rgba(200,200,215,0.16)"],
        [0.68, 0.24, 0.22, "rgba(180,190,220,0.12)"],
      ] as const) {
        const g = ctx.createRadialGradient(cx + (gx - 0.5) * SIZE, cy + (gy - 0.5) * SIZE, 0, cx + (gx - 0.5) * SIZE, cy + (gy - 0.5) * SIZE, gr * SIZE)
        g.addColorStop(0, color)
        g.addColorStop(1, "rgba(0,0,0,0)")
        ctx.fillStyle = g
        ctx.fillRect(0, 0, SIZE, SIZE)
      }

      // iridescent rim
      const rim = ctx.createConicGradient(t * 2, cx, cy)
      rim.addColorStop(0, "rgba(0,220,255,0.55)")
      rim.addColorStop(0.2, "rgba(120,90,255,0.35)")
      rim.addColorStop(0.4, "rgba(255,80,140,0.45)")
      rim.addColorStop(0.6, "rgba(255,190,80,0.35)")
      rim.addColorStop(0.8, "rgba(90,255,190,0.45)")
      rim.addColorStop(1, "rgba(0,220,255,0.55)")
      ctx.strokeStyle = rim
      ctx.lineWidth = 3
      ctx.globalCompositeOperation = "screen"
      ctx.beginPath()
      ctx.arc(cx, cy, radius - 2, 0, Math.PI * 2)
      ctx.stroke()
      ctx.globalCompositeOperation = "source-over"

      ctx.restore()
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
      <div className="flex h-full items-center justify-center">
        <div aria-hidden="true" className="relative block shrink-0" style={{ width: SIZE, height: SIZE }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              overflow: "hidden",
              clipPath: "circle(50% at 50% 50%)",
              maskImage: "radial-gradient(closest-side, rgb(0, 0, 0) calc(100% - 0.5px), transparent)",
            }}
          >
            <canvas ref={canvasRef} className="block" style={{ position: "relative", width: SIZE, height: SIZE, clipPath: "circle(50% at 50% 50%)" }} />
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              pointerEvents: "none",
              opacity: 0.35,
              boxShadow:
                "rgba(255, 255, 255, 0.7) 0px 1px 1px inset, rgba(255, 255, 255, 0.45) 0px -1px 1px inset, rgba(255, 255, 255, 0.22) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.18) 0px 0px 17px inset",
            }}
          />
        </div>
      </div>
    </div>
  )
}
