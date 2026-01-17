import { Menu, Search, ShoppingBag } from 'lucide-react';

export default function MinimalNav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 mix-blend-difference text-paper">
      <div className="flex items-center gap-6">
        <button className="hover:opacity-70 transition-opacity">
          <Menu className="w-6 h-6" />
        </button>
        <span className="hidden md:block font-sans text-xs tracking-widest uppercase">
          Menu
        </span>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-serif text-2xl font-bold tracking-tighter">NOIR ET BLANC</h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="hover:opacity-70 transition-opacity">
          <Search className="w-5 h-5" />
        </button>
        <button className="hover:opacity-70 transition-opacity flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          <span className="hidden md:block font-sans text-xs tracking-widest uppercase">
            (0)
          </span>
        </button>
      </div>
    </nav>
  );
}