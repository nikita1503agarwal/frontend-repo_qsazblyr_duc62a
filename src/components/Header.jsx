import { Rocket, Store, Search } from "lucide-react";

export default function Header({ onQuickSearch }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-tight">FranchiseFinder</p>
            <p className="text-xs text-slate-500">Discover the perfect franchise</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => onQuickSearch?.("food")}
            className="text-sm px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition"
          >
            Food & Beverage
          </button>
          <button
            onClick={() => onQuickSearch?.("retail")}
            className="text-sm px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition"
          >
            Retail
          </button>
          <button
            onClick={() => onQuickSearch?.("services")}
            className="text-sm px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition"
          >
            Services
          </button>
        </div>
        <button
          onClick={() => onQuickSearch?.("")}
          className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          <Search className="h-4 w-4" />
          Explore
        </button>
      </div>
    </header>
  );
}
