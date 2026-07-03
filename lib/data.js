export const products = [
  {
    id: "1",
    name: "Traje Flamenca 'Feria'",
    category: "flamenca",
    mat: "Algodón perforado y madroños",
    price: "185.00",
    img: "/img/flamenca_blanca.png",
    hoverImage: "/img/galeria_9.png",
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
    hoverImage: "/img/galeria_10.png",
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
    hoverImage: "/img/galeria_11.png",
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
    hoverImage: "/img/galeria_12.png",
    description: "Bata ligera en blanco roto ideal para la romería o tardes de verano. Detalles en encaje de bolillos.",
    isAtelier: false
  },
  {
    id: "5",
    name: "Vestido Arras Terciopelo",
    category: "batas",
    mat: "Lino y lazo de terciopelo",
    price: "135.00",
    img: "/img/galeria_5.png",
    hoverImage: "/img/galeria_13.png",
    description: "Ideal para ceremonias. Lino en tono natural contrastado con un gran lazo de terciopelo burdeos.",
    isAtelier: true
  },
  {
    id: "6",
    name: "Traje 'Real' Dos Piezas",
    category: "flamenca",
    mat: "Popelín estampado",
    price: "195.00",
    img: "/img/galeria_6.png",
    hoverImage: "/img/galeria_14.png",
    description: "Conjunto flamenco de blusa y falda canastera, perfecto para mayor libertad de movimiento.",
    isAtelier: true
  },
  {
    id: "7",
    name: "Lazo Terciopelo Burdeos",
    category: "complementos",
    mat: "Terciopelo francés",
    price: "18.00",
    img: "/img/galeria_7.png",
    hoverImage: "/img/galeria_15.png",
    description: "El lazo clásico de la casa. Hecho a mano con terciopelo traído de Francia. Con pinza reforzada.",
    isAtelier: false
  },
  {
    id: "8",
    name: "Lazo Vichy Terracota",
    category: "complementos",
    mat: "Algodón",
    price: "15.00",
    img: "/img/galeria_8.png",
    hoverImage: "/img/galeria_16.png",
    description: "Perfecto para conjuntar con nuestros vestidos de vichy. Ligero y con mucha caída.",
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
