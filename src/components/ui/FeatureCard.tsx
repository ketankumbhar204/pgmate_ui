import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  className?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  className = '',
}: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/50 transition hover:border-wa-500/30 hover:shadow-lg hover:shadow-wa-500/5 ${className}`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-wa-500/15 to-transparent blur-2xl transition group-hover:from-wa-500/25" />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-emerald-50 text-wa-600 ring-1 ring-wa-500/20">
        <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
      </div>
      <h3 className="relative mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </motion.article>
  )
}
