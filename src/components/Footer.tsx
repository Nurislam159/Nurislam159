import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kfc-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h2 className="text-4xl text-kfc-red mb-6">KFC</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              The world's most popular chicken restaurant chain, specialized in Original Recipe®, Extra Crispy™, Kentucky Grilled Chicken® and Extra Crispy™ Tenders.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-kfc-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-kfc-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-kfc-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-kfc-red transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display uppercase font-bold mb-6 tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Deals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find a Store</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Colonel's Club</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase font-bold mb-6 tracking-wider">Support</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nutrition Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Allergen Info</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase font-bold mb-6 tracking-wider">Get the App</h4>
            <p className="text-white/60 text-sm mb-6">Download the KFC app for exclusive deals and faster ordering.</p>
            <div className="flex flex-col gap-3">
              <img src="https://picsum.photos/seed/appstore/200/60" alt="App Store" className="h-10 w-auto object-contain cursor-pointer" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/googleplay/200/60" alt="Google Play" className="h-10 w-auto object-contain cursor-pointer" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} KFC Corporation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
