import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  IndianRupee,
  PieChart,
  TrendingUp,
  Users,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  accent,
}: {
  label: string
  value: string
  hint: string
  icon: typeof Users
  accent: 'slate' | 'wa' | 'amber' | 'rose'
}) {
  const accents = {
    slate: 'from-slate-900 to-slate-800 text-white',
    wa: 'from-wa-600 to-wa-dark text-white',
    amber: 'from-amber-500 to-orange-600 text-white',
    rose: 'from-rose-500 to-rose-600 text-white',
  }
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br p-5 shadow-lg ${accents[accent]}`}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium opacity-80">{label}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight">{value}</p>
          <p className="mt-1 flex items-center gap-1 text-xs opacity-90">
            <TrendingUp className="h-3.5 w-3.5" aria-hidden />
            {hint}
          </p>
        </div>
        <div className="rounded-xl bg-white/15 p-2.5">
          <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
        </div>
      </div>
    </div>
  )
}

function MiniBars() {
  const data = [28, 42, 35, 50, 44, 58, 52, 66, 70, 74, 78, 82]
  return (
    <div className="flex h-36 items-end gap-1.5">
      {data.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.03 }}
          className="flex-1 rounded-t-md bg-gradient-to-t from-wa-600/40 to-wa-500"
        />
      ))}
    </div>
  )
}

function Donut({ pct }: { pct: number }) {
  const deg = (pct / 100) * 360
  return (
    <div className="relative mx-auto h-36 w-36">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(rgb(37 211 102) ${deg}deg, rgb(226 232 240) 0deg)`,
        }}
      />
      <div className="absolute inset-4 flex flex-col items-center justify-center rounded-full bg-white shadow-inner">
        <span className="text-2xl font-bold text-slate-900">{pct}%</span>
        <span className="text-[10px] font-medium text-slate-500">Occupancy</span>
      </div>
    </div>
  )
}

export function DashboardPreview() {
  return (
    <section id="dashboard" className="bg-slate-50/80 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Analytics"
          title="See your PG like a founder sees their startup"
          description="Live stats for cash, meals, beds, and tickets — tuned for small owners who cannot afford enterprise software."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard
                label="Total tenants"
                value="48"
                hint="+4 this month"
                icon={Users}
                accent="slate"
              />
              <StatCard
                label="Pending payments"
                value="₹ 62,400"
                hint="3 invoices overdue"
                icon={IndianRupee}
                accent="amber"
              />
              <StatCard
                label="Expected meal count (today)"
                value="38"
                hint="Synced from WhatsApp polls"
                icon={UtensilsCrossed}
                accent="wa"
              />
              <StatCard
                label="Open maintenance"
                value="5"
                hint="2 high priority"
                icon={Wrench}
                accent="rose"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Collection trend</p>
                  <p className="text-xs text-slate-500">Last 12 weeks · all properties</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  18% YoY
                </span>
              </div>
              <div className="mt-4">
                <MiniBars />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-slate-900">
              <PieChart className="h-5 w-5 text-wa-600" aria-hidden />
              <p className="font-semibold">Occupancy overview</p>
            </div>
            <div className="my-6">
              <Donut pct={87} />
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex justify-between">
                <span>Filled beds</span>
                <span className="font-semibold text-slate-900">42</span>
              </li>
              <li className="flex justify-between">
                <span>Vacant</span>
                <span className="font-semibold text-slate-900">6</span>
              </li>
              <li className="flex justify-between">
                <span>Notice period</span>
                <span className="font-semibold text-slate-900">2</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
