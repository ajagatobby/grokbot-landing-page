import Header from './sections/Header'
import Hero from './sections/Hero'
import Statement from './sections/Statement'
import Features from './sections/Features'
import UseCases from './sections/UseCases'
import Video from './sections/Video'
import Pricing from './sections/Pricing'
import Download from './sections/Download'
import Guides from './sections/Guides'
import Faqs from './sections/Faqs'
import GetStarted from './sections/GetStarted'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Header />
      <div className="bot-root cursorgothic_a3d77325-module__uZSe7q__variable">
        <main id="main">
        <Hero />
        <Statement />
        <Features />
        <UseCases />
        <Video />
        <Pricing />
        <Download />
        <Guides />
        <Faqs />
        <GetStarted />
        </main>
      </div>
      <Footer />
    </>
  )
}
