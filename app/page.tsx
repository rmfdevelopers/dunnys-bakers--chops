'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  UtensilsCrossed, 
  ChefHat, 
  Award, 
  Users, 
  PartyPopper, 
  CheckCircle, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Loader2, 
  CheckCheck, 
  ImageOff,
  Menu,
  X,
  Heart
} from 'lucide-react';

// DESIGN DECISIONS:
// Layout Energy: editorial
// Depth Treatment: glassmorphic
// Divider Style: D-RULE
// Typography Personality: refined

// --- Hooks ---

const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
};

// --- Components ---

function SafeImage({ src, alt, fill, width, height, className, priority, fallbackClassName }: {
  src: string; alt: string; fill?: boolean; width?: number; height?: number;
  className?: string; priority?: boolean; fallbackClassName?: string;
}) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-black to-[#1a1a1a] ${fallbackClassName ?? className ?? ''}`}>
        <ImageOff size={28} className="text-white/10" />
      </div>
    );
  }
  return (
    <Image 
      src={src} 
      alt={alt} 
      fill={fill}
      width={!fill ? (width ?? 800) : undefined}
      height={!fill ? (height ?? 600) : undefined}
      className={className} 
      priority={priority}
      onError={() => setError(true)} 
    />
  );
}

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 border-2 border-secondary flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <span className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 font-heading font-bold text-secondary text-xl">D</span>
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight text-white ml-2">Dunny&apos;s</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Home', 'Menu', 'The Founder', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm font-medium text-white/70 hover:text-secondary transition-colors uppercase tracking-widest">{item}</a>
            ))}
            <a href="#contact" className="bg-secondary text-black px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all">
              Book Your Event
            </a>
          </div>

          <button onClick={() => setMobileOpen(true)} className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[60] transition-transform duration-500 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-black border-l border-white/10 p-10 flex flex-col">
          <button onClick={() => setMobileOpen(false)} className="self-end text-white mb-12">
            <X size={32} />
          </button>
          <div className="flex flex-col gap-8">
            {['Home', 'Menu', 'The Founder', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setMobileOpen(false)} className="text-3xl font-heading font-bold text-white hover:text-secondary transition-colors">{item}</a>
            ))}
          </div>
          <div className="mt-auto">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Official Moniniola</p>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block w-full bg-secondary text-black text-center py-4 rounded-xl font-bold">Book Now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Page() {
  const brand = {
    name: "Dunny's Bakers & Chops",
    tagline: "Where great meals meet sweet moments",
    description: "Exquisite pastries, small chops, and premium event catering curated by the Official Moniniola of Lagos. From legal halls to the kitchen, we bring precision and passion to every bite.",
    industry: "Food & Catering",
    region: "Nigeria"
  };

  const products = [
    { name: "Grand Chops Platter", description: "A curated selection of samosas, spring rolls, and honey-glazed puff-puff.", price: "₦8,500", url: "https://images.unsplash.com/photo-1665554837563-3782d21a676b?q=80&w=1080" },
    { name: "Jumbo Garlic Prawns", description: "Succulent prawns infused with garlic butter and signature local spices.", price: "₦18,000", url: "https://images.unsplash.com/photo-1729655107129-959fa0157f8f?q=80&w=1080" },
    { name: "The Moniniola Box", description: "An assortment of artisan meat pies and gourmet sweet pastries.", price: "₦12,000", url: "https://images.unsplash.com/photo-1566698629409-787a68fc5724?q=80&w=1080" },
    { name: "Signature Event Cake", description: "Bespoke tiered cakes designed for weddings and high-profile events.", price: "₦45,000", url: "https://images.unsplash.com/photo-1676734626918-b0663902259f?q=80&w=1080" }
  ];

  const features = [
    { title: "Event Excellence", description: "Flawless catering for indoor and outdoor celebrations of all sizes.", icon: UtensilsCrossed },
    { title: "Artisan Craft", description: "Handcrafted pastries baked fresh daily with premium ingredients.", icon: ChefHat },
    { title: "Lagos' Finest", description: "Curated by the 'Official Moniniola', ensuring a touch of elegance in every dish.", icon: Award }
  ];

  const testimonials = [
    { name: "Adebayo Balogun", text: "The small chops were the highlight of our wedding. Fresh, hot, and incredibly tasty!", role: "Groom" },
    { name: "Fatima Yusuf", text: "Moniniola's attention to detail is unmatched. She brings a certain elegance to catering.", role: "Corporate Event Planner" },
    { name: "Oluchi Okafor", text: "Best spring rolls in Ikorodu, hands down. You can taste the quality in every bite.", role: "Regular Customer" }
  ];

  const stats = [
    { number: "1k+", label: "Social Followers" },
    { number: "500+", label: "Events Catered" },
    { number: "100%", label: "Halal Certified" }
  ];

  // Reveal assignments
  const heroReveal = useScrollReveal();
  const featureReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const productReveal = useScrollReveal();
  const testimonialReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <main className="relative">
      <Nav />

      {/* HERO SECTION (HR-A) */}
      <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-black via-black/95 to-secondary/10 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 max-w-5xl max-h-[70vh] rounded-[4rem] overflow-hidden rotate-3">
          <SafeImage src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?q=80&w=1080" alt={brand.name} fill className="object-cover" priority />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <h1 className={`font-heading text-6xl md:text-9xl font-bold text-white leading-[0.95] tracking-tight transition-all duration-1000 ${heroReveal.isVisible ? 'opacity-100 skew-y-0 translate-y-0' : 'opacity-0 skew-y-2 translate-y-8'}`}>
            Culinary Elegance <br />
            <span className="text-secondary italic">for Every Occasion</span>
          </h1>
          <p className="text-white/50 mt-8 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Taste the harmony of passion and precision, crafted in the heart of Ikorodu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="#contact" className="bg-secondary text-black px-10 py-4 font-bold text-base hover:brightness-110 hover:scale-105 transition-all duration-300 rounded-full">
              Book Your Event
            </a>
            <a href="#products" className="border border-white/20 text-white px-10 py-4 font-medium text-base hover:bg-white/10 transition-all duration-300 rounded-full">
              Explore Menu
            </a>
          </div>
        </div>
      </section>

      {/* D-RULE DIVIDER */}
      <div className="py-16 flex items-center gap-8 px-8 max-w-6xl mx-auto">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
        <span className="text-secondary font-medium text-xs tracking-[0.4em] uppercase whitespace-nowrap opacity-70">
          Official Moniniola of Lagos
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      </div>

      {/* FEATURES SECTION (F-BENTO) */}
      <section id="features" ref={featureReveal.ref} className="py-28 px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <h2 className="font-heading text-5xl font-bold text-white mb-4">The Dunny&apos;s Standard</h2>
            <p className="text-white/40 text-lg">Why we are the preferred choice for Lagos&apos; elite celebrations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`md:col-span-2 glass-panel rounded-3xl p-10 flex flex-col justify-between group min-h-[300px] transition-all duration-700 ${featureReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <UtensilsCrossed size={28} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-heading text-4xl font-bold text-white">{features[0].title}</h3>
                <p className="text-white/50 mt-3 text-lg leading-relaxed">{features[0].description}</p>
              </div>
            </div>
            {features.slice(1).map((f, i) => (
              <div key={i} style={{ transitionDelay: `${(i + 1) * 150}ms` }} className={`glass-panel rounded-3xl p-8 flex flex-col justify-between min-h-[300px] transition-all duration-700 ${featureReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <f.icon size={24} className="text-secondary/60" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white">{f.title}</h3>
                  <p className="text-white/45 text-sm mt-3 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (V3 - Horizontal Split) */}
      <section id="thefounder" ref={aboutReveal.ref} className="py-28 bg-[#080808] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-1000 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group">
              <SafeImage src="https://images.unsplash.com/photo-1499715217757-2aa48ed7e593?q=80&w=1080" alt="Odusote Moniniola" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <p className="text-secondary font-bold tracking-widest uppercase text-xs mb-1">Soul of the Kitchen</p>
                <h3 className="font-heading text-3xl font-bold text-white">Odusote Moniniola Esq.</h3>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h2 className="font-heading text-5xl font-bold text-white mb-8">Precision Meets Passion</h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                Odusote Moniniola Esq. is not just a chef; she is a legal mind, a devoted mum, a proud Muslimah, and a lover of God. Known as the &apos;Official Moniniola of Lagos,&apos; she blends her disciplined legal background with her creative love for baking.
              </p>
              <p className="italic font-heading text-2xl text-secondary/80">
                &ldquo;Every recipe is infused with the same soul and rhythm that moves my spirit.&rdquo;
              </p>
              <p>
                A die-hard fan of Tope Alabi, she weaves spiritual warmth and legal precision into a culinary narrative where every bite tells a story of dedication. Sharp delivery, nationwide.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="font-heading text-3xl font-bold text-secondary">{s.number}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION (P-STAGGER) */}
      <section id="menu" ref={productReveal.ref} className="py-28 px-6 bg-primary overflow-hidden">
        <div className="max-w-6xl mx-auto mb-24 text-center">
          <h2 className="font-heading text-6xl font-bold text-white mb-4">Signature Menu</h2>
          <p className="text-white/40 text-xl font-light">A taste of sweet moments and savory meals.</p>
        </div>
        <div className="max-w-6xl mx-auto space-y-32">
          {products.map((p, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20 transition-all duration-700 ${productReveal.isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/3] relative rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/5">
                  <SafeImage src={p.url} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                </div>
                <div className={`absolute -bottom-6 ${i % 2 === 0 ? '-right-6' : '-left-6'} w-1/2 h-1/2 bg-secondary/10 rounded-full -z-10 blur-3xl`} />
              </div>
              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                <span className="font-medium text-secondary text-xs tracking-widest uppercase mb-4 block">
                  0{i + 1} — Gourmet Selection
                </span>
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">{p.name}</h3>
                <p className="text-white/50 mt-5 text-lg leading-relaxed">{p.description}</p>
                <div className="mt-8 flex flex-col gap-4">
                  <span className="text-3xl font-heading font-bold text-secondary">{p.price}</span>
                  <a href="#contact" className="bg-secondary text-black px-10 py-4 rounded-full font-bold w-fit hover:brightness-110 transition-all">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS (T-MASONRY) */}
      <section ref={testimonialReveal.ref} className="py-28 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-bold text-white">Client Love</h2>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {testimonials.map((t, i) => (
              <div key={i} style={{ transitionDelay: `${i * 80}ms` }} className={`break-inside-avoid glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-secondary/20 transition-all duration-700 ${testimonialReveal.isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}`}>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(n => <Heart key={n} size={14} className="fill-secondary text-secondary" />)}
                </div>
                <p className="text-white/80 text-lg leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-8">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm border border-secondary/20">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white">{t.name}</p>
                    <p className="text-white/40 text-xs mt-0.5 tracking-widest uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (C1) */}
      <section id="contact" ref={contactReveal.ref} className="py-28 px-6 bg-primary">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div className={`transition-all duration-1000 ${contactReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="font-heading text-6xl font-bold text-white mb-6">Secure <br /> Your Date</h2>
            <p className="text-white/45 text-lg leading-relaxed max-w-sm mb-10">
              Let&apos;s create something beautiful together. Reach out for bespoke catering and pastry consultations.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/60 hover:text-secondary transition-colors group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-secondary/40 transition-colors">
                  <Instagram size={18} />
                </div>
                <span className="text-sm font-medium">@dunnys_bakers</span>
              </div>
              <div className="flex items-start gap-4 text-white/60">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-medium leading-relaxed mt-2">Ikorodu, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {sent ? (
              <div className="flex flex-col items-center justify-center p-16 text-center animate-scaleIn glass-panel rounded-[2.5rem] shadow-2xl relative overflow-hidden h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-50" />
                <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-8 border border-secondary/40 relative z-10">
                  <CheckCheck size={40} className="text-secondary" />
                </div>
                <h3 className="font-heading text-4xl font-bold text-white mb-4 relative z-10">Inquiry Received</h3>
                <p className="text-white/60 max-w-sm text-lg relative z-10">Thank you. The Official Moniniola team will review your request and get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 glass-panel p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="font-heading text-3xl font-bold text-white mb-10">Send a Message</h3>
                  <div className="space-y-4">
                    {[
                      { id: 'name', type: 'text', label: 'Full Name' },
                      { id: 'email', type: 'email', label: 'Email Address' },
                      { id: 'phone', type: 'text', label: 'Phone Number' }
                    ].map(field => (
                      <div key={field.id} className="relative group">
                        <input
                          type={field.type}
                          placeholder={field.label}
                          value={form[field.id as keyof typeof form]}
                          onChange={e => setForm(prev => ({ ...prev, [field.id]: e.target.value }))}
                          required={field.id !== 'phone'}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/30 text-sm outline-none transition-all duration-300 focus:bg-white/10 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50"
                        />
                      </div>
                    ))}
                    <div className="relative group">
                      <textarea 
                        rows={5} 
                        placeholder="Tell us about your event..."
                        value={form.message}
                        onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/30 text-sm outline-none resize-none transition-all duration-300 focus:bg-white/10 focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full mt-10 bg-secondary text-black py-5 rounded-2xl font-bold text-lg hover:brightness-110 transition-all duration-300 disabled:opacity-60 flex justify-center items-center gap-3 group"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin" size={24} /> Processing...
                      </span>
                    ) : (
                      <>
                        Book My Date <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border-2 border-secondary flex items-center justify-center rotate-45">
                <span className="-rotate-45 font-heading font-bold text-secondary text-sm">D</span>
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-white ml-1">Dunny&apos;s</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Exquisite pastries and premium event catering curated by the Official Moniniola of Lagos.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Founder', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/40 hover:text-secondary text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="text-white/40 text-sm">Ikorodu, Lagos</li>
              <li>
                <a href="https://instagram.com/dunnys_bakers" className="text-white/40 hover:text-secondary text-sm transition-colors">@dunnys_bakers</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4">
              <li className="text-white/40 text-sm">Official Moniniola Esq.</li>
              <li className="text-white/40 text-sm">© {new Date().getFullYear()} All Rights Reserved</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}