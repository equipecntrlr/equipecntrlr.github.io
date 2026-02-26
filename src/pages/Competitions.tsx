import { Trophy, Calendar, ExternalLink, Users } from "lucide-react";
import imgCover from "@/assets/Membros/Grupo/grupo-1.jpg";

const COMPETITIONS = [
  {
    title: "Global Game Jam 2026",
    date: "29 a 31 de Janeiro de 2026",
    type: "Híbrido (Local/Online)",
    description:
      "A Global Game Jam é o maior evento de criação de jogos do mundo que acontece simultaneamente em dezenas de locais físicos ao redor do globo.",
    status: "Confirmado",
    link: "https://globalgamejam.org/",
  },
  {
    title: "7DRL Challenge 2026",
    date: "Fevereiro / Março de 2026",
    type: "Online",
    description:
      "Desafio de 7 dias focados exclusivamente na criação de um jogo do estilo Roguelike, testando os limites de geração procedural e exploração.",
    status: "Planejado",
    link: "https://itch.io/jams",
  },
  {
    title: "Gamedev.js Jam 2026",
    date: "13 a 26 de Abril de 2026",
    type: "Online",
    description:
      "Competição com duração de 13 dias focada no desenvolvimento de Web games (HTML5) em cima de um tema a ser definido, com prêmios para diversas categorias.",
    status: "Em estudo",
    link: "https://gamedevjs.com/jam/",
  },
  {
    title: "SBGames (Simpósio Brasileiro de Games)",
    date: "Segundo Semestre de 2026",
    type: "Presencial",
    description:
      "Participação no Festival de Jogos do SBGames, principal evento brasileiro na área acadêmica e de desenvolvimento de games.",
    status: "Planejado",
    link: "https://www.sbgames.org/",
  },
];

export default function Competitions() {
  return (
    <>
      {/* Intro Header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={imgCover}
            alt="Equipe competindo"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        </div>
        <div className="container relative z-10 text-center max-w-3xl border-b border-border pb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 drop-shadow-sm">
            Competições no Radar
          </h1>
          <p className="text-muted-foreground text-lg">
            Nossa equipe vive movida a desafios. Confira as Game Jams e
            Festivais em que a CNTRL'R planeja marcar presença!
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="space-y-8">
            {COMPETITIONS.map((comp, idx) => (
              <div
                key={idx}
                className="group flex flex-col md:flex-row gap-6 bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors"
              >
                {/* Left side info */}
                <div className="md:w-1/3 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {comp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={16} className="text-primary" />
                      {comp.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users size={16} className="text-primary" />
                      {comp.type}
                    </div>
                  </div>

                  <div className="mt-6 md:mt-0">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold
                      ${
                        comp.status === "Confirmado"
                          ? "bg-primary/20 text-primary"
                          : comp.status === "Planejado"
                            ? "bg-blue-500/20 text-blue-500"
                            : "bg-muted text-muted-foreground"
                      }
                    `}
                    >
                      <Trophy size={14} />
                      {comp.status}
                    </span>
                  </div>
                </div>

                {/* Right side content */}
                <div className="md:w-2/3 md:border-l md:border-border md:pl-6 flex flex-col">
                  <p className="text-foreground/80 leading-relaxed flex-grow">
                    {comp.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-border/50 text-right">
                    <a
                      href={comp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                    >
                      Página da Competição
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
