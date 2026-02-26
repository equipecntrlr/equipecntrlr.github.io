import {
  Calendar,
  MapPin,
  Users,
  Ticket,
  Link as LinkIcon,
  ExternalLink,
} from "lucide-react";
import imgLab0 from "@/assets/C3JAM/lab-0.jpg";
import imgLab1 from "@/assets/C3JAM/lab-1.jpg";
import imgLab2 from "@/assets/C3JAM/lab-2.jpg";
import imgLab3 from "@/assets/C3JAM/lab-3.jpg";
import imgLab4 from "@/assets/C3JAM/lab-4.jpg";
import imgLab5 from "@/assets/C3JAM/lab-5.jpg";
import imgPremiacao0 from "@/assets/C3JAM/premiacao-0.jpg";
import imgPremiacao1 from "@/assets/C3JAM/premiacao-1.jpg";
import imgPremiacao2 from "@/assets/C3JAM/premiacao-2.jpg";
import imgPremiacao3 from "@/assets/C3JAM/premiacao-3.jpg";
import imgPremiacao4 from "@/assets/C3JAM/premiacao-4.jpg";
import imgPremiacao5 from "@/assets/C3JAM/premiacao-5.jpg";
import imgPremiacao6 from "@/assets/C3JAM/premiacao-6.jpg";
import imgPremiacao from "@/assets/C3JAM/premiacao.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CAROUSEL_IMAGES = [
  imgPremiacao,
  imgPremiacao0,
  imgPremiacao1,
  imgPremiacao2,
  imgPremiacao3,
  imgPremiacao4,
  imgPremiacao5,
  imgPremiacao6,
  imgLab5,
  imgLab4,
  imgLab3,
  imgLab2,
  imgLab1,
  imgLab0,
];

export default function Projects() {
  return (
    <>
      {/* Header */}
      <div className="bg-secondary/30 pt-20 pb-10 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Projetos e Eventos
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            Iniciativas que desenvolvemos e eventos que promovemos para
            impulsionar a comunidade de criação de jogos.
          </p>
        </div>
      </div>

      {/* Featured Event: C.3. GGJ */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-sm text-sm font-bold tracking-widest mb-4">
                  EVENTO EM DESTAQUE
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                  C.3. Global Game Jam
                </h2>
                <h3 className="text-2xl font-light text-muted-foreground mt-2">
                  POLI/UPE
                </h3>
              </div>

              <p className="text-foreground/80 leading-relaxed text-lg">
                A <strong>C.3. Jam</strong> foi a primeira edição presencial da
                maior Game Jam do mundo realizada na Escola Politécnica de
                Pernambuco (POLI/UPE). Durante 48 horas de imersão, jammers
                enfrentaram o desafio de criar jogos do zero!
              </p>

              {/* Event Details Grid */}
              <div className="grid sm:grid-cols-2 gap-6 bg-secondary/10 p-6 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-1 text-primary" size={20} />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide">
                      Data
                    </h4>
                    <p className="text-muted-foreground">
                      29, 30 e 31 de janeiro de 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-primary" size={20} />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide">
                      Local
                    </h4>
                    <p className="text-muted-foreground">
                      Campus POLI - UPE (Recife, PE)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="mt-1 text-primary" size={20} />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide">
                      Capacidade
                    </h4>
                    <p className="text-muted-foreground">
                      140 participantes
                      <br />
                      (60 presencial, 80 online)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ticket className="mt-1 text-primary" size={20} />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide">
                      Entrada
                    </h4>
                    <p className="text-muted-foreground">
                      1kg de alimento não perecível
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://globalgamejam.org/jam-sites/2026/c3-jam-poli-upe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-foreground text-background font-semibold px-6 py-3 rounded-md hover:bg-foreground/90 transition-colors"
                >
                  <ExternalLink size={18} />
                  Página Oficial da GGJ
                </a>
              </div>
            </div>

            {/* Right Content (Gallery Preview) */}
            <div className="space-y-4">
              <div className="w-full relative">
                <Carousel opts={{ loop: true }}>
                  <CarouselContent>
                    {CAROUSEL_IMAGES.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <div className="aspect-video w-full rounded-lg overflow-hidden border border-border bg-muted">
                          <img
                            src={img}
                            alt={`Premiação e Labs C.3. GGJ ${idx + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex left-2 bg-background/50 hover:bg-background/90" />
                  <CarouselNext className="hidden md:flex right-2 bg-background/50 hover:bg-background/90" />
                </Carousel>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden border border-border bg-muted">
                  <img
                    src={imgLab0}
                    alt="Laboratório durante a Jam"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-border bg-muted">
                  <img
                    src={imgLab1}
                    alt="Equipe trabalhando"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-border bg-muted">
                  <img
                    src={imgLab2}
                    alt="Apresentação de jogos"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
