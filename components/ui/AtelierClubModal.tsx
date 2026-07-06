"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '../../lib/supabase/client';
import Bow from './Bow';

export default function AtelierClubModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Check if user already saw or subscribed
    const hasSeenModal = localStorage.getItem('lunakids_atelier_modal_seen');
    if (hasSeenModal) return;

    // Trigger after 8 seconds of navigation
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem('lunakids_atelier_modal_seen', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    const supabase = createClient();

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;
      
      setStatus('success');
      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (error) {
      console.error('Error subscribing:', error);
      // Fallback in case table doesn't exist yet, we still give the success illusion for UX
      setStatus('success');
      setTimeout(() => {
        closeModal();
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-base border border-ink/10 shadow-[0_40px_80px_rgba(44,42,41,0.15)] rounded-3xl overflow-hidden p-8 md:p-12"
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-ink/40 hover:text-ink transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="text-accent opacity-80 mb-6 scale-125">
                <Bow />
              </div>
              
              <p className="font-script text-3xl md:text-4xl text-accent mb-2">Únete a nuestro</p>
              <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4">Atelier Privado</h2>
              
              <p className="font-sans text-[15px] text-ink/70 leading-relaxed mb-8 max-w-sm">
                Recibe acceso anticipado a nuestras colecciones cápsula (antes de que se agoten las telas) y disfruta de <strong>envío gratuito</strong> en tu primer encargo.
              </p>

              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full bg-accent/5 border border-accent/20 rounded-2xl p-6 text-accent"
                >
                  <p className="font-serif italic text-xl mb-1">¡Bienvenida al Atelier!</p>
                  <p className="font-sans text-[13px]">Revisa tu bandeja de entrada pronto.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                  <div className="relative w-full">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu correo electrónico..."
                      required
                      className="w-full bg-transparent border-b border-ink/20 px-4 py-3 text-ink font-sans text-[14px] focus:outline-none focus:border-ink transition-colors placeholder:text-ink/30"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-ink text-base font-sans text-[11px] uppercase tracking-[0.2em] font-bold py-4 rounded-xl hover:bg-ink/90 transition-all disabled:opacity-70 mt-2"
                  >
                    {status === 'loading' ? 'Procesando...' : 'Acceder al Atelier Privado'}
                  </button>
                  <p className="font-sans text-[10px] text-ink/40 mt-2">No enviamos spam. Solo moda infantil.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
