/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, ChevronRight, MessageCircle, Mail } from 'lucide-react';
import './i18n';

// Pages
import Home from './pages/Home';
import Tours from './pages/Tours';
import EcoTourism from './pages/EcoTourism';
import Fleet from './pages/Fleet';
import Booking from './pages/Booking';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import About from './pages/About';
import AirportPickUp from './pages/AirportPickUp';

function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' },
    { code: 'zh', name: '中文' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-accent/30">
      {/* Global Watermark */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.04] flex items-center justify-center overflow-hidden grayscale contrast-125">
        <img 
          src="https://drive.google.com/thumbnail?id=1GoXRLrqEzErBEOzVEf4TLcwFrHNLAR_8&sz=w2000" 
          alt="Watermark" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 bg-slate-50/95 backdrop-blur-xl shadow-sm border-b border-slate-200/50 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4 group">
              <div className={`relative transition-all duration-500 ${scrolled ? 'w-12 h-12' : 'w-16 h-16 xl:w-20 xl:h-20'}`}>
                <img 
                  src="https://drive.google.com/thumbnail?id=1GoXRLrqEzErBEOzVEf4TLcwFrHNLAR_8&sz=w400" 
                  alt="Green Voyage Lanka Logo" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-bold tracking-tight text-primary leading-none transition-all duration-500 ${scrolled ? 'text-lg' : 'text-xl xl:text-2xl'}`}>
                  GREEN VOYAGE
                </span>
                <span className={`font-artistic italic text-primary transition-all duration-500 ${scrolled ? 'text-sm' : 'text-base xl:text-lg'}`}>
                  Lanka
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-2">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/tours', label: t('nav.tours') },
                { to: '/fleet', label: t('nav.fleet') },
                { to: '/about', label: 'About Us' }
              ].map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className={`px-6 py-3 rounded-xl font-bold tracking-widest text-[10px] uppercase transition-all duration-300 relative group overflow-hidden ${
                    location.pathname === link.to 
                      ? 'text-primary bg-blue-50/50 shadow-inner' 
                      : 'text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {location.pathname === link.to ? (
                    <motion.span 
                      animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1.02, 0.98] }} 
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      {link.label}
                    </motion.span>
                  ) : (
                    <span className="relative z-10">{link.label}</span>
                  )}
                </Link>
              ))}
              
              <div className="flex items-center gap-6 ml-4 pl-6 border-l border-slate-300">
                <select 
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  value={i18n.language}
                  className="bg-transparent border-none font-bold text-[10px] uppercase tracking-widest focus:ring-0 cursor-pointer text-primary hover:text-secondary transition-colors outline-none"
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code} className="text-primary">{lang.code}</option>
                  ))}
                </select>
                <Link to="/book" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-xl text-[10px] uppercase tracking-widest transition-all shadow-md hover:shadow-lg active:scale-95">
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="xl:hidden p-3 rounded-xl transition-all bg-slate-100 text-primary hover:bg-slate-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Nav - Moved outside of <nav> to prevent backdrop-filter containing block issues */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden fixed inset-0 z-[100] bg-primary text-white flex flex-col overflow-hidden"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-xl">
                  <img 
                    src="https://drive.google.com/thumbnail?id=1GoXRLrqEzErBEOzVEf4TLcwFrHNLAR_8&sz=w400" 
                    alt="Logo" 
                    className="w-8 h-8 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display font-bold tracking-tight text-lg">GREEN VOYAGE</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-8 space-y-8 overflow-y-auto py-8">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/tours', label: t('nav.tours') },
                { to: '/fleet', label: t('nav.fleet') },
                { to: '/about', label: 'About Us' },
                { to: '/book', label: 'Get a Quote' }
              ].map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    to={link.to} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-4xl sm:text-5xl font-display tracking-tight transition-colors ${location.pathname === link.to ? 'text-secondary italic' : 'text-white/80 hover:text-white'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Menu Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="px-8 pb-12 pt-8 border-t border-white/10"
            >
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-6">Select Language</p>
              <div className="flex gap-6">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => { i18n.changeLanguage(lang.code); setIsMenuOpen(false); }}
                    className={`text-sm font-medium transition-all ${i18n.language === lang.code ? 'text-secondary border-b border-secondary pb-1' : 'text-white/50 hover:text-white'}`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-primary text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-inner">
                  <img 
                    src="https://drive.google.com/thumbnail?id=1GoXRLrqEzErBEOzVEf4TLcwFrHNLAR_8&sz=w400" 
                    alt="Green Voyage Lanka Logo" 
                    className="w-16 h-16 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-display font-bold tracking-tight">GREEN VOYAGE</span>
                  <span className="font-artistic italic text-accent">Lanka</span>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg font-light">
                Crafting premium, driver-guided experiences that reveal the true soul of Sri Lanka.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-10">Navigation</h4>
              <ul className="space-y-5 text-slate-300 font-medium">
                <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all"></span>About Us</Link></li>
                <li><Link to="/tours" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all"></span>Guided Tours</Link></li>
                <li><Link to="/fleet" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all"></span>Our Fleet</Link></li>
                <li><Link to="/admin" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all"></span>Admin Portal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-10">Connect</h4>
              <ul className="space-y-6 text-slate-300">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <span className="text-sm leading-relaxed">Udugampola, Gampaha<br/>Sri Lanka</span>
                </li>
                <li>
                  <a href="https://wa.me/94722331313" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <MessageCircle size={18} className="text-accent" />
                    </div>
                    <span className="text-sm group-hover:text-white transition-colors">+94 72 233 1313</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/94757578071" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <MessageCircle size={18} className="text-accent" />
                    </div>
                    <span className="text-sm group-hover:text-white transition-colors">+94 75 757 8071</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@greenvoyagelanka.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <span className="text-sm group-hover:text-white transition-colors">info@greenvoyagelanka.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] uppercase tracking-[0.2em]">
            <p>&copy; {new Date().getFullYear()} Green Voyage Lanka. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/airport-pickup" element={<AirportPickUp />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </Layout>
    </Router>
  );
}
