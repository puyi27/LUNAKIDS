import React from 'react';
import SidebarFilter from '../../../components/ui/SidebarFilter';

export const metadata = {
  title: 'Colección | Luna Kids',
  description: 'Descubre nuestra colección de moda infantil andaluza.',
};

export default function ColeccionLayout({ children }) {
  return (
    <div className="pt-40 md:pt-48 px-6 max-w-[1400px] mx-auto min-h-screen pb-32">
      <h1 className="text-4xl md:text-5xl font-serif text-ink mb-12">Nuestra Colección</h1>
      <div className="flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-56 lg:w-64 flex-shrink-0">
          <SidebarFilter />
        </aside>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
