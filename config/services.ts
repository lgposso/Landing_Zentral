import type { CustomService, CustomServiceSlug } from "@/types";
import { customDevHref } from "@/config/site";

/**
 * Formas concretas de desarrollo a la medida con página propia. No son una
 * línea aparte del mapa: van sobre la troncal azul y se enlazan desde ella,
 * para que el desarrollo a la medida siga siendo lo principal.
 *
 * Reglas de contenido (PRODUCT.md y la memoria del proyecto):
 * - Sin precios publicados: cotización cerrada después del diagnóstico y
 *   mantenimiento mensual opcional.
 * - Sin clientes, cifras ni testimonios inventados: el escenario aplicado va
 *   rotulado como ilustrativo y la prueba son los agentes de demostración y
 *   Zentral RIPS, que sí existen.
 * - Lo local es verdad: Zentral es de Barranquilla y se reúne en persona en
 *   el área metropolitana; el resto de Colombia, por videollamada.
 */

export const DEMO_AGENTS_URL = "https://agentes.zentral.com.co";

export function customServiceHref(slug: CustomServiceSlug): string {
  return `${customDevHref}/${slug}`;
}

/** Lo que se dice igual en las dos páginas sobre cómo atendemos en la ciudad. */
export const localCopy = {
  title: "En Barranquilla, en persona.",
  paragraphs: [
    "Zentral Solutions es una empresa de Barranquilla, inscrita en la Cámara de Comercio de Barranquilla. Nos reunimos contigo en tu empresa, en Barranquilla, Soledad o Puerto Colombia, para ver el proceso donde ocurre: quién lo hace, en qué sistema y dónde se pierde el tiempo.",
    "Si tu empresa está en otra ciudad de Colombia, trabajamos igual por videollamada, con las mismas entregas y el mismo diagnóstico.",
  ],
};

/**
 * Los agentes de la demostración pública (agentes.zentral.com.co). Esta lista
 * es el texto indexable: la demostración vive en un subdominio con noindex
 * para no duplicar contenido. Si cambia un agente allá, cambia aquí.
 */
export const demoAgents = [
  {
    name: "Atención al cliente por WhatsApp",
    does: "Responde a cualquier hora en qué va un pedido o una solicitud, recibe reclamos y toma cambios de datos, en el tono en que escribe la gente.",
    handsOff: "Cuando hay dinero de por medio o el cliente pide hablar con una persona.",
  },
  {
    name: "Seguimiento de pendientes",
    does: "Retoma las solicitudes que quedaron a medias: le escribe al cliente, completa los datos que faltan y reprograma según tu política.",
    handsOff: "Cuando hay mucho dinero en juego o la decisión le corresponde a alguien de tu equipo.",
  },
  {
    name: "Agenda y programación",
    does: "Arma la agenda del día con citas, turnos o visitas técnicas, y la reorganiza cuando algo cambia: un aguacero, un arroyo o alguien que no llegó.",
    handsOff: "Cualquier cambio a lo que ya está en curso lo aprueba el coordinador.",
  },
  {
    name: "Conciliación de pagos",
    does: "Cuadra cada día lo cobrado contra lo recibido por efectivo, Nequi, Daviplata, datáfono o transferencia, y explica cada diferencia.",
    handsOff: "Un faltante sin explicación lo revisa una persona. El agente no acusa a nadie.",
  },
  {
    name: "Recursos humanos",
    does: "Responde por WhatsApp las preguntas de los empleados sobre vacaciones, desprendibles e incapacidades, y hace el primer filtro de hojas de vida.",
    handsOff: "Despidos, sanciones y la decisión de contratar las toma siempre una persona.",
  },
  {
    name: "Control de datos",
    does: "Revisa todo el día los registros de la operación y avisa cuando algo no tiene lógica: estados imposibles, pendientes quietos o movimientos fuera de lo normal.",
    handsOff: "Si algo parece un error grave o un fraude, avisa con la evidencia. No bloquea ni sanciona a nadie.",
  },
];

export const customServices: CustomService[] = [
  /* ------------------------------------------------------------------------ */
  /* Agentes de IA                                                            */
  /* ------------------------------------------------------------------------ */
  {
    slug: "agentes-de-ia",
    name: "Agentes de IA",
    summary:
      "Asistentes que atienden por WhatsApp, hacen seguimiento y cuadran pagos con las reglas de tu operación, y le pasan a una persona lo que no les corresponde.",
    keyword: "agentes de IA Barranquilla",
    metaTitle: "Agentes de IA para empresas en Barranquilla | Zentral",
    metaDescription:
      "Agentes de IA para empresas en Barranquilla que atienden por WhatsApp, hacen seguimiento y cuadran pagos con tus reglas. Reunión presencial y cotización cerrada.",
    heroTitle: "Agentes de IA para empresas en Barranquilla",
    promise: "Atienden a cualquier hora y saben cuándo pasarle el caso a una persona.",
    heroSubtitle:
      "Construimos agentes de inteligencia artificial para tu operación: atención por WhatsApp, seguimiento de pendientes, agenda, conciliación de pagos y control de datos. Cada uno con reglas escritas sobre qué resuelve solo.",
    serviceType: "Desarrollo de agentes de inteligencia artificial",
    facts: [
      { label: "Plazo", value: "Hasta 6 semanas para el primer agente" },
      { label: "Dónde atiende", value: "WhatsApp, tu sitio web o tus sistemas internos" },
      { label: "Control", value: "Reglas escritas de qué resuelve solo y qué pasa a una persona" },
      { label: "Cotización", value: "Cerrada, con mantenimiento mensual opcional" },
    ],
    whatItIs: {
      title: "Un agente no es un chatbot de respuestas fijas.",
      paragraphs: [
        "Un agente de IA es un asistente que atiende, hace seguimiento o revisa información dentro de tu operación, con acceso al contexto real de tu negocio. Entiende la pregunta como la escribe la gente, decide qué información necesita, la busca en tus sistemas y responde o le pasa el caso a una persona, según reglas que definimos contigo antes de que hable con el primer cliente.",
        "La diferencia con un chatbot de reglas fijas es que no hay que anticipar cada forma en que alguien puede hacer la misma pregunta. La diferencia con dejar que un modelo de IA responda sin control es que el agente solo actúa dentro del alcance que le dimos: cuando no sabe algo o no le corresponde decidir, lo dice en vez de inventar una respuesta convincente.",
        "Lo construimos sobre modelos de OpenAI o de Anthropic, según cuál responda mejor a tu caso. Probamos antes de decidir, porque no hay un modelo correcto para todo.",
      ],
    },
    whoItsFor: [
      "Le sirve a empresas que reciben a diario conversaciones que se repiten: en qué va mi pedido, qué horario tienen, cuánto cuesta, quiero cambiar la cita. Si tu equipo pasa buena parte del día respondiendo la misma pregunta con variaciones, o si los clientes que escriben de noche reciben respuesta al día siguiente, cuando ya le escribieron a otro, ahí un agente aporta más.",
      "También le sirve a la operación interna: cuadrar pagos al cierre del día, revisar que los registros tengan sentido, responder a los empleados las preguntas de siempre o filtrar hojas de vida. Son tareas con reglas claras que hoy consumen horas de alguien que debería estar haciendo otra cosa.",
    ],
    notFor:
      "No conviene en procesos donde cada caso es distinto y depende del criterio de una persona con contexto que no está escrito en ningún lado. Ahí un agente respondería mal con la misma seguridad con la que responde bien, y eso es peor que no responder. Si es tu caso, te lo decimos en el diagnóstico.",
    howWeImplementIt: [
      "Empezamos por escribir el alcance: qué puede resolver el agente solo, qué información puede usar y en qué punto exacto le pasa la conversación a una persona. Ese documento existe antes de construir nada.",
      "Lo conectamos a lo que necesita saber, como tu catálogo, tu CRM, tu agenda o tus políticas, y lo probamos con casos reales de tu operación, incluidos los difíciles. Solo atiende a clientes cuando responde bien de forma consistente, no cuando acierta una vez.",
      "Después del lanzamiento revisamos sus conversaciones. Los productos y las políticas cambian, y un agente que estaba bien hace tres meses puede estar respondiendo con información vieja. Ese seguimiento es el mantenimiento mensual, y es opcional.",
    ],
    technologies: [
      {
        name: "OpenAI y Anthropic",
        description:
          "Los modelos de lenguaje sobre los que razona el agente. Elegimos según el caso: velocidad cuando la conversación es sencilla, seguimiento estricto de reglas cuando hay información sensible o pasos obligatorios.",
      },
      {
        name: "WhatsApp Business Platform",
        description:
          "La conexión oficial de WhatsApp para empresas, para que el agente atienda en el número de tu negocio sin trucos que pongan la línea en riesgo.",
      },
      {
        name: "Node.js, Python y PostgreSQL",
        description:
          "Para conectar el agente con tus sistemas y guardar el registro de cada conversación y cada decisión, de modo que siempre se pueda revisar qué hizo y por qué.",
      },
    ],
    deliverables: [
      {
        title: "El agente funcionando",
        description: "Atendiendo a clientes o a tu equipo, no una demostración.",
      },
      {
        title: "El alcance por escrito",
        description: "Qué resuelve solo, qué datos usa y cuándo pasa el caso a una persona.",
      },
      {
        title: "Registro de conversaciones",
        description: "Para revisar qué respondió el agente y por qué tomó cada decisión.",
      },
      {
        title: "Capacitación",
        description: "Para que tu equipo sepa retomar los casos que el agente le pasa.",
      },
    ],
    timeline:
      "Hasta 6 semanas para el primer agente, desde que se escribe su alcance hasta que atiende casos reales. Lo que más mueve el plazo es cuántos sistemas tiene que consultar y qué tan estricto debe ser el control de sus respuestas.",
    investment:
      "No publicamos precios porque cada agente es un proyecto distinto. La construcción se cotiza con un número cerrado después del diagnóstico. El mantenimiento mensual, que cubre revisar conversaciones y actualizar la información del agente, es opcional y se cotiza aparte.",
    questions: [
      {
        question: "¿Cuánto tarda tener un agente de IA funcionando?",
        answer:
          "Hasta 6 semanas para el primer agente. Las primeras dos se van en escribir el alcance y conectar los sistemas; el resto, en probarlo contra casos reales hasta que responda bien de forma consistente. Los agentes siguientes suelen tardar menos, porque reutilizan esas conexiones.",
      },
      {
        question: "¿El agente puede atender por WhatsApp?",
        answer:
          "Sí. La mayoría de los agentes que construimos atienden por WhatsApp, a través de la conexión oficial de WhatsApp para empresas, en el número de tu negocio. También pueden atender en tu sitio web o trabajar por dentro, en tus sistemas, sin hablar con clientes.",
      },
      {
        question: "¿Un agente de IA reemplaza a mi equipo?",
        answer:
          "No. Se encarga del volumen repetitivo para que tu equipo dedique su tiempo a los casos que necesitan criterio o autoridad para decidir. Cada agente tiene escrito en qué punto le pasa el caso a una persona, y le entrega la conversación con todo el contexto.",
      },
      {
        question: "¿Qué pasa con los datos de mis clientes?",
        answer:
          "Se tratan conforme a la Ley 1581 de 2012. El agente solo accede a la información que necesita para su tarea, y definimos contigo qué datos puede ver y cuánto tiempo se guardan las conversaciones. Los modelos se usan a través de su servicio para empresas (API), que por política de OpenAI y Anthropic no usa tus datos para entrenar.",
      },
      {
        question: "¿Necesito tener un equipo técnico?",
        answer:
          "No. Nosotros lo construimos y, si contratas el mantenimiento, lo mantenemos. Tu equipo solo necesita saber retomar los casos que el agente le pasa, y para eso es la capacitación.",
      },
    ],
    appliedScenario: {
      disclaimer:
        "Todavía no tenemos casos de clientes con cifras que podamos publicar. Cuando los haya, reemplazan esta sección. Mientras tanto, así se ve aplicado a una situación típica:",
      paragraphs: [
        "Una empresa de servicios en Barranquilla recibe por WhatsApp solicitudes de citas y preguntas sobre precios y horarios. Fuera del horario de oficina nadie responde, y en la mañana la mitad de esos clientes ya agendó con otro. Un agente responde de inmediato, hace las preguntas que hoy hace la recepcionista, ofrece los horarios disponibles y deja la cita agendada en el sistema.",
        "Si alguien pide un descuento o una excepción a la política de cancelación, el agente no la inventa: le dice al cliente que una persona lo contacta en la mañana y deja el caso en la bandeja del equipo con toda la conversación. Esa es la diferencia entre un agente bien delimitado y un chatbot que improvisa.",
      ],
    },
    ctaMessage: "Hola, quiero hablar sobre un agente de IA para mi empresa",
    lastModified: "2026-11-17",
  },

  /* ------------------------------------------------------------------------ */
  /* Chatbot de WhatsApp                                                      */
  /* ------------------------------------------------------------------------ */
  {
    slug: "chatbot-de-whatsapp",
    name: "Chatbot de WhatsApp",
    summary:
      "Un asistente con IA en el WhatsApp de tu negocio que responde a cualquier hora, agenda, toma pedidos y le pasa a tu equipo lo que no le corresponde.",
    keyword: "chatbot WhatsApp empresas Barranquilla",
    metaTitle: "Chatbot de WhatsApp para empresas en Barranquilla | Zentral",
    metaDescription:
      "Chatbot de WhatsApp con IA para empresas en Barranquilla: responde a cualquier hora, agenda y toma pedidos en el número de tu negocio. Línea oficial y cotización cerrada.",
    heroTitle: "Chatbot de WhatsApp para empresas en Barranquilla",
    promise: "Tus clientes escriben a las 10 de la noche y alguien les responde bien.",
    heroSubtitle:
      "Construimos chatbots con inteligencia artificial para el WhatsApp de tu negocio: responden preguntas, cuentan en qué va un pedido, agendan citas y reciben reclamos, sin menús de «marque 1» y con la conexión oficial de WhatsApp.",
    serviceType: "Desarrollo de chatbots de WhatsApp con inteligencia artificial",
    facts: [
      { label: "Plazo", value: "Hasta 6 semanas hasta que atiende clientes reales" },
      { label: "Línea", value: "El número de tu negocio, con la conexión oficial de WhatsApp" },
      { label: "Control", value: "Le pasa a tu equipo lo que no le corresponde, con la conversación completa" },
      { label: "Cotización", value: "Cerrada, con mantenimiento mensual opcional" },
    ],
    whatItIs: {
      title: "Sin menús de «marque 1». Entiende lo que le escriben.",
      paragraphs: [
        "La mayoría de los chatbots de WhatsApp son menús: el cliente tiene que escoger una opción, y si su pregunta no está en la lista, se queda sin respuesta. Los que construimos usan inteligencia artificial: entienden el mensaje como lo escribe la gente, con errores, audios transcritos y abreviaturas, y responden con la información real de tu negocio.",
        "Por dentro es un agente de IA conectado a tus sistemas: consulta tu catálogo, tus horarios, tu agenda o el estado de un pedido antes de responder. Por eso puede decir «tu pedido sale hoy a las 3» en vez de «un asesor te contactará».",
        "Y tiene límites escritos. Cuando alguien pide un descuento, una excepción o hablar con una persona, el chatbot no improvisa: avisa al cliente que alguien lo contacta y le deja la conversación completa a tu equipo.",
      ],
    },
    whoItsFor: [
      "Le sirve a empresas que reciben buena parte de sus clientes por WhatsApp: tiendas, distribuidoras, clínicas y consultorios, academias, inmobiliarias, talleres y empresas de servicios. Si tu equipo responde cien veces al día las mismas preguntas, o si los mensajes que llegan de noche se responden al día siguiente, cuando el cliente ya le compró a otro, ahí un chatbot se paga solo.",
      "También le sirve a quien ya probó un chatbot de menús y los clientes terminan escribiendo «asesor» para saltárselo. Ese es el síntoma de un bot que no entiende.",
    ],
    notFor:
      "No conviene si casi todas tus conversaciones son negociaciones distintas cada vez, o si recibes tan pocos mensajes que tu equipo los responde sin esfuerzo. Tampoco reemplaza una mala política de servicio: si no está claro qué se le puede prometer a un cliente, primero se define eso.",
    howWeImplementIt: [
      "Empezamos por leer conversaciones reales de tu WhatsApp, con tu permiso: qué preguntan, cómo lo preguntan y qué respuestas funcionan. De ahí sale el alcance escrito: qué responde el chatbot, con qué información y en qué momento le pasa el caso a una persona.",
      "Conectamos el número de tu negocio a la plataforma oficial de WhatsApp para empresas, y el chatbot a tu catálogo, tu agenda o tu sistema de pedidos. Lo probamos con conversaciones reales, incluidas las difíciles, antes de que atienda a un cliente.",
      "Después del lanzamiento revisamos sus conversaciones: qué preguntas nuevas aparecen, dónde se equivocó, qué hay que actualizar cuando cambian precios o políticas. Ese seguimiento es el mantenimiento mensual, y es opcional.",
    ],
    technologies: [
      {
        name: "WhatsApp Business Platform",
        description:
          "La conexión oficial de WhatsApp para empresas. El chatbot atiende en el número de tu negocio sin aplicaciones no autorizadas que pongan la línea en riesgo de bloqueo.",
      },
      {
        name: "OpenAI y Anthropic",
        description:
          "Los modelos de lenguaje con los que el chatbot entiende y redacta. Elegimos según el caso y los usamos por su servicio para empresas, que no entrena con tus conversaciones.",
      },
      {
        name: "Node.js y PostgreSQL",
        description:
          "Para conectar el chatbot con tus sistemas y guardar cada conversación, de modo que tu equipo pueda revisar qué se respondió y retomar cualquier caso.",
      },
    ],
    deliverables: [
      {
        title: "El chatbot en tu número",
        description: "Atendiendo clientes reales en el WhatsApp de tu negocio.",
      },
      {
        title: "Bandeja para tu equipo",
        description: "Donde llegan los casos que el chatbot pasa, con la conversación completa.",
      },
      {
        title: "El alcance por escrito",
        description: "Qué responde, con qué información y cuándo le pasa el caso a una persona.",
      },
      {
        title: "Capacitación",
        description: "Para que tu equipo sepa retomar conversaciones y pedir cambios.",
      },
    ],
    timeline:
      "Hasta 6 semanas desde que leemos tus conversaciones hasta que el chatbot atiende clientes reales. Una parte depende de Meta: aprobar el número en la plataforma oficial de WhatsApp suele tomar unos días.",
    investment:
      "No publicamos precios porque cada chatbot es distinto. La construcción se cotiza con un número cerrado después del diagnóstico. Aparte van el mantenimiento mensual, que es opcional, y el costo de las conversaciones que cobra Meta por la plataforma oficial de WhatsApp, que se paga directamente a ellos.",
    questions: [
      {
        question: "¿El chatbot funciona en el número de WhatsApp que ya tengo?",
        answer:
          "Sí, en la mayoría de los casos. El número se pasa a la plataforma oficial de WhatsApp para empresas. Hay un detalle: un número en la plataforma oficial ya no se puede usar en la aplicación normal de WhatsApp Business del celular, así que tu equipo responde desde la bandeja que te entregamos. Si prefieres no mover tu número, se puede usar uno nuevo.",
      },
      {
        question: "¿En qué se diferencia de un chatbot de menús?",
        answer:
          "Un chatbot de menús obliga al cliente a escoger opciones y no entiende nada fuera de la lista. Uno con inteligencia artificial entiende lo que la persona escribe, consulta la información real de tu negocio y responde como lo haría alguien de tu equipo, dentro de las reglas que le dimos.",
      },
      {
        question: "¿Qué pasa cuando el cliente quiere hablar con una persona?",
        answer:
          "El chatbot le avisa que alguien de tu equipo lo contacta y deja el caso en la bandeja con la conversación completa, para que nadie tenga que volver a preguntar lo mismo. También pasa el caso solo cuando hay dinero de por medio o una excepción a la política.",
      },
      {
        question: "¿Cuánto cuesta un chatbot de WhatsApp?",
        answer:
          "Depende de qué tiene que hacer y con cuántos sistemas se conecta; por eso cotizamos un número cerrado después del diagnóstico, sin precios publicados. Aparte, Meta cobra por las conversaciones en la plataforma oficial de WhatsApp según su tarifa para Colombia, y ese pago va directo a ellos.",
      },
      {
        question: "¿Qué pasa con los datos de mis clientes?",
        answer:
          "Se tratan conforme a la Ley 1581 de 2012. Definimos contigo qué información puede consultar el chatbot y cuánto tiempo se guardan las conversaciones, y los modelos de IA se usan por su servicio para empresas, que no entrena con tus datos.",
      },
    ],
    appliedScenario: {
      disclaimer:
        "Todavía no tenemos casos de clientes con cifras que podamos publicar. Cuando los haya, reemplazan esta sección. Mientras tanto, así se ve aplicado a una situación típica:",
      paragraphs: [
        "Una tienda de electrodomésticos en Barranquilla recibe por WhatsApp preguntas de precio, disponibilidad y estado de pedidos, sobre todo de noche y los domingos. Un chatbot responde con el inventario real, cuenta en qué va cada pedido buscándolo por el número desde el que escriben, y toma los datos de entrega de los clientes que quieren comprar.",
        "Cuando alguien escribe que la licuadora le llegó dañada y quiere su plata, el chatbot no promete nada: guarda las fotos, abre el caso y le avisa al cliente que una persona le responde ese mismo día. El equipo llega en la mañana con los casos ordenados y la conversación completa.",
      ],
    },
    ctaMessage: "Hola, quiero un chatbot de WhatsApp para mi empresa",
    lastModified: "2026-11-17",
  },

  /* ------------------------------------------------------------------------ */
  /* Automatización de procesos                                               */
  /* ------------------------------------------------------------------------ */
  {
    slug: "automatizacion-de-procesos",
    name: "Automatización de procesos",
    summary:
      "Flujos que hacen solos las tareas repetitivas: copiar datos entre sistemas, armar el reporte del lunes, avisar cuando algo cambia.",
    keyword: "automatizaciones Barranquilla",
    metaTitle: "Automatización de procesos en Barranquilla | Zentral",
    metaDescription:
      "Automatización de procesos para empresas en Barranquilla: flujos con n8n y Python que hacen solas las tareas repetitivas. Hasta 5 semanas, con cotización cerrada.",
    heroTitle: "Automatización de procesos para empresas en Barranquilla",
    promise: "Las tareas que tu equipo repite cada semana, hechas solas y sin errores de copia.",
    heroSubtitle:
      "Diseñamos y construimos automatizaciones para tu operación: pasar datos entre sistemas, validar pedidos, armar reportes y avisar a tiempo, con n8n y Python, en hasta 5 semanas.",
    serviceType: "Automatización de procesos empresariales",
    facts: [
      { label: "Plazo", value: "Hasta 5 semanas por proceso" },
      { label: "Con qué", value: "n8n y Python, con el flujo documentado" },
      { label: "Arranque", value: "En paralelo con el proceso manual, sin interrumpir la operación" },
      { label: "Cotización", value: "Cerrada, con mantenimiento mensual opcional" },
    ],
    whatItIs: {
      title: "Lo que se hace igual cada vez, que lo haga un sistema.",
      paragraphs: [
        "Automatizar un proceso es reemplazar las tareas manuales y repetitivas por flujos que se ejecutan solos: validar un dato, pasar información de un sistema a otro, generar un reporte, enviar un aviso. No es una herramienta que compras y configuras tú: es un sistema que diseñamos y construimos a la medida del proceso real de tu empresa.",
        "No partimos de una plantilla. Empezamos por entender qué hace hoy tu equipo a mano, dónde se pierde el tiempo y qué parte de ese trabajo puede hacerse sola sin perder control. No todo proceso manual vale la pena automatizarlo, y decirlo también es parte del trabajo.",
        "La diferencia con comprar una herramienta de automatización por tu cuenta es que no tienes que aprender a configurarla ni arreglarla cuando algo cambia en uno de tus sistemas. Tu equipo usa el resultado; nosotros respondemos por lo que hay detrás.",
      ],
    },
    whoItsFor: [
      "Le sirve a empresas donde una o varias personas dedican horas cada semana a tareas que no necesitan criterio: copiar datos de un formulario a una hoja de cálculo, revisar si un pago llegó, armar el mismo reporte cada lunes, avisar por WhatsApp cuando cambia un estado.",
      "La señal más clara: si sientes que tu equipo pierde tiempo en tareas que deberían ser instantáneas y hoy son manuales, ese es el tipo de proceso que automatizamos primero. No necesitas un equipo técnico ni saber qué herramienta usar; eso lo definimos en el diagnóstico.",
    ],
    notFor:
      "No conviene automatizar todavía un proceso que cambia cada mes, uno que ocurre tan pocas veces que construir el flujo cuesta más que seguir haciéndolo a mano, o uno que depende del juicio de una persona en cada caso. A veces lo correcto es simplificar el proceso primero y automatizar después.",
    howWeImplementIt: [
      "Empezamos por un diagnóstico corto del proceso actual: qué pasos tiene, quién los hace, qué sistemas toca y dónde ocurren los errores. De ahí sale qué automatizar primero y qué no vale la pena tocar todavía.",
      "Diseñamos el flujo con sus reglas, sus validaciones y los casos en que debe detenerse y avisar a una persona en vez de seguir solo. Lo probamos con casos reales de tu operación y lo ponemos a correr en paralelo con el proceso manual antes de apagarlo, para que el cambio no frene a nadie.",
      "Una vez funcionando, alguien tiene que vigilarlo: un campo que se renombra en tu CRM o una API que cambia su respuesta puede dejar de funcionar sin que nadie se entere a tiempo. Ese seguimiento es el mantenimiento mensual, y es opcional.",
    ],
    technologies: [
      {
        name: "n8n",
        description:
          "El motor que orquesta el flujo: qué lo dispara, qué sistemas conecta y qué reglas aplica en cada paso. Queda documentado visualmente, así que no es una caja negra que solo entiende tu proveedor.",
      },
      {
        name: "Python",
        description:
          "Para lo que n8n no trae de fábrica: transformaciones de datos propias de tu operación, validaciones complejas y cálculos específicos del proceso.",
      },
      {
        name: "APIs y WhatsApp",
        description:
          "Para conectar lo que ya usas, como facturación electrónica, CRM, hojas de cálculo, correo y WhatsApp, sin cambiar de sistema.",
      },
    ],
    deliverables: [
      {
        title: "El flujo funcionando",
        description: "Corriendo sobre tus sistemas reales, no en un entorno de prueba.",
      },
      {
        title: "Documentación",
        description: "El flujo explicado paso a paso, sin depender de una sola persona.",
      },
      {
        title: "Avisos de falla",
        description: "Si algo deja de funcionar, alguien se entera ese mismo día.",
      },
      {
        title: "Capacitación",
        description: "Para que tu equipo entienda qué hace el sistema y qué hacer cuando avisa.",
      },
    ],
    timeline:
      "Hasta 5 semanas por proceso, desde el diagnóstico hasta el flujo funcionando. Depende sobre todo de cuántos sistemas hay que conectar y de si esos sistemas tienen una forma limpia de comunicarse.",
    investment:
      "No publicamos precios porque cada proceso es distinto. La construcción se cotiza con un número cerrado después del diagnóstico. El mantenimiento mensual, que cubre vigilar el flujo y ajustarlo cuando cambia uno de tus sistemas, es opcional y se cotiza aparte.",
    questions: [
      {
        question: "¿Qué procesos conviene automatizar primero?",
        answer:
          "Los repetitivos, de alto volumen y con reglas claras, donde el resultado no cambia según quién lo haga: pasar datos entre sistemas, validar pedidos, conciliar pagos, armar reportes periódicos. Los que dependen del criterio de una persona o cambian cada mes conviene dejarlos para después.",
      },
      {
        question: "¿Cuánto tarda automatizar un proceso?",
        answer:
          "Hasta 5 semanas por proceso, incluido el tiempo en que el flujo corre en paralelo con el proceso manual. Un flujo que conecta dos sistemas con buenas APIs puede estar listo antes; uno que toca cinco sistemas y tiene muchas excepciones toma el plazo completo.",
      },
      {
        question: "¿Por qué n8n y no Zapier?",
        answer:
          "Zapier es bueno para conexiones simples entre herramientas populares. Cuando el flujo tiene validaciones, varias ramas o mucho volumen, n8n da más control, no cobra por cada operación y puede instalarse en un servidor propio. Cuando ninguna de las dos alcanza, escribimos la lógica en Python o construimos una aplicación a la medida.",
      },
      {
        question: "¿Qué pasa si cambia uno de mis sistemas?",
        answer:
          "Es la causa más común de que una automatización deje de funcionar. Por eso cada flujo tiene avisos de falla, y el mantenimiento mensual incluye ajustarlo cuando cambia un campo, un formulario o una API. Sin mantenimiento, el flujo es tuyo y está documentado para que otra persona pueda arreglarlo.",
      },
      {
        question: "¿La automatización trabaja sin supervisión?",
        answer:
          "Sí para los casos normales, y no para los raros. Cuando llega un dato incompleto o algo que no cuadra, el flujo no lo descarta ni lo adivina: lo marca y le avisa a una persona. La automatización reemplaza el trabajo repetitivo, no el criterio.",
      },
    ],
    appliedScenario: {
      disclaimer:
        "Todavía no tenemos casos de clientes con cifras que podamos publicar. Cuando los haya, reemplazan esta sección. Mientras tanto, así se ve aplicado a un proceso típico:",
      paragraphs: [
        "Una distribuidora en Barranquilla recibe pedidos por WhatsApp, por correo y por un formulario web, y alguien los copia uno por uno a una hoja de cálculo para que despachos los procese. Un flujo en n8n captura cada pedido apenas llega, revisa que los datos estén completos, lo registra en el sistema correcto y le avisa a despachos, sin que nadie copie nada.",
        "Si un pedido llega incompleto o con un dato que no cuadra, el flujo lo marca y avisa a una persona para que lo revise. Y el reporte que alguien armaba cada lunes cruzando tres sistemas queda listo antes de que empiece la semana: no cambia lo que dice, cambia quién lo arma.",
      ],
    },
    ctaMessage: "Hola, quiero automatizar un proceso de mi empresa",
    lastModified: "2026-11-17",
  },
];

export function getCustomService(slug: CustomServiceSlug): CustomService {
  const service = customServices.find((s) => s.slug === slug);
  if (!service) throw new Error(`Servicio desconocido: ${slug}`);
  return service;
}
