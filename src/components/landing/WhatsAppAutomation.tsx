import { motion } from 'framer-motion'
import { CheckCheck, MessageCircle } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function WhatsAppAutomation() {
  return (
    <section
      id="whatsapp"
      className="relative overflow-hidden border-y border-slate-100 bg-gradient-to-b from-brand-50/40 via-white to-brand-50/30 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-wa-500/40 to-transparent" />

      <Container>
        <SectionHeading
          eyebrow="WhatsApp-first"
          title="Your tenants already live on WhatsApp"
          description="PGMate turns everyday chats into structured operations — polls, reminders, and tickets flow into your dashboard without changing how tenants reply."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-wa-500/10 px-3 py-1 text-xs font-semibold text-wa-700 ring-1 ring-wa-500/20">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden />
              Official WhatsApp Business APIs
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              One question. Hundreds of answers. Zero spreadsheets.
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wa-500" />
                Owners broadcast meal polls; tenants respond YES/NO like a normal chat.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wa-500" />
                Expected meal counts sync to the kitchen dashboard automatically.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wa-500" />
                Same thread for rent reminders, notices, and maintenance — fully logged.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-wa-500/20 via-transparent to-emerald-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-[#e5ddd5] shadow-2xl shadow-slate-900/15">
              <div className="flex items-center gap-3 border-b border-black/5 bg-[#f0f0f0] px-4 py-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-wa-500 to-wa-dark p-0.5">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-xs font-bold text-wa-600">
                    PS
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">PGMate · Koregaon Park</p>
                  <p className="text-xs text-emerald-600">online</p>
                </div>
              </div>

              <div className="space-y-3 px-3 py-6 sm:px-5">
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-lg rounded-tr-sm bg-[#dcf8c6] px-3 py-2 shadow-sm">
                    <p className="text-sm text-slate-900">Will you take dinner today? 🍛</p>
                    <p className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-500">
                      6:12 pm <CheckCheck className="h-3.5 w-3.5 text-sky-500" aria-hidden />
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-white px-3 py-2 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">YES</p>
                    <p className="mt-1 text-[10px] text-slate-500">6:12 pm</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-white px-3 py-2 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">NO — traveling</p>
                    <p className="mt-1 text-[10px] text-slate-500">6:14 pm</p>
                  </div>
                </div>

                <div className="mx-auto max-w-sm rounded-xl border border-wa-500/30 bg-white/95 p-3 shadow-lg backdrop-blur-sm">
                  <p className="text-center text-[10px] font-semibold uppercase tracking-wider text-wa-700">
                    Dashboard synced
                  </p>
                  <p className="mt-1 text-center text-sm text-slate-700">
                    Tonight&apos;s expected dinner count:{' '}
                    <span className="font-bold text-slate-900">38 portions</span>
                  </p>
                  <div className="mt-2 flex justify-center gap-2 text-[10px] text-slate-500">
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700">
                      −12% vs unplanned cooking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
