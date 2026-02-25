/** Seção Hero — troque a imagem, título e descrição conforme necessário */
const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop"
        alt="Desenvolvimento de Jogos"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 overlay-gradient" />

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-end pb-20 md:pb-28">
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-2xl animate-fade-in-up text-white">
          IMPULSIONADOS PELA INOVAÇÃO.
          <br />
          MOVIDOS POR DESAFIOS.
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/90 max-w-lg animate-fade-in-up [animation-delay:200ms] opacity-0">
          Conheça o projeto de extensão dedicado a criar, desenvolver e publicar jogos digitais. Uma prova de criatividade, engenharia de software, inovação e trabalho em equipe que transforma ideias em experiências imersivas.
        </p>
        <div className="mt-8 animate-fade-in-up [animation-delay:400ms] opacity-0">
          <a
            href="#quem-somos"
            className="inline-block border border-white px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors"
          >
            Descubra o que nos move
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
