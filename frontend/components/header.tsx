import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, CarFront, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="#top" className="flex items-center gap-2.5" aria-label="Wayfare home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <CarFront className="size-5" strokeWidth={2.3} />
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-950">wayfare</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <Link href="#search" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">Car rentals</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">How it works</Link>
          <Link href="#help" className="text-sm font-medium text-slate-600 transition hover:text-blue-600">Help</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:block">Sign in</button>
          <button className="flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden" aria-label="Open menu"><Menu className="size-5" /></button>
          <ArrowRight className="hidden size-4 text-slate-400 sm:block" />
        </div>
      </div>
    </header>
  )
}

export function LogoMark() {
  return <span className="inline-flex size-7 items-center justify-center rounded-lg bg-blue-600 text-white"><CarFront className="size-4" /></span>
}

export function ProviderLogo({ name }: { name: string }) {
  return <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-extrabold tracking-tight text-slate-700">{name.slice(0, 2).toUpperCase()}</span>
}

type HeaderFooterProps = { children?: ReactNode }
export function HeaderFooter({ children }: HeaderFooterProps) { return <>{children}</> }
