import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { ArrowRight, Recycle, Mouse, Menu, X } from "lucide-react";

const heroImage = "/hero-concrete.jpg";
const aggregateImage =
  "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80";

type NavItem = {
  label: string;
  target: string;
  isCta?: boolean;
};

type ProcessHighlight = {
  title: string;
  description: string;
};

type ServiceSection = {
  id: string;
  title: string;
  description: string;
  features: string[];
};

type ImpactMetric = {
  title: string;
  description: string;
};

type ContactCard = {
  title: string;
  lines: string[];
};

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const navItems: NavItem[] = [
  { label: "Nosotros", target: "innovacion" },
  { label: "Servicios", target: "servicios" },
  { label: "Impacto", target: "impacto" },
  { label: "Contacto", target: "contacto", isCta: true },
];

const processHighlights: ProcessHighlight[] = [
  {
    title: "Economía Circular",
    description:
      "Convertimos residuos de hormigón en áridos reciclados de alta calidad",
  },
  {
    title: "Captura de CO₂",
    description: "Utilizamos carbonatación acelerada para reducir emisiones",
  },
  {
    title: "Certificación NCh 163:2024",
    description: "Material certificado para uso en hormigones estructurales",
  },
  {
    title: "Proceso Innovador",
    description: "Tecnología de biocarbonatación de última generación",
  },
];

const serviceSections: ServiceSection[] = [
  {
    id: "recoleccion",
    title: "Recolección y Recepción",
    description:
      "Retiramos o recibimos escombros de hormigón directamente desde tus obras o demoliciones",
    features: [
      "Servicio de recolección en obra",
      "Recepción en planta",
      "Gestión de documentación",
      "Trazabilidad completa",
    ],
  },
  {
    id: "procesamiento",
    title: "Procesamiento en Planta",
    description:
      "Transformamos el hormigón en áridos reciclados mediante tecnología avanzada",
    features: [
      "Trituración y clasificación",
      "Biocarbonatación",
      "Carbonatación acelerada con CO₂",
      "Control de calidad continuo",
    ],
  },
  {
    id: "certificacion",
    title: "Certificación y Entrega",
    description:
      "Material certificado NCh 163:2024 listo para usar en hormigones estructurales",
    features: [
      "Certificación según norma chilena",
      "Análisis de laboratorio",
      "Despacho a obra",
      "Soporte técnico",
    ],
  },
];

const impactMetrics: ImpactMetric[] = [
  {
    title: "100% Hormigón Reciclado",
    description: "Transformamos todos los residuos en material útil",
  },
  {
    title: "60% Reducción de CO₂",
    description: "Comparado con áridos naturales",
  },
  {
    title: "NCh 163:2024 Certificación",
    description: "Cumple normas chilenas de calidad",
  },
  {
    title: "0 Residuos al Vertedero",
    description: "Economía circular completa",
  },
];

const impactBenefits: string[] = [
  "Reducción del impacto ambiental de la construcción",
  "Disminución de la extracción de áridos naturales",
  "Captura y reutilización de CO₂ industrial",
  "Solución competitiva en precio y calidad",
  "Contribución a certificaciones ambientales (LEED, CES)",
  "Cumplimiento de normativas de economía circular",
];

const contactCards: ContactCard[] = [
  {
    title: "Email",
    lines: ["contacto@recon.cl", "ventas@recon.cl"],
  },
  {
    title: "Teléfono",
    lines: ["+56 2 2XXX XXXX", "+56 9 XXXX XXXX"],
  },
  {
    title: "Ubicación",
    lines: ["Santiago, Chile", "Región Metropolitana"],
  },
  {
    title: "Horario de Atención",
    lines: ["Lunes a Viernes: 8:00 - 18:00", "Sábados: 9:00 - 14:00"],
  },
];

const footerColumns: FooterColumn[] = [
  {
    heading: "Empresa",
    links: [
      { label: "Nosotros", href: "#innovacion" },
      { label: "Servicios", href: "#servicios" },
      { label: "Impacto", href: "#impacto" },
    ],
  },
  {
    heading: "Servicios",
    links: [
      { label: "Recolección de Escombros", href: "#recoleccion" },
      { label: "Procesamiento de Hormigón", href: "#procesamiento" },
      { label: "Áridos Reciclados", href: "#servicios" },
      { label: "Certificación NCh 163:2024", href: "#certificacion" },
    ],
  },
  {
    heading: "Contacto",
    links: [
      { label: "contacto@recon.cl", href: "mailto:contacto@recon.cl" },
      { label: "+56 2 2XXX XXXX", href: "tel:+5622000000" },
      { label: "Santiago, Chile", href: "#contacto" },
    ],
  },
];

const contactInitialState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const scrollToSection = (targetId: string) => {
  if (typeof document === "undefined") {
    return;
  }

  const element = document.getElementById(targetId);

  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-20 flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-between w-full">
        <a
          className="flex items-center gap-2 text-2xl font-bold text-primary tracking-tight"
          href="#inicio"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("inicio");
          }}
        >
          <div className="bg-primary rounded-full p-1.5">
            <Recycle className="w-6 h-6 text-white" />
          </div>
          <span className="text-primary">ReCon</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, target, isCta }) => (
            <a
              key={label}
              className={
                isCta
                  ? "px-6 py-2.5 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
                  : "text-base font-medium text-gray-600 hover:text-primary transition-colors"
              }
              href={`#${target}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(target);
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-lg">
          {navItems.map(({ label, target, isCta }) => (
            <a
              key={label}
              className={
                isCta
                  ? "px-6 py-3 rounded-md bg-primary text-white font-medium text-center"
                  : "text-base font-medium text-gray-600 hover:text-primary py-2"
              }
              href={`#${target}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(target);
                setIsMenuOpen(false);
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => (
  <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" id="inicio">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src={heroImage}
        alt="Planta de procesamiento de hormigón reciclado"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center animate-fade-in">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-white max-w-5xl">
        Transformamos Hormigón en <br className="hidden md:block" /> Futuro Sostenible
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl leading-relaxed">
        Reciclaje avanzado de hormigón con biocarbonatación y carbonatación
        acelerada. Reducimos el impacto ambiental y cerramos el ciclo de la
        construcción.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl gap-2"
          href="#servicios"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("servicios");
          }}
        >
          Conoce Nuestros Servicios <ArrowRight className="w-5 h-5" />
        </a>
        <a
          className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-white text-white hover:bg-white/10 font-semibold transition-all hover:-translate-y-1"
          href="#contacto"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("contacto");
          }}
        >
          Contáctanos
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce hidden md:block">
      <Mouse className="w-8 h-8" />
    </div>
  </header>
);

const InnovationSection = () => (
  <section className="py-20 md:py-32 px-6 bg-accent/5" id="innovacion">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
        Innovación en Reciclaje de Hormigón
      </span>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Nuestro Proceso Tecnológico</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Aplicamos técnicas avanzadas de biocarbonatación y carbonatación acelerada con CO₂
        para mejorar las propiedades mecánicas del árido reciclado y capturar emisiones de
        carbono en el proceso. Este proceso innovador permite que el material cumpla con los
        estándares más exigentes de la industria de la construcción, ofreciendo una
        alternativa competitiva y sostenible.
      </p>
    </div>

    <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-square">
        <img
          src={aggregateImage}
          alt="Áridos reciclados con certificación"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {processHighlights.map((item) => (
          <article key={item.title} className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-20 md:py-32 px-6" id="servicios">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
        Nuestros Servicios
      </span>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
        Ofrecemos un servicio integral desde la recolección hasta la entrega del material
        certificado
      </h2>
    </div>

    <div className="container mx-auto grid md:grid-cols-3 gap-8">
      {serviceSections.map((section) => (
        <article key={section.id} className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col" id={section.id}>
          <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
          <p className="text-muted-foreground mb-6 flex-grow">{section.description}</p>
          <ul className="space-y-3">
            {section.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

const ImpactSection = () => (
  <section className="py-20 md:py-32 px-6 bg-primary text-primary-foreground" id="impacto">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
        Impacto Ambiental
      </span>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
        Contribuimos activamente a la reducción del impacto ambiental de la industria de la
        construcción
      </h2>
    </div>

    <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
      <div className="grid sm:grid-cols-2 gap-6">
        {impactMetrics.map((metric) => (
          <article key={metric.title} className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-bold mb-2 text-white">{metric.title}</h3>
            <p className="text-white/80">{metric.description}</p>
          </article>
        ))}
      </div>

      <div className="p-8 rounded-2xl bg-white text-primary shadow-xl">
        <h3 className="text-2xl font-bold mb-6">Beneficios de Trabajar con ReCon</h3>
        <ul className="space-y-4">
          {impactBenefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary text-sm font-bold">✓</span>
              <span className="text-foreground/80">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [formState, setFormState] = useState(contactInitialState);

  const handleChange = (field: keyof typeof contactInitialState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;

      setFormState((previous) => ({
        ...previous,
        [field]: value,
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Mensaje enviado", formState);
    setFormState(contactInitialState);
  };

  return (
    <section className="py-20 md:py-32 px-6" id="contacto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
          Contáctanos
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          ¿Tienes un proyecto? Hablemos sobre cómo podemos ayudarte con soluciones
          sostenibles
        </h2>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12">
        <div className="grid sm:grid-cols-2 gap-6 content-start">
          {contactCards.map((card) => (
            <article key={card.title} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-primary">{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line} className="text-muted-foreground mb-1">{line}</p>
              ))}
            </article>
          ))}
        </div>

        <form className="p-8 rounded-2xl bg-card border border-border shadow-lg" onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Nombre completo"
                value={formState.name}
                onChange={handleChange("name")}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="correo@empresa.com"
                value={formState.email}
                onChange={handleChange("email")}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Empresa</label>
              <input
                id="company"
                name="company"
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Nombre de la empresa"
                value={formState.company}
                onChange={handleChange("company")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mensaje</label>
              <textarea
                id="message"
                name="message"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Cuéntanos sobre tu proyecto"
                value={formState.message}
                onChange={handleChange("message")}
                required
              />
            </div>
            <button
              className="w-full inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
              type="submit"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const FooterSection = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <span className="text-2xl font-bold text-primary block mb-4">ReCon</span>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Innovación ambiental que convierte residuos de hormigón en materiales de
            construcción sostenibles.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.heading} className="flex flex-col gap-4">
            <h4 className="font-bold text-foreground">{column.heading}</h4>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© {currentYear} ReCon - Recycled Concrete. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary">
      <Navigation />
      <HeroSection />
      <main>
        <InnovationSection />
        <ServicesSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;