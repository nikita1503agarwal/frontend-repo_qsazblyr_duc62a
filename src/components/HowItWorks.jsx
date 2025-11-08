import { Search, Gauge, MessageCircle, BadgeCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Explore franchises',
      desc: 'Browse curated brands across industries with transparent details and requirements.'
    },
    {
      icon: Gauge,
      title: 'Match by fit',
      desc: 'Filter by investment, category, and territory to find what fits your goals.'
    },
    {
      icon: MessageCircle,
      title: 'Talk to brands',
      desc: 'Request information and connect with franchise development teams.'
    },
    {
      icon: BadgeCheck,
      title: 'Open and grow',
      desc: 'Get guidance through onboarding and launch your first location.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
        <p className="mt-2 text-slate-600">Everything you need to choose the right franchise with confidence.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
