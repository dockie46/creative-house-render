const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-light text-foreground mb-6">
          Máte konkrétní otázku <span className="italic">nebo projekt?</span>
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
          Napište mi – ráda se na to podívám a navrhnu řešení.
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-3 bg-foreground text-primary-foreground font-body text-sm tracking-wide hover:bg-charcoal transition-colors"
        >
          Kontaktovat mě
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
