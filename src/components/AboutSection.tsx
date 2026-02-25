/** Seção "Quem Somos" — altere os textos mockados abaixo ou conecte a um CMS/backend */
const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-28">
      <div className="container grid md:grid-cols-2 gap-12 items-start">
        <div className="border-accent-left pl-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            SOMOS A<br />
            CNTRL'R
          </h2>
          <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
            Inovação e engenharia em jogos digitais
          </p>
          <a
            href="#contato"
            className="inline-block mt-8 bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Sobre nós
          </a>
        </div>

        {/* Right column — description text */}
        <div>
          <p className="text-foreground/80 leading-relaxed">
            A CNTRL'R é um projeto de extensão dedicado 100% à criação,
            desenvolvimento e publicação de jogos digitais. Formada por
            estudantes e profissionais apaixonados pelo universo dos games,
            atuamos na intersecção entre arte, programação e game design. Por
            meio de projetos autorais, Game Jams, competições e forte foco na
            colaboração de equipe, transformamos ideias ousadas em experiências
            interativas ricas e inovadoras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
