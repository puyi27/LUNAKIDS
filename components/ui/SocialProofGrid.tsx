"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const INSTAGRAM_POSTS = [
  { id: 1, img: '/img/galeria_1.png', link: '#' },
  { id: 2, img: '/img/galeria_2.png', link: '#' },
  { id: 3, img: '/img/galeria_3.png', link: '#' },
  { id: 4, img: '/img/galeria_4.png', link: '#' },
];

export default function SocialProofGrid() {
  return (
    <section className="py-20 md:py-32 bg-base border-t border-ink/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header de la sección */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-serif text-ink mb-2">#LunaKidsBoutique</h2>
            <p className="font-script text-3xl text-terracotta">Pequeñas clientas, grandes momentos</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="https://www.facebook.com/ModainfantilLunaKids/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-ink pb-1 font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-ink hover:text-[#1877F2] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              Síguenos en Facebook
            </a>
            <a href="https://www.instagram.com/lunakidsmoda/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-ink/70 hover:text-[#E1306C] hover:border-[#E1306C] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
          </div>
        </div>

        {/* Grid de fotos estilo feed de Instagram */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {INSTAGRAM_POSTS.map((post, i) => (
            <motion.a 
              key={post.id}
              href={post.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="group block relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={post.img} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
