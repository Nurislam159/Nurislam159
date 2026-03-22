import React from 'react';
import { ShoppingCart, Menu, User, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5 px-4 md:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 hover:bg-black/5 rounded-full">
          <Menu size={24} />
        </button>
        <div className="flex flex-col -space-y-1">
          <span className="text-kfc-red font-display text-3xl font-extrabold leading-none">KFC</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 font-display uppercase tracking-wider text-sm font-bold">
        <a href="#" className="hover:text-kfc-red transition-colors">Menu</a>
        <a href="#" className="hover:text-kfc-red transition-colors">Deals</a>
        <a href="#" className="hover:text-kfc-red transition-colors">Find a Store</a>
      </nav>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="hidden sm:flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full text-sm font-medium hover:bg-black/10 transition-all">
          <MapPin size={16} className="text-kfc-red" />
          <span>Find a Store</span>
        </button>
        <button className="p-2 hover:bg-black/5 rounded-full">
          <User size={24} />
        </button>
        <button 
          onClick={onOpenCart}
          className="relative p-2 hover:bg-black/5 rounded-full"
        >
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-0 right-0 bg-kfc-red text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white"
            >
              {cartCount}
            </motion.span>
          )}
        </button>
      </div>
    </header>
  );
};
