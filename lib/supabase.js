import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Si no hay claves, devolvemos un mock pasivo para que no exploten los Server Components
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        select: () => ({
          order: () => Promise.resolve({ data: null, error: 'No env' }),
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: 'No env' })
          })
        })
      })
    };
