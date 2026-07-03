import React from 'react'
import { createClient } from '../../../lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Protección redundante en el Server Component
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
  }

  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error)
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-serif text-ink mb-2">Panel de Taller</h1>
          <p className="font-sans text-sm text-ink/60 uppercase tracking-widest">
            Gestión de Inventario
          </p>
        </div>
        
        <form action="/auth/signout" method="post">
          <button type="submit" className="text-[11px] font-sans uppercase tracking-[0.2em] font-semibold text-burgundy hover:text-accent transition-colors">
            Cerrar Sesión
          </button>
        </form>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-ink/5 overflow-hidden">
        <div className="p-6 border-b border-ink/5 flex justify-between items-center">
          <h2 className="font-serif text-xl text-ink">Catálogo Actual</h2>
          <button className="bg-accent text-white px-6 py-2 rounded-full font-sans text-[11px] uppercase tracking-widest font-semibold hover:bg-ink transition-colors">
            + Nuevo Producto
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans text-sm">
            <thead className="bg-paper text-ink/70 text-[10px] uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4 font-medium">Producto</th>
                <th className="px-6 py-4 font-medium">Categoría</th>
                <th className="px-6 py-4 font-medium">Precio</th>
                <th className="px-6 py-4 font-medium">Material</th>
                <th className="px-6 py-4 font-medium">Línea</th>
                <th className="px-6 py-4 text-right font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              {products?.map((product) => (
                <tr key={product.id} className="hover:bg-paper/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-ink flex items-center gap-4">
                    <img src={product.img} alt={product.name} className="w-10 h-10 object-cover rounded-md" />
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-ink/70 capitalize">{product.category}</td>
                  <td className="px-6 py-4 text-ink/70">{Number(product.price).toFixed(2)} €</td>
                  <td className="px-6 py-4 text-ink/70">{product.mat}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold ${product.is_atelier ? 'bg-burgundy/10 text-burgundy' : 'bg-accent/10 text-accent'}`}>
                      {product.is_atelier ? 'Atelier' : 'Prêt-à-porter'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-ink/50 hover:text-ink text-[11px] uppercase tracking-widest font-semibold">Editar</button>
                  </td>
                </tr>
              ))}
              
              {(!products || products.length === 0) && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-ink/50 italic">
                    No hay productos en el catálogo.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
