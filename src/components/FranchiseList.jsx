import { Star, MapPin, DollarSign, Building2 } from 'lucide-react';

function FranchiseCard({ item }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="p-5 flex items-start gap-4">
        <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
          {item.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold truncate">{item.name}</h3>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="h-4 w-4 fill-current"/> <span className="text-sm font-medium">{item.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="mt-1 text-slate-600 line-clamp-2">{item.description}</p>
          <div className="mt-3 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 text-sm text-slate-600">
            <div className="inline-flex items-center gap-1.5"><DollarSign className="h-4 w-4 text-slate-500"/> <span className="font-medium capitalize">{item.investment}</span> investment</div>
            <div className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-slate-500"/> {item.locations.join(', ')}</div>
            <div className="inline-flex items-center gap-1.5"><Building2 className="h-4 w-4 text-slate-500"/> {item.units}+ units</div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            {item.tags.map(t => (
              <span key={t} className="px-2 py-1 rounded-full bg-slate-100 text-xs text-slate-700">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 flex items-center justify-between">
        <div className="text-sm text-slate-500">Founded {item.founded}</div>
        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700">View details</button>
      </div>
    </div>
  );
}

export default function FranchiseList({ items }) {
  if (!items.length) {
    return (
      <div className="text-center text-slate-600 py-16">No franchises match your filters. Try broadening your search.</div>
    );
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <FranchiseCard key={item.id} item={item} />
      ))}
    </div>
  );
}
