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
('11', 'Diadema Vichy Terracota', 'complementos', 'Algodón', 22.00, '/img/galeria_18.png', '/img/galeria_2.png', 'Perfecta para conjuntar con nuestros vestidos de vichy. Ligera y cómoda para niñas pequeñas.', false),
('12', 'Vestido ''Brisa'' Estampado', 'batas', 'Algodón suave', 89.00, '/img/IMG_1802.jpeg', '/img/IMG_1823.jpeg', 'Un diseño fresco y cómodo ideal para los días soleados del sur.', false),
('13', 'Conjunto ''Albero''', 'flamenca', 'Lino y bordados', 135.00, '/img/IMG_1839.jpeg', '/img/IMG_1849.jpeg', 'Dos piezas con aires flamencos y detalles únicos en mangas.', true),
('14', 'Bata ''Doñana'' Clásica', 'batas', 'Lino natural', 115.00, '/img/IMG_1851.jpeg', '/img/IMG_1854.jpeg', 'Elegante bata de lino con caída perfecta y estilo tradicional.', false),
('15', 'Jesusito ''Triana''', 'batas', 'Plumeti', 95.00, '/img/IMG_1855.jpeg', '/img/IMG_1856.jpeg', 'Confección delicada en plumeti para las más pequeñas.', false),
('16', 'Mono ''Salobreña''', 'batas', 'Algodón rústico', 75.00, '/img/IMG_1865.jpeg', '/img/IMG_1869.jpeg', 'Comodidad sin perder estilo para jugar todo el día.', false),
('17', 'Vestido ''Marbella''', 'flamenca', 'Lino premium', 160.00, '/img/IMG_1870.jpeg', '/img/IMG_1871.jpeg', 'Vestido fluido con inspiración andaluza.', true),
('18', 'Bata ''Ronda'' Calada', 'batas', 'Algodón con encajes', 110.00, '/img/IMG_1895.jpeg', '/img/IMG_1896.jpeg', 'Un clásico renovado con exquisitos remates calados.', false),
('19', 'Conjunto ''Tarifa''', 'batas', 'Algodón orgánico', 85.00, '/img/IMG_1905.jpeg', '/img/IMG_1911.jpeg', 'Fresco y transpirable, perfecto para la brisa costera.', false),
('20', 'Vestido ''Mijas''', 'flamenca', 'Tejido mixto y madroños', 185.00, '/img/IMG_1912.jpeg', '/img/IMG_1919.jpeg', 'Volantes sutiles para pasear con estilo.', true),
('21', 'Conjunto ''Nerja''', 'batas', 'Lino lavado', 90.00, '/img/IMG_1921.jpeg', '/img/IMG_1947.jpeg', 'Lino extra suave con detalles al tono.', false),
('22', 'Vestido ''Estepona''', 'flamenca', 'Algodón', 145.00, '/img/IMG_1948.jpeg', '/img/IMG_1963.jpeg', 'Diseño floral alegre y vital, ideal para cualquier evento de día.', true),
('23', 'Coletero Lazo Exclusivo', 'complementos', 'Seda', 15.00, '/img/326201464_1158624021686020_942794443900967684_n.jpg', '/img/IMG_1802.jpeg', 'Coletero de edición limitada con estampado exclusivo.', false)
ON CONFLICT (legacy_id) DO NOTHING;
