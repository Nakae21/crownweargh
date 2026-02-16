import React, { useState } from 'react';
import { Plus, Type, Image as ImageIcon } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product, hasCustomText: boolean, hasCustomDesign: boolean) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [hasCustomText, setHasCustomText] = useState(false);
  const [hasCustomDesign, setHasCustomDesign] = useState(false);
  
  // Pricing: Custom Text (+10), Custom Design (+10)
  const displayPrice = product.price + (hasCustomText ? 10 : 0) + (hasCustomDesign ? 10 : 0);

  const getCategoryDisplay = (cat: string) => {
      switch(cat) {
          case 'trucker': return 'TRUCKER';
          case 'full': return 'SNAPBACK CAP';
          default: return cat.toUpperCase();
      }
  };

  return (
    <div className="group relative bg-brand-card overflow-hidden rounded-lg border border-brand-line transition-all duration-300 hover:border-brand-accent/50 hover:shadow-lg flex flex-col h-full">
      <div className="aspect-[1/1] overflow-hidden bg-gray-100 relative">
        <img 
          src={product.image} 
          onError={(e) => { 
            // Fallback to a placeholder with the product name if the local image is missing
            e.currentTarget.src = `https://placehold.co/400x400/f3f4f6/111827?text=${encodeURIComponent(product.name)}` 
          }}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        {/* Category Tag */}
        <div className="absolute top-3 left-3">
             <span className="bg-white/90 backdrop-blur-md text-brand-ink text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm border border-brand-line shadow-sm">
                {getCategoryDisplay(product.category)}
             </span>
        </div>
        
        {/* Stickers if customized */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
            {hasCustomText && (
                 <div className="animate-in fade-in zoom-in duration-300">
                     <span className="bg-brand-accent text-brand-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-full shadow-lg border border-yellow-200">
                        + TEXT
                     </span>
                </div>
            )}
            {hasCustomDesign && (
                 <div className="animate-in fade-in zoom-in duration-300">
                     <span className="bg-brand-ink text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-full shadow-lg border border-gray-600">
                        + DESIGN
                     </span>
                </div>
            )}
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button 
                onClick={() => addToCart(product, hasCustomText, hasCustomDesign)}
                className="bg-brand-accent text-brand-black px-6 py-3 font-bold flex items-center gap-2 hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 rounded-full shadow-xl"
            >
                <Plus className="w-5 h-5" /> ADD TO CART
            </button>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-brand-ink font-display leading-tight">{product.name}</h3>
            <p className="text-lg font-bold text-brand-accent whitespace-nowrap">GHS {displayPrice.toFixed(0)}</p>
        </div>
        
        <p className="text-xs text-brand-sub mb-4 line-clamp-2 leading-relaxed flex-1">{product.description}</p>
        
        <div className="pt-4 mt-auto border-t border-brand-line space-y-2">
            {/* Custom Text Toggle */}
            <label className="flex items-center space-x-3 cursor-pointer group/check">
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${hasCustomText ? 'bg-brand-accent border-brand-accent text-black' : 'border-gray-400 group-hover/check:border-brand-accent'}`}>
                    {hasCustomText && <Plus className="w-3 h-3" strokeWidth={4} />}
                </div>
                <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={hasCustomText}
                    onChange={(e) => setHasCustomText(e.target.checked)}
                />
                <span className={`text-sm font-medium transition-colors ${hasCustomText ? 'text-brand-accent' : 'text-brand-sub group-hover/check:text-brand-ink'}`}>
                    Add Custom Text (+GHS 10)
                </span>
            </label>

            {/* Custom Design Toggle */}
            <label className="flex items-center space-x-3 cursor-pointer group/check">
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${hasCustomDesign ? 'bg-brand-ink border-brand-ink text-white' : 'border-gray-400 group-hover/check:border-brand-ink'}`}>
                    {hasCustomDesign && <Plus className="w-3 h-3" strokeWidth={4} />}
                </div>
                <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={hasCustomDesign}
                    onChange={(e) => setHasCustomDesign(e.target.checked)}
                />
                <span className={`text-sm font-medium transition-colors ${hasCustomDesign ? 'text-brand-ink font-bold' : 'text-brand-sub group-hover/check:text-brand-ink'}`}>
                    Add Custom Design (+GHS 10)
                </span>
            </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
