import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User, Crown } from 'lucide-react';
import { ChatMessage } from '../types';
import { getStyleAdvice } from '../services/geminiService';

const AIStylist: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Welcome to the throne. I'm your CrownStylist. Need help picking the right cap color or a fire slogan for your custom text? Let's talk.",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getStyleAdvice(input);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      text: responseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <section id="ai-stylist" className="py-24 bg-brand-page border-t border-brand-line relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-600/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-brand-accent font-bold tracking-widest uppercase text-sm mb-3">
                <Sparkles className="w-4 h-4" /> AI Powered
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-ink mb-4">
                CONSULT THE <span className="text-brand-accent">STYLIST</span>
            </h2>
            <p className="text-brand-sub max-w-lg mx-auto">
                Unsure which color matches your fit? Need a quote for your custom cap? Ask our AI expert.
            </p>
        </div>

        <div className="bg-white border border-brand-line rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px] ring-1 ring-black/5">
          
          {/* Chat Window */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-gray-50"
          >
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === 'assistant' ? 'bg-brand-accent text-black' : 'bg-white text-brand-ink border border-brand-line'}`}>
                  {msg.role === 'assistant' ? <Crown className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>
                <div 
                  className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'assistant' 
                      ? 'bg-white text-brand-ink rounded-tl-none border border-brand-line' 
                      : 'bg-brand-ink text-white font-medium rounded-tr-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0">
                  <Crown className="w-5 h-5 text-black animate-pulse" />
                </div>
                <div className="bg-white text-brand-sub p-4 rounded-2xl rounded-tl-none text-sm flex items-center gap-2 border border-brand-line shadow-sm">
                   <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                   <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                   <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-brand-line">
            <form onSubmit={handleSend} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message the stylist..."
                className="w-full bg-gray-50 border border-brand-line text-brand-ink rounded-full py-4 pl-6 pr-14 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder-brand-sub"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-2 p-2 bg-brand-accent text-brand-black rounded-full hover:bg-brand-ink hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;