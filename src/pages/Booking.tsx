import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { CheckCircle } from 'lucide-react';

type QuoteFormData = {
  fullName: string;
  email: string;
  arrivalDate: string;
  arrivalFlight: string;
  departureDate: string;
  departureFlight: string;
  itinerary: string;
};

export default function Booking() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<QuoteFormData>();

  const onSubmit = async (data: QuoteFormData) => {
    setLoading(true);
    
    // 1. Save to Firestore
    try {
      await addDoc(collection(db, 'quotes'), {
        ...data,
        status: 'pending',
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error saving quote to Firestore: ", error);
    }

    // 2. Send email via FormSubmit.co AJAX API
    try {
      const response = await fetch("https://formsubmit.co/ajax/mmshinas@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `New Quote Request from ${data.fullName}`,
            _captcha: "false",
            _template: "table",
            "Full Name": data.fullName,
            "Email": data.email,
            "Arrival Date": data.arrivalDate,
            "Arrival Flight": data.arrivalFlight || 'N/A',
            "Departure Date": data.departureDate,
            "Departure Flight": data.departureFlight || 'N/A',
            "Itinerary": data.itinerary
        })
      });

      const result = await response.json();
      if (!response.ok) {
        console.error("FormSubmit Error:", result);
      }
    } catch (error) {
      console.error("Error sending email via FormSubmit: ", error);
    }

    // Show success regardless of background failures
    setIsSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="pt-40 pb-32 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flat-card p-0 overflow-hidden">
          <div className="bg-primary p-12 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
            <h1 className="text-3xl md:text-5xl font-display font-bold relative z-10">Get a Quote</h1>
            <p className="text-slate-400 mt-4 relative z-10 font-light">Let us plan your perfect Sri Lankan journey.</p>
          </div>

          <div className="p-10 md:p-20">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input 
                      {...register("fullName", { required: true })}
                      className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all font-light text-primary"
                      placeholder="John Doe"
                    />
                    {errors.fullName && <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-1">Required</span>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input 
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all font-light text-primary"
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-1">Valid email required</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Arrival Date</label>
                    <input 
                      type="date"
                      {...register("arrivalDate", { required: true })}
                      className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all font-light text-primary"
                    />
                    {errors.arrivalDate && <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-1">Required</span>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Arrival Flight Number (Optional)</label>
                    <input 
                      {...register("arrivalFlight")}
                      className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all font-light text-primary"
                      placeholder="e.g. UL 102"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Departure Date</label>
                    <input 
                      type="date"
                      {...register("departureDate", { required: true })}
                      className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all font-light text-primary"
                    />
                    {errors.departureDate && <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-1">Required</span>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Departure Flight Number (Optional)</label>
                    <input 
                      {...register("departureFlight")}
                      className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all font-light text-primary"
                      placeholder="e.g. EK 349"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Your Itinerary</label>
                  <textarea 
                    {...register("itinerary", { required: true })}
                    rows={5}
                    className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all font-light text-primary resize-none"
                    placeholder="Or describe your interest, we will make the arrangements"
                  ></textarea>
                  {errors.itinerary && <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-1">Required</span>}
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary w-full py-6 text-xs uppercase tracking-[0.3em] mt-10 flex items-center justify-center gap-4"
                >
                  {loading ? 'Processing...' : 'Submit'}
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-12"
              >
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-3xl flex items-center justify-center mx-auto">
                  <CheckCircle size={40} />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-display font-bold text-primary">Success!</h2>
                  <p className="text-slate-500 font-light leading-relaxed text-lg">
                    Information submitted and will get a detailed quotation within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
