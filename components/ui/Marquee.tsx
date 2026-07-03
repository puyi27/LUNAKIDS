export default function Marquee() {
  const announcements = [
    "Diseños exclusivos hechos a mano en Sevilla",
    "•",
    "Moda infantil y trajes de flamenca artesanales",
    "•",
    "Envíos a toda España",
    "•"
  ];

  return (
    <div className="bg-ink text-base py-2.5 overflow-hidden flex whitespace-nowrap items-center w-full">
      <div className="flex animate-marquee">
        {/* Render text sequence 4 times for a smooth continuous scrolling effect on large screens */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {announcements.map((text, idx) => (
              <span 
                key={idx} 
                className={`mx-6 font-sans text-xs tracking-widest uppercase opacity-90 ${text === '•' ? 'text-accent opacity-100 text-lg' : ''}`}
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
