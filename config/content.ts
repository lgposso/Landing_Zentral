import type {
  CoreNode,
  FeatureItem,
  ProcessStep,
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
  errorFallback:
    "No se pudo enviar el mensaje. Intenta de nuevo o escríbenos directamente.",
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
