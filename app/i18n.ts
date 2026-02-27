export type Language = "en" | "es";

export const translations = {
  en: {
    meta: {
      title: "Markuves — Data Driven Software Infrastructure",
      description:
        "Latam-born company building self-adjusting, data-driven software infrastructure to eliminate digital waste and optimize performance at scale.",
    },
    nav: {
      product: "Product",
      technology: "Technology",
      forWhom: "Who it's for",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Latam-born, globally minded",
      title: "Data Driven Software Infrastructure",
      subtitle:
        "We build self-adjusting software ecosystems powered by real-time data, eliminating digital waste and optimizing performance at scale.",
      primaryCta: "Talk to us",
      secondaryCta: "Join the waitlist",
      secondaryCaption: "For enterprises and engineers who want to try Markuves.",
    },
    markov: {
      title: "Self-adjusting systems, powered by probabilities",
      subtitle:
        "We use Markov-chain inspired models to continuously learn from your workloads and adjust your infrastructure automatically.",
      bullets: [
        "Model traffic, workloads and infrastructure states as a living graph.",
        "Continuously update transition probabilities from real-time data.",
        "Apply safe, incremental changes to infrastructure to reach better states.",
      ],
    },
    product: {
      title: "Kubernetes optimization, out of the box",
      k8sTitle: "Markuves for Kubernetes",
      k8sBody:
        "A data-driven optimization layer that sits on top of your existing Kubernetes clusters.",
      bullets: [
        "Resource optimization across nodes, namespaces and workloads.",
        "Cost reduction without sacrificing reliability or performance.",
        "No rewrites — plug into the infrastructure you already trust.",
      ],
      tag: "First product",
    },
    audience: {
      title: "Built for people who own infrastructure outcomes",
      companiesTitle: "For companies",
      companiesBullets: [
        "CTOs, VPs of Engineering and FinOps teams looking to reduce cloud spend.",
        "Sustainability leaders who care about a radically greener computing footprint.",
        "Organizations that want better performance without adding operational overhead.",
      ],
      engineersTitle: "For engineers",
      engineersBullets: [
        "Platform and SRE teams tired of manual tuning and one-off optimizations.",
        "Engineers who want infrastructure that learns from production data.",
        "Builders who believe Latam can lead the next wave of infrastructure innovation.",
      ],
    },
    latam: {
      title: "Proudly Latam, radically green",
      body:
        "We are a Latam-based team on a mission to build a faster, more affordable and radically green computing future for the world. We want to set an example for our region and become a leading software infrastructure company globally.",
    },
    forms: {
      contactTitle: "Talk to us",
      contactSubtitle:
        "Share a bit about your context and we will get back to you.",
      waitlistTitle: "Join the waitlist",
      waitlistSubtitle:
        "Be the first to try Markuves and help shape the product.",
      name: "Name",
      email: "Work email",
      company: "Company",
      role: "Role",
      message: "What problem are you trying to solve?",
      interestLabel: "I am",
      interestCompany: "A company",
      interestEngineer: "An engineer",
      submitContact: "Send message",
      submitWaitlist: "Join waitlist",
      successGeneric: "Thank you — we will contact you soon.",
      errorGeneric: "Something went wrong. Please try again.",
    },
    footer: {
      mission:
        "Data driven software infrastructure to eliminate digital waste.",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  es: {
    meta: {
      title: "Markuves — Data Driven Software Infrastructure",
      description:
        "Empresa nacida en Latam construyendo infraestructura de software autoajustable, impulsada por datos, para eliminar el desperdicio digital y optimizar el rendimiento a escala.",
    },
    nav: {
      product: "Producto",
      technology: "Tecnología",
      forWhom: "Para quién",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Orgullosamente Latam, con ambición global",
      title: "Data Driven Software Infrastructure",
      subtitle:
        "Construimos ecosistemas de software autoajustables impulsados por datos en tiempo real, eliminando desperdicio digital y optimizando el rendimiento a escala.",
      primaryCta: "Hablar con nosotros",
      secondaryCta: "Unirse a la waitlist",
      secondaryCaption: "Para empresas e ingenieros que quieren probar Markuves.",
    },
    markov: {
      title: "Sistemas autoajustables, guiados por probabilidades",
      subtitle:
        "Usamos modelos inspirados en cadenas de Markov para aprender continuamente de tus cargas de trabajo y ajustar tu infraestructura de forma automática.",
      bullets: [
        "Modelamos tráfico, cargas y estados de infraestructura como un grafo vivo.",
        "Actualizamos continuamente las probabilidades de transición con datos en tiempo real.",
        "Aplicamos cambios seguros e incrementales para llegar a mejores estados.",
      ],
    },
    product: {
      title: "Optimización de Kubernetes lista para usar",
      k8sTitle: "Markuves para Kubernetes",
      k8sBody:
        "Una capa de optimización basada en datos que se monta sobre tus clusters de Kubernetes existentes.",
      bullets: [
        "Optimización de recursos entre nodos, namespaces y workloads.",
        "Reducción de costos sin sacrificar confiabilidad ni rendimiento.",
        "Sin reescrituras: se conecta a la infraestructura que ya confías.",
      ],
      tag: "Primer producto",
    },
    audience: {
      title: "Para quienes son dueños de la infraestructura",
      companiesTitle: "Para empresas",
      companiesBullets: [
        "CTOs, VPs de Ingeniería y equipos de FinOps que quieren reducir el gasto en nube.",
        "Líderes de sostenibilidad que buscan una huella de cómputo mucho más verde.",
        "Organizaciones que quieren mejor rendimiento sin más carga operativa.",
      ],
      engineersTitle: "Para ingenieros",
      engineersBullets: [
        "Equipos de plataforma y SRE cansados de tunear a mano y hacer optimizaciones puntuales.",
        "Ingenieros que quieren una infraestructura que aprenda de los datos de producción.",
        "Builders que creen que Latam puede liderar la próxima ola de infraestructura.",
      ],
    },
    latam: {
      title: "Orgullosamente Latam, radicalmente verde",
      body:
        "Somos un equipo con base en Latam con la misión de construir un futuro de cómputo más rápido, más accesible y radicalmente verde para el mundo. Queremos ser ejemplo para la región y un líder global en infraestructura de software.",
    },
    forms: {
      contactTitle: "Hablemos",
      contactSubtitle:
        "Cuéntanos un poco de tu contexto y nos pondremos en contacto.",
      waitlistTitle: "Únete a la waitlist",
      waitlistSubtitle:
        "Sé de los primeros en probar Markuves y ayudar a definir el producto.",
      name: "Nombre",
      email: "Email laboral",
      company: "Empresa",
      role: "Rol",
      message: "¿Qué problema quieres resolver?",
      interestLabel: "Soy",
      interestCompany: "Una empresa",
      interestEngineer: "Un ingeniero",
      submitContact: "Enviar mensaje",
      submitWaitlist: "Unirse a la waitlist",
      successGeneric: "Gracias — nos pondremos en contacto pronto.",
      errorGeneric: "Algo salió mal. Intenta de nuevo.",
    },
    footer: {
      mission:
        "Infraestructura de software basada en datos para eliminar el desperdicio digital.",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function getTranslations(lang: Language) {
  return translations[lang];
}

