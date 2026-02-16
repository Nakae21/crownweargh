import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Crown } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  setIsCartOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ cart, setIsCartOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Shop', id: 'shop' },
    { name: 'About', id: 'about' },
    { name: 'AI Stylist', id: 'ai-stylist', highlight: true },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-brand-line shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="mr-2 p-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 group-hover:bg-brand-accent/20 transition-all">
                <Crown className="h-6 w-6 text-brand-accent" />
            </div>
            <span className="font-display font-bold text-2xl tracking-wider text-brand-ink">CROWN<span className="text-brand-accent">WEAR</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    link.highlight 
                      ? 'text-brand-accent hover:text-brand-ink' 
                      : 'text-brand-sub hover:text-brand-accent'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button 
              className="relative p-2 text-brand-sub hover:text-brand-accent transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-accent rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-brand-sub hover:text-brand-ink"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-line">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  link.highlight
                    ? 'text-brand-accent hover:text-brand-ink'
                    : 'text-brand-sub hover:text-brand-ink'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;