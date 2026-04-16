import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const tourPackages = [
  {
    id: 1,
    title: "Colombo City Discovery",
    duration: "1 Day",
    rating: 4.9,
    image: "https://drive.google.com/thumbnail?id=1mxc2RQNWlCdApTPZ0aYCok5TKFQjuyHb&sz=w1000",
    desc: "Explore the vibrant capital with a local expert. From colonial architecture to bustling markets."
  },
  {
    id: 2,
    title: "Cultural Triangle Explorer",
    duration: "3 Days",
    rating: 5.0,
    image: "https://drive.google.com/thumbnail?id=1-kojJ0mikuM5G-Z5ypD0ekzZYE80lQAC&sz=w1000",
    desc: "Visit Sigiriya, Dambulla, and Polonnaruwa with a dedicated driver-guide."
  },
  {
    id: 3,
    title: "Hill Country Retreat",
    duration: "2 Days",
    rating: 4.8,
    image: "https://drive.google.com/thumbnail?id=1wHSD_Sr-a7yqXECh2tGBO_16a-LCTw5l&sz=w1000",
    desc: "Scenic drives through tea estates, waterfalls, and the misty mountains of Nuwara Eliya."
  }
];

export default function Tours() {
  const { t } = useTranslation();

  return (
    <div className="pt-40 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6">Curated Experiences</h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">{t('tours.title')}</h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Hand-picked itineraries designed for comfort and discovery, led by our expert driver-guides.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour, index) => (
            <motion.div 
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flat-card group p-0 overflow-hidden"
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-primary text-xs">{tour.rating}</span>
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
                  <Clock size={14} />
                  {tour.duration}
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{tour.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">{tour.desc}</p>
                
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                    <MapPin size={14} />
                    Multi-stop
                  </div>
                  <Link to="/book" className="text-secondary font-bold text-sm hover:text-primary transition-colors flex items-center gap-2 group/btn">
                    Get a Quote <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
