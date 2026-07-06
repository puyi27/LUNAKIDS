"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAtelierStore } from '../../store/atelierStore';

export default function AtelierContactModal() {
  const { isOpen, selectedItemName, closeModal } = useAtelierStore();
  const [view, setView] = useState<'options' | 'emailForm'>('options');

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const text = selectedItemName 
      ? `Hola, estoy interesada en solicitar una cita Atelier para el artículo: ${selectedItemName}`
      : `Hola, estoy interesada en el servicio de diseño a medida del Atelier Luna Kids.`;
    window.open(`https://wa.me/34619172134?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
      setTimeout(() => setView('options'), 300);
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-ink/30 backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-base w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative border border-white/50"
        >
          {/* Header */}
          <div className="bg-paper p-6 md:p-8 text-center relative border-b border-ink/5">
            <button 
              onClick={() => { closeModal(); setTimeout(() => setView('options'), 300); }}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-base text-ink/40 hover:text-ink transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-burgundy font-bold mb-2 block">Servicio VIP</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink">Cita Atelier</h2>
            <p className="font-script text-2xl text-terracotta mt-1">Confección a medida</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 bg-base">
            {view === 'options' ? (
              <div className="space-y-6 animate-fade-in">
                <p className="text-center font-sans text-[13px] text-ink/70 leading-relaxed mb-6 px-4">
                  {selectedItemName 
                    ? `Has seleccionado el modelo "${selectedItemName}". `
                    : `Nuestro equipo confeccionará la prenda perfecta para ti. `}
                  ¿Cómo prefieres que nos pongamos en contacto para tomar medidas y ajustar detalles?
                </p>

                <div className="grid gap-4">
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full group relative overflow-hidden bg-white border border-ink/10 p-4 rounded-2xl flex items-center gap-4 hover:border-accent/50 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.18 1.83 5.82L3 21l3.18-.83C7.82 21.31 9.83 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.5 14c-.2.57-1.16 1.09-1.63 1.14-.42.05-.98.15-2.8-.6-2.2-1.01-3.61-3.32-3.72-3.48-.11-.15-.88-1.2-.88-2.3 0-1.07.55-1.59.75-1.8.19-.21.43-.27.57-.27.15 0 .28 0 .4.01.12.01.3-.05.47.37.17.43.59 1.48.65 1.59.05.11.09.24.01.39-.08.15-.12.24-.24.37-.11.13-.24.28-.33.38-.11.11-.23.23-.11.45.13.22.56.93 1.2 1.52.83.75 1.52.99 1.73 1.09.22.1.34.09.47-.07.13-.15.55-.65.71-.88.15-.22.31-.19.51-.11.22.08 1.38.67 1.62.79.24.11.39.18.45.28.05.11.05.62-.15 1.19z" clipRule="evenodd"/></svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-serif text-lg text-ink">Consulta Rápida</h3>
                      <p className="font-sans text-[11px] uppercase tracking-widest text-ink/50 mt-1">Chat vía WhatsApp</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setView('emailForm')}
                    className="w-full group relative overflow-hidden bg-white border border-ink/10 p-4 rounded-2xl flex items-center gap-4 hover:border-burgundy/50 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-full bg-burgundy/5 flex items-center justify-center flex-shrink-0 text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-serif text-lg text-ink">Solicitud Formal</h3>
                      <p className="font-sans text-[11px] uppercase tracking-widest text-ink/50 mt-1">Formulario por Email</p>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              <form 
                className="space-y-4 animate-fade-in"
                onSubmit={(e) => {
                  e.preventDefault();
                  // En un caso real enviaríamos el form a una API
                  closeModal();
                  setTimeout(() => setView('options'), 300);
                  alert("¡Solicitud enviada! Nuestro taller se pondrá en contacto contigo muy pronto.");
                }}
              >
                <button 
                  type="button" 
                  onClick={() => setView('options')}
                  className="text-[11px] font-sans font-bold uppercase tracking-widest text-ink/50 hover:text-ink flex items-center gap-1 mb-4 transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  Volver
                </button>

                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-widest font-bold text-ink mb-1 ml-2">Nombre completo</label>
                  <input required type="text" className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 text-[14px] font-sans focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Ej: María García" />
                </div>
                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-widest font-bold text-ink mb-1 ml-2">Email de contacto</label>
                  <input required type="email" className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 text-[14px] font-sans focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-widest font-bold text-ink mb-1 ml-2">Fecha del evento / Detalles</label>
                  <textarea required className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 text-[14px] font-sans focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all min-h-[100px] resize-none" placeholder={selectedItemName ? `Me interesa el modelo ${selectedItemName} para una Comunión en Mayo...` : "Cuéntanos qué necesitas..."} />
                </div>
                <button 
                  type="submit"
                  className="w-full mt-2 bg-ink text-white font-sans text-[11px] uppercase tracking-[0.2em] font-bold py-4 rounded-xl hover:bg-accent transition-colors"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
