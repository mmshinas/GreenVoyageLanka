import { motion } from 'framer-motion';
import { ShieldCheck, Plane, Clock, Sparkles, Banknote, Headphones, Target, Globe, Award, Quote } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-40 min-h-screen">
      {/* About Us Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-14 h-14 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center">
                  <Plane size={28} />
                </div>
                <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em]">Our Foundation</h2>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">20+ Years of Aviation Excellence</h3>
                  <p className="text-xl text-slate-500 font-light leading-relaxed">Green Voyage Lanka is a boutique travel partnership founded and managed by two Senior Aviation Professionals with over 20 years of active service in international flight operations.</p>
                  <p className="text-xl text-slate-500 font-light leading-relaxed mt-6">Our careers have been dedicated to the "Front-End" of global aviation—where safety, precision logistics, and world-class passenger care intersect. We have now transitioned those same uncompromising standards to the roads of Sri Lanka.</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4">Our Mission</h4>
                  <p className="text-xl text-slate-500 font-light leading-relaxed">To bridge the gap between your international flight and your island destination. Based in Gampaha, just minutes from Colombo International Airport (BIA), we act as your local "Ground Control," ensuring that your first and last miles in Sri Lanka are the most secure and comfortable of your entire trip.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flat-card p-12 md:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl -mr-40 -mt-40"></div>
              
              <h3 className="text-3xl font-display font-bold text-primary mb-10 relative z-10">The Professional Standard</h3>
              <p className="text-slate-500 mb-12 relative z-10 text-lg font-light leading-relaxed">We don’t just provide transport; we provide a managed security environment built on three pillars that standard taxi services cannot replicate:</p>
              
              <div className="space-y-12 relative z-10">
                <div className="flex gap-8">
                  <div className="w-14 h-14 shrink-0 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center"><Target size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-3">Operational Precision</h4>
                    <p className="text-slate-500 font-light leading-relaxed">We treat every booking like a flight departure. With real-time flight tracking, we ensure your vehicle is ready the moment you arrive.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-14 h-14 shrink-0 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center"><ShieldCheck size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-3">Safety-First Protocol</h4>
                    <p className="text-slate-500 font-light leading-relaxed">Our background is rooted in rigorous aviation safety training. Every vehicle undergoes multi-point safety inspections before every journey.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-14 h-14 shrink-0 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center"><Globe size={24} /></div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-3">International Etiquette</h4>
                    <p className="text-slate-500 font-light leading-relaxed">Having served a global clientele for 20 years, we understand the nuances of UK, European, and Asian service expectations.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Guarantee Section */}
      <section className="py-40 bg-primary text-white relative overflow-hidden shadow-2xl shadow-blue-950/20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -ml-40 -mb-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/5 text-accent rounded-3xl mb-10 backdrop-blur-sm border border-white/10">
              <Award size={40} />
            </div>
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-10">Our Guarantee</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-10 leading-[1.1]">Aviation-Grade Reliability</h3>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">With over 20 years of active service in international aviation operations, we don't just promise quality—we engineer it.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
            {[
              { icon: <Clock size={32} />, title: "Punctuality Promise", desc: "We track your flight in real-time. Your driver will be at the arrivals gate before you are, guaranteed." },
              { icon: <Sparkles size={32} />, title: "Cabin-Clean Standard", desc: "Every vehicle undergoes a multi-point cleanliness and safety inspection before pickup. Aviation-standard hygiene." },
              { icon: <Banknote size={32} />, title: "Transparent Pricing", desc: "The price you see is the price you pay. No hidden highway tolls, no surcharges, and no last-minute adjustments." },
              { icon: <Headphones size={32} />, title: "24/7 Command Support", desc: "You are never alone on the road. With Live GPS Monitoring and our 24-hour Professional Hotline." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-2xl font-display font-bold mb-4">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Co-Founders Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-40"
          >
            <div className="text-center mb-24">
              <h3 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6">Leadership</h3>
              <h4 className="text-3xl md:text-5xl font-display font-bold mb-4">Meet Our Co-Founders</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="flex flex-col items-center text-center group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl mb-10 relative">
                  <img 
                    src="https://drive.google.com/thumbnail?id=1VIhFJ2_XdXq6xw2XNpcAHnzMowAYwvOI&sz=w600" 
                    alt="Shinas Mansoor" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h5 className="text-3xl font-display font-bold mb-2">Shinas Mansoor</h5>
                <p className="text-accent font-bold text-[10px] uppercase tracking-[0.3em]">Co-Founder</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl mb-10 relative">
                  <img 
                    src="https://drive.google.com/thumbnail?id=1E2SIEb0_WsTgCB1SpGS9xaPnAXZl0w8t&sz=w600" 
                    alt="Sehan Palliyaguru" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h5 className="text-3xl font-display font-bold mb-2">Sehan Palliyaguru</h5>
                <p className="text-accent font-bold text-[10px] uppercase tracking-[0.3em]">Co-Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center bg-white/5 p-16 md:p-24 rounded-[4rem] border border-white/10 backdrop-blur-xl relative overflow-hidden"
          >
            <Quote className="w-20 h-20 text-accent/20 mx-auto mb-12" />
            <p className="text-2xl md:text-5xl font-display font-bold leading-[1.2] text-white">
              “We spent two decades ensuring passenger safety at 35,000 feet. We guarantee the same dedication to your journey on the ground.”
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
