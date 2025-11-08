import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Dl1vCzRjJhwgelbI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">
            Find the franchise that fits your future
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Browse opportunities, compare investments, and connect with brands across industries.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#search" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Start exploring
            </a>
            <a href="#how-it-works" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white text-slate-900 shadow border border-slate-200 font-medium hover:bg-slate-50 transition">
              How it works
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white" />
    </section>
  );
}
