import type {
  CoreNode,
  FeatureItem,
  ProcessStep,
  ResourceArticle,
  SectionCopy,
  ServicePage,
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
  /**
   * Un fallo de entrega no se arregla reintentando, así que el error no pide
   * eso: ofrece las dos vías directas con lo escrito ya cargado. Antes el
   * mensaje se perdía y la persona se iba.
   */
  errorFallback:
    "No pudimos enviar tu mensaje. Para que no lo escribas de nuevo, mándalo por aquí:",
  /** Se topa el límite de envíos por IP; las salidas alternas siguen abiertas. */
  rateLimitMessage:
    "Recibimos varios mensajes tuyos hace poco. Si es urgente, escríbenos por aquí:",
  deliveryFallback: {
    whatsappLabel: "Enviarlo por WhatsApp",
    emailLabel: "Enviarlo por correo",
  },
};

/* -------------------------------------------------------------------------- */
/* Páginas de servicio (C1 del brief SEO)                                     */
/* -------------------------------------------------------------------------- */

/**
 * Una entrada por página en /servicios/[slug]. Se añaden de a una: cada
 * página necesita sustancia real del negocio (tecnologías, entregables,
 * plazo, inversión) que no se puede inventar — ver la regla del brief sobre
 * el 60%+ de contenido único por página.
 */
export const servicePages: ServicePage[] = [
  {
    slug: "automatizacion-de-procesos",
    keyword: "automatización de procesos Colombia",
    metaTitle: "Automatización de procesos para empresas en Colombia",
    metaDescription:
      "Automatizamos tareas manuales y repetitivas con n8n y Python. Implementación en máximo 5 semanas, capacitación y soporte incluidos. Desde $400.000 COP/mes.",
    heroTitle: "Automatización de procesos",
    heroSubtitle:
      "Flujos que ejecutan solos las tareas repetitivas de tu operación, con n8n y Python, implementados en máximo 5 semanas.",
    whatItIs: [
      "La automatización de procesos reemplaza tareas manuales y repetitivas por flujos que se ejecutan solos: validar un dato, mover información entre sistemas, generar un reporte, enviar una notificación. No es una plataforma que compras y configuras tú mismo — es un sistema que diseñamos, construimos y operamos a la medida del proceso real de tu empresa.",
      "En Zentral no partimos de una plantilla genérica. Empezamos por entender qué hace hoy tu equipo a mano, dónde se pierde el tiempo, y qué parte de ese trabajo puede ejecutarse sin intervención humana sin sacrificar control ni trazabilidad.",
      "La diferencia con comprar una herramienta de automatización por tu cuenta es que aquí no tienes que aprender a configurarla, mantenerla ni depurarla cuando algo cambia en uno de tus sistemas. Nosotros diseñamos el flujo, lo operamos y respondemos cuando algo falla — tu equipo usa el resultado, no administra la infraestructura detrás.",
    ],
    whoItsFor: [
      "Este servicio le sirve a empresas donde una o varias personas dedican horas cada semana a tareas que no deberían requerir juicio humano: copiar datos entre un formulario y una hoja de cálculo, revisar si un pago llegó, armar el mismo reporte cada lunes, avisar por WhatsApp cuando cambia un estado.",
      "La señal más clara es esta: si como administrador sientes que pierdes mucho tiempo en tareas que no consideras relevantes, o que deberían estar hechas de manera instantánea y hoy son manuales, ese es exactamente el tipo de proceso que automatizamos primero. No hace falta tener un equipo técnico interno ni saber qué herramienta usar — eso lo definimos nosotros durante el diagnóstico.",
    ],
    howWeImplementIt: [
      "Empezamos por un diagnóstico corto del proceso actual: qué pasos existen, quién los ejecuta, qué sistemas están involucrados y dónde ocurren los errores o los cuellos de botella. De ahí sale un mapa concreto de qué automatizar primero y qué no vale la pena tocar todavía — no todo proceso manual justifica automatizarse, y decirlo cuando corresponde también es parte del trabajo.",
      "Con eso diseñamos el flujo: las reglas, las validaciones, los casos donde el sistema debe detenerse y avisar a una persona en vez de seguir solo. Lo construimos, lo probamos contra casos reales de tu operación, no datos de ejemplo, y lo ponemos a correr en paralelo antes de apagar el proceso manual, para que el cambio no interrumpa la operación mientras se ajusta.",
      "Una vez el flujo queda en producción, no lo dejamos andando solo. Parte del soporte incluido es revisar que siga funcionando cuando algo cambia río arriba — un campo que se renombra en tu CRM, un formulario que se actualiza, una API externa que cambia su respuesta — porque ese tipo de cambios silenciosos es la causa más común de que una automatización deje de funcionar sin que nadie se entere a tiempo.",
    ],
    technologies: [
      {
        name: "n8n",
        description:
          "Motor de automatización que orquesta el flujo completo: qué dispara la ejecución, qué sistemas conecta y qué reglas aplica en cada paso. Lo elegimos porque el flujo queda documentado visualmente, no es una caja negra que solo tu proveedor entiende.",
      },
      {
        name: "Python",
        description:
          "Para la lógica que n8n no cubre de fábrica: transformaciones de datos específicas de tu operación, validaciones complejas o cálculos propios del proceso.",
      },
    ],
    deliverables: [
      "Capacitación a tu equipo para operar y entender el sistema, no solo usarlo.",
      "Soporte activo durante toda la suscripción, no solo en el primer mes.",
      "El flujo documentado, sin depender de una sola persona para mantenerlo.",
    ],
    timeline:
      "Máximo 5 semanas desde el diagnóstico hasta el sistema operando en producción, dependiendo de cuántos sistemas externos haya que integrar.",
    investmentRange:
      "Desde $400.000 COP al mes, más el costo de instalación inicial, que varía según la complejidad del proceso y el número de integraciones. El diagnóstico te da un número exacto antes de comprometerte a nada.",
    appliedScenario: {
      disclaimer:
        "Zentral todavía no tiene casos publicados con cifras verificables de clientes — cuando los haya, esta sección los reemplaza. Mientras tanto, así se vería aplicado a un proceso típico:",
      paragraphs: [
        "Piensa en un equipo que recibe pedidos por WhatsApp, correo y un formulario web, y hoy alguien copia cada uno a una hoja de cálculo para que el área de despachos lo procese. Un flujo en n8n puede capturar el pedido apenas llega por cualquiera de los tres canales, validar que los datos estén completos, registrarlo en el sistema correcto y notificar automáticamente al área de despachos, sin que nadie tenga que copiar nada.",
        "Si un pedido llega incompleto o con un dato que no cuadra, el sistema no lo descarta ni lo inventa: lo marca y avisa a una persona para que lo revise. La automatización reemplaza el trabajo repetitivo, no el criterio humano en los casos que sí lo necesitan.",
        "El mismo principio aplica a un reporte semanal que hoy arma alguien a mano cruzando información de dos o tres sistemas: el flujo puede recolectar los datos en el momento en que se necesitan, aplicarles la misma lógica de siempre y dejarlos listos antes de que la persona que los revisa se siente a trabajar. No cambia lo que el reporte dice — cambia quién lo arma.",
      ],
    },
    lastModified: "2026-08-20",
  },
  {
    slug: "agentes-ia",
    keyword: "agentes IA Colombia",
    metaTitle: "Agentes IA para empresas en Colombia",
    metaDescription:
      "Agentes IA con OpenAI y Anthropic que atienden, califican y responden con el contexto real de tu operación. Máximo 6 semanas, desde $600.000 COP/mes.",
    heroTitle: "Agentes IA",
    heroSubtitle:
      "Asistentes que atienden, califican y responden con el contexto de tu operación, construidos sobre OpenAI y Anthropic, con reglas claras sobre qué pueden resolver solos.",
    whatItIs: [
      "Un agente IA es un asistente conversacional que atiende, califica o responde consultas dentro de tu operación, con acceso al contexto real de tu negocio — no un chatbot genérico con respuestas prefabricadas. Entiende la pregunta, decide qué información necesita, la busca en tus sistemas si hace falta, y responde o escala según reglas que definimos contigo antes de que el agente hable con el primer cliente real.",
      "En Zentral construimos el agente sobre modelos de OpenAI o Anthropic, según cuál rinda mejor para tu caso específico. No hay un modelo único correcto para todo, y probamos antes de decidir cuál usar en producción.",
      "La diferencia con un chatbot de reglas fijas es que el agente entiende lenguaje natural: no necesitas anticipar cada forma en que alguien puede formular la misma pregunta. La diferencia con dejar que un modelo responda sin supervisión es que aquí el agente solo opera dentro del alcance que definimos — no improvisa fuera de las reglas que le dimos, y cuando no sabe algo, lo dice en vez de inventar una respuesta convincente.",
    ],
    whoItsFor: [
      "Le sirve a empresas que reciben un volumen constante de conversaciones repetitivas — preguntas frecuentes, calificación de un lead, agendamiento, seguimiento de un pedido — donde la mayoría de los casos siguen el mismo patrón y solo una minoría necesita criterio humano. Si tu equipo comercial o de atención pasa buena parte del día respondiendo la misma pregunta con variaciones menores, o si los leads se enfrían porque nadie responde fuera de horario laboral, ahí es donde un agente aporta más.",
      "No le sirve, y hay que decirlo, a procesos donde cada caso es distinto y depende del criterio de una persona con contexto que no está escrito en ningún lado — ahí un agente sin ese contexto responde mal con la misma confianza con la que respondería bien, que es peor que no responder. Por eso cada agente que construimos tiene reglas claras sobre qué puede resolver solo y en qué punto exacto debe pasarle la conversación a una persona.",
    ],
    howWeImplementIt: [
      "Empezamos por definir el alcance: qué preguntas o tareas puede resolver el agente solo, qué información tiene permitido usar, y en qué casos debe detenerse y pasar la conversación a una persona. Ese alcance queda escrito antes de construir nada, no se improvisa sobre la marcha.",
      "Con el alcance definido, construimos el agente, lo conectamos a la información que necesita — tu catálogo, tu CRM, tus políticas de servicio — y lo probamos con casos reales de tu operación antes de exponerlo a un cliente. Solo entra en producción cuando responde de forma consistente en los casos que definimos, no cuando responde bien una vez.",
      "Después del lanzamiento verificamos que las respuestas sigan siendo correctas y que el cliente esté conforme con la interacción. Un agente que responde rápido pero mal es peor que no tener agente, así que esa verificación no es un extra — es parte del entregable.",
      "También revisamos el agente periódicamente durante la suscripción: los productos cambian, las políticas de servicio cambian, y un agente que quedó bien configurado hace tres meses puede estar respondiendo con información desactualizada hoy si nadie lo revisa. Ese mantenimiento es justamente lo que cubre el soporte incluido.",
    ],
    technologies: [
      {
        name: "OpenAI",
        description:
          "Para los casos donde su familia de modelos responde con mayor precisión y velocidad al tipo de conversación que necesitas automatizar.",
      },
      {
        name: "Anthropic",
        description:
          "Para los casos donde el seguimiento estricto de reglas e instrucciones importa más que la velocidad de respuesta — por ejemplo, cuando el agente maneja información sensible o procesos con pasos obligatorios.",
      },
    ],
    deliverables: [
      "El agente funcionando en producción, no una demo.",
      "Un documento con las capacidades exactas del agente: qué resuelve solo y qué escala a una persona.",
      "Verificación de la satisfacción del cliente tras el lanzamiento, no solo métricas técnicas.",
      "Soporte activo durante toda la suscripción.",
    ],
    timeline:
      "Máximo 6 semanas desde la definición del alcance hasta el agente operando en producción.",
    investmentRange:
      "Desde $600.000 COP al mes, más el costo de implementación inicial, que depende de cuántos sistemas tiene que consultar el agente y qué tan estricto necesita ser el control de sus respuestas.",
    appliedScenario: {
      disclaimer:
        "Zentral todavía no tiene casos publicados con cifras verificables de clientes — cuando los haya, esta sección los reemplaza. Mientras tanto, así se vería aplicado a una situación típica:",
      paragraphs: [
        "Piensa en un equipo comercial que recibe mensajes por WhatsApp fuera de horario laboral y hoy responde al día siguiente, cuando el interesado ya escribió a un competidor. Un agente puede responder de inmediato, hacer las preguntas de calificación que hoy hace un vendedor al inicio de la conversación, y dejar la conversación lista para que una persona la retome con el contexto completo en la mañana. No cierra la venta solo, pero evita que el lead se enfríe mientras nadie está disponible.",
        "Si durante la conversación alguien pregunta algo que el agente no tiene autorizado responder — un descuento especial, una excepción a una política — el agente lo reconoce y escala en vez de inventar una respuesta que suene razonable. Esa es la diferencia entre un agente bien acotado y un chatbot que improvisa.",
      ],
    },
    lastModified: "2026-08-20",
  },
  {
    slug: "integracion-de-sistemas",
    keyword: "integración de sistemas empresariales",
    metaTitle: "Integración de sistemas empresariales en Colombia",
    metaDescription:
      "Conectamos CRM, ERP, facturación, WhatsApp y APIs de terceros con APIs REST y n8n. Sistemas sincronizados sin intervención manual. Desde $350.000 COP/mes.",
    heroTitle: "Integración de sistemas",
    heroSubtitle:
      "Conectamos las herramientas que ya usas para que la información fluya sola entre ellas, con APIs REST y n8n como capa de orquestación.",
    whatItIs: [
      "La integración de sistemas conecta las herramientas que ya usas — CRM, ERP, facturación, WhatsApp, tu tienda en línea, APIs de terceros — para que la información se mueva sola entre ellas, en vez de que alguien la traslade a mano. El resultado no es una herramienta nueva que aprender: es que las que ya tienes empiecen a hablar entre sí.",
      "Construimos estas integraciones sobre APIs REST y n8n como capa de orquestación, el mismo motor que usamos para automatización de procesos. Cuando un sistema cambia un dato, el flujo lo propaga a los demás sistemas que lo necesitan, con las validaciones y transformaciones que ese dato requiere en cada uno.",
      "No todas las integraciones son iguales de simples. Conectar dos sistemas que ya exponen una API documentada es directo; conectar uno que no la tiene, o que la expone de forma inconsistente, toma más trabajo de por medio. Parte del diagnóstico inicial es decirte con qué tipo de caso estás, antes de comprometer un plazo.",
    ],
    whoItsFor: [
      "Le sirve a empresas que ya usan varias herramientas — un CRM, un ERP, facturación electrónica, WhatsApp Business, una tienda en línea — pero esas herramientas no se hablan entre sí, y alguien en el equipo hace de puente manual: exporta de un sistema, revisa, y carga en el otro. Cada vez que ese puente humano falla o se atrasa, dos sistemas quedan desincronizados y nadie sabe cuál tiene el dato correcto.",
      "La señal más clara es cuando dos personas de áreas distintas dan una cifra distinta para la misma pregunta — cuántos pedidos hay pendientes, cuánto inventario queda, cuál es el estado real de un cliente — porque cada una mira un sistema diferente que no está sincronizado con los demás.",
    ],
    howWeImplementIt: [
      "Empezamos por mapear qué sistemas necesitan hablar entre sí, qué dato exacto tiene que viajar de uno a otro, y con qué frecuencia: en tiempo real apenas ocurre un cambio, o por lotes en un horario definido, según lo que el proceso necesite realmente.",
      "Construimos la integración con las validaciones necesarias para que un dato mal formado en un sistema no dañe el que lo recibe, y la probamos con datos reales de tu operación antes de dejarla corriendo en automático. Las integraciones son, junto con los agentes IA, donde más importa probar contra casos reales: un error silencioso propagándose entre sistemas es más difícil de detectar que uno visible en un solo lugar.",
      "Una vez conectados, monitoreamos que la sincronización siga corriendo — si un sistema cambia su forma de responder o queda temporalmente fuera de servicio, preferimos que la integración se detenga y avise, a que siga escribiendo datos incompletos o incorrectos en el otro extremo. Un error que se detiene es un error que se corrige en minutos; uno que sigue corriendo en silencio puede tardar semanas en notarse.",
    ],
    technologies: [
      {
        name: "APIs REST",
        description:
          "El estándar con el que la gran mayoría de CRM, ERP, plataformas de facturación y herramientas de e-commerce exponen sus datos. Es la vía de conexión más estable porque no depende de un conector propietario que un proveedor puede descontinuar.",
      },
      {
        name: "n8n",
        description:
          "La misma capa de orquestación que usamos en automatización de procesos: define qué dispara la sincronización, qué transformación aplica a cada dato y qué pasa si un sistema no responde.",
      },
    ],
    deliverables: [
      "Tus sistemas conectados entre sí, sin necesidad de intervención manual.",
      "Soporte activo durante toda la suscripción.",
    ],
    timeline:
      "6 semanas desde el mapeo de sistemas hasta la integración operando en producción.",
    investmentRange:
      "Desde $350.000 COP al mes, más el costo de implementación inicial, que depende de cuántos sistemas hay que conectar y qué tan compleja es la transformación de datos entre ellos.",
    appliedScenario: {
      disclaimer:
        "Zentral todavía no tiene casos publicados con cifras verificables de clientes — cuando los haya, esta sección los reemplaza. Mientras tanto, así se vería aplicado a una situación típica:",
      paragraphs: [
        "Piensa en una empresa donde el equipo comercial registra un cliente nuevo en el CRM, y ese mismo cliente tiene que existir también en el sistema de facturación para poder emitirle una factura. Hoy alguien copia los datos de uno a otro a mano, y si se equivoca en un número de identificación, la factura queda mal emitida. Una integración puede crear el cliente en facturación automáticamente apenas se crea en el CRM, con los mismos datos, sin que nadie los vuelva a escribir.",
        "Si el sistema de facturación rechaza el dato porque falta un campo obligatorio, la integración no lo fuerza ni inventa el valor faltante: notifica a la persona responsable para que lo complete. La integración elimina la copia manual, no el control sobre qué datos son válidos.",
        "El mismo patrón sirve para inventario: si una venta se registra en el sistema de punto de venta, el descuento de stock puede propagarse automáticamente a la plataforma de e-commerce, para que no se venda en línea algo que ya no existe en la bodega. Es la misma lógica — un cambio en un sistema, propagado a los demás que dependen de ese dato — aplicada a un problema distinto.",
      ],
    },
    lastModified: "2026-08-20",
  },
  {
    slug: "software-a-la-medida",
    keyword: "desarrollo de software a la medida Colombia",
    metaTitle: "Desarrollo de software a la medida en Colombia",
    metaDescription:
      "Aplicaciones construidas para tu operación, no plantillas adaptadas a la fuerza. Next.js, Node.js, Python y PostgreSQL. Cotización según el alcance del proyecto.",
    heroTitle: "Software a la medida",
    heroSubtitle:
      "Aplicaciones construidas para tu operación, no plantillas genéricas adaptadas a la fuerza a un proceso que no es el tuyo.",
    whatItIs: [
      "El software a la medida es una aplicación diseñada específicamente para tu proceso, no una herramienta genérica que tu equipo tiene que adaptar a sí misma. Cuando un proceso de negocio es lo suficientemente específico —o lo suficientemente importante— como para que forzarlo dentro de un SaaS genérico signifique perder funcionalidad o pagar por módulos que no usas, construir algo propio deja de ser un lujo y empieza a tener sentido económico.",
      "No es la primera opción para todo: si existe una herramienta madura en el mercado que resuelve tu problema sin fricción, la recomendamos a ella antes que a un desarrollo propio. Software a la medida es para lo que no encaja en ninguna — el proceso que hace que tu operación sea distinta a la de tu competencia.",
    ],
    whoItsFor: [
      "Le sirve a empresas que ya intentaron resolver un proceso con una herramienta genérica y terminaron peleando contra la herramienta en vez de usarla: configuraciones que no encajan, módulos de más que nadie usa, o funcionalidad crítica que simplemente no existe en ningún producto del mercado para su caso.",
      "También le sirve a empresas cuyo proceso interno es parte de su ventaja competitiva —la forma en que gestionan inventario, calculan una cotización compleja, o coordinan una operación con reglas propias— y no quieren que esa lógica viva dentro de una plataforma de terceros que cualquier competidor puede contratar igual.",
      "Y le sirve a empresas que ya tienen automatizaciones o integraciones puntuales corriendo por separado —con n8n, con hojas de cálculo conectadas, con scripts sueltos— y necesitan que todo eso viva dentro de una sola aplicación con una interfaz que su equipo pueda usar sin depender de quien construyó cada pieza por separado.",
    ],
    howWeImplementIt: [
      "El alcance se define antes de escribir código: qué hace la aplicación, para quién, con qué reglas de negocio, y qué necesita conectar por fuera. Sin ese alcance cerrado, cualquier estimado de tiempo o presupuesto no vale nada, así que el diagnóstico es la primera entrega, no un trámite antes de la propuesta.",
      "Desarrollamos por ciclos cortos con entregas funcionales, no una sola entrega al final del proyecto. Ves la aplicación tomando forma y puedes ajustar el rumbo antes de que un malentendido se vuelva costoso de corregir — un cambio de dirección en la semana tres cuesta una conversación; el mismo cambio descubierto en la semana quince cuesta rehacer trabajo.",
      "Al terminar, la aplicación es tuya: el código fuente te pertenece y no depende de que Zentral siga operándola para que funcione. Eso es lo que separa un desarrollo a la medida real de una suscripción disfrazada de software propio, donde dejar de pagar significa perder acceso a una herramienta que creías tuya.",
    ],
    technologies: [
      {
        name: "Next.js y React",
        description:
          "Para la interfaz: rápida, con buen SEO cuando la aplicación lo necesita, y un ecosistema maduro que no depende de que Zentral sea la única empresa capaz de mantenerla.",
      },
      {
        name: "Node.js y Python",
        description:
          "Para la lógica de negocio del backend, según qué encaje mejor con el problema: Node.js cuando el sistema es principalmente flujo de datos y API, Python cuando hay procesamiento o cálculo más pesado de por medio.",
      },
      {
        name: "PostgreSQL",
        description:
          "Como base de datos principal: madura, confiable, y con dos décadas de historial en producción. No elegimos infraestructura por moda.",
      },
    ],
    deliverables: [
      "El código fuente completo, de tu propiedad, sin dependencia de Zentral para operarlo.",
      "Documentación técnica de la arquitectura y las decisiones de diseño.",
      "Capacitación a tu equipo para usar y, si tienen capacidad técnica, mantener la aplicación.",
      "Un periodo de soporte post-lanzamiento para corregir lo que solo aparece con uso real.",
    ],
    timeline:
      "Entre 8 y 16 semanas según el alcance: una aplicación con un módulo y una integración no toma lo mismo que una con varios módulos y reglas de negocio complejas. El número exacto sale del diagnóstico, no antes.",
    investmentRange:
      "El costo depende completamente del alcance del desarrollo: no hay una tarifa fija ni un plan mensual, porque cada aplicación a la medida es un proyecto distinto. Se cotiza después del diagnóstico, con un número cerrado antes de comprometerte a nada.",
    appliedScenario: {
      disclaimer:
        "Zentral todavía no tiene casos publicados con cifras verificables de clientes — cuando los haya, esta sección los reemplaza. Mientras tanto, así se vería aplicado a una situación típica:",
      paragraphs: [
        "Piensa en una empresa que gestiona proyectos con avances de obra, materiales y subcontratistas, y hoy usa una combinación de hojas de cálculo y una herramienta genérica de gestión de proyectos que no entiende su forma específica de calcular avance o costos. Una aplicación a la medida puede modelar exactamente esa lógica de negocio: cómo se calcula el avance real de un proyecto, cómo se reparten los costos entre frentes de trabajo, y qué alertas tienen sentido para esa operación en particular, no las que trae por defecto una herramienta genérica.",
        "Si en algún punto la operación cambia y la lógica del negocio cambia con ella, la aplicación se ajusta porque el código es tuyo y nosotros seguimos siendo quienes la mantienen. No hay que esperar a que un proveedor externo decida si tu caso de uso entra en su hoja de ruta, ni migrar toda la operación a una plataforma distinta porque la anterior dejó de encajar.",
      ],
    },
    lastModified: "2026-08-20",
  },
  {
    slug: "dashboards",
    keyword: "dashboards empresariales",
    metaTitle: "Dashboards empresariales para empresas en Colombia",
    metaDescription:
      "Indicadores al día sobre datos confiables, en un solo lugar, para decidir sin discutir las cifras. Implementación en 4 a 6 semanas, desde $450.000 COP/mes.",
    heroTitle: "Dashboards empresariales",
    heroSubtitle:
      "Indicadores al día sobre datos confiables, en un solo lugar, para decidir sin discutir las cifras.",
    whatItIs: [
      "Un dashboard empresarial reúne en un solo lugar los datos que hoy viven repartidos entre varios sistemas —ventas, inventario, operación, finanzas— y los presenta como indicadores que se actualizan solos, no como un reporte que alguien arma a mano cada cierto tiempo. La diferencia con una hoja de cálculo no es solo estética: es que el dato que ves es el dato real del sistema en ese momento, no una copia que puede estar desactualizada.",
      "No construimos dashboards genéricos con métricas de plantilla. Definimos contigo qué decisión toma cada indicador, porque un dashboard con quince gráficas que nadie revisa vale menos que uno con cinco que sí se usan cada semana.",
      "Tampoco es lo mismo que conectar tus datos a una herramienta de business intelligence genérica y dejar que tu equipo arme sus propios reportes. Ese enfoque funciona cuando ya tienes a alguien dedicado a interpretar datos; cuando no, termina siendo una herramienta más que nadie tiene tiempo de aprender a usar bien.",
    ],
    whoItsFor: [
      "Le sirve a empresas donde las decisiones importantes se toman con datos que llegan tarde: un reporte de ventas que se arma el lunes con datos del viernes anterior, un estado de inventario que nadie actualiza a tiempo, indicadores operativos que existen pero que hay que pedirle a alguien que los saque manualmente cada vez.",
      "La señal más clara: si para saber cómo va el negocio hoy alguien tiene que abrir tres sistemas distintos y armar la respuesta a mano, ese proceso de armar la respuesta es exactamente lo que un dashboard reemplaza. También le sirve a equipos de dirección que necesitan ver el negocio completo sin depender de que cada área les envíe su reporte por separado.",
    ],
    howWeImplementIt: [
      "Empezamos por identificar qué decisiones necesitan datos al día y de dónde sale cada dato hoy: qué sistema lo tiene, con qué frecuencia cambia, y qué tan confiable es la fuente. Un dashboard construido sobre datos poco confiables solo hace que la desconfianza se vea más profesional — por eso limpiar y validar el origen de los datos suele tomar más tiempo que construir la interfaz que los muestra.",
      "Diseñamos el dashboard alrededor de esas decisiones, no de una lista genérica de métricas. Lo conectamos a las fuentes de datos reales, definimos con qué frecuencia se actualiza cada indicador según lo que el proceso necesita, y lo probamos con datos reales de tu operación antes de entregarlo.",
      "Un dashboard sin mantenimiento se vuelve inútil apenas una fuente de datos cambia de estructura. El soporte incluido cubre justamente eso: que el indicador siga siendo confiable seis meses después, no solo el día de la entrega.",
      "Priorizamos claridad sobre cantidad de gráficas. Un indicador que se puede interpretar en cinco segundos, sin tener que leer una leyenda ni preguntarle a alguien qué significa, es más útil en una reunión que un tablero completo que solo entiende quien lo construyó.",
      "El dashboard queda accesible desde cualquier dispositivo con acceso a internet, con los permisos que definas: no todo el equipo necesita ver todos los indicadores, y parte del diseño es decidir contigo quién ve qué.",
    ],
    technologies: [
      {
        name: "Next.js y React",
        description:
          "Para la interfaz del dashboard: rápida de cargar y clara de leer, sin la sobrecarga de una plataforma de business intelligence genérica que trae funciones que no vas a usar.",
      },
      {
        name: "PostgreSQL",
        description:
          "Como capa de datos consolidada cuando hace falta combinar información de varias fuentes antes de mostrarla, en vez de consultar cada sistema origen en cada carga de página.",
      },
    ],
    deliverables: [
      "El dashboard funcionando con tus datos reales, no datos de ejemplo.",
      "Capacitación a tu equipo para leer e interpretar cada indicador.",
      "Soporte activo durante toda la suscripción.",
    ],
    timeline:
      "Entre 4 y 6 semanas, dependiendo de cuántas fuentes de datos hay que consolidar y qué tan confiables son los datos de origen.",
    investmentRange:
      "Desde $450.000 COP al mes, más el costo de implementación inicial, que varía según el número de fuentes de datos que el dashboard tiene que consolidar.",
    appliedScenario: {
      disclaimer:
        "Zentral todavía no tiene casos publicados con cifras verificables de clientes — cuando los haya, esta sección los reemplaza. Mientras tanto, así se vería aplicado a una situación típica:",
      paragraphs: [
        "Piensa en una empresa donde cada lunes alguien arma un reporte de ventas de la semana anterior cruzando el sistema de punto de venta con una hoja de cálculo de metas por vendedor. Un dashboard puede leer directamente del sistema de ventas, calcular el avance contra la meta de cada vendedor, y mostrarlo actualizado sin que nadie tenga que armarlo: el lunes el equipo revisa el resultado, no lo construye.",
        "Si una fuente de datos deja de responder o entrega un dato fuera de rango, el dashboard no muestra un número silenciosamente incorrecto: señala que esa fuente falló, para que la decisión se tome sabiendo qué dato falta, no asumiendo que todo está completo.",
        "El mismo tablero puede mostrar el indicador desglosado por vendedor, por zona o por producto según quién lo esté viendo, sin que eso implique construir un reporte distinto para cada persona: es la misma fuente de datos, con un filtro distinto encima.",
      ],
    },
    lastModified: "2026-08-20",
  },
  {
    slug: "integracion-crm-erp",
    keyword: "integración CRM ERP",
    metaTitle: "Integración CRM y ERP para empresas en Colombia",
    metaDescription:
      "Sincronizamos tu CRM comercial con tu ERP operativo: un cliente, una cotización, un pedido, sin retipear datos entre sistemas. Desde $450.000 COP/mes.",
    heroTitle: "Integración CRM y ERP",
    heroSubtitle:
      "Sincronizamos lo que tu equipo comercial vende con lo que tu operación y finanzas necesitan procesar, sin retipear nada entre sistemas.",
    whatItIs: [
      "La integración CRM-ERP conecta específicamente el sistema donde tu equipo comercial gestiona clientes y oportunidades con el sistema donde tu operación y finanzas procesan pedidos, inventario y facturación. Es un caso particular de integración de sistemas, pero con un problema propio: el CRM y el ERP casi nunca modelan al cliente, el producto o el precio de la misma forma, y esa diferencia es justamente donde se rompe la sincronización si no se maneja con cuidado.",
      "El objetivo no es que un sistema reemplace al otro, cada uno hace bien lo suyo, sino que lo que se vende en uno aparezca correctamente en el otro sin que una persona vuelva a escribirlo. Si tu empresa usa un CRM y un ERP genéricos, o alguno construido a la medida, el principio es el mismo: la sincronización se diseña alrededor de cómo cada sistema modela sus datos, no al revés.",
    ],
    whoItsFor: [
      "Le sirve a empresas donde ventas y operación trabajan, en la práctica, con información distinta: el vendedor cierra un trato en el CRM con condiciones específicas, y para que ese trato se convierta en un pedido real, alguien en operación tiene que volver a escribirlo en el ERP, con el riesgo de que algo se traspapele o se transcriba distinto.",
      "La señal más clara: cuando un pedido se demora en despachar o facturar no porque falte producto o capacidad, sino porque todavía no ha terminado de pasar de un sistema al otro. Si dirección comercial y dirección de operaciones cierran el mes con números distintos para las mismas ventas, es la misma causa de fondo.",
    ],
    howWeImplementIt: [
      "El primer paso es acordar cómo se relacionan las entidades entre los dos sistemas: qué campo del CRM corresponde a qué campo del ERP, qué pasa cuando un cliente existe en uno pero no en el otro, y qué reglas de negocio aplican en cada transición, por ejemplo, qué condiciones tiene que cumplir una oportunidad del CRM antes de convertirse en un pedido en el ERP. Ese mapeo se documenta por escrito, no queda solo en la cabeza de quien lo construyó.",
      "Con esas reglas definidas, construimos la sincronización y la probamos con clientes y pedidos reales de tu operación, no con datos de prueba, porque los casos límite —un cliente con datos incompletos, un producto que no existe en ambos catálogos— son los que rompen una integración mal probada.",
      "Los ERP suelen ser más rígidos que un CRM en cuanto a qué datos aceptan y en qué formato, así que buena parte del trabajo está en anticipar esas reglas antes de que la sincronización falle en producción. Esa rigidez no es un defecto del ERP — es justamente lo que lo hace confiable para contabilidad e inventario — pero significa que la integración tiene que adaptarse a él, no forzarlo a aceptar cualquier cosa que le llegue del CRM.",
    ],
    technologies: [
      {
        name: "APIs REST",
        description:
          "La vía de conexión con la mayoría de plataformas de CRM y ERP del mercado, sin depender de un conector propietario que un proveedor puede descontinuar.",
      },
      {
        name: "n8n",
        description:
          "Orquesta la sincronización: qué evento la dispara, qué transformación aplica a cada entidad, y qué hacer cuando un sistema rechaza un dato porque no cumple sus reglas.",
      },
    ],
    deliverables: [
      "CRM y ERP sincronizados, sin retipear datos entre sistemas.",
      "Soporte activo durante toda la suscripción.",
    ],
    timeline:
      "Entre 5 y 7 semanas, dependiendo de qué tan distinto modelan los datos tu CRM y tu ERP.",
    investmentRange:
      "Desde $450.000 COP al mes, más el costo de implementación inicial, que depende de la complejidad del ERP y de cuántas reglas de negocio hay que respetar en la sincronización.",
    appliedScenario: {
      disclaimer:
        "Zentral todavía no tiene casos publicados con cifras verificables de clientes — cuando los haya, esta sección los reemplaza. Mientras tanto, así se vería aplicado a una situación típica:",
      paragraphs: [
        "Piensa en un vendedor que cierra un trato en el CRM con un descuento especial aprobado para ese cliente. Hoy, para que ese pedido se procese, alguien en operación tiene que entrar al ERP, crear el pedido a mano y acordarse de aplicar el mismo descuento, y si se le olvida, el cliente recibe una factura distinta a lo que se le prometió. Una integración puede crear el pedido en el ERP automáticamente cuando el trato se marca como ganado en el CRM, con las mismas condiciones exactas que se negociaron.",
        "Si el ERP no reconoce un producto o un código de cliente que sí existe en el CRM, la integración no lo inventa ni lo omite: lo señala para que alguien lo resuelva antes de que el pedido quede mal registrado. La sincronización automatiza el traspaso, no las decisiones sobre datos que no cuadran.",
        "El mismo mecanismo funciona en la dirección contraria: si en el ERP se actualiza el estado de un pedido —despachado, facturado, con un problema de inventario— esa actualización puede reflejarse en el CRM para que el equipo comercial sepa en qué va el pedido de su cliente sin tener que preguntarle a operaciones.",
      ],
    },
    lastModified: "2026-08-20",
  },
];

/* -------------------------------------------------------------------------- */
/* Recursos (C4 del brief SEO)                                                */
/* -------------------------------------------------------------------------- */

/**
 * Contenido de intención informacional: lo que busca un director de
 * operaciones antes de estar listo para contratar. <h3> interrogativos con
 * la respuesta directa primero — el patrón que mejor extraen los motores
 * generativos. Sin marcado FAQPage (ver «Prohibido» del brief).
 */
export const resourceArticles: ResourceArticle[] = [
  {
    slug: "cuanto-cuesta-automatizar-un-proceso-colombia",
    title: "¿Cuánto cuesta automatizar un proceso en una empresa colombiana?",
    metaDescription:
      "Rangos reales de inversión para automatizar procesos en Colombia, qué factores mueven el precio y qué preguntarle a un proveedor antes de contratar.",
    intro:
      "En Zentral, los proyectos de automatización de procesos empiezan desde $400.000 COP al mes más el costo de instalación inicial, pero ese número por sí solo dice poco: el precio real depende de cuántos sistemas hay que integrar, qué tan compleja es la lógica del proceso y si necesitas una suscripción con soporte continuo o un desarrollo único.",
    sections: [
      {
        question: "¿Qué factores determinan el precio de una automatización?",
        answer: [
          "Tres cosas mueven el precio más que cualquier otra: cuántos sistemas distintos tiene que tocar el flujo (cada integración adicional es trabajo adicional), qué tan compleja es la lógica de negocio detrás del proceso, y si el proyecto incluye soporte continuo o es una entrega única. Un flujo que solo mueve datos entre dos sistemas con reglas simples cuesta una fracción de uno que valida, transforma y sincroniza información entre cinco sistemas con excepciones caso por caso.",
        ],
      },
      {
        question:
          "¿Es mejor pagar una suscripción mensual o un desarrollo único?",
        answer: [
          "Depende de qué estás comprando. Una suscripción mensual —como la automatización de procesos o los agentes IA— tiene sentido cuando quieres que el sistema se mantenga y se ajuste con el tiempo sin que tengas que gestionarlo tú, porque el soporte queda incluido. Un desarrollo único —como el software a la medida— tiene sentido cuando quieres ser dueño del código y no depender de que un proveedor siga cobrando para que la herramienta siga funcionando.",
        ],
      },
      {
        question: "¿Qué rangos de precio maneja el mercado en Colombia?",
        answer: [
          "No podemos hablar por el mercado completo —los rangos varían mucho según el proveedor, la complejidad y si el trabajo se hace con herramientas low-code, con desarrollo propio o con una mezcla de ambas—, pero sí podemos ser transparentes con lo que cobramos nosotros: automatización de procesos desde $400.000 COP/mes, integración de sistemas desde $350.000 COP/mes, agentes IA desde $600.000 COP/mes, y software a la medida cotizado según el alcance porque no es un servicio de suscripción.",
        ],
      },
      {
        question: "¿Qué preguntas hacerle a un proveedor antes de contratar?",
        answer: [
          "Pregunta qué pasa cuando uno de tus sistemas cambia y el flujo deja de funcionar: ¿lo detecta alguien, o te enteras cuando un cliente se queja? Pregunta si el soporte está incluido en el precio o es un costo aparte. Pregunta quién es dueño del flujo o del código una vez termina el proyecto. Y pide que te muestren, con tu proceso real, qué parte automatizarían primero y qué parte no tocarían todavía — un proveedor que quiere automatizar todo de una vez, sin diagnóstico previo, es una señal de alerta.",
        ],
      },
    ],
    relatedServices: [
      "automatizacion-de-procesos",
      "agentes-ia",
      "software-a-la-medida",
    ],
    lastModified: "2026-08-20",
  },
  {
    slug: "integrar-crm-erp-sin-reemplazar-ninguno",
    title: "Cómo integrar CRM y ERP sin reemplazar ninguno de los dos",
    metaDescription:
      "Cómo sincronizar CRM y ERP con APIs REST sin migrar de plataforma: qué datos conectar, cómo resolver diferencias de modelo y cuánto toma.",
    intro:
      "Integrar tu CRM y tu ERP sin reemplazar ninguno consiste en sincronizar automáticamente los datos que ambos necesitan compartir —clientes, pedidos, precios— usando APIs REST y una capa de orquestación como n8n, en vez de migrar toda tu operación a una sola plataforma que intente hacer las dos cosas a la vez.",
    sections: [
      {
        question:
          "¿Por qué no conviene simplemente reemplazar uno de los dos?",
        answer: [
          "Porque cada uno resuelve bien lo suyo: el CRM está diseñado para gestionar relaciones comerciales y el ERP para procesar operación, inventario y finanzas. Forzar a uno a hacer el trabajo del otro casi siempre significa perder funcionalidad específica que sí necesitas. Y el costo de migrar —datos históricos, capacitación de un equipo que ya domina su herramienta actual, el riesgo de errores durante la transición— suele ser mucho mayor que el de construir una sincronización entre los dos.",
        ],
      },
      {
        question: "¿Qué información hay que sincronizar entre CRM y ERP?",
        answer: [
          "Lo más común es: datos del cliente (para que exista igual en ambos sistemas), oportunidades que se convierten en pedidos, catálogo de productos y precios, y el estado de un pedido a medida que avanza —confirmado, despachado, facturado. No todo dato necesita sincronizarse en ambas direcciones; parte del trabajo de diseño es decidir qué sistema es la fuente de verdad para cada tipo de dato.",
        ],
      },
      {
        question: "¿Qué pasa cuando los dos sistemas modelan un dato distinto?",
        answer: [
          "Es el problema más común en este tipo de integración: el CRM y el ERP casi nunca representan al cliente, el producto o el precio exactamente de la misma forma. La solución no es forzar a uno a adoptar el modelo del otro, sino definir explícitamente cómo se traduce cada campo de un sistema al otro, y qué hacer cuando un dato no tiene equivalente claro —normalmente, marcarlo para revisión humana en vez de adivinar.",
        ],
      },
      {
        question: "¿Cuánto tiempo toma una integración CRM-ERP?",
        answer: [
          "En nuestra experiencia, entre 5 y 7 semanas desde que se acuerda cómo se relacionan los datos entre los dos sistemas hasta que la sincronización opera en producción. El rango depende principalmente de qué tan rígido es el ERP y cuántas reglas de negocio hay que respetar en la transición de una oportunidad comercial a un pedido operativo.",
        ],
      },
    ],
    relatedServices: ["integracion-crm-erp", "integracion-de-sistemas"],
    lastModified: "2026-08-20",
  },
  {
    slug: "n8n-zapier-o-desarrollo-propio",
    title: "n8n, Zapier o desarrollo propio: cuál conviene según el caso",
    metaDescription:
      "Cuándo usar Zapier, cuándo n8n y cuándo construir software propio para automatizar un proceso, con criterios concretos para decidir.",
    intro:
      "Zapier conviene para conexiones simples entre herramientas populares que quieres tener andando en minutos; n8n conviene cuando necesitas automatizaciones más complejas con control total sobre la lógica; y el desarrollo de software propio conviene cuando el proceso es tan específico que ninguna herramienta de automatización lo resuelve bien. La decisión correcta depende de la complejidad del proceso, no de cuál herramienta es mejor en abstracto.",
    sections: [
      {
        question: "¿Cuándo conviene Zapier?",
        answer: [
          "Cuando la automatización conecta dos herramientas populares de forma directa —un formulario con una hoja de cálculo, una venta con una notificación de Slack— y la necesitas funcionando rápido, sin construir nada a la medida. Su límite aparece cuando la lógica se complica: condicionales anidados, múltiples pasos con validaciones propias, o volumen alto, donde el costo por operación empieza a pesar.",
        ],
      },
      {
        question: "¿Cuándo conviene n8n?",
        answer: [
          "Cuando el flujo necesita lógica más compleja que conectar A con B: validaciones, transformaciones de datos específicas, múltiples ramas según condiciones del negocio, o conexión con sistemas que no tienen un conector genérico ya hecho. Al ser autohospedable, tampoco tiene el límite artificial de operaciones mensuales que sí tienen la mayoría de plataformas low-code, lo que importa cuando el volumen crece.",
        ],
      },
      {
        question: "¿Cuándo conviene el desarrollo de software propio?",
        answer: [
          "Cuando el proceso es parte de lo que hace distinta a tu operación, y ninguna herramienta —ni siquiera n8n con lógica personalizada— modela bien esa lógica de negocio específica. También cuando necesitas una interfaz propia para que tu equipo trabaje, no solo un flujo corriendo detrás de otros sistemas. Es la opción de mayor inversión inicial, pero también la única donde el resultado es completamente tuyo.",
        ],
      },
      {
        question: "¿Se pueden combinar las tres?",
        answer: [
          "Sí, y en la práctica es más común de lo que parece. Nosotros mismos construimos automatizaciones sobre n8n con Python para la lógica que n8n no cubre de fábrica, y algunas aplicaciones a la medida terminan orquestando flujos de n8n por debajo para las tareas repetitivas. La pregunta no es qué herramienta usar para todo, sino qué herramienta le corresponde a cada parte del problema.",
        ],
      },
    ],
    relatedServices: ["automatizacion-de-procesos", "software-a-la-medida"],
    lastModified: "2026-08-20",
  },
  {
    slug: "que-procesos-automatizar-primero",
    title: "Qué procesos conviene automatizar primero (y cuáles no)",
    metaDescription:
      "Criterios para elegir qué automatizar primero en tu empresa: qué procesos son buenos candidatos y cuáles conviene dejar en manos humanas por ahora.",
    intro:
      "Conviene automatizar primero los procesos repetitivos, de alto volumen y con reglas claras, donde el criterio humano no cambia el resultado. No conviene automatizar primero —o quizás nunca— los procesos que dependen de juicio caso a caso, que cambian con frecuencia, o que ocurren tan pocas veces que el ahorro no justifica el costo de construir el sistema.",
    sections: [
      {
        question:
          "¿Qué características tiene un buen candidato para automatizar primero?",
        answer: [
          "Alto volumen, reglas que no cambian según quién lo haga, y una relación clara entre el tiempo que consume y el valor que genera. Si diez personas hacen la misma tarea de la misma forma cien veces por semana, esa tarea probablemente sigue reglas más consistentes de lo que parece a simple vista, y es ahí donde la automatización rinde más rápido.",
        ],
      },
      {
        question: "¿Qué procesos NO conviene automatizar todavía?",
        answer: [
          "Los que cambian constantemente —el costo de mantener la automatización al día puede superar el ahorro que genera—, los de muy bajo volumen —donde construir el sistema cuesta más que seguir haciéndolo a mano por un tiempo—, y los que dependen genuinamente del juicio de una persona con contexto que no está escrito en ningún lado, como una negociación compleja o una decisión estratégica.",
        ],
      },
      {
        question: "¿Cómo se identifica esto en la práctica?",
        answer: [
          "Con un diagnóstico corto del proceso actual: qué pasos existen, quién los ejecuta, con qué frecuencia, y qué tan seguido aparece una excepción que rompe la regla general. Un proceso con muchas excepciones no es necesariamente un mal candidato, pero si necesita revisarse antes de automatizarlo — a veces conviene primero simplificar el proceso y automatizar después.",
        ],
      },
      {
        question: "¿Qué pasa si automatizo algo que no debía automatizarse?",
        answer: [
          "Terminas con un sistema frágil que se rompe cada vez que algo cambia, un costo de mantenimiento que no estaba en la cuenta, y un equipo frustrado que tiene que trabajar alrededor del sistema en vez de con él. Decir que no a automatizar algo —o esperar— es tan parte del trabajo como decir que sí, y cualquier proveedor que quiera automatizar todo sin distinción no está mirando tu operación con suficiente cuidado.",
        ],
      },
    ],
    relatedServices: ["automatizacion-de-procesos"],
    lastModified: "2026-08-20",
  },
  {
    slug: "agentes-ia-atencion-al-cliente",
    title: "Agentes IA en atención al cliente: qué funciona y qué todavía no",
    metaDescription:
      "Qué tareas de atención al cliente resuelve bien un agente IA hoy, dónde todavía falla, y cómo evitar que responda mal con falsa confianza.",
    intro:
      "Los agentes IA funcionan bien en atención al cliente para preguntas frecuentes, calificación inicial de leads, agendamiento y seguimiento de estado: conversaciones repetitivas con un patrón claro. Todavía no funcionan bien para resolver quejas complejas, negociar excepciones a una política, o cualquier interacción donde el cliente necesita hablar con alguien que tenga autoridad real para decidir.",
    sections: [
      {
        question:
          "¿En qué tareas de atención al cliente funciona bien un agente IA hoy?",
        answer: [
          "En todo lo que sigue un patrón repetible: responder preguntas frecuentes con la información correcta, calificar un lead con las preguntas que normalmente hace un vendedor al inicio de la conversación, agendar y confirmar citas, y dar seguimiento al estado de un pedido o solicitud. Son tareas donde la respuesta correcta no depende de improvisar, sino de tener la información correcta a la mano.",
        ],
      },
      {
        question: "¿Dónde todavía falla o no conviene usar un agente IA?",
        answer: [
          "En quejas con carga emocional, donde la persona necesita sentir que la escuchó otra persona, no un sistema. En decisiones que requieren autorizar una excepción —un descuento, una devolución fuera de política— porque ahí el agente no tiene, y no debería tener, autoridad para decidir solo. Y en cualquier caso ambiguo donde la política de la empresa no da una respuesta clara: un agente sin esa claridad responde con la misma confianza tanto si acierta como si no.",
        ],
      },
      {
        question:
          "¿Cómo se evita que un agente responda mal con falsa confianza?",
        answer: [
          "Acotando desde el diseño qué puede resolver solo y en qué punto exacto debe escalar a una persona, y probándolo contra casos reales antes de exponerlo a un cliente, no solo contra los casos fáciles. Un agente bien construido reconoce cuándo no tiene la información o la autorización para responder, y lo dice en vez de inventar algo que suene razonable.",
        ],
      },
      {
        question: "¿Un agente IA reemplaza al equipo de atención al cliente?",
        answer: [
          "No, y cualquier proveedor que lo prometa así está vendiendo algo que no puede cumplir. Un agente bien implementado absorbe el volumen repetitivo —las preguntas que se repiten cien veces con variaciones menores— para que el equipo humano dedique su tiempo a los casos que sí necesitan criterio, contexto o autoridad para decidir.",
        ],
      },
    ],
    relatedServices: ["agentes-ia"],
    lastModified: "2026-08-20",
  },
];

/* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */

export const footerColumns = [
  {
    title: "Soluciones",
    links: [
      {
        label: "Automatización de procesos",
        href: "/servicios/automatizacion-de-procesos",
      },
      { label: "Agentes IA", href: "/servicios/agentes-ia" },
      {
        label: "Integración de sistemas",
        href: "/servicios/integracion-de-sistemas",
      },
      { label: "Software a la medida", href: "/servicios/software-a-la-medida" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Cómo trabajamos", href: "#proceso" },
      { label: "Casos de uso", href: "#casos-de-uso" },
      { label: "Tecnologías", href: "#tecnologias" },
      { label: "Recursos", href: "/recursos" },
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
