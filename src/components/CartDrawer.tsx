import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove 
}) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-kfc-red" />
                <h2 className="text-3xl">Your Cart</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={32} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 font-medium">Your cart is empty.</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-kfc-red font-bold uppercase text-sm hover:underline"
                  >
                    Start Ordering
                  </button>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-gray-400 hover:text-kfc-red"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-black/10 rounded-full px-2 py-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-kfc-red"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-kfc-red"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-display font-black text-lg">£{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-black/5 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 font-medium">Subtotal</span>
                  <span className="text-2xl font-display font-black">£{subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full kfc-button text-xl py-4">
                  Checkout Now
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  Taxes and delivery calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
