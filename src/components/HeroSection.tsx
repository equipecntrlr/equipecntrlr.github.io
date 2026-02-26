import heroImage from "@/assets/Membros/Grupo/grupo-2.jpg";
/** Seção Hero — troque a imagem, título e descrição conforme necessário */
const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="CNTRL'R Drone"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 overlay-gradient" />

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center items-center text-center pb-20 md:pb-28">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl animate-fade-in-up text-white">
          DESENVOLVENDO O FUTURO
          <br />
          COMPETITIVO DOS JOGOS
        </h1>
        <p className="mt-6 text-base md:text-xl text-white/90 max-w-2xl animate-fade-in-up [animation-delay:200ms] opacity-0 drop-shadow-md">
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
          <a
            href="#quem-somos"
            className="inline-block border border-white px-8 py-3 rounded-md text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors shadow-lg background-blur-sm"
          >
            Conheça a Equipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
