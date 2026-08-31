export default function Download() {
  return (
    <section id="download" className="font-sans">
      <div className="mx-auto grid w-full max-w-[var(--site-content-width)] gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4 lg:sticky lg:top-8 lg:self-start">
          <h2 className="font-display text-3xl tracking-tight text-balance sm:text-4xl">
            {"Download Grok Bot"}
          </h2>
          <p className="text-theme-text-muted max-w-md text-base leading-relaxed text-pretty sm:text-lg sm:leading-relaxed">
            {"One team, wherever you are — on your desk and in your pocket."}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-theme-bg-subtle hover:bg-theme-card-03-hex group relative flex items-center gap-4 rounded-2xl px-5 py-4 font-sans transition-colors">
            <span className="text-primary flex size-12 shrink-0 items-center justify-center">
              <svg viewBox="0 0 384 512" aria-hidden="true" className="size-5">
                <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
            </span>
            <span className="flex min-w-0 flex-col">
              <a href="https://api2.cursor.sh/updates/download/stable/darwin-arm64/grok-bot-bd824e1890d8b96f" download="" aria-label="macOS — Apple silicon" className="text-sm font-medium after:absolute after:inset-0">
                {"macOS"}
              </a>
              <span className="text-theme-text-muted text-xs">
                {"Apple silicon"}
              </span>
            </span>
            <span className="text-theme-text-muted group-hover:text-theme-text mr-3 ml-auto shrink-0 transition-[color,opacity] opacity-100">
              <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g id="name=incoming">
                  <g id="vector">
                    <path d="M5 16C5 16.7165 5.00032 17.1938 5.03028 17.5605C5.05924 17.9151 5.11072 18.0777 5.16309 18.1807C5.3069 18.4629 5.5371 18.6931 5.81934 18.8369C5.92228 18.8893 6.0849 18.9408 6.43946 18.9697C6.80616 18.9997 7.28347 19 8 19H16C16.7165 19 17.1938 18.9997 17.5605 18.9697C17.9151 18.9408 18.0777 18.8893 18.1807 18.8369C18.4629 18.6931 18.6931 18.4629 18.8369 18.1807C18.8893 18.0777 18.9408 17.9151 18.9697 17.5605C18.9997 17.1938 19 16.7165 19 16V14H21V16C21 16.6836 21.0011 17.2566 20.9629 17.7236C20.9238 18.2023 20.8382 18.6571 20.6182 19.0889C20.2826 19.7474 19.7474 20.2826 19.0889 20.6182C18.6571 20.8382 18.2023 20.9238 17.7236 20.9629C17.2566 21.001 16.6836 21 16 21H8C7.31644 21 6.74342 21.001 6.27637 20.9629C5.79772 20.9238 5.34294 20.8382 4.91114 20.6182C4.25262 20.2826 3.71739 19.7474 3.38184 19.0889C3.16182 18.6571 3.07623 18.2023 3.03711 17.7236C2.99895 17.2566 3 16.6836 3 16V14H5V16Z" fill="currentColor" />
                    <path d="M13 12.3359L16.293 9.04297L17.707 10.457L12 16.1641L6.29297 10.457L7.70703 9.04297L11 12.3359V3H13V12.3359Z" fill="currentColor" />
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <button type="button" aria-haspopup="dialog" className="bg-theme-bg-subtle hover:bg-theme-card-03-hex text-theme-text-muted hover:text-theme-text group flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-sm font-medium transition-colors">
            <span className="text-primary/30 flex size-12 shrink-0 items-center justify-center">
              <svg width="1.25rem" height="1.25rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g id="name=grid">
                  <path id="Vector" d="M3 5.5C3 4.83696 3.26339 4.20107 3.73223 3.73223C4.20107 3.26339 4.83696 3 5.5 3H8.5C9.16304 3 9.79893 3.26339 10.2678 3.73223C10.7366 4.20107 11 4.83696 11 5.5V8.5C11 9.16304 10.7366 9.79893 10.2678 10.2678C9.79893 10.7366 9.16304 11 8.5 11H5.5C4.83696 11 4.20107 10.7366 3.73223 10.2678C3.26339 9.79893 3 9.16304 3 8.5V5.5ZM5.5 5C5.36739 5 5.24021 5.05268 5.14645 5.14645C5.05268 5.24021 5 5.36739 5 5.5V8.5C5 8.63261 5.05268 8.75979 5.14645 8.85355C5.24021 8.94732 5.36739 9 5.5 9H8.5C8.63261 9 8.75979 8.94732 8.85355 8.85355C8.94732 8.75979 9 8.63261 9 8.5V5.5C9 5.36739 8.94732 5.24021 8.85355 5.14645C8.75979 5.05268 8.63261 5 8.5 5H5.5ZM13 5.5C13 4.83696 13.2634 4.20107 13.7322 3.73223C14.2011 3.26339 14.837 3 15.5 3H18.5C19.163 3 19.7989 3.26339 20.2678 3.73223C20.7366 4.20107 21 4.83696 21 5.5V8.5C21 9.16304 20.7366 9.79893 20.2678 10.2678C19.7989 10.7366 19.163 11 18.5 11H15.5C14.837 11 14.2011 10.7366 13.7322 10.2678C13.2634 9.79893 13 9.16304 13 8.5V5.5ZM15.5 5C15.3674 5 15.2402 5.05268 15.1464 5.14645C15.0527 5.24021 15 5.36739 15 5.5V8.5C15 8.63261 15.0527 8.75979 15.1464 8.85355C15.2402 8.94732 15.3674 9 15.5 9H18.5C18.6326 9 18.7598 8.94732 18.8536 8.85355C18.9473 8.75979 19 8.63261 19 8.5V5.5C19 5.36739 18.9473 5.24021 18.8536 5.14645C18.7598 5.05268 18.6326 5 18.5 5H15.5ZM3 15.5C3 14.837 3.26339 14.2011 3.73223 13.7322C4.20107 13.2634 4.83696 13 5.5 13H8.5C9.16304 13 9.79893 13.2634 10.2678 13.7322C10.7366 14.2011 11 14.837 11 15.5V18.5C11 19.163 10.7366 19.7989 10.2678 20.2678C9.79893 20.7366 9.16304 21 8.5 21H5.5C4.83696 21 4.20107 20.7366 3.73223 20.2678C3.26339 19.7989 3 19.163 3 18.5V15.5ZM5.5 15C5.36739 15 5.24021 15.0527 5.14645 15.1464C5.05268 15.2402 5 15.3674 5 15.5V18.5C5 18.6326 5.05268 18.7598 5.14645 18.8536C5.24021 18.9473 5.36739 19 5.5 19H8.5C8.63261 19 8.75979 18.9473 8.85355 18.8536C8.94732 18.7598 9 18.6326 9 18.5V15.5C9 15.3674 8.94732 15.2402 8.85355 15.1464C8.75979 15.0527 8.63261 15 8.5 15H5.5ZM13 15.5C13 14.837 13.2634 14.2011 13.7322 13.7322C14.2011 13.2634 14.837 13 15.5 13H18.5C19.163 13 19.7989 13.2634 20.2678 13.7322C20.7366 14.2011 21 14.837 21 15.5V18.5C21 19.163 20.7366 19.7989 20.2678 20.2678C19.7989 20.7366 19.163 21 18.5 21H15.5C14.837 21 14.2011 20.7366 13.7322 20.2678C13.2634 19.7989 13 19.163 13 18.5V15.5ZM15.5 15C15.3674 15 15.2402 15.0527 15.1464 15.1464C15.0527 15.2402 15 15.3674 15 15.5V18.5C15 18.6326 15.0527 18.7598 15.1464 18.8536C15.2402 18.9473 15.3674 19 15.5 19H18.5C18.6326 19 18.7598 18.9473 18.8536 18.8536C18.9473 18.7598 19 18.6326 19 18.5V15.5C19 15.3674 18.9473 15.2402 18.8536 15.1464C18.7598 15.0527 18.6326 15 18.5 15H15.5Z" fill="currentColor" />
                </g>
              </svg>
            </span>
            <span className="flex min-w-0 flex-col items-start text-left">
              <span>
                {"More downloads"}
              </span>
              <span className="text-theme-text-muted text-xs font-normal">
                {"Other platforms and devices"}
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
