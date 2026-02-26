import { Instagram, Linkedin, Github, Twitch } from "lucide-react";
import logo from "@/assets/logo.svg";

// Using MessageSquare as a fallback for Twitch since it might not be in lucide-react by default, or we can see if Twitch is there.
// Wait, Lucide usually has Twitch. Let's try Twitch.

/** Links do footer — edite para adicionar páginas ou redes sociais */
const NAV_LINKS = [
  { label: "Início", href: "/#inicio" },
  { label: "Quem Somos", href: "/somos" },
  { label: "Projetos e Eventos", href: "/projects" },
  { label: "Competições", href: "/competitions" },
];

const PARTICIPATE_LINKS = [
  { label: "Processo Seletivo", href: "https://forms.gle/f4hMfwvSRHNdgDBt6" },
  { label: "Contato", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    href: "https://instagram.com/equipecntrlr/",
    label: "Instagram",
  },
  {
    icon: Twitch,
    href: "https://www.twitch.tv/equipe_cntrlr",
    label: "Twitch",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/equipecntrlr/",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer id="contato" className="bg-secondary pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Participate */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest mb-4">
              Participe
            </h4>
            <ul className="space-y-2">
              {PARTICIPATE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest mb-4">
              Siga-nos
            </h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="CNTRL'R" className="h-8 w-8" />
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CNTRL'R. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
