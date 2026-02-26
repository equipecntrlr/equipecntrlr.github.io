import AboutSection from "@/components/AboutSection";
import nucleo0 from "@/assets/Membros/Nucleo/nucleo-0.jpg";
import nucleo1 from "@/assets/Membros/Nucleo/nucleo-1.jpg";
import nucleo2 from "@/assets/Membros/Nucleo/nucleo-2.jpg";
import nucleo3 from "@/assets/Membros/Nucleo/nucleo-3.jpg";
import grupo0 from "@/assets/Membros/Grupo/grupo-0.jpg";

export default function Somos() {
  return (
    <>
      {/* Intro Header */}
      <div className="bg-secondary/30 pt-20 pb-10 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Quem Somos
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Conheça as mentes por trás do controle.
          </p>
        </div>
      </div>

      <AboutSection />

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              O Núcleo Pioneiro
            </h2>
            <p className="text-muted-foreground text-lg">
              Estudantes e professores que uniram forças para transformar a POLI
              numa referência de GameDev.
            </p>
          </div>

          {/* Leaders Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 border border-border rounded-lg bg-background">
              <h3 className="font-display text-xl font-bold mb-2">
                Professor Responsável
              </h3>
              <p className="text-primary text-lg font-medium mb-4">
                Prof. Dr. Hemir Santiago
              </p>
              <p className="text-muted-foreground">
                Coordenador do projeto, guiando e apoiando a fundação e as
                iniciativas da equipe desde o primeiro dia.
              </p>
            </div>

            <div className="p-8 border border-border rounded-lg bg-background">
              <h3 className="font-display text-xl font-bold mb-2">
                Presidência
              </h3>
              <p className="text-primary text-lg font-medium mb-4">
                Pedro Leite
              </p>
              <p className="text-muted-foreground">
                Membro fundador e presidente, liderando a Equipe CNTRL'R rumo às
                competições e projetos inovadores.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h3 className="font-display text-2xl font-bold">
                Membros Fundadores & Núcleo
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <strong>Eryck Emmanuel</strong> (Fundador)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <strong>Anaclécio Brederodes</strong> (Fundador)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <strong>Talles Lins</strong> (Fundador)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary-foreground text-muted-foreground"></span>
                  Matheus Souza de Oliveira
                </li>
              </ul>
              <p className="text-muted-foreground pt-4 bg-secondary/20 p-4 rounded-md border-l-4 border-primary">
                "Com muito trabalho duro, pavimentaremos um futuro de grande
                sucesso!"
              </p>
            </div>

            {/* Visual Grid of Core Members photos */}
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <img
                src={nucleo0}
                alt="Membro do Núcleo"
                className="rounded-lg object-cover aspect-square shadow-md"
                loading="lazy"
              />
              <img
                src={nucleo1}
                alt="Membro do Núcleo"
                className="rounded-lg object-cover aspect-square shadow-md translate-y-4"
                loading="lazy"
              />
              <img
                src={nucleo2}
                alt="Membro do Núcleo"
                className="rounded-lg object-cover aspect-square shadow-md -translate-y-4"
                loading="lazy"
              />
              <img
                src={nucleo3}
                alt="Membro do Núcleo"
                className="rounded-lg object-cover aspect-square shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Team Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight mb-8">
            Nossa Equipe A Todo Vapor
          </h2>
          <div className="relative overflow-hidden rounded-xl border border-border shadow-lg inline-block w-full max-w-4xl max-h-[500px]">
            <img
              src={grupo0}
              alt="Equipe CNTRL'R Reunião"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Desde nossa primeira reunião presencial, estamos focados em
            intensificar nossos projetos e colher o sucesso!
          </p>
        </div>
      </section>
    </>
  );
}
