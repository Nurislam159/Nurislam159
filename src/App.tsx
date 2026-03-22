import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { DealsSection } from './components/DealsSection';
import { CartDrawer } from './components/CartDrawer';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';
import { MENU_ITEMS, DEALS } from './constants';
import { MenuItem, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="flex-1">
        <Hero />
        <DealsSection deals={DEALS} />
        <MenuSection items={MENU_ITEMS} onAddToCart={addToCart} />
        
        {/* App Download Promo */}
        <section className="bg-kfc-red py-20 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-5xl md:text-7xl mb-6">Skip the Queue</h2>
              <p className="text-xl mb-8 opacity-90">
                Download the KFC app for exclusive mobile-only deals, 
                faster ordering, and loyalty points on every bite.
              </p>
              <div className="flex flex-wrap gap-4">
                <img src="https://picsum.photos/seed/as/200/60" alt="App Store" className="h-12 cursor-pointer" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/gp/200/60" alt="Google Play" className="h-12 cursor-pointer" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="w-64 h-[500px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden relative">
                <img src="https://picsum.photos/seed/kfc-app/400/800" alt="App Mockup" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-2xl shadow-xl">
                    <img src="https://picsum.photos/seed/qr/150/150" alt="QR Code" className="w-32 h-32" referrerPolicy="no-referrer" />
                    <p className="text-center text-[10px] font-bold mt-2 text-kfc-black">SCAN TO DOWNLOAD</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <ChatWidget />

      {/* Sticky Mobile Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-black/5 p-4 z-40 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingBag className="text-kfc-red" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-kfc-red text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <span className="font-display font-bold text-sm uppercase">Cart</span>
        </div>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="bg-kfc-red text-white font-display uppercase px-6 py-2 rounded-full text-sm font-bold"
        >
          Order Now
        </button>
      </div>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] max-w-lg w-full overflow-hidden relative"
            >
              <button 
                onClick={() => setShowExitPopup(false)}
                className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full"
              >
                <X size={24} />
              </button>
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-kfc-red text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag size={40} />
                </div>
                <h2 className="text-5xl mb-4">Wait!</h2>
                <p className="text-gray-500 mb-8 text-lg">
                  Don't leave hungry! Use code <span className="font-bold text-kfc-red">STAY20</span> for 20% off your order right now.
                </p>
                <button 
                  onClick={() => setShowExitPopup(false)}
                  className="w-full kfc-button text-xl py-4"
                >
                  Get 20% Off Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function X({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
