import type {
  CustomDevPage,
  ProcessStep,
  SectionCopy,
  TechGroup,
} from "@/types";

/**
 * Todo el copy del sitio, en un solo lugar (los productos viven aparte, en
 * `config/products.ts`).
 *
 * Voz (PRODUCT.md): hablar del beneficio para el negocio en español claro.
 * Evitar "revolucionario", "IA mágica", "innovación disruptiva" y cualquier
 * promesa exagerada. Decir lo que existe hoy y rotular lo que viene.
 *
 * Para editar textos, hazlo aquí — no en el JSX.
 */

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  // Espacios duros en «a la medida»: el titular nunca corta la frase.
  title: "Software a\u00a0la\u00a0medida, construido como producto.",
  /** Máximo 20 palabras: es lo que se alcanza a leer antes de decidir. */
  subtitle:
    "Diseñamos y construimos software para tu operación, con la misma ingeniería de los productos que operamos.",
};

/* -------------------------------------------------------------------------- */
/* Desarrollo a la medida: lo principal                                        */
/* -------------------------------------------------------------------------- */

export const customDevCopy: SectionCopy = {
  title: "Desarrollo",
  titleAccent: "a la medida.",
  subtitle:
    "Para el proceso que distingue a tu empresa y que ningún producto resuelve: lo diseñamos contigo, lo construimos por entregas y el código queda a tu nombre.",
};

/** Lo que se construye a la medida. */
export const customDevKinds = [
  {
    title: "Plataformas y productos SaaS",
    description:
      "Tu propio producto de software, con usuarios, roles y cobro, construido con la misma ingeniería que los nuestros.",
  },
  {
    title: "Herramientas internas",
    description:
      "Paneles de administración y back-offices que reemplazan la hoja de cálculo que sostiene la operación.",
  },
  {
    title: "Portales para clientes y proveedores",
    description:
      "Donde tus clientes consultan, solicitan y descargan sin escribirle a nadie de tu equipo.",
  },
  {
    title: "Aplicaciones para el celular",
    description:
      "Aplicaciones web instalables para el personal en campo, en caja o en la sede, sin pasar por una tienda de apps.",
  },
];

/** Datos duros que acompañan el bloque de a la medida. */
export const customDevFacts = [
  { label: "Plazo", value: "8 a 16 semanas según el alcance" },
  { label: "Propiedad", value: "El código fuente es tuyo" },
  { label: "Cotización", value: "Número cerrado después del diagnóstico" },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Entendemos la operación y el problema, y definimos qué conviene construir y qué no. Si un producto existente lo resuelve, te lo decimos.",
    deliverable: "Alcance escrito y cotización cerrada",
  },
  {
    step: "02",
    title: "Diseño del sistema",
    description:
      "Arquitectura, integraciones y pantallas definidas antes de escribir la primera línea de código.",
    deliverable: "Arquitectura y alcance cerrado",
  },
  {
    step: "03",
    title: "Construcción por ciclos",
    description:
      "Entregas funcionales cada pocas semanas. Ves la aplicación tomando forma y ajustas el rumbo antes de que un malentendido sea caro.",
    deliverable: "Entregas funcionales por ciclo",
  },
  {
    step: "04",
    title: "Operación y evolución",
    description:
      "Lanzamiento, capacitación y soporte. La aplicación sigue creciendo con la empresa en vez de envejecer.",
    deliverable: "Código, documentación y soporte",
  },
];

export const techGroups: TechGroup[] = [
  { category: "Producto", items: ["Next.js", "React", "TypeScript"] },
  { category: "Backend y datos", items: ["Node.js", "Python", "PostgreSQL"] },
  { category: "Infraestructura", items: ["Vercel", "AWS", "Docker"] },
];

/* -------------------------------------------------------------------------- */
/* Productos propios: secundarios, como prueba                                */
/* -------------------------------------------------------------------------- */

/**
 * Banda corta, no sección principal. Evitar «en producción»: fuera del
 * oficio se lee como «en proceso», y lo que se quiere decir es que ya están
 * listos.
 */
export const productsCopy: SectionCopy = {
  title: "También tenemos",
  titleAccent: "productos propios.",
  subtitle:
    "Los diseñamos, los construimos y los operamos nosotros. Ya están disponibles y son la mejor muestra de cómo trabajamos a la medida.",
};

/* -------------------------------------------------------------------------- */
/* CTA final                                                                   */
/* -------------------------------------------------------------------------- */

export const ctaCopy = {
  title: "Hablemos de lo que necesitas construir.",
  subtitle:
    "En una conversación de 30 minutos entendemos el problema y te decimos si lo tuyo es un desarrollo a la medida o si uno de nuestros productos ya lo resuelve.",
  note: "Sin compromiso. Si no vemos una forma clara de ayudarte, te lo decimos.",
};

/* -------------------------------------------------------------------------- */
/* Formulario de contacto                                                     */
/* -------------------------------------------------------------------------- */

/** Alternativa al mailto: del footer para quien no quiere abrir su cliente de correo. */
export const contactFormCopy = {
  title: "¿Prefieres escribirnos directamente?",
  subtitle:
    "Cuéntanos qué necesitas: un desarrollo a la medida o la demo de un producto. Te respondemos a tu correo.",
  fields: {
    name: { label: "Nombre", placeholder: "Tu nombre" },
    company: { label: "Empresa", placeholder: "Nombre de tu empresa" },
    email: { label: "Correo", placeholder: "tu@empresa.com" },
    message: {
      label: "¿Qué necesitas construir?",
      placeholder: "Cuéntanos brevemente el problema, el proceso o el producto que te interesa.",
    },
  },
  submitLabel: "Enviar mensaje",
  /** Aviso de privacidad en el momento de la recolección (Ley 1581). */
  privacyNotice:
    "Al enviar autorizas a Zentral Solutions S.A.S. a tratar tus datos para responder tu solicitud, según nuestra",
  privacyLinkLabel: "política de tratamiento de datos",
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
/* Página /desarrollo-a-la-medida                                             */
/* -------------------------------------------------------------------------- */

/**
 * El servicio principal, con su propia página. Tiene sustancia real del
 * negocio (tecnologías, entregables, plazo, inversión) y nada inventado: el
 * escenario aplicado se rotula como ilustrativo mientras no haya casos
 * publicables.
 */
export const customDevPage: CustomDevPage = {
  keyword: "desarrollo de software a la medida Colombia",
  metaTitle: "Desarrollo de software a la medida en Colombia",
  metaDescription:
    "Software a la medida para empresas en Colombia, con la ingeniería de nuestros productos RIPS y Loyalty. El código es tuyo y la cotización es cerrada.",
  heroTitle: "Desarrollo de software a la medida",
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
        "Como base de datos principal: madura, confiable, y con más de dos décadas de uso en empresas de todo el mundo. No elegimos infraestructura por moda.",
    },
  ],
  deliverables: [
    {
      title: "Código fuente",
      description: "Completo y de tu propiedad, sin dependencia de Zentral para operarlo.",
    },
    {
      title: "Documentación técnica",
      description: "De la arquitectura y de las decisiones de diseño.",
    },
    {
      title: "Capacitación",
      description:
        "Para que tu equipo use la aplicación y, si tiene capacidad técnica, la mantenga.",
    },
    {
      title: "Soporte después del lanzamiento",
      description: "Un periodo para corregir lo que solo aparece con uso real.",
    },
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
  lastModified: "2026-09-28",
};

/* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */

/** Las tres líneas van aparte en el pie (salen de `navItems`); aquí, lo institucional. */
export const footerColumns = [
  {
    title: "Empresa",
    links: [
      { label: "Productos propios", href: "/productos" },
      { label: "Política de privacidad", href: "/privacidad" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Política de tratamiento de datos                                           */
/* -------------------------------------------------------------------------- */

/**
 * Política de tratamiento de datos personales, con el contenido mínimo del
 * art. 13 del Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015):
 * responsable, finalidades, derechos, área de atención, procedimiento y
 * vigencia. Describe lo que el sitio hace de verdad (ver
 * features/contact-form y next.config.ts); si eso cambia, esto cambia.
 *
 * Los datos del responsable salen del RUT y del certificado de Cámara de
 * Comercio de Barranquilla (matrícula 938.429).
 */
export const privacyPolicy = {
  title: "Política de tratamiento de datos personales",
  lastUpdated: "28 de septiembre de 2026",
  intro:
    "Esta política explica qué datos personales recoge Zentral Solutions S.A.S., para qué los usa, con quién los comparte, cuánto tiempo los guarda y cómo puedes ejercer tus derechos sobre ellos. Se rige por la Ley 1581 de 2012 y el Decreto 1377 de 2013, compilado en el Decreto 1074 de 2015.",
  sections: [
    {
      heading: "1. Responsable del tratamiento",
      paragraphs: [
        "Zentral Solutions S.A.S., sociedad identificada con NIT 902.064.009-2 e inscrita en la Cámara de Comercio de Barranquilla con la matrícula mercantil 938.429.",
      ],
      items: [
        "Domicilio y dirección: Calle 81 # 59-20, apartamento 401, Barranquilla, Atlántico, Colombia.",
        "Correo electrónico: contacto@zentral.com.co",
        "Teléfono y WhatsApp: +57 333 762 8306",
        "Sitio web: https://zentral.com.co",
      ],
    },
    {
      heading: "2. Alcance",
      paragraphs: [
        "Esta política aplica a los datos personales que Zentral recoge a través de este sitio web, de sus canales de contacto (formulario, correo y WhatsApp) y de sus relaciones con clientes, proveedores y aliados.",
        "En los productos de software que Zentral presta a otras empresas (Zentral RIPS y Zentral Loyalty), los datos de las personas que usan o reciben el servicio de nuestros clientes se tratan como se explica en la sección 9.",
      ],
    },
    {
      heading: "3. Definiciones",
      paragraphs: [
        "Para leer esta política se usan los términos de la Ley 1581 de 2012:",
      ],
      items: [
        "Titular: la persona natural cuyos datos personales se tratan.",
        "Dato personal: cualquier información que identifique o haga identificable a una persona natural.",
        "Dato sensible: el que afecta la intimidad del titular o cuyo uso indebido puede generar discriminación, como los datos de salud o los biométricos.",
        "Tratamiento: cualquier operación sobre datos personales, como recogerlos, almacenarlos, usarlos, circularlos o suprimirlos.",
        "Responsable: quien decide sobre la base de datos y el tratamiento.",
        "Encargado: quien trata datos por cuenta del responsable.",
        "Autorización: el consentimiento previo, expreso e informado del titular.",
        "Transmisión: la comunicación de datos a un encargado, dentro o fuera de Colombia, para que los trate por cuenta del responsable.",
      ],
    },
    {
      heading: "4. Principios",
      paragraphs: [
        "Zentral trata los datos personales conforme a los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad del artículo 4 de la Ley 1581 de 2012. En la práctica eso significa: recoger solo lo necesario, usarlo solo para lo que se informó, no venderlo ni cederlo para fines ajenos, y protegerlo.",
      ],
    },
    {
      heading: "5. Qué datos recogemos",
      paragraphs: [],
      items: [
        "Formulario de contacto: nombre, empresa, correo electrónico y el mensaje que escribas.",
        "WhatsApp y correo: tu número o dirección de correo, el nombre de tu perfil y el contenido de la conversación.",
        "Navegación: dirección IP, tipo de navegador y dispositivo, y las páginas visitadas. La analítica del sitio (Vercel Web Analytics y Cloudflare Web Analytics) mide visitas de forma agregada y no usa cookies.",
        "Clientes y proveedores: datos de contacto y de facturación de las personas que representan a la empresa, y los necesarios para ejecutar el contrato.",
      ],
    },
    {
      heading: "6. Para qué los usamos",
      paragraphs: [],
      items: [
        "Responder tus preguntas y solicitudes, agendar conversaciones y demostraciones de producto, y preparar propuestas.",
        "Celebrar y ejecutar contratos con clientes y proveedores, incluida la facturación y el soporte.",
        "Cumplir obligaciones legales, contables y tributarias.",
        "Proteger el sitio contra el abuso: la dirección IP de quien envía el formulario se guarda en memoria como máximo 10 minutos para limitar envíos repetidos.",
        "Conocer de forma agregada cómo se usa el sitio para mejorarlo.",
        "Enviarte información comercial de Zentral, solo si lo autorizaste de forma expresa.",
      ],
    },
    {
      heading: "7. Autorización",
      paragraphs: [
        "Cuando envías el formulario, nos escribes por WhatsApp o por correo, nos autorizas a tratar los datos que compartes para atender tu solicitud y hacerle seguimiento. Esa conducta equivale a la autorización prevista en el artículo 7 del Decreto 1377 de 2013, y por eso el formulario lo recuerda justo antes del botón de envío.",
        "Para cualquier finalidad distinta de las informadas pediremos una autorización nueva. Puedes revocar tu autorización en cualquier momento, salvo cuando exista un deber legal o contractual de conservar los datos.",
      ],
    },
    {
      heading: "8. Datos sensibles y de menores",
      paragraphs: [
        "Este sitio no solicita datos sensibles. Te pedimos no incluir en tus mensajes información de salud, biométrica u otra de carácter sensible. No estás obligado a entregar datos sensibles y, si los compartes, solo los usaremos para atender tu solicitud.",
        "El sitio no está dirigido a menores de edad y no recogemos intencionalmente sus datos.",
      ],
    },
    {
      heading: "9. Datos tratados en nuestros productos",
      paragraphs: [
        "Frente a los datos de las cuentas de nuestros clientes (razón social, NIT, correo y usuarios del panel), Zentral es responsable del tratamiento.",
        "Frente a los datos de las personas que usan o reciben el servicio de nuestros clientes (por ejemplo, los clientes de un comercio en Zentral Loyalty), el responsable es la empresa que contrata el producto y Zentral actúa como encargado: trata los datos por cuenta de esa empresa, según sus instrucciones y el contrato. Si eres titular de esos datos, puedes dirigir tu solicitud a esa empresa o a Zentral, y te ayudaremos a que llegue a quien debe resolverla.",
        "Algunas decisiones de diseño limitan lo que Zentral llega a conocer: en Zentral RIPS los archivos de los pacientes se procesan en el navegador de quien usa la herramienta y no pasan por nuestros servidores, y en Zentral Loyalty la promoción del día solo llega a quien autorizó recibir publicidad.",
      ],
    },
    {
      heading: "10. Con quién compartimos los datos",
      paragraphs: [
        "No vendemos ni cedemos datos personales a terceros para sus propios fines. Para operar el sitio usamos proveedores que tratan datos por nuestra cuenta, como encargados, conforme a sus términos de servicio y de tratamiento de datos:",
      ],
      items: [
        "Vercel: alojamiento del sitio y analítica sin cookies.",
        "Cloudflare: red de entrega, seguridad y analítica sin cookies.",
        "Resend: envío por correo de los mensajes del formulario.",
      ],
    },
    {
      heading: "11. Transmisión internacional",
      paragraphs: [
        "Estos proveedores pueden tratar los datos en servidores ubicados fuera de Colombia, principalmente en Estados Unidos. Al usar este sitio y sus canales autorizas esa transmisión, que se hace solo para las finalidades de esta política y conforme al artículo 26 de la Ley 1581 de 2012 y los artículos 24 y 25 del Decreto 1377 de 2013.",
        "Si nos escribes por WhatsApp, la conversación también se rige por las condiciones de WhatsApp, un servicio de Meta que es responsable de su propia plataforma.",
      ],
    },
    {
      heading: "12. Cuánto tiempo los guardamos",
      paragraphs: [
        "Conservamos los datos mientras sean necesarios para la finalidad que justificó recogerlos: los de una solicitud, mientras la atendemos y le hacemos seguimiento; los de clientes y proveedores, durante la relación y después por el tiempo que exigen las normas contables, tributarias y comerciales. Cumplido ese plazo, los suprimimos.",
      ],
    },
    {
      heading: "13. Seguridad",
      paragraphs: [
        "Aplicamos medidas técnicas y administrativas proporcionales al tipo de dato: conexiones cifradas (HTTPS), acceso restringido a quien lo necesita, proveedores de infraestructura con controles de seguridad reconocidos y límites contra el uso abusivo de los formularios. Ningún sistema es infalible; si ocurre un incidente que afecte datos personales, lo informaremos a la Superintendencia de Industria y Comercio como lo exige la ley.",
      ],
    },
    {
      heading: "14. Tus derechos",
      paragraphs: [
        "Como titular, según el artículo 8 de la Ley 1581 de 2012, tienes derecho a:",
      ],
      items: [
        "Conocer, actualizar y rectificar tus datos.",
        "Solicitar prueba de la autorización que otorgaste.",
        "Ser informado, previa solicitud, sobre el uso que se ha dado a tus datos.",
        "Presentar quejas ante la Superintendencia de Industria y Comercio, después de agotar el trámite de consulta o reclamo ante Zentral.",
        "Revocar la autorización o pedir la supresión de tus datos, cuando no exista un deber legal o contractual de conservarlos.",
        "Acceder a tus datos de forma gratuita, al menos una vez cada mes calendario y cada vez que esta política cambie de forma sustancial.",
      ],
    },
    {
      heading: "15. Quién atiende tus solicitudes",
      paragraphs: [
        "La gerencia de Zentral Solutions S.A.S. atiende las consultas y reclamos sobre datos personales. Escríbenos a contacto@zentral.com.co con el asunto «Datos personales», o envía tu solicitud por escrito a Calle 81 # 59-20, apartamento 401, Barranquilla. Pueden presentarla el titular, sus causahabientes, su representante o apoderado, o quien actúe por estipulación a favor de otro.",
      ],
    },
    {
      heading: "16. Procedimiento para consultas y reclamos",
      paragraphs: [
        "Consultas: si quieres saber qué datos tuyos tenemos o cómo los usamos, respondemos en un máximo de 10 días hábiles desde que recibimos la solicitud. Si no alcanzamos, te avisamos el motivo antes del vencimiento y respondemos dentro de los 5 días hábiles siguientes.",
        "Reclamos: si consideras que tus datos deben corregirse, actualizarse o suprimirse, o que se incumplió la ley, envía un reclamo con tu identificación, la descripción de los hechos, la dirección donde quieres recibir respuesta y los documentos que quieras aportar. Si el reclamo está incompleto, te lo diremos dentro de los 5 días siguientes para que lo completes; si pasan 2 meses sin que lo hagas, se entenderá que desististe. Mientras lo resolvemos, los datos quedarán marcados como «reclamo en trámite». Respondemos en un máximo de 15 días hábiles; si no alcanzamos, te avisamos el motivo y respondemos dentro de los 8 días hábiles siguientes.",
        "La supresión o la revocatoria no proceden cuando exista un deber legal o contractual de conservar los datos.",
      ],
    },
    {
      heading: "17. Vigencia y cambios",
      paragraphs: [
        "Esta política rige desde el 24 de septiembre de 2026. Las bases de datos se mantienen mientras subsistan las finalidades descritas en ella. Si la cambiamos de forma sustancial, publicaremos la nueva versión en esta página con su fecha y lo comunicaremos antes de aplicarla.",
      ],
    },
  ],
};
