import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AIStylist from './components/AIStylist';
import { PRODUCTS } from './constants';
import { CartItem, Product } from './types';
import { X, Trash2, Instagram, Twitter, Facebook, ArrowUp, Send, ShoppingBag, MapPin, Phone, Mail, Crown, Minus, Plus } from 'lucide-react';

const OWNER_WHATSAPP = "233550008170";

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'trucker' | 'full' | 'tshirt'>('all');
  
  // Checkout Form State
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    address: '',
    customText: '' // Global custom text note, though individual items track "hasCustomText"
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const addToCart = (product: Product, hasCustomText: boolean) => {
    setCart(prev => {
      // Find item with same ID AND same customization status
      const existing = prev.find(item => item.id === product.id && item.hasCustomText === hasCustomText);
      
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.hasCustomText === hasCustomText)
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, hasCustomText }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number, hasCustomText?: boolean) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.hasCustomText === hasCustomText)));
  };

  const updateQuantity = (id: number, hasCustomText: boolean | undefined, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item => 
      (item.id === id && item.hasCustomText === hasCustomText)
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const cartTotal = cart.reduce((acc, item) => {
    const itemPrice = item.hasCustomText ? item.price + 10 : item.price;
    return acc + (itemPrice * item.quantity);
  }, 0);

  const getCategoryLabel = (cat: string) => {
    switch(cat) {
        case 'trucker': return 'Trucker Cap';
        case 'full': return 'Snapback';
        case 'tshirt': return 'T-Shirt';
        default: return cat;
    }
  };

  const handleWhatsAppOrder = () => {
    if (!checkoutForm.name || !checkoutForm.phone || !checkoutForm.address) {
      alert("Please fill in your delivery details.");
      return;
    }

    let message = `*New Order from CrownWear Website*\n\n`;
    message += `👤 *Name:* ${checkoutForm.name}\n`;
    message += `📞 *Phone:* ${checkoutForm.phone}\n`;
    message += `📍 *Address:* ${checkoutForm.address}\n\n`;
    message += `🛒 *Order Summary:*\n`;

    cart.forEach(item => {
      const itemPrice = item.hasCustomText ? item.price + 10 : item.price;
      const subtotal = itemPrice * item.quantity;
      const customNote = item.hasCustomText ? " [CUSTOM TEXT]" : "";
      message += `- ${item.name} (${getCategoryLabel(item.category)})${customNote} x ${item.quantity} = GHS ${subtotal.toFixed(2)}\n`;
    });

    if (checkoutForm.customText) {
       message += `\n📝 *Custom Text Details:* ${checkoutForm.customText}\n`;
    }

    message += `\n💰 *Grand Total:* GHS ${cartTotal.toFixed(2)}\n\n`;
    message += `_Please confirm availability and payment details._`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encodedMessage}`, "_blank");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.message) return;

    const message = `*Inquiry from CrownWear Website*\n\n👤 *Name:* ${contactForm.name}\n📧 *Email:* ${contactForm.email}\n\n💬 *Message:*\n${contactForm.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encodedMessage}`, "_blank");
    
    setContactForm({ name: '', email: '', message: '' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-page text-brand-ink font-sans selection:bg-brand-accent selection:text-brand-black">
      <Header cart={cart} setIsCartOpen={setIsCartOpen} />
      
      <main>
        <Hero />
        
        {/* Shop Section */}
        <section id="shop" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-2 text-brand-ink">THE COLLECTION</h2>
              <div className="h-1 w-20 bg-brand-accent"></div>
            </div>
            
            <div className="flex flex-wrap gap-2 md:gap-4 mt-6 md:mt-0 justify-center md:justify-end">
              {[
                { id: 'all', label: 'All' },
                { id: 'trucker', label: 'Trucker (Net)' },
                { id: 'full', label: 'Snapback' },
                { id: 'tshirt', label: 'T-Shirts' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border transition-all ${
                    activeCategory === cat.id 
                      ? 'bg-brand-accent text-brand-black border-brand-accent' 
                      : 'bg-white text-brand-sub border-brand-line hover:border-brand-ink hover:text-brand-ink'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* Brand Story / About */}
        <section id="about" className="py-24 bg-brand-card border-y border-brand-line relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative group">
                <div className="absolute inset-0 bg-brand-accent/20 rounded-lg transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                 <img 
                  src="/images/about_story.jpg" 
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/800/600?grayscale" }}
                  alt="Workshop" 
                  className="rounded-lg shadow-2xl filter contrast-125 relative z-10 border border-brand-line"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-display text-4xl font-bold mb-6 text-brand-ink">CRAFTED FOR THE <span className="text-brand-accent">BOLD</span></h2>
                <p className="text-brand-sub text-lg mb-6 leading-relaxed">
                  CrownWear isn't just a brand; it's a statement. Born from the hustle and designed for those who wear their ambition. We believe that what you wear is the prologue to your story.
                </p>
                <p className="text-brand-sub text-lg mb-8 leading-relaxed">
                  Our caps come in two distinct styles: the classic Trucker with breathable mesh for those street vibes, and the Premium Full Cap for a solid, structured look. All customizable.
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-brand-line pt-8">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-brand-ink mb-1">50k+</span>
                    <span className="text-xs text-brand-accent uppercase tracking-widest">Sold</span>
                  </div>
                   <div className="text-center">
                    <span className="block text-3xl font-bold text-brand-ink mb-1">4.9</span>
                    <span className="text-xs text-brand-accent uppercase tracking-widest">Rating</span>
                  </div>
                   <div className="text-center">
                    <span className="block text-3xl font-bold text-brand-ink mb-1">24/7</span>
                    <span className="text-xs text-brand-accent uppercase tracking-widest">Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AIStylist />

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-brand-ink">GET IN <span className="text-brand-accent">TOUCH</span></h2>
            <p className="text-brand-sub max-w-2xl mx-auto">
              Have a question about a custom order or need help with sizing? Reach out to us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-brand-card rounded-lg border border-brand-line hover:border-brand-accent/50 transition-colors shadow-sm">
                <div className="p-3 bg-brand-accent/10 rounded-full">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 text-brand-ink">Phone</h3>
                  <p className="text-brand-sub">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+233550008170" className="text-brand-ink hover:text-brand-accent transition-colors font-medium mt-1 block">
                    +233 55 000 8170
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-brand-card rounded-lg border border-brand-line hover:border-brand-accent/50 transition-colors shadow-sm">
                <div className="p-3 bg-brand-accent/10 rounded-full">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 text-brand-ink">Email</h3>
                  <p className="text-brand-sub">Our friendly team is here to help.</p>
                  <a href="mailto:Crownwear13@gmail.com" className="text-brand-ink hover:text-brand-accent transition-colors font-medium mt-1 block">
                    Crownwear13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-brand-card rounded-lg border border-brand-line hover:border-brand-accent/50 transition-colors shadow-sm">
                <div className="p-3 bg-brand-accent/10 rounded-full">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1 text-brand-ink">Location</h3>
                  <p className="text-brand-sub">Come say hello at our HQ.</p>
                  <p className="text-brand-ink mt-1">Tarkwa, Ghana</p>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="flex flex-col items-center justify-center p-8 bg-brand-ink rounded-xl shadow-2xl transform transition-transform hover:scale-105 duration-300 relative mt-8 text-white">
                 {/* Top Logo */}
                 <div className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center mb-6 shadow-lg border-4 border-brand-accent absolute -top-8">
                     <Crown className="w-6 h-6 text-brand-black" />
                     <span className="text-[6px] text-black tracking-widest mt-0.5">CROWN</span>
                 </div>

                 <div className="mt-6 text-center mb-4">
                     <h3 className="font-bold text-xl text-white">CROWN WEAR CAPS 🧢</h3>
                     <p className="text-xs text-gray-300 font-medium uppercase tracking-wide mt-1">WhatsApp Group</p>
                 </div>

                 <div className="relative bg-white p-1 rounded-lg">
                     {/* QR Code */}
                     <img 
                        src="/images/whatsapp_qr.jpg" 
                        alt="Scan to Join"
                        className="w-48 h-48 object-contain mix-blend-multiply"
                        onError={(e) => { e.currentTarget.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/233550008170" }}
                     />
                     {/* Center Icon Overlay */}
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-white p-1 rounded-full shadow-sm">
                            <div className="bg-[#25D366] p-1.5 rounded-full">
                                <Phone className="w-5 h-5 text-white fill-white" />
                            </div>
                        </div>
                     </div>
                 </div>

                 <h2 className="font-display font-bold text-4xl text-brand-accent mt-4 tracking-wider">SCAN ME</h2>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-card p-8 rounded-lg border border-brand-line shadow-sm">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-sub mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full bg-white border border-brand-line rounded p-3 text-brand-ink focus:border-brand-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-sub mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full bg-white border border-brand-line rounded p-3 text-brand-ink focus:border-brand-accent focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-sub mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full bg-white border border-brand-line rounded p-3 text-brand-ink focus:border-brand-accent focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-ink text-white font-bold py-4 rounded hover:bg-brand-accent hover:text-brand-black transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black pt-16 pb-8 border-t border-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="font-display font-bold text-2xl tracking-wider text-white mb-4 block">CROWN<span className="text-brand-accent">WEAR</span></span>
              <p className="text-gray-500 max-w-sm mb-6">
                Your Crown, Your Story. Premium streetwear for the modern king and queen.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-accent hover:text-black transition-colors text-white border border-gray-800">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-accent hover:text-black transition-colors text-white border border-gray-800">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-accent hover:text-black transition-colors text-white border border-gray-800">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm text-brand-accent">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-brand-accent transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Caps</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">T-Shirts</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm text-brand-accent">Help</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-brand-accent transition-colors">Delivery</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">WhatsApp Order</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-brand-accent transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} CrownWear. All rights reserved.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-gray-500 hover:text-brand-accent text-sm transition-colors"
            >
              Back to Top <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="p-6 border-b border-brand-line flex items-center justify-between bg-white">
              <h2 className="text-xl font-bold font-display text-brand-ink">YOUR CART ({cart.reduce((a,c) => a + c.quantity, 0)})</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-brand-sub hover:text-brand-ink">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center text-brand-sub mt-20 flex flex-col items-center">
                  <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
                  <p>Your cart is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-brand-accent font-bold hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                    {cart.map((item, idx) => {
                         const itemPrice = item.hasCustomText ? item.price + 10 : item.price;
                         return (
                            <div key={`${item.id}-${item.hasCustomText}`} className="flex gap-4 p-3 bg-brand-card rounded-lg border border-brand-line">
                                <img 
                                    src={item.image} 
                                    onError={(e) => { e.currentTarget.src = "https://picsum.photos/200/200?grayscale" }}
                                    alt={item.name} 
                                    className="w-20 h-20 object-cover rounded bg-white" 
                                />
                                <div className="flex-1">
                                <h3 className="font-bold text-brand-ink text-sm">{item.name}</h3>
                                <p className="text-brand-sub text-xs mb-1 capitalize">{getCategoryLabel(item.category)}</p>
                                {item.hasCustomText && (
                                    <span className="inline-block bg-brand-accent/20 text-brand-black text-[10px] px-1.5 py-0.5 rounded mb-2">
                                        + Custom Text
                                    </span>
                                )}
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center border border-brand-line rounded bg-white">
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.hasCustomText, item.quantity - 1)}
                                            className="px-2 py-1 text-brand-sub hover:bg-gray-100 disabled:opacity-30 transition-colors"
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus className="w-3 h-3" />
                                        </button>
                                        <span className="px-2 text-xs font-bold text-brand-ink border-x border-brand-line min-w-[20px] text-center">
                                            {item.quantity}
                                        </span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.hasCustomText, item.quantity + 1)}
                                            className="px-2 py-1 text-brand-sub hover:bg-gray-100 transition-colors"
                                        >
                                            <Plus className="w-3 h-3" />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-brand-accent font-bold text-sm">GHS {(itemPrice * item.quantity).toFixed(0)}</span>
                                        <button 
                                        onClick={() => removeFromCart(item.id, item.hasCustomText)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                        <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                         );
                    })}

                    {/* Checkout Form */}
                    <div className="border-t border-brand-line pt-6 mt-6">
                        <h3 className="font-bold text-brand-ink mb-4 flex items-center gap-2">
                             <Send className="w-4 h-4 text-brand-accent" /> Delivery Details
                        </h3>
                        <div className="space-y-4">
                            <input 
                                type="text" 
                                placeholder="Your Name"
                                value={checkoutForm.name}
                                onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})}
                                className="w-full bg-brand-card border border-brand-line rounded p-3 text-sm text-brand-ink focus:border-brand-accent focus:outline-none transition-colors"
                            />
                            <input 
                                type="tel" 
                                placeholder="Phone Number (e.g. 055...)"
                                value={checkoutForm.phone}
                                onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})}
                                className="w-full bg-brand-card border border-brand-line rounded p-3 text-sm text-brand-ink focus:border-brand-accent focus:outline-none transition-colors"
                            />
                            <textarea 
                                placeholder="Delivery Address"
                                value={checkoutForm.address}
                                onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})}
                                className="w-full bg-brand-card border border-brand-line rounded p-3 text-sm text-brand-ink focus:border-brand-accent focus:outline-none transition-colors h-20 resize-none"
                            />
                             {/* Check if any item needs custom text */}
                            {cart.some(i => i.hasCustomText) && (
                                <textarea 
                                    placeholder="Enter the custom text you want on your cap(s)..."
                                    value={checkoutForm.customText}
                                    onChange={(e) => setCheckoutForm({...checkoutForm, customText: e.target.value})}
                                    className="w-full bg-brand-card border border-brand-line rounded p-3 text-sm text-brand-ink focus:border-brand-accent focus:outline-none transition-colors h-20 resize-none"
                                />
                            )}
                        </div>
                    </div>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-brand-line bg-white z-10">
                <div className="flex justify-between items-center mb-6 text-xl font-bold">
                  <span className="text-brand-ink">TOTAL</span>
                  <span className="text-brand-accent">GHS {cartTotal.toFixed(2)}</span>
                </div>
                <button 
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-600 text-white py-4 font-bold tracking-widest hover:bg-green-500 transition-colors uppercase rounded flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Order via WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
