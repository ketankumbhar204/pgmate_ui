import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

export function FinalCta() {
  return (
    <section id="cta" className="pb-20 sm:pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-950 via-slate-900 to-emerald-950 px-8 py-14 text-center shadow-2xl sm:px-12"
        >
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-wa-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wa-400">Countin</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start managing your PG smarter
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Join owners who use WhatsApp for tenant love — and a dashboard for everything else.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button className="gap-2 bg-wa-500 hover:bg-wa-600 focus-visible:ring-wa-400">
                Start free trial
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                variant="ghost"
                className="!bg-white/10 !text-white !ring-white/20 hover:!bg-white/15"
              >
                Book a walkthrough
              </Button>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              No credit card for trial · Cancel anytime · Data hosted in India-ready cloud regions
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
