/** Dados dos cards — edite título, imagem e link conforme necessário.
 *  Para conectar ao backend, substitua este array por dados de uma API. */
interface CardData {
  title: string;
  image: string;
  href: string;
}

const CARDS: CardData[] = [
  { title: "QUEM SOMOS", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", href: "#quem-somos" },
  { title: "COMPETIÇÕES", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop", href: "#" },
  { title: "EXPOSIÇÕES", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop", href: "#" },
  { title: "PROJETOS", image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop", href: "#" },
  { title: "PROCESSO SELETIVO", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop", href: "#" },
  { title: "CONTATO", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop", href: "#contato" },
];

const CardsGrid = () => {
  return (
    <section id="cards" className="py-16 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        {CARDS.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 card-overlay" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                {card.title}
              </h3>
              <span className="self-end text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                Saiba mais →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CardsGrid;
