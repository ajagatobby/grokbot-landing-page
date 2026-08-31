import type React from "react"

export default function ChatPreview() {
  return (
    <div className="absolute inset-0" style={{ pointerEvents: "none" } as React.CSSProperties}>
      <div className="flex h-full flex-col justify-end gap-2.5 overflow-hidden px-5 pb-5 pt-3">
        <div data-safari-no-blur="true" className="flex justify-start" style={{ "opacity": "1", "filter": "blur(0px)", "transform": "translate3d(0px, 1.64434px, 0px) scale(0.970595, 0.970595)", "transformOrigin": "50% 50% 0px" } as React.CSSProperties}>
          <div data-chat-bubble="true" className="max-w-[82%] rounded-2xl border px-3.5 py-2 text-[10.5px] leading-relaxed backdrop-blur-md border-primary/[0.07] text-primary/50 rounded-bl-md bg-white dark:border-white/[0.1] dark:bg-white/[0.12] dark:text-white/60">
            {"Two particles become linked — measuring one instantly determines the other, regardless of distance."}
          </div>
        </div>
        <div data-safari-no-blur="true" className="flex justify-end" style={{ "opacity": "1", "filter": "blur(0px)", "transform": "translate3d(0px, 11.9361px, 0px)", "transformOrigin": "50% 50% 0px" } as React.CSSProperties}>
          <div data-chat-bubble="true" className="max-w-[82%] rounded-2xl border px-3.5 py-2 text-[10.5px] leading-relaxed backdrop-blur-md border-primary/[0.07] text-primary/85 rounded-br-md bg-white dark:bg-white/[0.08]">
            {"Why is the sky blue?"}
          </div>
        </div>
        <div data-safari-no-blur="true" className="flex justify-start" style={{ "opacity": "1", "filter": "blur(0px)", "transform": "translate3d(0px, 11.9361px, 0px)", "transformOrigin": "50% 50% 0px" } as React.CSSProperties}>
          <div data-chat-bubble="true" className="max-w-[82%] rounded-2xl border px-3.5 py-2 text-[10.5px] leading-relaxed backdrop-blur-md border-primary/[0.07] text-primary/50 rounded-bl-md bg-white dark:border-white/[0.1] dark:bg-white/[0.12] dark:text-white/60">
            {"Shorter blue wavelengths scatter more off air molecules than longer red ones."}
          </div>
        </div>
        <div data-safari-no-blur="true" className="flex justify-end" style={{ "opacity": "1", "filter": "blur(0px)", "transform": "translate3d(0px, 11.9361px, 0px)", "transformOrigin": "50% 50% 0px" } as React.CSSProperties}>
          <div data-chat-bubble="true" className="max-w-[82%] rounded-2xl border px-3.5 py-2 text-[10.5px] leading-relaxed backdrop-blur-md border-primary/[0.07] text-primary/85 rounded-br-md bg-white dark:bg-white/[0.08]">
            {"How do black holes form?"}
          </div>
        </div>
        <div data-safari-no-blur="true" className="flex justify-start" style={{ "opacity": "1", "filter": "blur(0px)", "transform": "translate3d(0px, 11.9361px, 0px)", "transformOrigin": "50% 50% 0px" } as React.CSSProperties}>
          <div data-chat-bubble="true" className="max-w-[82%] rounded-2xl border px-3.5 py-2 text-[10.5px] leading-relaxed backdrop-blur-md border-primary/[0.07] text-primary/50 rounded-bl-md bg-white dark:border-white/[0.1] dark:bg-white/[0.12] dark:text-white/60">
            {"A massive star exhausts its fuel and gravity collapses the core into a singularity."}
          </div>
        </div>
        <div data-safari-no-blur="true" className="flex justify-end" style={{ "opacity": "0", "filter": "blur(4px)", "transform": "translateY(6.56635px) scale(0.980848)" } as React.CSSProperties}>
          <div data-chat-bubble="true" className="max-w-[82%] rounded-2xl border px-3.5 py-2 text-[10.5px] leading-relaxed backdrop-blur-md border-primary/[0.07] text-primary/85 rounded-br-md bg-white dark:bg-white/[0.08]">
            {"What causes aurora borealis?"}
          </div>
        </div>
      </div>
    </div>
  );
}
