import React from 'react'
import { createClient } from '../../lib/supabase/server'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Atelier Admin | Luna Kids',
  robots: 'noindex, nofollow'
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-paper font-sans">
      {children}
    </div>
  )
}
