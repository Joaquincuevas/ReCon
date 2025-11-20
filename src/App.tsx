import { ChangeEvent, FormEvent, useMemo, useState } from "react";

const heroImage = "https://recon-circular-concrete.lovable.app/assets/process-plant-BCt89j0G.jpg";
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
  { label: "Innovación", target: "innovacion" },
  { label: "Servicios", target: "servicios" },
  { label: "Impacto", target: "impacto" },
  { label: "Contáctanos", target: "contacto", isCta: true },
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

const Navigation = () => (
  <nav className="nav">
    <a
      className="brand"
      href="#inicio"
      onClick={(event) => {
        event.preventDefault();
        scrollToSection("inicio");
      }}
    >
      ReCon
    </a>
    <div className="nav-links">
      {navItems.map(({ label, target, isCta }) => (
        <a
          key={label}
          className={isCta ? "nav-cta" : undefined}
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
  </nav>
);

const HeroSection = () => (
  <header className="hero" id="inicio">
    <Navigation />
    <div className="hero-content">
      <div className="hero-text">
        <span className="eyebrow">Reciclaje Circular de Hormigón</span>
        <h1>Transformamos Hormigón en Futuro Sostenible</h1>
        <p>
          Reciclaje avanzado de hormigón con biocarbonatación y carbonatación
          acelerada. Reducimos el impacto ambiental y cerramos el ciclo de la
          construcción.
        </p>
        <div className="hero-actions">
          <a
            className="btn primary"
            href="#servicios"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("servicios");
            }}
          >
            Conoce Nuestros Servicios
          </a>
          <a
            className="btn secondary"
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

      <div className="hero-image">
        <img src={heroImage} alt="Planta de procesamiento de hormigón reciclado" />
      </div>
    </div>
  </header>
);

const InnovationSection = () => (
  <section className="section innovation" id="innovacion">
    <div className="section-header">
      <span className="eyebrow">Innovación en Reciclaje de Hormigón</span>
      <h2>Nuestro Proceso Tecnológico</h2>
      <p>
        Aplicamos técnicas avanzadas de biocarbonatación y carbonatación acelerada con CO₂
        para mejorar las propiedades mecánicas del árido reciclado y capturar emisiones de
        carbono en el proceso. Este proceso innovador permite que el material cumpla con los
        estándares más exigentes de la industria de la construcción, ofreciendo una
        alternativa competitiva y sostenible.
      </p>
    </div>

    <div className="innovation-grid">
      <div className="innovation-image">
        <img src={aggregateImage} alt="Áridos reciclados con certificación" />
      </div>
      <div className="cards-grid">
        {processHighlights.map((item) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="section services" id="servicios">
    <div className="section-header">
      <span className="eyebrow">Nuestros Servicios</span>
      <h2>
        Ofrecemos un servicio integral desde la recolección hasta la entrega del material
        certificado
      </h2>
    </div>

    <div className="service-columns">
      {serviceSections.map((section) => (
        <article key={section.id} className="service-card" id={section.id}>
          <h3>{section.title}</h3>
          <p className="service-description">{section.description}</p>
          <ul>
            {section.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

const ImpactSection = () => (
  <section className="section impact" id="impacto">
    <div className="section-header">
      <span className="eyebrow">Impacto Ambiental</span>
      <h2>
        Contribuimos activamente a la reducción del impacto ambiental de la industria de la
        construcción
      </h2>
    </div>

    <div className="impact-content">
      <div className="metrics-grid">
        {impactMetrics.map((metric) => (
          <article key={metric.title} className="metric-card">
            <h3>{metric.title}</h3>
            <p>{metric.description}</p>
          </article>
        ))}
      </div>

      <div className="benefits">
        <h3>Beneficios de Trabajar con ReCon</h3>
        <ul>
          {impactBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
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
    <section className="section contact" id="contacto">
      <div className="section-header">
        <span className="eyebrow">Contáctanos</span>
        <h2>
          ¿Tienes un proyecto? Hablemos sobre cómo podemos ayudarte con soluciones
          sostenibles
        </h2>
      </div>

      <div className="contact-grid">
        <div className="contact-cards">
          {contactCards.map((card) => (
            <article key={card.title} className="contact-card">
              <h3>{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </article>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Envíanos un mensaje</h3>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nombre completo"
              value={formState.name}
              onChange={handleChange("name")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="correo@empresa.com"
              value={formState.email}
              onChange={handleChange("email")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Empresa</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Nombre de la empresa"
              value={formState.company}
              onChange={handleChange("company")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Cuéntanos sobre tu proyecto"
              value={formState.message}
              onChange={handleChange("message")}
              required
            />
          </div>
          <button className="btn primary" type="submit">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

const FooterSection = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <span className="footer-logo">ReCon</span>
          <p>
            Innovación ambiental que convierte residuos de hormigón en materiales de
            construcción sostenibles.
          </p>
        </div>

        <div className="footer-links">
          {footerColumns.map((column) => (
            <div key={column.heading} className="footer-column">
              <h4>{column.heading}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} ReCon - Recycled Concrete. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="app">
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
