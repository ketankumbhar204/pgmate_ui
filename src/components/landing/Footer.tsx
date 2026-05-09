import { Building2, Mail, MessageCircle, PlayCircle, Share2 } from 'lucide-react'
import { Container } from '../ui/Container'

const footerLinks = [
  {
    title: 'Product',
    items: [
      { label: 'Features', href: '#features' },
      { label: 'WhatsApp automation', href: '#whatsapp' },
      { label: 'Dashboard', href: '#dashboard' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '#hero' },
      { label: 'Careers', href: '#cta' },
      { label: 'Contact', href: 'mailto:hello@PGMate.in' },
      { label: 'Privacy', href: '#cta' },
    ],
  },
]

/** Brand icons were removed from lucide-react; generic icons + aria-labels keep links clear. */
const social = [
  { icon: Share2, href: 'https://twitter.com', label: 'PGMate on X (Twitter)' },
  { icon: Building2, href: 'https://linkedin.com', label: 'PGMate on LinkedIn' },
  { icon: PlayCircle, href: 'https://youtube.com', label: 'PGMate on YouTube' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-flex items-center gap-2 font-semibold text-slate-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-wa-500 to-wa-dark text-white shadow-md shadow-wa-500/25">
                <MessageCircle className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <span className="flex flex-col leading-tight">
                <span>PGMate</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  PG Friend
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              WhatsApp-assisted operations for Indian PG owners, hostel managers, and small rental
              portfolios — without drowning in Excel.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {social.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-wa-500/40 hover:text-wa-700"
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </a>
                )
              })}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{group.title}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-slate-600 transition hover:text-wa-700"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} PGMate (PG Friend). All rights reserved.
          </p>
          <a
            href="mailto:hello@PGMate.in"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-wa-700"
          >
            <Mail className="h-4 w-4" aria-hidden />
            hello@PGMate.in
          </a>
        </div>
      </Container>
    </footer>
  )
}
