import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-wa-500 text-white shadow-lg shadow-wa-500/25 hover:bg-wa-600 focus-visible:ring-wa-500',
  secondary:
    'bg-brand-950 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 focus-visible:ring-slate-900',
  ghost: 'bg-white/80 text-slate-800 ring-1 ring-slate-200/80 hover:bg-slate-50',
  outline:
    'bg-transparent text-wa-700 ring-2 ring-wa-500/40 hover:bg-brand-50 focus-visible:ring-wa-500',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
