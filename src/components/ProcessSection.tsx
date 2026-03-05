const steps = [
  {
    number: "01",
    title: "Konzultácia",
    description: "Úvodný rozhovor o vašich predstavách, požiadavkách a rozpočte.",
  },
  {
    number: "02",
    title: "Koncept návrhu",
    description: "Vypracovanie dispozičného riešenia a predbežného konceptu.",
  },
  {
    number: "03",
    title: "3D model",
    description: "Vytvorenie detailného 3D modelu v programe SketchUp.",
  },
  {
    number: "04",
    title: "Finálna vizualizácia",
    description: "Fotorealistické zobrazenie projektu pripravené na prezentáciu.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">Proces</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Ako <span className="italic">pracujem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="text-center">
              <span className="font-display text-5xl font-light text-stone/40 block mb-4">
                {step.number}
              </span>
              <div className="w-8 h-px bg-stone mx-auto mb-4" />
              <h3 className="font-display text-xl font-medium text-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
