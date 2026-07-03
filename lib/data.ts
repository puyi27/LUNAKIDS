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

export async function getProductsByCategory(category: string): Promise<ProductPayload[]> {
  let query = supabase.from('products').select('*')
  
  if (category !== 'coleccion') {
    query = query.eq('category', category)
  }
  
  const { data, error } = await query
  
  if (error || !data || !Array.isArray(data)) {
    console.error('Error fetching products by category:', error)
    return []
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
      
    if (uuidError || !uuidData) return null
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
