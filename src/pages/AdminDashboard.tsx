import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { LogOut, Trash2, CheckCircle, XCircle, Plus, Edit2, Save, X } from 'lucide-react';

export default function AdminDashboard() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [tourPrices, setTourPrices] = useState<any[]>([]);
  const [vehicleAvailability, setVehicleAvailability] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState<'quotes' | 'prices' | 'availability'>('quotes');
  
  // New Tour Price Form State
  const [isAddingPrice, setIsAddingPrice] = useState(false);
  const [newPrice, setNewPrice] = useState({ packageName: '', price: 0, currency: 'USD' });
  
  // Edit Tour Price State
  const [editingPriceId, setEditingPriceId] = useState<string | null>(null);
  const [editPriceData, setEditPriceData] = useState({ packageName: '', price: 0, currency: 'USD' });

  // Vehicle Availability Form State
  const [isAddingAvailability, setIsAddingAvailability] = useState(false);
  const [newAvailability, setNewAvailability] = useState({ vehicleName: '', available: true });

  // Edit Vehicle Availability State
  const [editingAvailabilityId, setEditingAvailabilityId] = useState<string | null>(null);
  const [editAvailabilityData, setEditAvailabilityData] = useState({ vehicleName: '', available: true });

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAdmin(true);
        
        // Fetch Quotes
        const qQuotes = query(collection(db, 'quotes'));
        const unsubscribeQuotes = onSnapshot(qQuotes, (snapshot) => {
          const quotesData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          quotesData.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setQuotes(quotesData);
          setLoading(false);
        }, (error) => {
          console.error("Error fetching quotes:", error);
          setLoading(false);
        });

        // Fetch Tour Prices
        const qPrices = query(collection(db, 'tourPrices'));
        const unsubscribePrices = onSnapshot(qPrices, (snapshot) => {
          const pricesData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setTourPrices(pricesData);
        }, (error) => {
          console.error("Error fetching tour prices:", error);
        });

        // Fetch Vehicle Availability
        const qAvailability = query(collection(db, 'vehicleAvailability'));
        const unsubscribeAvailability = onSnapshot(qAvailability, (snapshot) => {
          const availabilityData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setVehicleAvailability(availabilityData);
        }, (error) => {
          console.error("Error fetching vehicle availability:", error);
        });

        return () => {
          unsubscribeQuotes();
          unsubscribePrices();
          unsubscribeAvailability();
        };
      } else {
        navigate('/admin/login');
      }
    });

    return () => unsubscribeAuth();
  }, [navigate]);

  // Quote Handlers
  const handleStatusChange = async (id: string, status: string) => {
    try {
      await updateDoc(doc(db, 'quotes', id), { status });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDeleteQuote = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this quote request?')) {
      try {
        await deleteDoc(doc(db, 'quotes', id));
      } catch (error) {
        console.error("Error deleting quote:", error);
      }
    }
  };

  // Tour Price Handlers
  const handleAddPrice = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'tourPrices'), {
        packageName: newPrice.packageName,
        price: Number(newPrice.price),
        currency: newPrice.currency
      });
      setIsAddingPrice(false);
      setNewPrice({ packageName: '', price: 0, currency: 'USD' });
    } catch (error) {
      console.error("Error adding tour price:", error);
      alert("Failed to add tour price. Please check your permissions.");
    }
  };

  const handleUpdatePrice = async (id: string) => {
    try {
      await updateDoc(doc(db, 'tourPrices', id), {
        packageName: editPriceData.packageName,
        price: Number(editPriceData.price),
        currency: editPriceData.currency
      });
      setEditingPriceId(null);
    } catch (error) {
      console.error("Error updating tour price:", error);
      alert("Failed to update tour price.");
    }
  };

  const handleDeletePrice = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this tour price?')) {
      try {
        await deleteDoc(doc(db, 'tourPrices', id));
      } catch (error) {
        console.error("Error deleting tour price:", error);
      }
    }
  };

  // Vehicle Availability Handlers
  const handleAddAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'vehicleAvailability'), {
        vehicleName: newAvailability.vehicleName,
        available: newAvailability.available
      });
      setIsAddingAvailability(false);
      setNewAvailability({ vehicleName: '', available: true });
    } catch (error) {
      console.error("Error adding vehicle availability:", error);
      alert("Failed to add vehicle availability.");
    }
  };

  const handleUpdateAvailability = async (id: string) => {
    try {
      await updateDoc(doc(db, 'vehicleAvailability', id), {
        vehicleName: editAvailabilityData.vehicleName,
        available: editAvailabilityData.available
      });
      setEditingAvailabilityId(null);
    } catch (error) {
      console.error("Error updating vehicle availability:", error);
      alert("Failed to update vehicle availability.");
    }
  };

  const handleDeleteAvailability = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this vehicle availability?')) {
      try {
        await deleteDoc(doc(db, 'vehicleAvailability', id));
      } catch (error) {
        console.error("Error deleting vehicle availability:", error);
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!isAdmin) return null;

  return (
    <div className="pt-40 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-display font-bold text-primary">Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 bg-slate-50 text-red-600 px-6 py-3 rounded-2xl hover:bg-red-50 transition-all font-bold text-xs uppercase tracking-widest"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-12 bg-slate-50 p-1.5 rounded-2xl w-fit">
          <button 
            onClick={() => setActiveTab('quotes')}
            className={`px-8 py-3 font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all ${activeTab === 'quotes' ? 'bg-white text-secondary shadow-sm' : 'text-slate-400 hover:text-primary'}`}
          >
            Quote Requests
          </button>
          <button 
            onClick={() => setActiveTab('prices')}
            className={`px-8 py-3 font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all ${activeTab === 'prices' ? 'bg-white text-secondary shadow-sm' : 'text-slate-400 hover:text-primary'}`}
          >
            Tour Prices
          </button>
          <button 
            onClick={() => setActiveTab('availability')}
            className={`px-8 py-3 font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all ${activeTab === 'availability' ? 'bg-white text-secondary shadow-sm' : 'text-slate-400 hover:text-primary'}`}
          >
            Vehicle Availability
          </button>
        </div>

        {/* Quotes Tab */}
        {activeTab === 'quotes' && (
          <div className="flat-card p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-slate-50">
                    <th className="p-6">Date Requested</th>
                    <th className="p-6">Customer</th>
                    <th className="p-6">Arrival</th>
                    <th className="p-6">Departure</th>
                    <th className="p-6">Status</th>
                    <th className="p-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {quotes.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-12 text-center text-slate-400 font-light">No quote requests found.</td>
                    </tr>
                  ) : (
                    quotes.map((quote) => (
                      <tr key={quote.id} className="hover:bg-slate-50/30 transition-colors group">
                        <td className="p-6 text-sm text-slate-500 font-light">
                          {new Date(quote.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-6">
                          <div className="font-bold text-primary text-sm">{quote.fullName}</div>
                          <div className="text-xs text-slate-400 font-light">{quote.email}</div>
                        </td>
                        <td className="p-6 text-slate-500 text-sm font-light">
                          {quote.arrivalDate} <br/>
                          <span className="text-xs text-slate-400">{quote.arrivalFlight}</span>
                        </td>
                        <td className="p-6 text-slate-500 text-sm font-light">
                          {quote.departureDate} <br/>
                          <span className="text-xs text-slate-400">{quote.departureFlight}</span>
                        </td>
                        <td className="p-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            quote.status === 'confirmed' ? 'bg-emerald-50 text-emerald-600' :
                            quote.status === 'cancelled' ? 'bg-red-50 text-red-600' :
                            'bg-amber-50 text-amber-600'
                          }`}>
                            {quote.status}
                          </span>
                        </td>
                        <td className="p-6 text-right flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          {quote.status === 'pending' && (
                            <>
                              <button onClick={() => handleStatusChange(quote.id, 'confirmed')} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors" title="Mark as Quoted">
                                <CheckCircle size={18} />
                              </button>
                              <button onClick={() => handleStatusChange(quote.id, 'cancelled')} className="p-2 text-amber-600 hover:bg-amber-50 rounded-xl transition-colors" title="Cancel">
                                <XCircle size={18} />
                              </button>
                            </>
                          )}
                          <button onClick={() => handleDeleteQuote(quote.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors" title="Delete">
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tour Prices Tab */}
        {activeTab === 'prices' && (
          <div className="flat-card p-0 overflow-hidden">
            <div className="p-8 border-b border-slate-50 bg-slate-50/30 flex justify-between items-center">
              <h2 className="text-xl font-display font-bold text-primary">Manage Tour Prices</h2>
              <button 
                onClick={() => setIsAddingPrice(!isAddingPrice)}
                className="flex items-center gap-3 bg-secondary text-white px-6 py-3 rounded-2xl hover:bg-primary transition-all font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-900/20"
              >
                {isAddingPrice ? <X size={16} /> : <Plus size={16} />}
                {isAddingPrice ? 'Cancel' : 'Add New Price'}
              </button>
            </div>

            {isAddingPrice && (
              <div className="p-10 border-b border-slate-50 bg-slate-50/10">
                <form onSubmit={handleAddPrice} className="flex flex-col md:flex-row gap-6 items-end">
                  <div className="flex-1 w-full space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Package Name</label>
                    <input 
                      type="text" 
                      required
                      value={newPrice.packageName}
                      onChange={(e) => setNewPrice({...newPrice, packageName: e.target.value})}
                      className="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl focus:ring-2 focus:ring-secondary outline-none transition-all text-sm font-light"
                      placeholder="e.g. Colombo City Tour"
                    />
                  </div>
                  <div className="w-full md:w-48 space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Price</label>
                    <input 
                      type="number" 
                      required
                      min="0"
                      step="0.01"
                      value={newPrice.price}
                      onChange={(e) => setNewPrice({...newPrice, price: parseFloat(e.target.value)})}
                      className="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl focus:ring-2 focus:ring-secondary outline-none transition-all text-sm font-light"
                    />
                  </div>
                  <div className="w-full md:w-32 space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Currency</label>
                    <select 
                      value={newPrice.currency}
                      onChange={(e) => setNewPrice({...newPrice, currency: e.target.value})}
                      className="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl focus:ring-2 focus:ring-secondary outline-none transition-all text-sm font-light appearance-none"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="LKR">LKR</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary w-full md:w-auto px-10 text-[10px] uppercase tracking-widest h-[58px]">
                    Save
                  </button>
                </form>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-slate-50">
                    <th className="p-6">Package Name</th>
                    <th className="p-6">Price</th>
                    <th className="p-6">Currency</th>
                    <th className="p-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {tourPrices.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-12 text-center text-slate-400 font-light">No tour prices found.</td>
                    </tr>
                  ) : (
                    tourPrices.map((price) => (
                      <tr key={price.id} className="hover:bg-slate-50/30 transition-colors group">
                        {editingPriceId === price.id ? (
                          <>
                            <td className="p-6">
                              <input 
                                type="text" 
                                value={editPriceData.packageName}
                                onChange={(e) => setEditPriceData({...editPriceData, packageName: e.target.value})}
                                className="w-full px-4 py-2 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm font-light"
                              />
                            </td>
                            <td className="p-6">
                              <input 
                                type="number" 
                                min="0"
                                step="0.01"
                                value={editPriceData.price}
                                onChange={(e) => setEditPriceData({...editPriceData, price: parseFloat(e.target.value)})}
                                className="w-full px-4 py-2 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm font-light"
                              />
                            </td>
                            <td className="p-6">
                              <select 
                                value={editPriceData.currency}
                                onChange={(e) => setEditPriceData({...editPriceData, currency: e.target.value})}
                                className="w-full px-4 py-2 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm font-light appearance-none"
                              >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="LKR">LKR</option>
                              </select>
                            </td>
                            <td className="p-6 text-right flex justify-end gap-3">
                              <button onClick={() => handleUpdatePrice(price.id)} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors" title="Save">
                                <Save size={18} />
                              </button>
                              <button onClick={() => setEditingPriceId(null)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-xl transition-colors" title="Cancel">
                                <X size={18} />
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="p-6 font-bold text-primary text-sm">{price.packageName}</td>
                            <td className="p-6 text-slate-500 text-sm font-light">{price.price.toFixed(2)}</td>
                            <td className="p-6 text-slate-500 text-sm font-light">{price.currency}</td>
                            <td className="p-6 text-right flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button 
                                onClick={() => {
                                  setEditingPriceId(price.id);
                                  setEditPriceData({
                                    packageName: price.packageName,
                                    price: price.price,
                                    currency: price.currency
                                  });
                                }} 
                                className="p-2 text-secondary hover:bg-slate-50 rounded-xl transition-colors" 
                                title="Edit"
                              >
                                <Edit2 size={18} />
                              </button>
                              <button onClick={() => handleDeletePrice(price.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors" title="Delete">
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Vehicle Availability Tab */}
        {activeTab === 'availability' && (
          <div className="flat-card p-0 overflow-hidden">
            <div className="p-8 border-b border-slate-50 bg-slate-50/30 flex justify-between items-center">
              <h2 className="text-xl font-display font-bold text-primary">Manage Vehicle Availability</h2>
              <button 
                onClick={() => setIsAddingAvailability(!isAddingAvailability)}
                className="flex items-center gap-3 bg-secondary text-white px-6 py-3 rounded-2xl hover:bg-primary transition-all font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-900/20"
              >
                {isAddingAvailability ? <X size={16} /> : <Plus size={16} />}
                {isAddingAvailability ? 'Cancel' : 'Add New Status'}
              </button>
            </div>

            {isAddingAvailability && (
              <div className="p-10 border-b border-slate-50 bg-slate-50/10">
                <form onSubmit={handleAddAvailability} className="flex flex-col md:flex-row gap-6 items-end">
                  <div className="flex-1 w-full space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Vehicle Name</label>
                    <input 
                      type="text" 
                      required
                      value={newAvailability.vehicleName}
                      onChange={(e) => setNewAvailability({...newAvailability, vehicleName: e.target.value})}
                      className="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl focus:ring-2 focus:ring-secondary outline-none transition-all text-sm font-light"
                      placeholder="e.g. Executive Sedan"
                    />
                  </div>
                  <div className="w-full md:w-48 space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Availability</label>
                    <select 
                      value={newAvailability.available ? 'true' : 'false'}
                      onChange={(e) => setNewAvailability({...newAvailability, available: e.target.value === 'true'})}
                      className="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl focus:ring-2 focus:ring-secondary outline-none transition-all text-sm font-light appearance-none"
                    >
                      <option value="true">Available</option>
                      <option value="false">Unavailable</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary w-full md:w-auto px-10 text-[10px] uppercase tracking-widest h-[58px]">
                    Save
                  </button>
                </form>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-slate-50">
                    <th className="p-6">Vehicle Name</th>
                    <th className="p-6">Status</th>
                    <th className="p-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {vehicleAvailability.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="p-12 text-center text-slate-400 font-light">No vehicle availability statuses found.</td>
                    </tr>
                  ) : (
                    vehicleAvailability.map((status) => (
                      <tr key={status.id} className="hover:bg-slate-50/30 transition-colors group">
                        {editingAvailabilityId === status.id ? (
                          <>
                            <td className="p-6">
                              <input 
                                type="text" 
                                value={editAvailabilityData.vehicleName}
                                onChange={(e) => setEditAvailabilityData({...editAvailabilityData, vehicleName: e.target.value})}
                                className="w-full px-4 py-2 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm font-light"
                              />
                            </td>
                            <td className="p-6">
                              <select 
                                value={editAvailabilityData.available ? 'true' : 'false'}
                                onChange={(e) => setEditAvailabilityData({...editAvailabilityData, available: e.target.value === 'true'})}
                                className="w-full px-4 py-2 border border-slate-100 rounded-xl focus:ring-2 focus:ring-secondary outline-none text-sm font-light appearance-none"
                              >
                                <option value="true">Available</option>
                                <option value="false">Unavailable</option>
                              </select>
                            </td>
                            <td className="p-6 text-right flex justify-end gap-3">
                              <button onClick={() => handleUpdateAvailability(status.id)} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors" title="Save">
                                <Save size={18} />
                              </button>
                              <button onClick={() => setEditingAvailabilityId(null)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-xl transition-colors" title="Cancel">
                                <X size={18} />
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td className="p-6 font-bold text-primary text-sm">{status.vehicleName}</td>
                            <td className="p-6">
                              <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                                status.available ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                              }`}>
                                {status.available ? 'Available' : 'Unavailable'}
                              </span>
                            </td>
                            <td className="p-6 text-right flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button 
                                onClick={() => {
                                  setEditingAvailabilityId(status.id);
                                  setEditAvailabilityData({
                                    vehicleName: status.vehicleName,
                                    available: status.available
                                  });
                                }} 
                                className="p-2 text-secondary hover:bg-slate-50 rounded-xl transition-colors" 
                                title="Edit"
                              >
                                <Edit2 size={18} />
                              </button>
                              <button onClick={() => handleDeleteAvailability(status.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors" title="Delete">
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
