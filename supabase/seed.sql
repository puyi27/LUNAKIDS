-- Creación de la tabla `products`
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    legacy_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    mat TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    img TEXT NOT NULL,
    hover_image TEXT NOT NULL,
    description TEXT,
    is_atelier BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Políticas: Lectura pública
CREATE POLICY "Lectura publica de productos"
    ON public.products
    FOR SELECT
    USING (true);

-- Políticas: Escritura, Actualización y Borrado solo para autenticados
CREATE POLICY "Solo administradores pueden insertar"
    ON public.products
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Solo administradores pueden actualizar"
    ON public.products
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Solo administradores pueden eliminar"
    ON public.products
    FOR DELETE
    TO authenticated
    USING (true);

-- Insertar datos iniciales (mock dataset)
INSERT INTO public.products (legacy_id, name, category, mat, price, img, hover_image, description, is_atelier)
VALUES 
('1', 'Traje Flamenca ''Feria''', 'flamenca', 'Algodón perforado y madroños', 185.00, '/img/flamenca_blanca.png', '/img/galeria_1.png', 'Un clásico traje de flamenca confeccionado en algodón perforado blanco, rematado con madroños y detalles artesanales.', true),
('2', 'Vestido Vichy ''Paseo''', 'batas', 'Algodón Vichy', 85.00, '/img/ninas_vichy.png', '/img/galeria_2.png', 'Vestido ligero y cómodo para el día a día. Tela vichy transpirable con remates de tira bordada.', false),
('3', 'Conjunto Madre e Hija', 'flamenca', 'Lino floral y bordados', 290.00, '/img/madre_hija_amarillo.png', '/img/galeria_3.png', 'Exclusivo conjunto Mini-Me con estampado floral sobre fondo mostaza. Hecho a mano con lino premium.', true),
('4', 'Bata ''Rocío'' Calada', 'batas', 'Plumeti y encaje', 110.00, '/img/galeria_4.png', '/img/galeria_5.png', 'Bata ligera en blanco roto ideal para la romería o tardes de verano. Detalles en encaje de bolillos.', false),
('5', 'Vestido Arras Natural', 'batas', 'Lino crudo', 135.00, '/img/galeria_6.png', '/img/galeria_7.png', 'Ideal para ceremonias. Lino en tono natural contrastado con detalles clásicos de costura.', true),
('6', 'Traje ''Real'' Dos Piezas', 'flamenca', 'Popelín estampado', 195.00, '/img/galeria_8.png', '/img/galeria_9.png', 'Conjunto flamenco de blusa y falda canastera, perfecto para mayor libertad de movimiento.', true),
('7', 'Vestido ''Abril'' Lunares', 'flamenca', 'Algodón y Tira Bordada', 175.00, '/img/galeria_10.png', '/img/galeria_11.png', 'Vestido tradicional con lunares clásicos, rematado con tira bordada en escote y mangas.', true),
('8', 'Bata ''Romero'' Clásica', 'batas', 'Lino ligero', 95.00, '/img/galeria_12.png', '/img/galeria_13.png', 'Bata de diseño clásico, corte suelto y detalles de encaje suave para tardes cálidas.', false),
('9', 'Lazo Terciopelo Burdeos', 'complementos', 'Terciopelo francés', 18.00, '/img/galeria_14.png', '/img/galeria_15.png', 'El lazo clásico de la casa. Hecho a mano con terciopelo traído de Francia. Con pinza reforzada.', false),
('10', 'Mantoncillo de Sedilla', 'complementos', 'Seda natural', 45.00, '/img/galeria_16.png', '/img/galeria_17.png', 'El complemento perfecto para cualquier traje de flamenca, con flecos de seda anudados a mano.', false),
('11', 'Diadema Vichy Terracota', 'complementos', 'Algodón', 22.00, '/img/galeria_18.png', '/img/galeria_2.png', 'Perfecta para conjuntar con nuestros vestidos de vichy. Ligera y cómoda para niñas pequeñas.', false)
ON CONFLICT (legacy_id) DO NOTHING;
