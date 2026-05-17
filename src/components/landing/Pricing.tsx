import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

const plans = [
  {
    name: 'Starter',
    price: '₹499',
    period: '/month',
    blurb: 'Single property owners testing digital ops.',
    tenants: 'Up to 25 tenants',
    credits: '500 WhatsApp credits',
    features: ['Meal polls & rent reminders', 'Basic dashboard', 'Email support'],
    cta: 'Start Starter',
    highlighted: false,
  },
  {
    name: 'Basic',
    price: '₹2,499',
    period: '/month',
    blurb: 'Growing PGs with one busy property.',
    tenants: 'Up to 75 tenants',
    credits: '2,000 WhatsApp credits',
    features: [
      'Everything in Starter',
      'Maintenance ticketing',
      'Payment tracking & exports',
      'Priority chat support',
    ],
    cta: 'Choose Basic',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '₹4,999',
    period: '/month',
    blurb: 'Multi-wing hostels & multi-property owners.',
    tenants: 'Up to 200 tenants',
    credits: '6,000 WhatsApp credits',
    features: [
      'Everything in Basic',
      'Multi-property switcher',
      'Owner & manager roles',
      'Dedicated onboarding call',
    ],
    cta: 'Talk to sales',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-slate-100 bg-gradient-to-b from-slate-50/90 to-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that respect Indian PG economics"
          description="Transparent rupee pricing. Scale WhatsApp credits as you add more beds — no surprise international FX fees."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative flex flex-col rounded-3xl border p-8 shadow-sm ${
                plan.highlighted
                  ? 'border-wa-500/50 bg-white shadow-xl shadow-wa-500/10 ring-2 ring-wa-500/20'
                  : 'border-slate-200/90 bg-white'
              }`}
            >
              {plan.highlighted ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-wa-500 to-wa-dark px-4 py-1 text-xs font-bold text-white shadow-md">
                  Recommended
                </div>
              ) : null}

              <h3 className="text-lg font-bold text-slate-900">{plan.name} Plan</h3>
              <p className="mt-2 text-sm text-slate-600">{plan.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                <span className="text-sm font-medium text-slate-500">{plan.period}</span>
              </div>
              <div className="mt-4 space-y-1 rounded-xl bg-slate-50 px-4 py-3 text-sm">
                <p className="font-semibold text-slate-800">{plan.tenants}</p>
                <p className="text-slate-600">{plan.credits}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-600">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-wa-600" strokeWidth={2.5} aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? 'primary' : 'ghost'}
                className={`mt-8 w-full ${plan.highlighted ? '' : 'ring-slate-200'}`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          GST extra as applicable. WhatsApp credits are pooled message units for template &amp; session
          messages.
        </p>
      </Container>
    </section>
  )
}
