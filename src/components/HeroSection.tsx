import heroImage from "@/assets/hero-house.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Moderní interiér – ukázka práce"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative container mx-auto px-6 pt-20">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-light leading-tight text-primary-foreground mb-6">
            Nevíte si rady
            <br />
            <span className="italic">s interiérem?</span>
          </h1>
          <p className="font-body text-base md:text-lg text-primary-foreground/85 font-light mb-4 max-w-xl leading-relaxed">
            Pomůžu vám najít řešení jednoduše a bez zbytečného stresu.
          </p>
          <p className="font-body text-sm md:text-base text-primary-foreground/70 font-light mb-10 max-w-xl leading-relaxed">
            Ať řešíte drobnost nebo celý prostor, pomůžu vám udělat rozhodnutí, které bude dávat smysl – prakticky i vizuálně.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-body text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors"
            >
              Nezávazně se ozvat
            </a>
            <a
              href="#portfolio"
              className="inline-block px-8 py-3 border border-primary-foreground text-primary-foreground font-body text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              Zobrazit ukázky
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
