import { motion } from 'framer-motion';
import { ArrowRight, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AirportPickUp() {
  return (
    <div className="pt-40 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
              <Plane size={16} className="-mt-1" />
              Welcome to Sri Lanka
            </h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">Seamless Airport Pick-Up</h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Start your journey effortlessly. Our professional driver will be waiting for you at the arrivals hall, ready to escort you to your destination in absolute comfort.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl overflow-hidden mb-16 shadow-2xl relative"
        >
          <img 
            src="https://drive.google.com/thumbnail?id=1G6g9vkDBeyUbquUjtemy6Gw1ytUbC2DD&sz=w2000" 
            alt="Seamless Airport Pick-Up Service" 
            className="w-full h-auto object-cover max-h-[600px]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-slate-600 mb-12 leading-relaxed font-light">
            After a long flight, the last thing you want to worry about is navigating an unfamiliar airport or negotiating with local transport. 
            With our premium airport transfer service, experience a warm Sri Lankan welcome the moment you land. We monitor your flight schedule 
            to ensure timely pick-up, even in case of delays. Our comfortable, air-conditioned fleet and experienced English-speaking drivers 
            guarantee a relaxing start to your Sri Lankan adventure.
          </p>
          
          <Link to="/book?type=airport-pickup" className="btn-primary inline-flex items-center gap-3">
            Get a Quote <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
