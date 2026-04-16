import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function AdminLogin() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/admin');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full flat-card p-12 md:p-16">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center">
            <ShieldCheck size={32} />
          </div>
          <h2 className="mt-10 text-3xl font-display font-bold text-primary">
            Admin Access
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-light">
            Sign in with your authorized Google account
          </p>
        </div>
        
        {error && (
          <div className="mt-8 bg-red-50 text-red-600 p-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center">
            {error}
          </div>
        )}

        <div className="mt-12">
          <button
            onClick={handleLogin}
            className="btn-primary w-full text-xs uppercase tracking-[0.3em]"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
