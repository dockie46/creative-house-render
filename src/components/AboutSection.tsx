const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">O mne</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
            Dizajn, ktorý <span className="italic">inšpiruje</span>
          </h2>
          <div className="w-12 h-px bg-stone mx-auto mb-8" />
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
            Som freelance dizajnér a OSVČ so špecializáciou na návrhy rodinných domov, dispozičné riešenia
            a interiérové koncepty. Moja práca vzniká predovšetkým v programe SketchUp, kde prepájam
            praktické riešenia s estetickým cítením.
          </p>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
            Zameriavam sa na moderný minimalistický dizajn, kde každý detail má svoj účel.
            Či už ide o novostavbu, rekonštrukciu alebo vizualizáciu projektu –
            pomôžem vám premeniť predstavy na realitu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
