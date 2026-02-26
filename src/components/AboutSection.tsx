/** Seção "Quem Somos" — altere os textos mockados abaixo ou conecte a um CMS/backend */
const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-28">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="border-accent-left pl-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            SOMOS A<br />
            CNTRL'R
          </h2>
          <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
            Inovação em Jogos Digitais na Escola Politécnica de PE
          </p>
        </div>

        {/* Right column — description text */}
        <div className="space-y-6">
          <p className="text-foreground/80 leading-relaxed text-lg">
            Muito prazer, somos a <strong>Equipe CNTRL'R</strong>! Um núcleo
            competitivo de desenvolvimento de jogos fundado e mantido por alunos
            do curso de graduação em Engenharia da Computação (eComp) da POLI.
            na Universidade de Pernambuco.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Nascemos do desejo de aproximar o universo dos games do cotidiano
            universitário, buscando não apenas a excelência técnica, mas também
            a difusão da rica cultura do nosso estado. Combinamos arte,
            programação e game design para construir um ambiente em que cultura,
            educação e tecnologia andam lado a lado.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Nossa visão é clara: transformar a POLI-UPE num dos maiores polos de
            desenvolvimento e fomento de jogos digitais do país, colaborando
            ativamente com a comunidade local por meio de Game Jams e
            exposições.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
