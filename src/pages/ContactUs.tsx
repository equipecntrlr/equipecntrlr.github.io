import { Mail, MapPin, Instagram, Twitch, Linkedin } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      <div className="bg-secondary/30 pt-32 pb-20 border-b border-border">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Fale com a Gente
          </h1>
          <p className="text-muted-foreground text-xl">
            Seja para tirar dúvidas, propor parcerias ou jogar junto.
            <br className="hidden md:block" /> Estamos sempre abertos ao
            diálogo!
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Direct Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  Informações de Contato
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-full text-foreground">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Localização</h3>
                      <p className="text-muted-foreground">
                        Escola Politécnica de Pernambuco (POLI - UPE)
                        <br />
                        Recife, PE, Brasil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-full text-foreground">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">E-mail Comercial</h3>
                      <a
                        href="mailto:equipecntrlr@gmail.com"
                        className="text-primary hover:underline"
                      >
                        equipecntrlr@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  Redes Sociais
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/equipecntrlr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all flex flex-col items-center gap-2"
                  >
                    <Instagram size={32} />
                    <span className="text-xs font-bold">Instagram</span>
                  </a>
                  <a
                    href="https://www.twitch.tv/equipe_cntrlr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-card border border-border rounded-lg text-muted-foreground hover:text-purple-500 hover:border-purple-500 transition-all flex flex-col items-center gap-2"
                  >
                    <Twitch size={32} />
                    <span className="text-xs font-bold">Twitch</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/equipecntrlr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-card border border-border rounded-lg text-muted-foreground hover:text-blue-500 hover:border-blue-500 transition-all flex flex-col items-center gap-2"
                  >
                    <Linkedin size={32} />
                    <span className="text-xs font-bold">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Representative Details */}
            <div className="bg-card border border-border p-8 rounded-xl h-fit">
              <h2 className="font-display text-2xl font-bold mb-6">
                Principais Representantes
              </h2>

              <div className="space-y-6">
                <div className="border-b border-border pb-4">
                  <h3 className="font-bold text-lg text-foreground">
                    Prof. Dr. Hemir Santiago
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-2">
                    Professor Responsável / Coordenador
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Responsável por assuntos acadêmicos e representação
                    institucional da equipe perante a UPE.
                  </p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-bold text-lg text-foreground">
                    Pedro Leite
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-2">
                    Presidente
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Principal contato para parcerias, organização de Game Jams e
                    assuntos gerais da Equipe CNTRL'R.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-foreground">
                    Membros do Núcleo
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Eryck Emmanuel, Anaclécio Brederodes, Talles Lins e Matheus
                    Souza. Atuam como lideranças técnicas e de comunicação do
                    grupo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
