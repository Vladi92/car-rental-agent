import { ArrowRight, Check, Gauge, Settings2, Users } from 'lucide-react'
import { ProviderLogo } from './header'

export type CarOffer = { id: string; provider: string; carName: string; category: string; transmission: string; seats: number; totalPrice: number; currency: string; unlimitedMileage: boolean; deposit: number; excess: number }

export function CarOfferCard({ offer }: { offer: CarOffer }) {
  return <article className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60 md:grid-cols-[220px_1fr_auto]">
    <div className="relative flex min-h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/70 p-6 md:min-h-52">
      <div className="absolute -right-8 -top-12 size-36 rounded-full bg-blue-100/70 blur-2xl" />
      <div className="absolute bottom-3 left-4 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">{offer.category}</div>
      <div className="relative w-full max-w-[170px] text-slate-800 transition duration-300 group-hover:scale-105"><div className="mb-1 ml-7 h-5 w-24 rounded-t-[24px] border-4 border-b-0 border-slate-700/80" /><div className="h-11 rounded-[28px_34px_12px_12px] border-4 border-slate-700/80 bg-white/70 shadow-xl" /><div className="mt-[-5px] flex justify-between px-4"><span className="size-7 rounded-full border-4 border-slate-700 bg-slate-300" /><span className="size-7 rounded-full border-4 border-slate-700 bg-slate-300" /></div></div>
    </div>
    <div className="flex flex-col justify-between gap-5 p-5 lg:p-6">
      <div><div className="mb-3 flex items-center gap-2"><ProviderLogo name={offer.provider} /><span className="text-xs font-semibold text-slate-500">{offer.provider}</span></div><h3 className="text-xl font-bold tracking-tight text-slate-950">{offer.carName}</h3><div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-500"><span className="flex items-center gap-1.5"><Settings2 className="size-3.5 text-slate-400" />{offer.transmission}</span><span className="flex items-center gap-1.5"><Users className="size-3.5 text-slate-400" />{offer.seats} seats</span><span className="flex items-center gap-1.5"><Gauge className="size-3.5 text-slate-400" />{offer.unlimitedMileage ? 'Unlimited mileage' : 'Limited mileage'}</span></div></div>
      <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500"><span>Deposit <strong className="text-slate-700">€{offer.deposit}</strong></span><span>Excess <strong className="text-slate-700">€{offer.excess}</strong></span><span className="flex items-center gap-1 font-semibold text-emerald-600"><Check className="size-3.5" /> Free cancellation</span></div>
    </div>
    <div className="flex items-center justify-between gap-4 border-t border-slate-100 p-5 md:flex-col md:items-end md:justify-center md:border-l md:border-t-0 md:p-6"><div className="text-left md:text-right"><p className="text-xs font-medium text-slate-500">Total rental price</p><p className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">{offer.currency} {offer.totalPrice}</p><p className="text-[11px] text-slate-400">for 7 days · all taxes included</p></div><button className="flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-600">View deal <ArrowRight className="size-4" /></button></div>
  </article>
}
