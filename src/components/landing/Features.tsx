import {
  BarChart3,
  BellRing,
  ClipboardList,
  Home,
  LayoutDashboard,
  MessageCircleHeart,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { FeatureCard } from '../ui/FeatureCard'

const features = [
  {
    icon: MessageCircleHeart,
    title: 'WhatsApp meal polls',
    description:
      'Ask “dinner today?” on WhatsApp; tenants tap YES/NO and your kitchen count updates instantly.',
  },
  {
    icon: BellRing,
    title: 'Rent due reminders',
    description:
      'Polite automated nudges before due date — with read receipts and payment links tracked in one place.',
  },
  {
    icon: Users,
    title: 'Tenant management',
    description:
      'Rooms, deposits, agreements, and move-in/out dates — structured profiles instead of scattered chats.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food menu management',
    description:
      'Plan weekly menus, share with tenants, and align procurement with actual meal confirmations.',
  },
  {
    icon: ClipboardList,
    title: 'Maintenance requests',
    description:
      'Tenants raise tickets on WhatsApp; you assign, comment, and close — full history per room.',
  },
  {
    icon: LayoutDashboard,
    title: 'Payment tracking dashboard',
    description:
      'See who paid, who is late, and projected cash flow across your properties in real time.',
  },
  {
    icon: Home,
    title: 'Real-time occupancy',
    description:
      'Beds booked vs vacant, notices served, and upcoming vacancies — always current, never guessed.',
  },
  {
    icon: BarChart3,
    title: 'Smart notifications',
    description:
      'Digest summaries for owners, instant alerts for urgent complaints, and quiet hours for tenants.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Product"
          title="Everything you need to run a tight ship"
          description="From the first hello on WhatsApp to the last rupee reconciled — Countin keeps owners, tenants, and staff aligned."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.description}
              delay={i * 0.04}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
