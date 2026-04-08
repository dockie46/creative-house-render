import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Kateřina Urbanová. Všechna práva vyhrazena.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
