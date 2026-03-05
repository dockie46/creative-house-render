import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Domov", href: "#home" },
  { label: "O mne", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Proces", href: "#process" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Studio<span className="text-stone">Arc</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
