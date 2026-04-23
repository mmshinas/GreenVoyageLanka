import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Leaf, Star, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  "https://drive.google.com/thumbnail?id=1EQOoYLYDlNau3g2j0TYZ3q3Wpgm0T-Uh&sz=w2000",
  "https://drive.google.com/thumbnail?id=1N_wktxNvNY_7eWrxlN9ZoAzEidRaqP0Y&sz=w2000",
  "https://drive.google.com/thumbnail?id=1UywTwbWkt3oI_qk628MQ6SQaqSUx2Y9S&sz=w2000",
  "https://drive.google.com/thumbnail?id=1V3rGZyBPw9iFN9P2ufWDxAwLVfZV86Ww&sz=w2000",
  "https://drive.google.com/thumbnail?id=1aKDOggvkXYYnC9tHcnCFUsf2o0T5nxIC&sz=w2000",
  "https://drive.google.com/thumbnail?id=1nyI4sMyNQA7Paxnc-y83UVrrp01TGFap&sz=w2000",
  "https://drive.google.com/thumbnail?id=1r142rb9njYoihN4IrzQ3xQvkK7cd3EWg&sz=w2000",
  "https://drive.google.com/thumbnail?id=1sJvewBHLlMz-dNTitphzJt6LsGDvOM0p&sz=w2000",
  "https://drive.google.com/thumbnail?id=1zVvtKY6RqZ5YZaNWpMF_ggbyVNVcfMf_&sz=w2000",
  "https://drive.google.com/thumbnail?id=1JxEvqYSaPCsO-v0fF801W-vRUGNYJu0z&sz=w2000",
  "https://drive.google.com/thumbnail?id=1AtpeyaS9aeAJ4iNz7iEwzSB2j7N2451s&sz=w2000"
];

export default function Home() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-950">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Sri Lanka scenic drive" 
              className="w-full h-full object-cover absolute inset-0 opacity-60"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80 z-10 pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase mb-8 border border-white/20">
              The Ultimate Island Experience
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-10 leading-[0.9] tracking-tighter">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col gap-6 justify-center items-center">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
                <Link to="/tours" className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest text-white border border-white/30 hover:bg-white hover:text-primary transition-all duration-500 text-center">
                  Explore Tours
                </Link>
                <Link to="/airport-pickup" className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest text-white border border-white/30 hover:bg-white hover:text-primary transition-all duration-500 text-center">
                  Airport Pick-Up
                </Link>
              </div>
              <Link to="/book" className="btn-primary w-full sm:w-auto text-center px-16">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="max-w-3xl mb-24">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6">Our Commitment</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">{t('why.title')}</h3>
            <p className="text-xl text-slate-500 font-light leading-relaxed">We provide more than just a ride; we offer a gateway to the soul of Sri Lanka with professional guidance and absolute reliability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flat-card"
            >
              <div className="w-12 h-12 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center mb-10">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">{t('why.crew')}</h4>
              <p className="text-slate-500 leading-relaxed text-sm font-light">Our drivers are certified professionals with years of experience and fluent English, acting as your personal concierge on the road.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flat-card"
            >
              <div className="w-12 h-12 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center mb-10">
                <Leaf size={24} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">{t('why.eco')}</h4>
              <p className="text-slate-500 leading-relaxed text-sm font-light">We partner with verified eco-hotels and sustainable activity providers to ensure your visit supports local conservation efforts.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flat-card"
            >
              <div className="w-12 h-12 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center mb-10">
                <Star size={24} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">{t('why.premium')}</h4>
              <p className="text-slate-500 leading-relaxed text-sm font-light">Our fleet is maintained to aviation standards, ensuring every mile is traveled in absolute comfort and safety.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flat-card"
            >
              <div className="w-12 h-12 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center mb-10">
                <Navigation size={24} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">Total Confidence</h4>
              <p className="text-slate-500 leading-relaxed text-sm font-light">Equipped with real-time GPS monitoring and 24/7 Concierge Support, ensuring your journey is tracked for safety from start to finish.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
