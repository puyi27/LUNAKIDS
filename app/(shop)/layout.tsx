import React from 'react';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import { FloatingCartWidget } from '../../components/ui/FloatingCartWidget';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingCartWidget />
      <WhatsAppButton />
    </>
  );
}
