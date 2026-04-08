const steps = [
  {
    number: "01",
    title: "Napíšete mi, co řešíte",
    description: "",
  },
  {
    number: "02",
    title: "Pošlete podklady",
    description: "Fotky, půdorys, inspiraci",
  },
  {
    number: "03",
    title: "Navrhnu řešení",
    description: "",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">Proces</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Jak spolupráce <span className="italic">probíhá</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <span className="font-display text-5xl font-light text-stone/40 block mb-4">
                {step.number}
              </span>
              <div className="w-8 h-px bg-stone mx-auto mb-4" />
              <h3 className="font-display text-xl font-medium text-foreground mb-2">
                {step.title}
              </h3>
              {step.description && (
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="font-body text-sm text-muted-foreground text-center mt-12 max-w-lg mx-auto leading-relaxed">
          Vše přizpůsobuji konkrétní situaci – někdy stačí krátká konzultace, jindy detailnější návrh.
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
