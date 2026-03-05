import { Home, Paintbrush, Box, Eye } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Návrh rodinných domov",
    description: "Konceptuálne návrhy, dispozičné riešenia a exteriérový dizajn pre moderné rodinné domy.",
  },
  {
    icon: Paintbrush,
    title: "Interiérový dizajn",
    description: "Plánovanie priestorov, rozmiestnenie nábytku, výber materiálov a farebných schém.",
  },
  {
    icon: Box,
    title: "3D modelovanie",
    description: "Detailné SketchUp modely pre domy aj interiéry s presným zobrazením priestoru.",
  },
  {
    icon: Eye,
    title: "Vizualizácie projektov",
    description: "Fotorealistické vizualizácie pre klientov, developerov a prezentácie projektov.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">Služby</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Čo <span className="italic">ponúkam</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-8 border border-border hover:border-stone transition-colors duration-300 group"
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
