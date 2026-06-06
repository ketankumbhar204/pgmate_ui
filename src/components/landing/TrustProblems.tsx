import { motion } from 'framer-motion'
import {
  BookOpen,
  FileSpreadsheet,
  MessageSquareWarning,
  ReceiptIndianRupee,
  Trash2,
  Wrench,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const problems = [
  {
    icon: ReceiptIndianRupee,
    title: 'Manual payment tracking',
    description:
      'Chasing rent on calls, marking dues in notebooks, and reconciling UPI screenshots every month.',
  },
  {
    icon: Trash2,
    title: 'Food wastage',
    description:
      'Cooking for full occupancy without knowing who is eating leads to daily waste and higher costs.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Tenant communication',
    description:
      'Important updates get lost in random WhatsApp groups and one-to-one chats with no audit trail.',
  },
  {
    icon: Wrench,
    title: 'Maintenance complaints',
    description:
      'Leaks and repairs are tracked on sticky notes — nothing is prioritized or closed on time.',
  },
  {
    icon: BookOpen,
    title: 'Notebook dependency',
    description:
      'Room allotments, deposits, and agreements live in registers that only one person understands.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel chaos',
    description:
      'Fragile spreadsheets break when you scale to multiple properties or share with family partners.',
  },
]

export function TrustProblems() {
  return (
    <section id="problems" className="border-t border-slate-100 bg-slate-50/50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The daily grind"
          title="Problems every PG owner knows"
          description="Countin replaces scattered tools with one calm, WhatsApp-first system — so you run the PG, not the paperwork."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-rose-500/5" />
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 ring-1 ring-rose-100">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
            </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
