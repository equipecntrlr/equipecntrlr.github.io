import HeroSection from "@/components/HeroSection";
import { Link } from "@tanstack/react-router";

const NEWS_ITEMS = [
  {
    date: "Janeiro 2026",
    title: "C.3. Global Game Jam na POLI - UPE",
    description:
      "Nossa primeira sede participando do maior evento de criação de jogos do mundo! 48h insanas de desenvolvimento.",
    link: "/projects",
  },
  {
    date: "Dezembro 2025",
    title: "Fim de Semestre",
    description:
      "Desejamos a todos um excelente fim de ano! Que 2026 venha com muitos jogos, saúde e sucesso para todos.",
    link: "#",
  },
  {
    date: "Novembro 2025",
    title: "Primeira Reunião Presencial",
    description:
      "Nossa primeira reunião com a equipe a todo vapor para alinhar as expectativas e começar a planejar o projeto!",
    link: "/somos",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section id="noticias" className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Últimas do nosso Checkpoint
            </h2>
            <p className="text-muted-foreground text-lg">
              Acompanhe o que tem acontecido com a equipe recentemente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item, i) => (
              <div
                key={i}
                className="group relative border border-border p-6 rounded-lg bg-card hover:border-primary transition-colors flex flex-col"
              >
                <time className="text-sm font-semibold text-primary mb-2 block tracking-wider">
                  {item.date}
                </time>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="text-sm font-bold inline-flex items-center gap-1 group-hover:text-primary transition-colors mt-auto"
                >
                  Ler mais{" "}
                  <span className="text-primary translate-x-0 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://www.linkedin.com/company/equipecntrlr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Ver todas as atualizações no LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
