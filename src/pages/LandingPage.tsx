import { Navbar } from '../components/landing/Navbar'
import { Hero } from '../components/landing/Hero'
import { TrustProblems } from '../components/landing/TrustProblems'
import { Features } from '../components/landing/Features'
import { WhatsAppAutomation } from '../components/landing/WhatsAppAutomation'
import { DashboardPreview } from '../components/landing/DashboardPreview'
import { HowItWorks } from '../components/landing/HowItWorks'
import { Pricing } from '../components/landing/Pricing'
import { Testimonials } from '../components/landing/Testimonials'
import { FinalCta } from '../components/landing/FinalCta'
import { Footer } from '../components/landing/Footer'

export function LandingPage() {
  return (
    <div className="min-h-dvh bg-white text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustProblems />
        <Features />
        <WhatsAppAutomation />
        <DashboardPreview />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
