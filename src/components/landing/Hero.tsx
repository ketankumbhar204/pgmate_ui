import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bell,
  IndianRupee,
  Play,
  UtensilsCrossed,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

function DashboardMock() {
  return (
    <div className="relative rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-3 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-100 sm:p-4">
      <div className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        </div>
        <span className="ml-2 text-[10px] font-medium text-slate-400">dashboard.PGMate.in</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-[1fr_2fr]">
        <div className="hidden space-y-2 sm:block">
          {['Overview', 'Tenants', 'Meals', 'Payments', 'Tickets'].map((item, i) => (
            <div
              key={item}
              className={`rounded-lg px-3 py-2 text-xs font-medium ${
                i === 0
                  ? 'bg-brand-50 text-wa-700 ring-1 ring-wa-500/20'
                  : 'text-slate-500'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
              <p className="text-[10px] font-medium text-slate-500">Occupancy</p>
              <p className="mt-1 text-xl font-bold text-slate-900">94%</p>
              <div className="mt-2 flex h-8 items-end gap-0.5">
                {[40, 55, 45, 70, 65, 80, 90, 88, 94].map((h, j) => (
                  <div
                    key={j}
                    className="flex-1 rounded-t bg-gradient-to-t from-wa-500/30 to-wa-500"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
              <p className="text-[10px] font-medium text-slate-500">Today&apos;s meals</p>
              <p className="mt-1 text-xl font-bold text-slate-900">42</p>
              <p className="text-[10px] text-emerald-600">↓ 18% less waste vs last week</p>
            </div>
          </div>
          <div className="rounded-xl bg-slate-900 p-3 text-white">
            <p className="text-[10px] font-medium text-slate-400">Rent collected (May)</p>
            <p className="mt-1 flex items-baseline gap-1 text-xl font-bold">
              <IndianRupee className="h-4 w-4 opacity-80" />
              4,28,500
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[78%] rounded-full bg-wa-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white pt-10 pb-20 sm:pt-14 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,211,102,0.15),transparent)]" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-wa-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />

      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-wa-500/20 bg-white/90 px-3 py-1 text-xs font-semibold text-wa-700 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wa-500" />
            </span>
            Built for Indian PG &amp; hostel owners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            Smart PG Management with{' '}
            <span className="bg-gradient-to-r from-wa-600 to-wa-dark bg-clip-text text-transparent">
              WhatsApp Automation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Manage tenants, payments, meals, and daily operations from one simple platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button className="gap-2 !px-6">
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button variant="ghost" className="gap-2 ring-slate-200">
              <Play className="h-4 w-4 fill-current" aria-hidden />
              Watch demo
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 text-sm text-slate-500"
          >
            Trusted by PG owners across{' '}
            <span className="font-semibold text-slate-700">Pune, Bengaluru &amp; Hyderabad</span>
          </motion.p>
        </div>

        <div className="relative lg:pl-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DashboardMock />
          </motion.div>

          <motion.div
            className="absolute -left-2 top-8 max-w-[220px] rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xl shadow-slate-900/10 sm:-left-6 sm:top-12"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-wa-500 text-white">
                <UtensilsCrossed className="h-4 w-4" aria-hidden />
              </div>
              <div>
                <p className="text-[10px] font-medium text-slate-500">Meal poll</p>
                <p className="text-xs font-semibold text-slate-900">150 new YES replies</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-2 bottom-6 max-w-[240px] rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xl shadow-slate-900/10 sm:-right-4 sm:bottom-10"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                <Bell className="h-4 w-4" aria-hidden />
              </div>
              <div>
                <p className="text-[10px] font-medium text-slate-500">WhatsApp</p>
                <p className="text-xs font-semibold text-slate-900">Rent reminder sent · 12 tenants</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
