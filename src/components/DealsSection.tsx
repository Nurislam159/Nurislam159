import React from 'react';
import { Deal } from '../types';
import { motion } from 'motion/react';
import { Clock, Tag } from 'lucide-react';

interface DealsSectionProps {
  deals: Deal[];
}

export const DealsSection: React.FC<DealsSectionProps> = ({ deals }) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-kfc-red text-white rounded-full flex items-center justify-center">
            <Tag size={24} />
          </div>
          <h2 className="text-4xl md:text-6xl">Exclusive Deals</h2>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory">
          {deals.map((deal, idx) => (
            <motion.div 
              key={deal.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="min-w-[300px] md:min-w-[600px] snap-center"
            >
              <div className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden group shadow-xl">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <div className="flex items-center gap-2 text-kfc-gold font-display uppercase font-bold text-sm mb-2">
                    <Clock size={16} />
                    {deal.expiry}
                  </div>
                  <h3 className="text-3xl md:text-5xl text-white mb-4 leading-tight">{deal.title}</h3>
                  <p className="text-white/70 text-sm md:text-lg mb-8 max-w-md">{deal.description}</p>
                  <button className="kfc-button">
                    Redeem Offer
                  </button>
                </div>

                <div className="absolute top-8 right-8 bg-kfc-red text-white w-20 h-20 rounded-full flex flex-col items-center justify-center font-display leading-none shadow-lg transform -rotate-12">
                  <span className="text-xs font-bold">SAVE</span>
                  <span className="text-2xl font-black">{deal.discount}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
