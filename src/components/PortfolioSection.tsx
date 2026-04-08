import { useState } from "react";
import portfolioHouse1 from "@/assets/portfolio-house-1.jpg";
import portfolioHouse2 from "@/assets/portfolio-house-2.jpg";
import portfolioInterior1 from "@/assets/portfolio-interior-1.jpg";
import portfolioInterior2 from "@/assets/portfolio-interior-2.jpg";
import portfolioInterior3 from "@/assets/portfolio-interior-3.jpg";
import portfolio3d1 from "@/assets/portfolio-3d-1.jpg";
import portfolioConcept1 from "@/assets/portfolio-concept-1.jpg";
import heroHouse from "@/assets/hero-house.jpg";

const categories = ["Vše", "Interiéry", "Vizualizace", "Koncepty"];

const projects = [
  {
    image: portfolioInterior1,
    title: "Obývací pokoj – minimalistický styl",
    description: "Světlý interiér v neutrálních tónech",
    category: "Interiéry",
    tools: "SketchUp, Enscape",
  },
  {
    image: portfolioInterior2,
    title: "Kuchyně – mramorový design",
    description: "Elegantní kuchyně s mramorovou deskou",
    category: "Interiéry",
    tools: "SketchUp, V-Ray",
  },
  {
    image: portfolioInterior3,
    title: "Ložnice – skandinávský styl",
    description: "Minimalistická ložnice ve skandinávském stylu",
    category: "Interiéry",
    tools: "SketchUp, V-Ray",
  },
  {
    image: portfolio3d1,
    title: "3D vizualizace – rodinný dům",
    description: "Vizualizace prostoru před realizací",
    category: "Vizualizace",
    tools: "SketchUp",
  },
  {
    image: portfolioHouse1,
    title: "Vizualizace – exteriér domu",
    description: "Moderní rodinný dům s dřevěným obkladem",
    category: "Vizualizace",
    tools: "SketchUp, V-Ray",
  },
  {
    image: portfolioConcept1,
    title: "Koncept – půdorys a perspektiva",
    description: "Návrh dispozice s vizualizací",
    category: "Koncepty",
    tools: "SketchUp, ruční skica",
  },
  {
    image: portfolioHouse2,
    title: "Vizualizace – prosklená fasáda",
    description: "Dvoupodlažní dům s prosklenými fasádami",
    category: "Vizualizace",
    tools: "SketchUp, Enscape",
  },
  {
    image: heroHouse,
    title: "Vizualizace – moderní vila",
    description: "Realistické zobrazení exteriéru při západu slunce",
    category: "Vizualizace",
    tools: "SketchUp, V-Ray",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Vše");

  const filtered = activeCategory === "Vše"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">Portfólio</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Ukázky <span className="italic">práce</span>
          </h2>
        </div>

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
