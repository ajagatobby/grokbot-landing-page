import { useTheme } from "../lib/theme"

export default function Footer() {
  const { resolved, setTheme } = useTheme()
  const toggle = () => setTheme(resolved === "dark" ? "light" : "dark")
  return (
    <footer>
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl border-border border-t pb-16 pt-10 max-lg:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex shrink-0 flex-col lg:w-[280px]">
            <div>
              <svg width="205" height="25" viewBox="0 0 1294 158" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="SpaceXAI" className="text-primary/40 block h-4 w-auto">
                <path fillRule="evenodd" clipRule="evenodd" d="M331.027 83.6049C331.027 67.2845 317.318 58.0969 295.467 58.0969H188.967V157.661H218.997V119.471H297.358C319.228 119.471 331.027 111.887 331.027 94.5399V83.6049ZM218.997 101.241H291.846C303.645 101.241 304.96 97.2963 304.96 90.1626V86.2536C304.96 79.2465 303.213 75.4632 290.387 75.4632H219.177L218.997 101.241Z" />
                <path d="M495.676 157.644H459.882L443.994 135.847H351.382L367.289 118.86H431.636L400.669 76.3459L418.954 53.8642L495.676 157.644Z" />
                <path d="M115.163 58.0969C131.772 58.0969 141.248 66.2575 144.166 75.4627H33.0911V96.8814H119.235C136.564 97.8902 147.066 105.312 147.066 119.309V135.198C147.066 150.654 137.897 157.643 119.523 157.643H31.632C14.8789 157.643 5.25904 151.374 2.48486 138.944H119.991V116.175H32.6585C16.482 116.265 5.54735 108.825 5.54725 95.7107V79.9662C5.54725 64.9424 16.1759 58.0969 34.6944 58.0969H115.163Z" />
                <path d="M635.773 58.0788C651.806 58.0789 663.173 63.6274 666.091 75.4447H553.394V138.944H666.091C662.885 152.113 656.021 157.643 636.638 157.643H551.377C536.659 157.643 522.806 151.662 522.806 135.774V79.9481C522.806 64.0597 536.659 58.0789 551.377 58.0788H635.773Z" />
                <path d="M798.637 108.587H738.037V138.941H841.925V157.64H707.485V91.5281H798.637V108.587Z" />
                <path d="M843.348 75.4627H707.485V58.0969H843.348V75.4627Z" />
                <path d="M1291.42 0.485005C1243.91 4.35808 1057.2 27.5063 927.728 157.658H879.684L885.052 152.308C912.145 126.134 1032.03 15.2025 1291.42 0.34082V0.485005Z" />
                <path d="M1128.81 157.658H1091.16L1016.96 103.651C1023.8 99.3515 1030.68 95.2564 1037.58 91.3564L1128.81 157.658Z" />
                <path d="M1068.63 157.659H1030.99L1019.58 149.354H955.827C960.315 145.369 964.859 141.5 969.45 137.745H1003.6L985.926 124.891C992.242 120.191 998.628 115.689 1005.07 111.377L1068.63 157.659Z" />
                <path d="M931.636 58.0739L960.66 79.1672C953.437 83.4208 946.676 87.6309 940.365 91.7495L894.029 58.0558L931.636 58.0739Z" />
              </svg>
              <span className="text-secondary mt-5 block text-[10px] leading-none lg:mt-5">
                {"© 2026 SpaceXAI LLC"}
              </span>
            </div>
            <div className="mt-auto flex items-center gap-3 pt-10 max-lg:hidden">
              <button type="button" onClick={toggle} aria-label={resolved === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="text-primary/30 hover:text-primary/60 flex size-7 items-center justify-center rounded-full transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-slot="icon" className="stroke-[2] size-4">
                  <g id="name=moon">
                    <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M3 12.0005C3.00022 17.5231 7.47729 22.0005 13 22.0005C17.1018 22.0005 20.6236 19.529 22.166 15.9956C22.1419 15.996 22.1179 15.997 22.0937 15.998C22.0625 15.9992 22.0313 16.0005 22 16.0005C16.4773 16.0005 12.0002 11.5231 12 6.00049C12 4.57969 12.2978 3.22836 12.832 2.00439C7.38668 2.0941 3 6.53376 3 12.0005ZM10 6.00049C10 5.50987 10.0303 5.02594 10.0879 4.55029C7.10969 5.71429 5 8.61027 5 12.0005C5.00022 16.4187 8.58197 20.0005 13 20.0005C15.2588 20.0005 17.2994 19.0623 18.7549 17.5522C13.7047 16.1364 10.0002 11.5027 10 6.00049Z" fill="currentColor" />
                  </g>
                </svg>
              </button>
              <a target="_blank" className="border-primary/[0.06] hover:border-primary/[0.12] text-primary/25 hover:text-primary/45 inline-flex items-center gap-2 rounded-full border py-1.5 pl-2.5 pr-3 text-[10px] font-medium transition-colors" href="https://grok.com/?referrer=website">
                <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block size-3.5">
                  <path d="M13.374 20.5407L24.4555 12.3506C24.9988 11.9491 25.7753 12.1057 26.0342 12.7294C27.3966 16.0185 26.7879 19.9712 24.0772 22.6851C21.3666 25.3989 17.595 25.9941 14.1477 24.6386L10.3818 26.3843C15.7832 30.0806 22.3422 29.1665 26.4409 25.0601C29.692 21.8051 30.6989 17.3683 29.7574 13.3673L29.7659 13.3758C28.4006 7.49809 30.1016 5.14871 33.5859 0.344576C33.6683 0.230667 33.7508 0.116757 33.8333 0L29.2482 4.59055V4.57631L13.3712 20.5436" fill="currentColor" />
                  <path d="M11.0867 22.5312C7.20979 18.8234 7.87821 13.0852 11.1862 9.77618C13.6323 7.3271 17.64 6.32755 21.1385 7.79698L24.8959 6.05986C24.219 5.57005 23.3514 5.04322 22.3559 4.67301C17.8562 2.81914 12.469 3.7418 8.81115 7.40114C5.29271 10.9238 4.18626 16.3402 6.08628 20.9621C7.5056 24.4164 5.17893 26.8597 2.8352 29.3259C2.00465 30.2001 1.17126 31.0744 0.5 31.9999L11.0838 22.534" fill="currentColor" />
                </svg>
                {"Built with Grok"}
              </a>
            </div>
          </div>
          <div className="border-primary/[0.1] hidden border-l border-dashed lg:block" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3 md:gap-x-12 lg:ml-auto lg:grid-cols-5 lg:gap-x-14 lg:gap-y-10">
            <div className="flex flex-col gap-10">
              <div>
                <span className="text-primary/70 mb-1.5 block text-[13px] font-medium">
                  {"Products"}
                </span>
                <div className="flex flex-col gap-1">
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/grok">
                    {"Chat"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/build">
                    {"Build"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/api/imagine">
                    {"Imagine"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/voice">
                    {"Voice"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/bot">
                    {"Bot"}
                  </a>
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://grokipedia.com">
                    {"Grokipedia"}
                  </a>
                </div>
              </div>
              <div>
                <span className="text-primary/70 mb-1.5 block text-[13px] font-medium">
                  {"Download"}
                </span>
                <div className="flex flex-col gap-1">
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://grok.com/?referrer=website">
                    {"grok.com"}
                  </a>
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://apps.apple.com/app/apple-store/id6670324846">
                    {"iOS"}
                  </a>
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://play.google.com/store/apps/details?id=ai.x.grok">
                    {"Android"}
                  </a>
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://x.com/i/grok">
                    {"Grok on X"}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <span className="text-primary/70 mb-1.5 block text-[13px] font-medium">
                  {"Solutions"}
                </span>
                <div className="flex flex-col gap-1">
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/grok/business">
                    {"Business"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/grok/government">
                    {"Government"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/solutions/customer-support">
                    {"Customer Support"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/solutions/legal">
                    {"Legal"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/solutions/security">
                    {"Security"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/grok/use-cases">
                    {"Use Cases"}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <span className="text-primary/70 mb-1.5 block text-[13px] font-medium">
                  {"Developers"}
                </span>
                <div className="flex flex-col gap-1">
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/api">
                    {"API Overview"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/pricing">
                    {"Pricing"}
                  </a>
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://docs.x.ai/developers/models">
                    {"Models"}
                  </a>
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://console.x.ai?utm_source=website&utm_medium=referral&utm_campaign=site-footer&utm_content=developers-console">
                    {"Console"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/api/changelog">
                    {"Changelog"}
                  </a>
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://docs.x.ai">
                    {"Docs"}
                  </a>
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://status.x.ai">
                    {"Status"}
                  </a>
                </div>
              </div>
              <div>
                <span className="text-primary/70 mb-1.5 block text-[13px] font-medium">
                  {"Enterprise"}
                </span>
                <div className="flex flex-col gap-1">
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/contact-sales">
                    {"Contact Sales"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/legal/faq-enterprise">
                    {"FAQs"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/legal/baa">
                    {"BAA"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/legal/data-processing-addendum">
                    {"DPA"}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <span className="text-primary/70 mb-1.5 block text-[13px] font-medium">
                  {"Company"}
                </span>
                <div className="flex flex-col gap-1">
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/company">
                    {"About"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/colossus">
                    {"Colossus"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/careers">
                    {"Careers"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/news">
                    {"News"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/contact">
                    {"Contact"}
                  </a>
                </div>
              </div>
              <div>
                <span className="text-primary/70 mb-1.5 block text-[13px] font-medium">
                  {"Trust"}
                </span>
                <div className="flex flex-col gap-1">
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/safety">
                    {"Safety"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/security">
                    {"Security"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/privacy-portal">
                    {"Privacy Portal"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/legal/subprocessor-list">
                    {"Subprocessors"}
                  </a>
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://docs.x.ai/grok/user-guide">
                    {"Help Center"}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <a className="text-primary/70 hover:text-primary mb-1.5 block w-fit text-[13px] font-medium transition-colors" href="/legal">
                  {"Legal"}
                </a>
                <div className="flex flex-col gap-1">
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/legal/terms-of-service">
                    {"Terms"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/legal/terms-of-service-enterprise">
                    {"Enterprise Terms"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/legal/privacy-policy">
                    {"Privacy"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/legal/cookie-policy">
                    {"Cookies"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/legal/acceptable-use-policy">
                    {"AUP"}
                  </a>
                  <a className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="/legal/brand-guidelines">
                    {"Brand"}
                  </a>
                  <button type="button" className="text-primary/50 hover:text-primary text-left text-[13px] leading-relaxed transition-colors">
                    {"Privacy choices"}
                  </button>
                </div>
              </div>
              <div>
                <span className="text-primary/70 mb-1.5 block text-[13px] font-medium">
                  {"Social"}
                </span>
                <div className="flex flex-col gap-1">
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://x.com/spacexai">
                    {"@SpaceXAI"}
                  </a>
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://x.com/grok">
                    {"@grok"}
                  </a>
                  <a target="_blank" className="text-primary/50 hover:text-primary text-[13px] leading-relaxed transition-colors" href="https://discord.com/invite/kqCc86jM55">
                    {"Discord"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-3 lg:hidden">
          <button type="button" onClick={toggle} aria-label={resolved === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="text-primary/30 hover:text-primary/60 flex size-7 items-center justify-center rounded-full transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-slot="icon" className="stroke-[2] size-4">
              <g id="name=moon">
                <path id="vector" fillRule="evenodd" clipRule="evenodd" d="M3 12.0005C3.00022 17.5231 7.47729 22.0005 13 22.0005C17.1018 22.0005 20.6236 19.529 22.166 15.9956C22.1419 15.996 22.1179 15.997 22.0937 15.998C22.0625 15.9992 22.0313 16.0005 22 16.0005C16.4773 16.0005 12.0002 11.5231 12 6.00049C12 4.57969 12.2978 3.22836 12.832 2.00439C7.38668 2.0941 3 6.53376 3 12.0005ZM10 6.00049C10 5.50987 10.0303 5.02594 10.0879 4.55029C7.10969 5.71429 5 8.61027 5 12.0005C5.00022 16.4187 8.58197 20.0005 13 20.0005C15.2588 20.0005 17.2994 19.0623 18.7549 17.5522C13.7047 16.1364 10.0002 11.5027 10 6.00049Z" fill="currentColor" />
              </g>
            </svg>
          </button>
          <a target="_blank" className="border-primary/[0.06] hover:border-primary/[0.12] text-primary/25 hover:text-primary/45 inline-flex items-center gap-2 rounded-full border py-1.5 pl-2.5 pr-3 text-[10px] font-medium transition-colors" href="https://grok.com/?referrer=website">
            <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block size-3.5">
              <path d="M13.374 20.5407L24.4555 12.3506C24.9988 11.9491 25.7753 12.1057 26.0342 12.7294C27.3966 16.0185 26.7879 19.9712 24.0772 22.6851C21.3666 25.3989 17.595 25.9941 14.1477 24.6386L10.3818 26.3843C15.7832 30.0806 22.3422 29.1665 26.4409 25.0601C29.692 21.8051 30.6989 17.3683 29.7574 13.3673L29.7659 13.3758C28.4006 7.49809 30.1016 5.14871 33.5859 0.344576C33.6683 0.230667 33.7508 0.116757 33.8333 0L29.2482 4.59055V4.57631L13.3712 20.5436" fill="currentColor" />
              <path d="M11.0867 22.5312C7.20979 18.8234 7.87821 13.0852 11.1862 9.77618C13.6323 7.3271 17.64 6.32755 21.1385 7.79698L24.8959 6.05986C24.219 5.57005 23.3514 5.04322 22.3559 4.67301C17.8562 2.81914 12.469 3.7418 8.81115 7.40114C5.29271 10.9238 4.18626 16.3402 6.08628 20.9621C7.5056 24.4164 5.17893 26.8597 2.8352 29.3259C2.00465 30.2001 1.17126 31.0744 0.5 31.9999L11.0838 22.534" fill="currentColor" />
            </svg>
            {"Built with Grok"}
          </a>
        </div>
      </div>
    </footer>
  );
}
