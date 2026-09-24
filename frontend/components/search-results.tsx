'use client'

import { useMemo, useState } from 'react'
import { ChevronDown, Filter, SlidersHorizontal } from 'lucide-react'
import { CarOffer, CarOfferCard } from './car-offer-card'

const sampleOffers: CarOffer[] = [
  { id: '12331', provider: 'Avis', carName: 'Toyota Yaris', category: 'Mini', transmission: 'Automatic', seats: 5, totalPrice: 315, currency: 'EUR', unlimitedMileage: true, deposit: 200, excess: 300 },
  { id: '12332', provider: 'Budget', carName: 'Hyundai i20', category: 'Economy', transmission: 'Manual', seats: 5, totalPrice: 245, currency: 'USD', unlimitedMileage: true, deposit: 250, excess: 500 },
  { id: '12333', provider: 'Sixt', carName: 'Skoda Fabia', category: 'Compact', transmission: 'Automatic', seats: 5, totalPrice: 350, currency: 'USD', unlimitedMileage: true, deposit: 300, excess: 600 },
]

export function SearchResults() {
  const [sort, setSort] = useState('Recommended')
  const offers = useMemo(() => sort === 'Price: low to high' ? [...sampleOffers].sort((a, b) => a.totalPrice - b.totalPrice) : sampleOffers, [sort])
  return <section className="mx-auto max-w-6xl px-5 pb-20 pt-14 lg:px-8" aria-labelledby="results-title"><div className="mb-5 flex flex-wrap items-end justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Your options</p><h2 id="results-title" className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Cars available in Bucharest</h2><p className="mt-2 text-sm text-slate-500"><strong className="text-slate-700">{offers.length} cars found</strong> · Tue, Dec 8 – Tue, Dec 15</p></div><div className="flex items-center gap-2"><button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300"><Filter className="size-4" /> <span className="hidden sm:inline">Filters</span></button><label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm"><SlidersHorizontal className="size-4 text-slate-400" /><span className="hidden text-xs font-medium text-slate-400 sm:inline">Sort by</span><select value={sort} onChange={(e) => setSort(e.target.value)} className="appearance-none bg-transparent pr-3 outline-none"><option>Recommended</option><option>Price: low to high</option></select><ChevronDown className="-ml-5 size-4 pointer-events-none" /></label></div></div><div className="flex flex-col gap-4">{offers.map((offer) => <CarOfferCard key={offer.id} offer={offer} />)}</div></section>
}
