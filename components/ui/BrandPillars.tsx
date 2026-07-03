export default function BrandPillars() {
  const pillars = [
    {
      title: "Confección Artesanal",
      description: "Cada batita y prenda nace en nuestro taller de Sevilla, cuidando minuciosamente cada puntada para vestir a los más pequeños con la delicadeza que merecen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 10.5L16.5 12l-2.25 1.5m-3-3L9 12l2.25 1.5M12 3C6.477 3 2 7.477 2 13c0 2.457 1.134 4.673 3 6l2.1-1.4A8.006 8.006 0 0112 5c4.411 0 8 3.589 8 8 0 2.228-1.026 4.22-2.637 5.548L19.5 20c2.046-1.571 3.5-4.004 3.5-6.66 0-5.523-4.477-10-10-10z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5V17m0 0l-2.5 2.5M12 17l2.5 2.5" />
        </svg>
      )
    },
    {
      title: "Tejidos Seleccionados",
      description: "Elegimos exclusivamente linos cálidos, algodones y plumetis que garantizan suavidad y resistencia, priorizando siempre el confort infantil en el día a día.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-terracotta mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      )
    },
    {
      title: "Armonía de Colección",
      description: "Diseñamos colecciones integrales donde cada complemento, desde el lazo de terciopelo hasta el calzado, respira la misma elegancia clásica y atemporal.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-burgundy mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-base border-t border-b border-ink/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-plumeti opacity-20 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-3 md:gap-12 lg:gap-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col items-center text-center">
              {pillar.icon}
              <h3 className="text-xl font-serif text-ink mb-3 font-semibold tracking-wide">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-ink/75 leading-relaxed max-w-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
