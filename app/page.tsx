'use client';
import { useState, useEffect, useRef } from 'react';
import * as Lucide from 'lucide-react';
import Image from 'next/image';

const useScrollReveal = (threshold = 0.15) => {
  const [v, setV] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setV(true), { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, v };
};

function SafeImage({ src, alt, fill, className, priority }: any) {
  const [e, setE] = useState(false);
  if (e || !src) return <div className={`bg-neutral-900 flex items-center justify-center ${className}`}><Lucide.ImageOff className="opacity-20" /></div>;
  return <Image src={src} alt={alt} fill={fill} className={className} priority={priority} onError={() => setE(true)} unoptimized />;
}

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section id="hero" className="pt-40 pb-20 bg-black">
        <div className="container mx-auto p-4">
          <h1 className="text-6xl font-heading tracking-tighter leading-[0.9] text-white">Elegance on a Plate.</h1>
          <p className="text-2xl font-sans text-white">Curated by the Official Moniniola of Lagos. Where culinary law meets your sweetest moments.</p>
          <button className="bg-primary py-2 px-4 text-white">Order Now</button>
        </div>
      </section>
      <section id="features" className="pt-20 pb-40 bg-neutral-900">
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-heading tracking-tighter leading-[0.9] text-white">The Dunny's Standard</h2>
          <p className="text-2xl font-sans text-white">Why Lagosians choose the Moniniola touch.</p>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <Lucide.Scale className="text-2xl text-white" />
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">Legal Precision</h3>
              <p className="text-white">Every recipe is approached with the meticulous detail of a legal brief by Odusote Moniniola Esq.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <Lucide.PartyPopper className="text-2xl text-white" />
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">Bespoke Catering</h3>
              <p className="text-white">Tailored menus for both intimate indoor gatherings and grand outdoor celebrations.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <Lucide.Heart className="text-2xl text-white" />
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">Halal Excellence</h3>
              <p className="text-white">Strictly Halal ingredients served with a spirit of excellence and a love for God.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <Lucide.MapPin className="text-2xl text-white" />
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">Ikorodu’s Finest</h3>
              <p className="text-white">The premium choice for quality pastries and small chops in the heart of Ikorodu.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="pt-40 pb-20 bg-black">
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-heading tracking-tighter leading-[0.9] text-white">The Woman Behind the Whisk</h2>
          <p className="text-2xl font-sans text-white">Meet Odusote Moniniola Esq.—the Official Moniniola of Lagos. A practicing lawyer, a dedicated chef, a proud Muslimah, and a devoted mother. Her passion for God and the soulful melodies of Tope Alabi fuel her kitchen. She brings a unique blend of legal discipline and culinary artistry to every samosa and spring roll.</p>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">1k+ Followers</h3>
              <p className="text-white">On social media, where the Dunny's Bakers & Chops community thrives.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">500+ Events Served</h3>
              <p className="text-white">From weddings to corporate events, Dunny's Bakers & Chops has been the trusted catering partner for numerous occasions.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">100% Halal Certified</h3>
              <p className="text-white">Dunny's Bakers & Chops is committed to serving only the finest, Halal-certified ingredients.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="products" className="pt-20 pb-40 bg-neutral-900">
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-heading tracking-tighter leading-[0.9] text-white">Our Menu Highlights</h2>
          <p className="text-2xl font-sans text-white">Gourmet chops and pastries that define 'Sweet Moments'.</p>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">The Executive Chops Box</h3>
              <p className="text-white">A signature selection of samosas, spring rolls, peppered gizzard, and golden puff puff.</p>
              <p className="text-white">₦8,500</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">Jumbo Prawn Platter</h3>
              <p className="text-white">Butterfly king prawns seasoned with secret spices and grilled to perfection.</p>
              <p className="text-white">₦18,000</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">Artisan Pastry Basket</h3>
              <p className="text-white">Flaky buttery meat pies and sweet pastries baked fresh every morning.</p>
              <p className="text-white">₦12,000</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">Event Catering Service</h3>
              <p className="text-white">Professional indoor and outdoor catering for weddings, birthdays, and corporate events.</p>
              <p className="text-white">₦5,000/Guest</p>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="pt-40 pb-20 bg-black">
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-heading tracking-tighter leading-[0.9] text-white">Captured Moments</h2>
          <p className="text-2xl font-sans text-white">A glimpse into our world of flavor and grace.</p>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4">
            <SafeImage src="https://images.unsplash.com/photo-1499715217757-2aa48ed7e593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZm9vZHxlbnwwfDB8fHwxNzgwMzE4MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="brown and white food on black ceramic plate" className="object-cover h-64 w-full" />
            <SafeImage src="https://images.unsplash.com/photo-1616671276441-2f2c277b8bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZm9vZHxlbnwwfDB8fHwxNzgwMzE4MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="green vegetable on white ceramic plate" className="object-cover h-64 w-full" />
            <SafeImage src="https://images.unsplash.com/photo-1452967712862-0cca1839ff27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHw0fHxlbGVnYW50JTIwZm9vZHxlbnwwfDB8fHwxNzgwMzE4MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="steak with vegetables on plate" className="object-cover h-64 w-full" />
            <SafeImage src="https://images.unsplash.com/photo-1675670601305-3e04ec45430f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwzfHxlbGVnYW50JTIwZm9vZHxlbnwwfDB8fHwxNzgwMzE4MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="a plate with food on it" className="object-cover h-64 w-full" />
          </div>
        </div>
      </section>
      <section id="testimonials" className="pt-20 pb-40 bg-neutral-900">
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-heading tracking-tighter leading-[0.9] text-white">Voices of Satisfaction</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">Barrister Temi</h3>
              <p className="text-white">The attention to detail is unmatched. You can tell a lawyer's mind organized this platter!</p>
              <p className="text-white">Corporate Client</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">Alhaja Fatima</h3>
              <p className="text-white">Best small chops in Ikorodu. The prawns were succulent and perfectly spiced.</p>
              <p className="text-white">Regular Customer</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <h3 className="text-2xl font-heading tracking-tighter leading-[0.9] text-white">Mrs. Okon</h3>
              <