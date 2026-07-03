export const products = [
  {
    id: "1",
    name: "Traje Flamenca 'Feria'",
    category: "flamenca",
    mat: "Algodón perforado y madroños",
    price: "185.00",
    img: "/img/flamenca_blanca.png",
    hoverImage: "/img/galeria_1.png",
    description: "Un clásico traje de flamenca confeccionado en algodón perforado blanco, rematado con madroños y detalles artesanales.",
    isAtelier: true
  },
  {
    id: "2",
    name: "Vestido Vichy 'Paseo'",
    category: "batas",
    mat: "Algodón Vichy",
    price: "85.00",
    img: "/img/ninas_vichy.png",
    hoverImage: "/img/galeria_2.png",
    description: "Vestido ligero y cómodo para el día a día. Tela vichy transpirable con remates de tira bordada.",
    isAtelier: false
  },
  {
    id: "3",
    name: "Conjunto Madre e Hija",
    category: "flamenca",
    mat: "Lino floral y bordados",
    price: "290.00",
    img: "/img/madre_hija_amarillo.png",
    hoverImage: "/img/galeria_3.png",
    description: "Exclusivo conjunto Mini-Me con estampado floral sobre fondo mostaza. Hecho a mano con lino premium.",
    isAtelier: true
  },
  {
    id: "4",
    name: "Bata 'Rocío' Calada",
    category: "batas",
    mat: "Plumeti y encaje",
    price: "110.00",
    img: "/img/galeria_4.png",
    hoverImage: "/img/galeria_5.png",
    description: "Bata ligera en blanco roto ideal para la romería o tardes de verano. Detalles en encaje de bolillos.",
    isAtelier: false
  },
  {
    id: "5",
    name: "Vestido Arras Natural",
    category: "batas",
    mat: "Lino crudo",
    price: "135.00",
    img: "/img/galeria_6.png",
    hoverImage: "/img/galeria_7.png",
    description: "Ideal para ceremonias. Lino en tono natural contrastado con detalles clásicos de costura.",
    isAtelier: true
  },
  {
    id: "6",
    name: "Traje 'Real' Dos Piezas",
    category: "flamenca",
    mat: "Popelín estampado",
    price: "195.00",
    img: "/img/galeria_8.png",
    hoverImage: "/img/galeria_9.png",
    description: "Conjunto flamenco de blusa y falda canastera, perfecto para mayor libertad de movimiento.",
    isAtelier: true
  },
  {
    id: "7",
    name: "Vestido 'Abril' Lunares",
    category: "flamenca",
    mat: "Algodón y Tira Bordada",
    price: "175.00",
    img: "/img/galeria_10.png",
    hoverImage: "/img/galeria_11.png",
    description: "Vestido tradicional con lunares clásicos, rematado con tira bordada en escote y mangas.",
    isAtelier: true
  },
  {
    id: "8",
    name: "Bata 'Romero' Clásica",
    category: "batas",
    mat: "Lino ligero",
    price: "95.00",
    img: "/img/galeria_12.png",
    hoverImage: "/img/galeria_13.png",
    description: "Bata de diseño clásico, corte suelto y detalles de encaje suave para tardes cálidas.",
    isAtelier: false
  },
  {
    id: "9",
    name: "Lazo Terciopelo Burdeos",
    category: "complementos",
    mat: "Terciopelo francés",
    price: "18.00",
    img: "/img/galeria_14.png",
    hoverImage: "/img/galeria_15.png",
    description: "El lazo clásico de la casa. Hecho a mano con terciopelo traído de Francia. Con pinza reforzada.",
    isAtelier: false
  },
  {
    id: "10",
    name: "Mantoncillo de Sedilla",
    category: "complementos",
    mat: "Seda natural",
    price: "45.00",
    img: "/img/galeria_16.png",
    hoverImage: "/img/galeria_17.png",
    description: "El complemento perfecto para cualquier traje de flamenca, con flecos de seda anudados a mano.",
    isAtelier: false
  },
  {
    id: "11",
    name: "Diadema Vichy Terracota",
    category: "complementos",
    mat: "Algodón",
    price: "22.00",
    img: "/img/galeria_18.png",
    hoverImage: "/img/galeria_2.png",
    description: "Perfecta para conjuntar con nuestros vestidos de vichy. Ligera y cómoda para niñas pequeñas.",
    isAtelier: false
  }
];

export function getProductsByCategory(category) {
  if (category === 'coleccion') return products;
  return products.filter(p => p.category === category);
}

export function getProductById(id) {
  return products.find(p => p.id === id);
}
