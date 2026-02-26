import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/C3JAM/premiacao.jpg";

const NEWS_ITEMS = [
  {
    date: "03 de Março de 2026",
    title: "Vagas Abertas: Processo Seletivo",
    description:
      "Abertas 8 novas vagas na Equipe CNTRL'R (7 técnicos, 1 social media). Inscreva-se e venha desenvolver jogos conosco na POLI!",
    link: "https://forms.gle/f4hMfwvSRHNdgDBt6",
  },
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
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="inicio" className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Premiação C.3. GGJ"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* Overlay de escurecimento simples */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 container h-full flex flex-col justify-center items-center text-center pb-20 md:pb-28">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl animate-fade-in-up text-white">
            DESENVOLVENDO O FUTURO
            <br />
            COMPETITIVO DOS JOGOS
          </h1>
          <p className="mt-6 text-base md:text-xl text-white/95 max-w-2xl animate-fade-in-up [animation-delay:200ms] opacity-0 font-medium">
            Equipe competitiva de desenvolvimento de jogos fundada e mantida por
            alunos do curso de graduação em eComp na Escola Politécnica de
            Pernambuco!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:400ms] opacity-0">
            <a
              href="#noticias"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              Últimas Notícias
            </a>
            <Link
              to="/somos"
              className="inline-block border bg-secondary text-secondary-foreground px-8 py-3 rounded-md text-sm font-semibold hover:bg-secondary/90 transition-colors shadow-lg"
            >
              Conheça a Equipe
            </Link>
          </div>
        </div>
      </section>

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
