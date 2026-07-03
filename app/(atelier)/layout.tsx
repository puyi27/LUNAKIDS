import React from 'react';

export default function AtelierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-ink text-linen min-h-screen">
      {children}
    </div>
  );
}
