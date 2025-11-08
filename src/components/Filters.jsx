import { useEffect, useMemo, useState } from 'react';
import { DollarSign, MapPin, Settings2 } from 'lucide-react';

export default function Filters({ data, onFilter }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [investment, setInvestment] = useState('any');
  const [location, setLocation] = useState('any');

  const categories = useMemo(() => ['all', ...Array.from(new Set(data.map(d => d.category)))], [data]);

  useEffect(() => {
    const filtered = data.filter(item => {
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' ? true : item.category === category;
      const matchesInvestment = investment === 'any' ? true : item.investment === investment;
      const matchesLocation = location === 'any' ? true : item.locations.includes(location);
      return matchesQuery && matchesCategory && matchesInvestment && matchesLocation;
    });
    onFilter?.(filtered);
  }, [query, category, investment, location, data, onFilter]);

  return (
    <div id="search" className="w-full bg-white shadow-sm border border-slate-200 rounded-xl p-4 sm:p-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium text-slate-600">Search</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Brand, keywords, industry..."
            className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600">Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
            {categories.map(c => (
              <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 flex items-center gap-1"><DollarSign className="h-4 w-4"/>Investment</label>
          <select value={investment} onChange={e => setInvestment(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
            <option value="any">Any</option>
            <option value="low">Low (&lt; $50k)</option>
            <option value="medium">Medium ($50k - $250k)</option>
            <option value="high">High (&gt; $250k)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 flex items-center gap-1"><MapPin className="h-4 w-4"/>Location</label>
          <select value={location} onChange={e => setLocation(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
            <option value="any">Any</option>
            <option value="US">US</option>
            <option value="EU">EU</option>
            <option value="APAC">APAC</option>
          </select>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"><Settings2 className="h-4 w-4"/>More filters</button>
      </div>
    </div>
  );
}
