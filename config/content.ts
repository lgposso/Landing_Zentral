import type {
  CoreNode,
  FeatureItem,
  ProcessStep,
  SectionCopy,
  TechGroup,
  UseCase,
} from "@/types";

/**
 * Todo el copy de la landing, en un solo lugar.
 *
 * Redactado según §13 del spec: siempre hablar del beneficio empresarial.
 * Preferir "sistemas inteligentes / automatización / integraciones /
 * productividad / ingeniería". Evitar "revolucionario", "IA mágica",
 * "innovación disruptiva" y cualquier promesa exagerada.
 *
 * Para editar textos, hazlo aquí — no en el JSX.
 */

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  title: "Diseñamos sistemas inteligentes que trabajan por tu empresa.",
  subtitle:
    "Automatizamos procesos, conectamos herramientas y desarrollamos soluciones de software que eliminan tareas repetitivas y permiten escalar con eficiencia.",
  /** Barra de capacidades bajo los botones. Refuerza el posicionamiento. */
  capabilities: [
    "Automatización",
    "Agentes IA",
    "Integraciones",
    "Software a la medida",
  ],
};

/** Nodos del diagrama "Zentral Core" (§8 del spec). */
export const coreNodes: CoreNode[] = [
  { label: "CRM", icon: "users", angle: 205 },
  { label: "ERP", icon: "boxes", angle: 258 },
  { label: "WhatsApp", icon: "messageCircle", angle: 309 },
  { label: "OpenAI", icon: "sparkles", angle: 0 },
  { label: "API", icon: "webhook", angle: 51 },
  { label: "Correo", icon: "mail", angle: 102 },
  { label: "Dashboard", icon: "layoutDashboard", angle: 154 },
];

/* -------------------------------------------------------------------------- */
/* 01 — Problema                                                               */
/* -------------------------------------------------------------------------- */

export const problemCopy: SectionCopy = {
  title: "El trabajo manual",
  titleAccent: "no escala.",
  subtitle:
    "La mayoría de las empresas no tienen un problema de esfuerzo. Tienen un problema de sistemas.",
};

export const problems: FeatureItem[] = [
  {
    icon: "clipboardList",
    title: "Procesos manuales",
    description:
      "Tu equipo copia datos entre planillas, correos y sistemas. Horas que no generan valor y errores que sí cuestan.",
  },
  {
    icon: "unplug",
    title: "Herramientas desconectadas",
    description:
      "El CRM no habla con el ERP y el ERP no habla con facturación. Cada integración pendiente es información que se pierde en el camino.",
  },
  {
    icon: "layers",
    title: "Información dispersa",
    description:
      "Los datos existen, pero viven en seis lugares distintos. Nadie sabe con certeza cuál es la versión correcta.",
  },
  {
    icon: "compass",
    title: "Decisiones sin datos",
    description:
      "Sin trazabilidad ni indicadores al día, las decisiones dependen de la intuición y de reportes que llegan tarde.",
  },
];

/* -------------------------------------------------------------------------- */
/* 02 — Soluciones                                                             */
/* -------------------------------------------------------------------------- */

export const solutionsCopy: SectionCopy = {
  title: "Sistemas que resuelven",
  titleAccent: "problemas reales.",
  subtitle:
    "No entregamos herramientas sueltas. Diseñamos la capa que conecta y opera tu negocio.",
};

export const solutions: FeatureItem[] = [
  {
    icon: "workflow",
    title: "Automatización de procesos",
    description:
      "Flujos que ejecutan solos las tareas repetitivas: validaciones, notificaciones, cargues, reportes y seguimientos.",
  },
  {
    icon: "messagesSquare",
    title: "Agentes IA",
    description:
      "Asistentes que atienden, califican y responden con el contexto de tu operación. Con reglas claras y supervisión humana.",
  },
  {
    icon: "waypoints",
    title: "Integración de sistemas",
    description:
      "Conectamos CRM, ERP, WhatsApp, facturación y APIs de terceros para que la información fluya en una sola dirección.",
  },
  {
    icon: "code",
    title: "Software a la medida",
    description:
      "Aplicaciones construidas para tu operación, no plantillas adaptadas a la fuerza a un proceso que no es el tuyo.",
  },
  {
    icon: "gauge",
    title: "Dashboards",
    description:
      "Indicadores al día sobre datos confiables. Una sola fuente de verdad para decidir sin discutir las cifras.",
  },
  {
    icon: "panels",
    title: "Herramientas internas",
    description:
      "Paneles de administración, portales de cliente y back-offices que tu equipo usa todos los días sin fricción.",
  },
];

/* -------------------------------------------------------------------------- */
/* 03 — Cómo trabajamos                                                        */
/* -------------------------------------------------------------------------- */

export const processCopy: SectionCopy = {
  title: "Ingeniería antes",
  titleAccent: "que marketing.",
  subtitle:
    "Un proceso corto, medible y sin sorpresas. Sabes qué se construye y por qué antes de que empecemos.",
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Mapeamos tu operación actual, identificamos dónde se pierde tiempo y definimos qué conviene automatizar primero — y qué no.",
    deliverable: "Mapa de procesos y prioridades",
  },
  {
    step: "02",
    title: "Diseño del sistema",
    description:
      "Definimos arquitectura, integraciones y alcance. Sabes exactamente qué se va a construir antes de escribir la primera línea de código.",
    deliverable: "Arquitectura y alcance cerrado",
  },
  {
    step: "03",
    title: "Implementación",
    description:
      "Desarrollo por entregas cortas. Ves avances funcionando en cada ciclo, no presentaciones sobre lo que vendrá.",
    deliverable: "Entregas funcionales por ciclo",
  },
  {
    step: "04",
    title: "Operación y mejora",
    description:
      "Monitoreo, soporte y evolución continua. Un sistema vivo que crece al ritmo de la empresa en lugar de envejecer.",
    deliverable: "Monitoreo, soporte y evolución",
  },
];

/* -------------------------------------------------------------------------- */
/* 04 — Casos de uso                                                           */
/* -------------------------------------------------------------------------- */

export const useCasesCopy: SectionCopy = {
  title: "Aplicado a",
  titleAccent: "operaciones reales.",
  subtitle:
    "Los mismos principios de ingeniería, adaptados al proceso de cada sector.",
};

export const useCases: UseCase[] = [
  {
    icon: "truck",
    sector: "Logística",
    challenge: "Seguimiento de despachos por WhatsApp y llamadas.",
    system:
      "Portal de trazabilidad con estados automáticos, notificación al cliente y panel de operación al día.",
    outcome: "Menos llamadas de seguimiento",
  },
  {
    icon: "stethoscope",
    sector: "Clínicas",
    challenge: "Agendamiento manual e inasistencias sin control.",
    system:
      "Agenda integrada con recordatorios automáticos por WhatsApp, confirmación y reprogramación sin intervención del equipo.",
    outcome: "Menos ausencias y agenda ocupada",
  },
  {
    icon: "hardHat",
    sector: "Constructoras",
    challenge: "Avance de obra y costos repartidos en planillas.",
    system:
      "Control de proyectos con cargue de avances desde campo, alertas de desviación y tablero consolidado por obra.",
    outcome: "Control de costos en el momento",
  },
  {
    icon: "shoppingCart",
    sector: "E-commerce",
    challenge: "Pedidos, inventario y facturación en sistemas separados.",
    system:
      "Sincronización entre tienda, inventario y facturación, con conciliación automática de pedidos y alertas de quiebre de stock.",
    outcome: "Inventario y ventas cuadrados",
  },
  {
    icon: "handshake",
    sector: "Equipos comerciales",
    challenge: "Leads que se enfrían antes del primer contacto.",
    system:
      "Captura y calificación automática de leads, asignación por reglas y seguimiento con recordatorios dentro del CRM.",
    outcome: "Respuesta en minutos, no días",
  },
  {
    icon: "headset",
    sector: "Empresas de servicios",
    challenge: "Solicitudes que llegan por cinco canales distintos.",
    system:
      "Mesa de entrada unificada con categorización automática, asignación por reglas y tiempos de respuesta medibles.",
    outcome: "Un solo canal, tiempos medibles",
  },
];

/* -------------------------------------------------------------------------- */
/* 05 — Tecnologías                                                            */
/* -------------------------------------------------------------------------- */

export const techCopy: SectionCopy = {
  title: "Tecnología elegida",
  titleAccent: "por confiabilidad.",
  subtitle:
    "Herramientas maduras. Las escogemos por lo que cuesta mantenerlas en cinco años, no por tendencia.",
};

export const techGroups: TechGroup[] = [
  {
    category: "Producto",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend y datos",
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    category: "Automatización e IA",
    items: ["n8n", "OpenAI", "WhatsApp Business API", "APIs REST"],
  },
  {
    category: "Infraestructura",
    items: ["Vercel", "AWS", "Docker", "GitHub Actions"],
  },
];

/* -------------------------------------------------------------------------- */
/* CTA final                                                                   */
/* -------------------------------------------------------------------------- */

/** El titular del CTA vive en el JSX porque va partido en dos tonos. */
export const ctaCopy = {
  subtitle:
    "Una conversación de 30 minutos basta para saber qué se puede automatizar en tu empresa, qué impacto tendría y qué no vale la pena tocar todavía.",
  note: "Sin compromiso. Si no vemos una oportunidad clara, te lo decimos.",
};

/* -------------------------------------------------------------------------- */
/* Formulario de contacto                                                     */
/* -------------------------------------------------------------------------- */

/** Alternativa al mailto: del footer para quien no quiere abrir su cliente de correo. */
export const contactFormCopy = {
  title: "¿Prefieres escribirnos directamente?",
  subtitle:
    "Cuéntanos qué proceso quieres automatizar. Te respondemos a tu correo.",
  fields: {
    name: { label: "Nombre", placeholder: "Tu nombre" },
    company: { label: "Empresa", placeholder: "Nombre de tu empresa" },
    email: { label: "Correo", placeholder: "tu@empresa.com" },
    message: {
      label: "¿Qué proceso quieres automatizar?",
      placeholder: "Cuéntanos brevemente el proceso o problema que quieres resolver.",
    },
  },
  submitLabel: "Enviar mensaje",
  submitPendingLabel: "Enviando…",
  successMessage: "Mensaje enviado. Te respondemos pronto a tu correo.",
  errorFallback:
    "No se pudo enviar el mensaje. Intenta de nuevo o escríbenos directamente.",
};

/* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */

export const footerColumns = [
  {
    title: "Soluciones",
    links: [
      { label: "Automatización de procesos", href: "#soluciones" },
      { label: "Agentes IA", href: "#soluciones" },
      { label: "Integración de sistemas", href: "#soluciones" },
      { label: "Software a la medida", href: "#soluciones" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Cómo trabajamos", href: "#proceso" },
      { label: "Casos de uso", href: "#casos-de-uso" },
      { label: "Tecnologías", href: "#tecnologias" },
      { label: "Política de privacidad", href: "/privacidad" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Política de tratamiento de datos                                           */
/* -------------------------------------------------------------------------- */

/**
 * BORRADOR generado automáticamente a partir de la Ley 1581 de 2012
 * (Habeas Data, Colombia). NO ha sido revisado por un abogado y NO debe
 * publicarse en producción sin esa revisión. Ajustar responsable, datos
 * recolectados, finalidades y canal de contacto a la operación real de
 * Zentral antes de aprobarlo.
 */
export const privacyPolicy = {
  title: "Política de tratamiento de datos personales",
  lastUpdated: "2026-08-20",
  intro:
    "Este documento es un borrador de referencia basado en la Ley 1581 de 2012 de Colombia. No sustituye una revisión legal y no debe considerarse vigente hasta que un abogado lo valide y Zentral lo apruebe formalmente.",
  sections: [
    {
      heading: "1. Responsable del tratamiento",
      paragraphs: [
        "Zentral Solutions, identificada con NIT 902.064.009-2, con domicilio en Barranquilla, Colombia, es responsable del tratamiento de los datos personales recolectados a través de este sitio y en el marco de sus servicios.",
      ],
    },
    {
      heading: "2. Datos que recolectamos",
      paragraphs: [
        "Datos de contacto proporcionados voluntariamente (nombre, empresa, correo, teléfono) cuando un visitante inicia una conversación por WhatsApp, correo o un formulario de contacto.",
        "Datos técnicos de navegación recolectados por la herramienta de analítica del sitio, cuando esté activa.",
      ],
    },
    {
      heading: "3. Finalidad del tratamiento",
      paragraphs: [
        "Responder solicitudes comerciales, prestar los servicios contratados, y mejorar el sitio y la comunicación con clientes y prospectos.",
      ],
    },
    {
      heading: "4. Derechos del titular",
      paragraphs: [
        "Conforme a la Ley 1581 de 2012, el titular de los datos tiene derecho a: conocer, actualizar y rectificar sus datos; solicitar prueba de la autorización otorgada; ser informado sobre el uso dado a sus datos; presentar quejas ante la Superintendencia de Industria y Comercio; revocar la autorización y/o solicitar la supresión del dato cuando no exista un deber legal o contractual que impida su eliminación; y acceder de forma gratuita a sus datos.",
      ],
    },
    {
      heading: "5. Cómo ejercer estos derechos",
      paragraphs: [
        "El titular puede ejercer sus derechos escribiendo al correo de contacto publicado en el sitio.",
      ],
    },
    {
      heading: "6. Vigencia",
      paragraphs: [
        "Esta política aplica desde su fecha de publicación y puede ser modificada. Los cambios sustanciales se reflejarán en la fecha de última actualización de este documento.",
      ],
    },
  ],
};
