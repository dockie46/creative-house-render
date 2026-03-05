import heroImage from "@/assets/hero-house.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Moderný rodinný dom – architektonická vizualizácia"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative container mx-auto px-6 pt-20">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight text-primary-foreground mb-6">
            Design domov
            <br />
            <span className="italic">a interiérov</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 font-light mb-10 max-w-lg">
            Architektonické návrhy, vizualizácie a modelovanie v SketchUp
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-body text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors"
            >
              Zobraziť portfólio
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border border-primary-foreground text-primary-foreground font-body text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
