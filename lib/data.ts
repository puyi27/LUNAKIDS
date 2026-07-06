import { createClient } from '@supabase/supabase-js'
import { ProductPayload } from '../store/waasStore'

// Para fetch de datos públicos que puede ocurrir en build-time (SSG),
// usamos el cliente estándar para evitar problemas con cookies().
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : ({
      from: () => ({
        select: () => ({
          order: () => Promise.resolve({ data: null, error: { message: 'No env' } }),
          eq: () => {
            const eqObj = {
              single: () => Promise.resolve({ data: null, error: { message: 'No env' } })
            }
            return Object.assign(Promise.resolve({ data: null, error: { message: 'No env' } }), eqObj)
          }
        })
      })
    } as any)

export const MOCK_PRODUCTS: ProductPayload[] = [
  { id: '1', name: 'Vestido Ceremonia Luna', category: 'flamenca', mat: 'Algodón y Lino', price: 120, img: '/img/galeria_4.png', hoverImage: '/img/galeria_5.png', isAtelier: true },
  { id: '2', name: 'Bata de Plumeti Clásica', category: 'batas', mat: 'Plumeti de algodón', price: 85, img: '/img/galeria_12.png', hoverImage: '/img/galeria_13.png', isAtelier: false },
  { id: '3', name: 'Traje Flamenca Niña', category: 'flamenca', mat: 'Popelín', price: 150, img: '/img/galeria_14.png', hoverImage: '/img/galeria_15.png', isAtelier: true },
  { id: '4', name: 'Conjunto Lino Teal', category: 'coleccion', mat: 'Lino 100%', price: 75, img: '/img/galeria_16.png', hoverImage: '/img/galeria_17.png', isAtelier: false },
  { id: '5', name: 'Vestido Atelier de Seda', category: 'coleccion', mat: 'Seda Salvaje', price: 210, img: '/img/galeria_8.png', hoverImage: '/img/galeria_9.png', isAtelier: true },
  { id: '6', name: 'Conjunto Dots Primavera', category: 'batas', mat: 'Algodón Orgánico', price: 65, img: '/img/galeria_10.png', hoverImage: '/img/galeria_11.png', isAtelier: false },
  { id: '7', name: 'Traje Paseo Andalucía', category: 'coleccion', mat: 'Lino y Algodón', price: 95, img: '/img/ninas_vichy.png', hoverImage: '/img/galeria_2.png', isAtelier: false },
  { id: '8', name: 'Bata Clásica', category: 'batas', mat: 'Algodón', price: 70, img: '/img/galeria_1.png', hoverImage: '/img/galeria_3.png', isAtelier: false },
  { id: '9', name: 'Falda de Paseo', category: 'coleccion', mat: 'Lino rústico', price: 55, img: '/img/galeria_6.png', hoverImage: '/img/galeria_7.png', isAtelier: false },
  { id: '10', name: 'Camisa Rústica', category: 'coleccion', mat: 'Algodón', price: 45, img: '/img/galeria_18.png', hoverImage: '/img/galeria_1.png', isAtelier: false },
  { id: '11', name: 'Vestido Hero Clásico', category: 'coleccion', mat: 'Lino Fino', price: 110, img: '/img/flamenca_blanca.png', hoverImage: '/img/galeria_4.png', isAtelier: true },
];

export async function getProductsByCategory(category: string): Promise<ProductPayload[]> {
  let query = supabase.from('products').select('*')
  
  if (category !== 'coleccion') {
    query = query.eq('category', category)
  }
  
  const { data, error } = await query
  
  if (error || !data || !Array.isArray(data)) {
    console.warn('Fallback a datos locales:', error?.message || 'Sin conexión a BD')
    return category !== 'coleccion' 
      ? MOCK_PRODUCTS.filter(p => p.category === category)
      : MOCK_PRODUCTS
  }
  
  return data.map(mapDatabaseToPayload)
}

export async function getProductById(id: string): Promise<ProductPayload | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('legacy_id', id)
    .single()
    
  if (error || !data) {
    // Si no encuentra por legacy_id, intenta por UUID original
    const { data: uuidData, error: uuidError } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()
      
    if (uuidError || !uuidData) {
      console.warn(`Fallback a datos locales para id ${id}`)
      return MOCK_PRODUCTS.find(p => p.id === id) || null
    }
    return mapDatabaseToPayload(uuidData)
  }
  
  return mapDatabaseToPayload(data)
}

function mapDatabaseToPayload(row: any): ProductPayload {
  return {
    id: row.legacy_id || row.id,
    name: row.name,
    category: row.category,
    mat: row.mat,
    price: Number(row.price),
    img: row.img,
    hoverImage: row.hover_image,
    description: row.description,
    isAtelier: row.is_atelier
  }
}
