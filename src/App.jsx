import { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import FranchiseList from './components/FranchiseList';
import HowItWorks from './components/HowItWorks';

const SAMPLE_DATA = [
  {
    id: 'f1',
    name: 'FreshBite Cafe',
    category: 'food',
    description: 'Healthy fast-casual bowls, wraps, and smoothies with a tech-enabled ordering experience.',
    investment: 'medium',
    locations: ['US', 'EU'],
    units: 120,
    founded: 2014,
    rating: 4.6,
    tags: ['healthy', 'fast-casual', 'delivery']
  },
  {
    id: 'f2',
    name: 'Spark Laundry',
    category: 'services',
    description: 'Automated laundromats with app-based access, cashless payments, and 24/7 monitoring.',
    investment: 'high',
    locations: ['US', 'APAC'],
    units: 85,
    founded: 2010,
    rating: 4.4,
    tags: ['automation', 'recurring', 'semi-absentee']
  },
  {
    id: 'f3',
    name: 'GearUp Fitness',
    category: 'services',
    description: 'Boutique training studios with AI-powered coaching and small group classes.',
    investment: 'medium',
    locations: ['EU', 'US'],
    units: 60,
    founded: 2016,
    rating: 4.7,
    tags: ['fitness', 'subscription', 'community']
  },
  {
    id: 'f4',
    name: 'Nook Home Goods',
    category: 'retail',
    description: 'Modern home essentials brand with compact retail footprints and strong e-commerce support.',
    investment: 'low',
    locations: ['EU', 'APAC', 'US'],
    units: 200,
    founded: 2008,
    rating: 4.3,
    tags: ['retail', 'lifestyle', 'omnichannel']
  }
];

export default function App() {
  const [items, setItems] = useState(SAMPLE_DATA);

  const handleQuickSearch = (segment) => {
    if (!segment) {
      setItems(SAMPLE_DATA);
      return;
    }
    setItems(SAMPLE_DATA.filter(i => i.category === segment));
    const el = document.getElementById('search');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const subtitle = useMemo(() => `${items.length} opportunities`, [items.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header onQuickSearch={handleQuickSearch} />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Filters data={SAMPLE_DATA} onFilter={setItems} />
          </div>
          <div className="lg:col-span-3">
            <div className="flex items-end justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Featured franchises</h2>
                <p className="text-slate-600">{subtitle}</p>
              </div>
              <div className="hidden sm:block text-sm text-slate-500">Transparent details, verified brands</div>
            </div>
            <FranchiseList items={items} />
          </div>
        </div>
        <HowItWorks />
      </main>
      <footer className="py-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} FranchiseFinder — All rights reserved.</footer>
    </div>
  );
}
