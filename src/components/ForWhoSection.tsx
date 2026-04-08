import { Check } from "lucide-react";

const points = [
  "Nejste si jistí, jak uspořádat prostor",
  "Řešíte konkrétní rozhodnutí (např. dispozice, nábytek, koupelna)",
  "Máte představu, ale potřebujete ji doladit",
  "Nechcete dělat chyby, které se špatně opravují",
  "Chcete vidět, jak to bude vypadat dřív, než se do toho pustíte",
];

const ForWhoSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">Pro koho to je</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-10">
            S čím vám můžu <span className="italic">pomoct</span>
          </h2>
          <ul className="space-y-5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-stone mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="font-body text-base text-foreground leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
