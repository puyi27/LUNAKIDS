import React from 'react';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
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
      <main className="min-h-screen bg-base pt-[60px] md:pt-[100px]">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </>
  );
}
