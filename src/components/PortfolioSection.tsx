import { useState } from "react";
import portfolioHouse1 from "@/assets/portfolio-house-1.jpg";
import portfolioHouse2 from "@/assets/portfolio-house-2.jpg";
import portfolioInterior1 from "@/assets/portfolio-interior-1.jpg";
import portfolioInterior2 from "@/assets/portfolio-interior-2.jpg";
import portfolioInterior3 from "@/assets/portfolio-interior-3.jpg";
import portfolio3d1 from "@/assets/portfolio-3d-1.jpg";
import portfolioConcept1 from "@/assets/portfolio-concept-1.jpg";
import heroHouse from "@/assets/hero-house.jpg";

const categories = ["Všetko", "Rodinné domy", "Interiéry", "3D vizualizácie", "Koncepty"];

const projects = [
  {
    image: portfolioHouse1,
    title: "Rodinný dom – Brno",
    description: "Moderný jednopodlažný dom s dreveným obkladom",
    category: "Rodinné domy",
    tools: "SketchUp, V-Ray",
  },
  {
    image: portfolioInterior1,
    title: "Obývačka – minimalizmus",
    description: "Svetlý interiér v neutrálnych tónoch",
    category: "Interiéry",
    tools: "SketchUp, Enscape",
  },
  {
    image: portfolio3d1,
    title: "3D model – Vila",
    description: "Technický model dvojpodlažnej vily",
    category: "3D vizualizácie",
    tools: "SketchUp",
  },
  {
    image: portfolioInterior2,
    title: "Kuchyňa – mramorový dizajn",
    description: "Elegantná kuchyňa s mramorovou doskou",
    category: "Interiéry",
    tools: "SketchUp, V-Ray",
  },
  {
    image: portfolioHouse2,
    title: "Rodinný dom – Praha",
    description: "Dvojpodlažný dom s presklenými fasádami",
    category: "Rodinné domy",
    tools: "SketchUp, Enscape",
  },
  {
    image: portfolioConcept1,
    title: "Koncept – pôdorys a perspektíva",
    description: "Architektonický koncept s pôdorysom",
    category: "Koncepty",
    tools: "SketchUp, ruční skica",
  },
  {
    image: portfolioInterior3,
    title: "Spálňa – Scandinavian",
    description: "Minimalistická spálňa v škandinávskom štýle",
    category: "Interiéry",
    tools: "SketchUp, V-Ray",
  },
  {
    image: heroHouse,
    title: "Moderná vila – exteriér",
    description: "Vizualizácia modernej vily pri západe slnka",
    category: "Rodinné domy",
    tools: "SketchUp, V-Ray",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Všetko");

  const filtered = activeCategory === "Všetko"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">Portfólio</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Vybrané <span className="italic">projekty</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-sm px-5 py-2 transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-foreground text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-1">
                {project.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-1">
                {project.description}
              </p>
              <p className="font-body text-xs text-stone">{project.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
