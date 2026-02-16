import React from 'react';
import { ArrowRight, Crown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="images/hero_bg.jpg"
          onError={(e) => { e.currentTarget.src = "https://picsum.photos/1920/1080?grayscale&blur=2" }}
          alt="CrownWear Background" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Gradient Overlay for Text Readability - Dark gradient ensures white text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-brand-accent/50 bg-black/50 backdrop-blur-md animate-fade-in-up">
             <Crown className="w-4 h-4 text-brand-accent" />
             <span className="text-brand-accent font-bold tracking-widest uppercase text-xs">Your Crown, Your Story</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          WEAR YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">CROWN</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
          Premium caps and apparel designed for those who rule their own destiny.
          Customise your look and make a statement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#shop"
            onClick={(e) => scrollToSection(e, 'shop')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-black bg-brand-accent hover:bg-white transition-all duration-300 rounded-sm overflow-hidden"
          >
            <span className="relative flex items-center gap-2">
              SHOP COLLECTION <ArrowRight className="w-4 h-4" />
            </span>
          </a>
          <a 
            href="#ai-stylist"
            onClick={(e) => scrollToSection(e, 'ai-stylist')}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-brand-accent/50 hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300 rounded-sm backdrop-blur-sm shadow-sm"
          >
            AI STYLIST
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;