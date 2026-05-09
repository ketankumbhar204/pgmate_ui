import { motion } from 'framer-motion'
import { LineChart, MessageCircle, UserPlus } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  {
    step: '01',
    title: 'Add tenants & rooms',
    description:
      'Import from Excel or add manually. Each tenant gets a profile linked to WhatsApp for future polls and reminders.',
    icon: UserPlus,
  },
  {
    step: '02',
    title: 'Send meal polls & rent nudges',
    description:
      'Schedule friendly WhatsApp messages. Tenants reply in-thread; you see structured counts and payment status instantly.',
    icon: MessageCircle,
  },
  {
    step: '03',
    title: 'Run operations from one dashboard',
    description:
      'Track complaints, vendor payouts, and occupancy without jumping between notebooks, Excel, and random chats.',
    icon: LineChart,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Simple rollout"
          title="Up and running before tonight’s dinner service"
          description="No six-month implementation. If you can use WhatsApp, you can onboard your first property in an afternoon."
        />

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-wa-500/0 via-wa-500/40 to-wa-500/0 lg:block" />

          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-emerald-50 text-wa-700 ring-1 ring-wa-500/20">
                  <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-wa-600">Step {s.step}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
