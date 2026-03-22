import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/kfc-hero/1920/1080" 
          alt="KFC Hero" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl md:text-9xl text-white mb-6 leading-[0.85]">
            Finger Lickin' <br />
            <span className="text-kfc-red">Good</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg font-medium">
            The Colonel's secret recipe is back and better than ever. 
            Order now for delivery or pick-up at your nearest store.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="kfc-button flex items-center gap-2 group">
              Order Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-kfc-black font-display uppercase px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-bold">
              Find a Store
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 hidden lg:flex w-32 h-32 bg-kfc-gold rounded-full items-center justify-center border-4 border-white shadow-xl"
      >
        <div className="text-center font-display font-black text-kfc-black leading-none">
          <div className="text-2xl">NEW</div>
          <div className="text-sm">DEALS</div>
        </div>
      </motion.div>
    </section>
  );
};
