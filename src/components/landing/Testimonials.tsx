import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const testimonials = [
  {
    quote:
      'We run a 40-bed PG near FC Road. Meal counts used to be pure guesswork — now WhatsApp replies land straight in PGMate and our cook knows exactly how much to prepare.',
    name: 'Anita Deshpande',
    role: 'Owner, Sai Krupa Ladies PG · Pune',
    rating: 5,
  },
  {
    quote:
      'Rent reminders alone saved me 3–4 hours every month. Tenants get a gentle nudge; I get a dashboard of who paid on UPI without opening 200 screenshots.',
    name: 'Rohit Kulkarni',
    role: 'Proprietor, Kulkarni Residency · Baner',
    rating: 5,
  },
  {
    quote:
      'Maintenance tickets from WhatsApp meant my plumber finally saw a queue instead of random forwards. We close complaints in days, not weeks.',
    name: 'Farhan Sheikh',
    role: 'Manager, Urban Stay Hostel · Viman Nagar',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="From Pune PGs"
          title="Owners who stopped juggling notebooks"
          description="Early adopters across Pune are using PGMate to bring order to chaotic daily operations — without forcing tenants to install another app."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/80 p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-wa-500/40" aria-hidden />
              <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200/80 pt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="mt-1 text-xs text-slate-500">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
