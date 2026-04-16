import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Hotel, Mountain, Waves, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const ecoPartners = [
  {
    id: 1,
    name: "Jetwing Vil Uyana",
    type: "Eco-Hotel",
    location: "Sigiriya",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop",
    desc: "A unique lifestyle hotel where nature and luxury coexist in a man-made wetland."
  },
  {
    id: 2,
    name: "98 Acres Resort & Spa",
    type: "Eco-Hotel",
    location: "Ella",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
    desc: "An elegant, chic hotel that stands on a scenic 98-acre tea estate."
  },
  {
    id: 3,
    name: "Rainforest Ecolodge",
    type: "Eco-Hotel",
    location: "Sinharaja",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800&auto=format&fit=crop",
    desc: "Experience the Sinharaja Rainforest in a sustainable and immersive way."
  }
];

const ecoActivities = [
  {
    icon: <Mountain className="w-6 h-6" />,
    title: "Knuckles Trekking",
    desc: "Guided treks through the Knuckles Mountain Range with local naturalists."
  },
  {
    icon: <Waves className="w-6 h-6" />,
    title: "Whale Watching",
    desc: "Responsible whale watching in Mirissa with certified eco-operators."
  },
  {
    icon: <TreePine className="w-6 h-6" />,
    title: "Mangrove Kayaking",
    desc: "Explore the Madu River mangroves in a low-impact, non-motorized way."
  }
];

export default function EcoTourism() {
  const { t } = useTranslation();

  return (
    <div className="pt-40 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6">Responsible Travel</h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">{t('eco.title')}</h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed">{t('eco.desc')}</p>
          </motion.div>
        </div>

        {/* Eco Hotels Section */}
        <div className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary">
              <Hotel size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-primary">Featured Eco-Hotels</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecoPartners.map((hotel, index) => (
              <motion.div 
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flat-card group p-0 overflow-hidden"
              >
                <div className="h-72 overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{hotel.type}</span>
                      <h3 className="text-2xl font-display font-bold text-primary mt-2 group-hover:text-secondary transition-colors">{hotel.name}</h3>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-full">{hotel.location}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">{hotel.desc}</p>
                  <Link to="/book" className="text-secondary font-bold text-sm hover:text-primary transition-colors flex items-center gap-2 group/btn">
                    Inquire for Stay & Transport <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Eco Activities Section */}
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl shadow-blue-950/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-12">Experiences</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-20 leading-tight">Sustainable Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {ecoActivities.map((activity, index) => (
                <div key={index} className="space-y-8 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    {activity.icon}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-display font-bold">{activity.title}</h4>
                    <p className="text-slate-400 leading-relaxed font-light">{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
