'use client'

import { useState } from 'react'
import { ArrowRight, CalendarDays, ChevronDown, MapPin, Search, Users, X } from 'lucide-react'

type SearchFormProps = { onSearch?: () => void }

export function SearchForm({ onSearch }: SearchFormProps) {
  const [differentDropoff, setDifferentDropoff] = useState(false)
  const [driverAge, setDriverAge] = useState('30')

  return (
    <section id="search" className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8" aria-labelledby="search-title">
      <div className="rounded-3xl bg-white p-3 shadow-[0_24px_70px_-28px_rgba(15,43,80,0.38)] ring-1 ring-slate-200/80 sm:p-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-2 pb-4">
            <div>
              <h2 id="search-title" className="text-base font-bold text-slate-950">Search rental cars</h2>
              <p className="mt-0.5 text-xs text-slate-500">Compare prices from trusted providers</p>
            </div>
            <label className="flex cursor-pointer items-center gap-2 text-xs font-semibold text-slate-600">
              <input type="checkbox" checked={differentDropoff} onChange={(e) => setDifferentDropoff(e.target.checked)} className="size-4 accent-blue-600" />
              Return car to a different location
            </label>
          </div>
          <div className="grid gap-3 lg:grid-cols-[1.15fr_1.15fr_1fr_1fr_0.65fr_auto]">
            <Field icon={<MapPin />} label="Pick-up location" value="Bucharest Airport" />
            <Field icon={<MapPin />} label="Drop-off location" value={differentDropoff ? 'Choose location' : 'Bucharest Airport'} />
            <Field icon={<CalendarDays />} label="Pick-up" value="Tue, Dec 8 · 10:00" />
            <Field icon={<CalendarDays />} label="Drop-off" value="Tue, Dec 15 · 10:00" />
            <label className="flex min-h-16 cursor-pointer flex-col justify-center rounded-2xl border border-slate-200 bg-slate-50/70 px-4 transition hover:border-blue-300">
              <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400"><Users className="size-3.5" /> Driver age</span>
              <select value={driverAge} onChange={(e) => setDriverAge(e.target.value)} className="mt-1 w-full appearance-none bg-transparent text-sm font-semibold text-slate-800 outline-none"><option>25</option><option>30</option><option>35</option><option>40+</option></select>
            </label>
            <button onClick={onSearch} className="flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:px-5">Search cars <Search className="size-4" /></button>
          </div>
          <div className="flex items-center gap-2 px-2 text-xs text-slate-500"><span className="flex size-4 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700">✓</span> Free cancellation on most bookings <span className="text-slate-300">·</span> No hidden fees</div>
        </div>
      </div>
    </section>
  )
}

function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <label className="flex min-h-16 cursor-pointer flex-col justify-center rounded-2xl border border-slate-200 bg-slate-50/70 px-4 transition hover:border-blue-300"><span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{icon}{label}</span><span className="mt-1 truncate text-sm font-semibold text-slate-800">{value}</span></label>
}
