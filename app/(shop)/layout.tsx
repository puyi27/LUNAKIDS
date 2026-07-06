import React from 'react';
import Navbar from '../../components/ui/Navbar';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import { CartDrawer } from '../../components/ui/CartDrawer';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base pt-[90px] md:pt-[130px]">
        {children}
      </main>
      <CartDrawer />
      <WhatsAppButton />
    </>
  );
}
