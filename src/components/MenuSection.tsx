import React from 'react';
import { MenuItem } from '../types';
import { Plus, Flame } from 'lucide-react';
import { motion } from 'motion/react';

interface MenuSectionProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ items, onAddToCart }) => {
  const categories = Array.from(new Set(items.map(i => i.category)));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-6xl">Our Menu</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat}
                className="whitespace-nowrap px-6 py-2 rounded-full bg-white border border-black/5 font-display uppercase font-bold text-sm hover:bg-kfc-red hover:text-white transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="kfc-card group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Flame size={12} className="text-kfc-red" />
                  {item.calories} kcal
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl">{item.name}</h3>
                  <span className="font-display text-xl font-black text-kfc-red">£{item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {item.description}
                </p>
                <button 
                  onClick={() => onAddToCart(item)}
                  className="w-full kfc-button flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
