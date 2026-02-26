import nucleo0 from "@/assets/Membros/Nucleo/nucleo-0.jpg";
import nucleo1 from "@/assets/Membros/Nucleo/nucleo-1.jpg";
import nucleo2 from "@/assets/Membros/Nucleo/nucleo-2.jpg";
import nucleo3 from "@/assets/Membros/Nucleo/nucleo-3.jpg";
import grupo0 from "@/assets/Membros/Grupo/grupo-0.jpg";
import grupo1 from "@/assets/Membros/Grupo/grupo-1.jpg";
import grupo2 from "@/assets/Membros/Grupo/grupo-2.jpg";
import grupo3 from "@/assets/Membros/Grupo/grupo-3.jpg";
import grupo4 from "@/assets/Membros/Grupo/grupo-4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

      {/* About Content */}
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
              competitivo de desenvolvimento de jogos fundado e mantido por
              alunos do curso de graduação em Engenharia da Computação (eComp)
              da POLI na Universidade de Pernambuco.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Nascemos do desejo de aproximar o universo dos games do cotidiano
              universitário, buscando não apenas a excelência técnica, mas
              também a difusão da rica cultura do nosso estado. Combinamos arte,
              programação e game design para construir um ambiente em que
              cultura, educação e tecnologia andam lado a lado.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Nossa visão é clara: transformar a POLI-UPE num dos maiores polos
              de desenvolvimento e fomento de jogos digitais do país,
              colaborando ativamente com a comunidade local por meio de Game
              Jams e exposições.
            </p>
          </div>
        </div>
      </section>

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
                  <span>Eryck Emmanuel</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Anaclécio Brederodes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Talles Lins</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Matheus Souza de Oliveira</span>
                </li>
              </ul>
            </div>

            {/* Visual Grid of Core Members photos */}
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <img
                src={nucleo0}
                alt="Membro do Núcleo"
                className="rounded-lg object-cover aspect-square shadow-md mb-4"
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
      <section className="py-20 bg-background border-t border-border overflow-hidden">
        <div className="container text-center px-8 md:px-12">
          <h2 className="font-display text-3xl font-bold tracking-tight mb-8">
            Nossa Equipe A Todo Vapor
          </h2>

          <div className="w-full max-w-4xl mx-auto">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {[grupo0, grupo1, grupo2, grupo3, grupo4].map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden rounded-xl border border-border shadow-lg w-full max-h-[500px] aspect-[16/9]">
                      <img
                        src={img}
                        alt={`Equipe CNTRL'R Momentos ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>

          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
            Desde nossa primeira reunião presencial, estamos focados em
            intensificar nossos projetos e colher o sucesso!
          </p>
        </div>
      </section>
    </>
  );
}
