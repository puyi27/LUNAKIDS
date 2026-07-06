import React from 'react';
import Navbar from '../../components/ui/Navbar';
import { CartDrawer } from '../../components/ui/CartDrawer';

export default function AtelierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-ink text-linen min-h-screen">
      <Navbar />
      {children}
      <CartDrawer />
    </div>
  );
}
