import { MessageCircle, Paintbrush, Eye } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Rychlá konzultace",
    description: "Krátké řešení konkrétního problému – například dispozice místnosti nebo umístění prvků.",
  },
  {
    icon: Paintbrush,
    title: "Návrh interiéru",
    description: "Pomoc s uspořádáním prostoru, výběrem materiálů a celkovým řešením.",
  },
  {
    icon: Eye,
    title: "Vizualizace",
    description: "Ukázka, jak bude prostor reálně vypadat ještě před realizací.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">Služby</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Jak vám můžu <span className="italic">pomoct</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-secondary p-8 border border-border hover:border-stone transition-colors duration-300 group"
            >
              <service.icon
                className="w-8 h-8 text-stone mb-6 group-hover:text-foreground transition-colors duration-300"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
