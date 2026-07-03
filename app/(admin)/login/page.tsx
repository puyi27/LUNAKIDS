'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '../../../lib/supabase/client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/admin')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-serif text-ink mb-2 text-center">Acceso Privado</h1>
        <p className="text-center font-sans text-sm text-ink/60 mb-8 uppercase tracking-widest">
          Luna Kids Atelier
        </p>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block font-sans text-[11px] uppercase tracking-widest text-ink/80 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-paper border-0 px-4 py-3 rounded-xl text-ink focus:ring-2 focus:ring-accent transition-all outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-sans text-[11px] uppercase tracking-widest text-ink/80 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-paper border-0 px-4 py-3 rounded-xl text-ink focus:ring-2 focus:ring-accent transition-all outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ink text-white font-sans text-[12px] uppercase tracking-[0.2em] font-semibold py-4 rounded-xl hover:bg-ink/90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
