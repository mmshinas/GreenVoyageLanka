import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tourCategories = [
  {
    id: "cultural-triangle",
    title: "The Cultural Triangle",
    subtitle: "History & Heritage",
    destinations: [
      {
        id: "sigiriya",
        title: "Sigiriya (Lion Rock)",
        rating: 5.0,
        image: "https://drive.google.com/thumbnail?id=17d-y4VtJOjeChxQivcD-m6YY0tO8NWXf&sz=w1000",
        desc: "An iconic 5th-century rock fortress and UNESCO World Heritage site. It is famous for its ancient frescoes, mirror wall, and the massive lion paws guarding the final ascent."
      },
      {
        id: "anuradhapura",
        title: "Anuradhapura",
        rating: 4.9,
        image: "https://drive.google.com/thumbnail?id=110LQoMJOlVe_aCapHdqvS-TW7IlMmqke&sz=w1000",
        desc: "The island's first ancient capital, home to massive brick stupas (dagobas), sacred Bo trees, and well-preserved ruins of a sprawling monastic complex."
      },
      {
        id: "polonnaruwa",
        title: "Polonnaruwa",
        rating: 4.8,
        image: "https://drive.google.com/thumbnail?id=16eWoQzPNiim8O6TwN3ohFzVKRYHp4YDJ&sz=w1000",
        desc: "The second ancient capital, known for the Gal Vihara (four massive Buddha statues carved from a single granite face) and more compact, easily navigable ruins."
      },
      {
        id: "dambulla",
        title: "Dambulla Cave Temple",
        rating: 4.9,
        image: "https://drive.google.com/thumbnail?id=1g6fz_rer1ppf7GPtcNwGWtsstvbYUQf6&sz=w1000",
        desc: "A stunning complex of five caves filled with over 150 Buddha statues and intricate religious murals."
      }
    ]
  },
  {
    id: "hill-country",
    title: "The Hill Country",
    subtitle: "Scenery & Tea",
    destinations: [
      {
        id: "kandy",
        title: "Kandy",
        rating: 4.9,
        image: "https://drive.google.com/thumbnail?id=1rVvN1CJGtP6tVsgRuK9jOTj9kEC4Adsc&sz=w1000",
        desc: "The cultural heart of the island. It houses the Temple of the Sacred Tooth Relic and the beautiful Royal Botanical Gardens in nearby Peradeniya."
      },
      {
        id: "nuwara-eliya",
        title: "Nuwara Eliya",
        rating: 4.8,
        image: "https://drive.google.com/thumbnail?id=12K5fAl9Y8Opj4ycEvmfTs9EtH4t4UX2m&sz=w1000",
        desc: "Known as 'Little England,' this high-altitude town is surrounded by emerald tea plantations and cascading waterfalls. It offers a cool, misty climate and colonial-era architecture."
      },
      {
        id: "ella",
        title: "Ella",
        rating: 5.0,
        image: "https://drive.google.com/thumbnail?id=1G9zM9YB-CPSajpdxlcwcD9Y-x4KIJT2A&sz=w1000",
        desc: "A favorite for hikers and 'slow travelers.' Key highlights include the Nine Arches Bridge, Little Adam’s Peak, and the famous scenic train ride from Kandy."
      }
    ]
  },
  {
    id: "south-west-coast",
    title: "The South & West Coast",
    subtitle: "Beaches & Colonial Charm",
    destinations: [
      {
        id: "galle",
        title: "Galle",
        rating: 4.9,
        image: "https://drive.google.com/thumbnail?id=1qFKQd8yPR3chp00StXMTgSxvlrwcgr2C&sz=w1000",
        desc: "A historic fortified city. The Galle Fort is a UNESCO site where Dutch colonial buildings now house boutique shops, cafes, and galleries."
      },
      {
        id: "mirissa",
        title: "Mirissa & Weligama",
        rating: 4.8,
        image: "https://drive.google.com/thumbnail?id=1WiZQowZDJz1J7s-uqXDa8bUFMJI8nyO6&sz=w1000",
        desc: "Popular for whale watching (November to April), surfing, and vibrant beachfront nightlife."
      },
      {
        id: "bentota",
        title: "Bentota",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        desc: "Known for its wide, golden beaches and high-end resorts, making it a top choice for families and water sports enthusiasts."
      }
    ]
  },
  {
    id: "wildlife-nature",
    title: "Wildlife & Nature",
    subtitle: "Safaris & National Parks",
    destinations: [
      {
        id: "yala",
        title: "Yala National Park",
        rating: 4.9,
        image: "https://drive.google.com/thumbnail?id=1cjzvabh0KvK1e6calo6JnGj9JqJQ9kVH&sz=w1000",
        desc: "The most famous park for spotting leopards, alongside elephants, sloth bears, and crocodiles."
      },
      {
        id: "udawalawe",
        title: "Udawalawe National Park",
        rating: 4.8,
        image: "https://drive.google.com/thumbnail?id=1bL8fxSRgKATfUW3ss7_vo50zLds25Aco&sz=w1000",
        desc: "Often considered the best place to see large herds of wild elephants in their natural habitat."
      },
      {
        id: "minneriya",
        title: "Minneriya National Park",
        rating: 4.7,
        image: "https://drive.google.com/thumbnail?id=1KCx4Uv9-5pIPOFNfR0NrxZL2ej7SWCxP&sz=w1000",
        desc: "Famous for 'The Gathering,' where hundreds of elephants congregate around the reservoir during the dry season (typically July–September)."
      }
    ]
  },
  {
    id: "east-coast",
    title: "The East Coast",
    subtitle: "Seasonal Gems",
    destinations: [
      {
        id: "trincomalee",
        title: "Trincomalee",
        rating: 4.8,
        image: "https://drive.google.com/thumbnail?id=1QyslWf6ZysG3Sh7XM0GHqQZERM7vss30&sz=w1000",
        desc: "Offers calm, turquoise waters at Nilaveli and Uppuveli beaches, plus great snorkeling at Pigeon Island."
      },
      {
        id: "arugam-bay",
        title: "Arugam Bay",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
        desc: "A world-renowned surfing destination with a laid-back, bohemian atmosphere."
      }
    ]
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
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6">Explore by Region</h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-8 leading-tight">Tailor-Made Tour Destinations</h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Discover the incredible diversity of Sri Lanka. From ancient kingdoms and misty mountains to pristine coastlines and thrilling wildlife safaris.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {tourCategories.map((category, index) => (
            <div key={category.id} className="scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-12 border-b border-slate-200 pb-6"
              >
                <h3 className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-2">{category.subtitle}</h3>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">{category.title}</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.destinations.map((dest, i) => (
                  <motion.div 
                    key={dest.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1 }}
                    className="flat-card group p-0 overflow-hidden flex flex-col"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={dest.image} 
                        alt={dest.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span className="font-bold text-primary text-[10px]">{dest.rating}</span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h4 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{dest.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light flex-grow">{dest.desc}</p>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                        <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                          <MapPin size={12} />
                          {category.title}
                        </div>
                        <Link to={`/book?tour=${dest.id}`} className="text-secondary font-bold text-xs hover:text-primary transition-colors flex items-center gap-2 group/btn">
                          Get a Quote <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
