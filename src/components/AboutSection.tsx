const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">O mně</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
            Kateřina <span className="italic">Urbanová</span>
          </h2>
          <div className="w-12 h-px bg-stone mx-auto mb-8" />
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
            Jsem designérka, která se zaměřuje na praktická řešení interiérů.
            Nejsem velké studio ani architektonická kancelář. Pomáhám lidem vyřešit
            konkrétní situace v jejich domově – jednoduše, funkčně a bez zbytečné složitosti.
          </p>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
            Mám technické zázemí a pracuji převážně v programu SketchUp,
            díky kterému dokážu návrhy převést do realistické podoby.
          </p>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
            Věřím, že dobrý interiér není jen o vzhledu, ale hlavně o tom, jak se v něm žije.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
