import { useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#problems', label: 'Challenges' },
  { href: '#features', label: 'Features' },
  { href: '#whatsapp', label: 'WhatsApp' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-wa-500 to-wa-dark text-white shadow-md shadow-wa-500/30">
            <MessageCircle className="h-5 w-5" strokeWidth={2} aria-hidden />
          </span>
          <span className="text-base">Countin</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" className="!py-2.5 !text-sm" onClick={() => {}}>
            Log in
          </Button>
          <Button className="!py-2.5 !text-sm" onClick={() => {}}>
            Start free trial
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-slate-700 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-4">
                <Button variant="ghost" className="w-full" onClick={() => setOpen(false)}>
                  Log in
                </Button>
                <Button className="w-full" onClick={() => setOpen(false)}>
                  Start free trial
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
