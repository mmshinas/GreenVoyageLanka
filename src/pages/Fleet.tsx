import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { UserCheck, Shield, Coffee, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

const fleet = [
  {
    id: "EV Drive",
    name: "EV HATCHBACK",
    type: "BYD DOLPHIN",
    capacity: "1 to 2 Passengers",
    features: ["English Speaking Driver", "AC", "WiFi", "Mineral Water"],
    image: "https://drive.google.com/thumbnail?id=1tvcj7flaPqXvaMphDySdZCERXJ0nuThf&sz=w1000"
  },
  {
    id: "luxury-suv",
    name: "TOYOTA PRIUS",
    type: "Hybrid Sedan",
    capacity: "1 to 3 Passengers",
    features: ["Expert Guide-Driver", "Premium Audio",  "AC", "WiFi", "Mineral Water"],
    image: "https://drive.google.com/thumbnail?id=14OBJrFLgF33cNIqo8TptY2bqvuhRFlz2&sz=w1000"
  },
  {
    id: "premium-sedan",
    name: "PREMIUM SEDAN",
    type: "Toyota Allion",
    capacity: "1 to 3 Passengers",
    features: ["English Speaking Driver", "Luxury comfortable ride", "WiFi", "AC", "Mineral Water"],
    image: "https://drive.google.com/thumbnail?id=1zAO0o8OhWVRhu-rebso6XJQGnGd2nlks&sz=w1000"
  },
  {
    id: "family-van",
    name: "FAMILY VAN",
    type: "NISSAN VAN",
    capacity: "1 to 5 Passengers",
    features: ["Qualified Driver", "Spacious Interior", "AC", "WiFi", "Mineral Water"],
    image: "https://drive.google.com/thumbnail?id=1cdOeSza9GWISDTAYyXA4sZNYGaLIitOf&sz=w1000"
  }
];

export default function Fleet() {
  const { t } = useTranslation();

  return (
    <div className="pt-40 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6">Our Standards</h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">{t('fleet.title')}</h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Every journey is led by a qualified English-speaking driver in a meticulously maintained, modern vehicle.
            </p>
          </motion.div>
        </div>

        {/* Driver Standards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-32">
          {[
            { icon: <UserCheck size={20} />, title: "Certified", desc: "SLTDA Licensed" },
            { icon: <Shield size={20} />, title: "Safe", desc: "Aviation-Grade" },
            { icon: <Coffee size={20} />, title: "Hospitable", desc: "Complimentary" },
            { icon: <Wifi size={20} />, title: "Connected", desc: "On-board WiFi" }
          ].map((item, i) => (
            <div key={i} className="flat-card p-6 md:p-8 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="font-bold text-primary text-sm uppercase tracking-widest">{item.title}</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {fleet.map((vehicle, index) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flat-card group p-0 overflow-hidden flex flex-col"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-primary shadow-sm uppercase tracking-widest">
                  {vehicle.capacity}
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-display font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{vehicle.name}</h3>
                <p className="text-accent font-bold text-[10px] uppercase tracking-widest mb-8">{vehicle.type}</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {vehicle.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-500 text-sm font-light">
                      <div className="w-1 h-1 bg-secondary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={`/book?vehicle=${vehicle.id}`} className="btn-primary w-full text-xs uppercase tracking-widest">
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
