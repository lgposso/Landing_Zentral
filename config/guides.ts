import type { Guide } from "@/types";

/**
 * Guías en /guias: lo que alguien busca antes de estar listo para contratar.
 * Cada sección es una pregunta con la respuesta directa primero, el patrón
 * que mejor citan los buscadores y los asistentes de IA. Sin marcado FAQPage
 * y sin precios (ver PRODUCT.md).
 *
 * Vienen de los artículos de /recursos retirados en septiembre de 2026; las
 * URL viejas redirigen aquí desde next.config.ts.
 */
export const guides: Guide[] = [
  {
    slug: "agentes-ia-atencion-al-cliente",
    title: "Agentes de IA en atención al cliente: qué funciona y qué todavía no",
    metaDescription:
      "Qué tareas de atención al cliente resuelve bien un agente de IA hoy, dónde todavía falla y cómo evitar que responda mal con falsa confianza.",
    intro:
      "Los agentes de IA funcionan bien en atención al cliente para preguntas frecuentes, calificación de interesados, agendamiento y seguimiento de pedidos: conversaciones repetitivas con un patrón claro. Todavía no funcionan bien para resolver quejas complejas, negociar excepciones a una política o cualquier conversación en la que el cliente necesita a alguien con autoridad para decidir.",
    sections: [
      {
        question: "¿En qué tareas de atención al cliente funciona bien un agente de IA?",
        answer: [
          "En todo lo que sigue un patrón repetible: responder preguntas frecuentes con la información correcta, hacer las preguntas que un vendedor hace al inicio de la conversación, agendar y confirmar citas, y contar en qué va un pedido o una solicitud. Son tareas donde la respuesta correcta no depende de improvisar, sino de tener la información a la mano.",
          "Por eso funcionan especialmente bien en WhatsApp, donde llega la mayoría de esas conversaciones y donde un cliente que escribe de noche espera respuesta antes de escribirle a otro.",
        ],
      },
      {
        question: "¿Dónde todavía falla o no conviene usar un agente de IA?",
        answer: [
          "En quejas con carga emocional, donde la persona necesita sentir que la escuchó otra persona. En decisiones que requieren autorizar una excepción, como un descuento o una devolución fuera de política, porque el agente no tiene, ni debería tener, autoridad para decidir solo. Y en los casos ambiguos donde la política de la empresa no da una respuesta clara: sin esa claridad, el agente responde con la misma seguridad si acierta que si no.",
        ],
      },
      {
        question: "¿Cómo se evita que un agente responda mal con falsa confianza?",
        answer: [
          "Escribiendo desde el diseño qué puede resolver solo y en qué punto exacto le pasa el caso a una persona, y probándolo con casos reales antes de que hable con un cliente, incluidos los difíciles. Un agente bien construido reconoce cuándo no tiene la información o la autorización para responder, y lo dice en vez de inventar algo que suene razonable.",
          "Después del lanzamiento hay que seguir revisando sus conversaciones: los productos y las políticas cambian, y un agente que estaba bien configurado hace tres meses puede estar respondiendo con información vieja.",
        ],
      },
      {
        question: "¿Un agente de IA reemplaza al equipo de atención al cliente?",
        answer: [
          "No, y desconfía de quien lo prometa. Un agente bien implementado se encarga del volumen repetitivo, las preguntas que llegan cien veces con variaciones pequeñas, para que el equipo dedique su tiempo a los casos que necesitan criterio, contexto o autoridad para decidir.",
        ],
      },
    ],
    relatedServices: ["agentes-de-ia"],
    datePublished: "2026-08-20",
    lastModified: "2026-11-17",
  },
  {
    slug: "que-procesos-automatizar-primero",
    title: "Qué procesos conviene automatizar primero (y cuáles no)",
    metaDescription:
      "Criterios para elegir qué automatizar primero en tu empresa: qué procesos son buenos candidatos y cuáles conviene dejar en manos de una persona por ahora.",
    intro:
      "Conviene automatizar primero los procesos repetitivos, de alto volumen y con reglas claras, donde el criterio de una persona no cambia el resultado. No conviene automatizar primero, o quizás nunca, los que dependen del juicio caso a caso, los que cambian con frecuencia o los que ocurren tan pocas veces que el ahorro no paga la construcción.",
    sections: [
      {
        question: "¿Qué tiene un buen candidato para automatizar primero?",
        answer: [
          "Alto volumen, reglas que no cambian según quién lo haga y una relación clara entre el tiempo que consume y el valor que produce. Si varias personas hacen la misma tarea de la misma forma decenas de veces por semana, esa tarea sigue reglas más consistentes de lo que parece, y ahí la automatización rinde más rápido.",
          "Ejemplos típicos: pasar pedidos de WhatsApp o del correo al sistema, validar que un pago llegó, conciliar recaudos al cierre del día, armar el reporte semanal cruzando dos o tres sistemas, y avisar a un cliente cuando cambia el estado de su solicitud.",
        ],
      },
      {
        question: "¿Qué procesos no conviene automatizar todavía?",
        answer: [
          "Los que cambian constantemente, porque mantener la automatización al día puede costar más de lo que ahorra. Los de muy bajo volumen, donde construir el sistema cuesta más que seguir haciéndolo a mano por un tiempo. Y los que dependen del juicio de una persona con contexto que no está escrito en ningún lado, como una negociación o una decisión estratégica.",
        ],
      },
      {
        question: "¿Cómo se identifica esto en la práctica?",
        answer: [
          "Con un diagnóstico corto del proceso actual: qué pasos existen, quién los hace, con qué frecuencia y qué tan seguido aparece una excepción que rompe la regla. Un proceso con muchas excepciones no es necesariamente un mal candidato, pero sí hay que revisarlo antes: a veces conviene simplificar primero y automatizar después.",
        ],
      },
      {
        question: "¿Qué pasa si automatizo algo que no debía automatizarse?",
        answer: [
          "Terminas con un sistema frágil que se rompe cada vez que algo cambia, un costo de mantenimiento que no estaba en la cuenta y un equipo que trabaja alrededor del sistema en vez de con él. Decir que no, o que todavía no, es tan parte del trabajo como decir que sí. Un proveedor que quiere automatizarlo todo no está mirando tu operación con cuidado.",
        ],
      },
    ],
    relatedServices: ["automatizacion-de-procesos"],
    datePublished: "2026-08-20",
    lastModified: "2026-11-17",
  },
  {
    slug: "n8n-zapier-o-desarrollo-propio",
    title: "n8n, Zapier o desarrollo propio: cuál conviene según el caso",
    metaDescription:
      "Cuándo usar Zapier, cuándo n8n y cuándo construir software propio para automatizar un proceso, con criterios concretos para decidir.",
    intro:
      "Zapier conviene para conexiones simples entre herramientas populares que quieres funcionando en minutos; n8n conviene cuando la automatización tiene lógica propia y necesitas control sobre ella; y el desarrollo propio conviene cuando el proceso es tan específico que ninguna herramienta de automatización lo resuelve bien. La decisión depende de la complejidad del proceso, no de cuál herramienta es mejor en abstracto.",
    sections: [
      {
        question: "¿Cuándo conviene Zapier?",
        answer: [
          "Cuando la automatización conecta dos herramientas populares de forma directa, como un formulario con una hoja de cálculo o una venta con un aviso por correo, y la necesitas rápido, sin construir nada. Su límite aparece cuando la lógica se complica: condiciones dentro de condiciones, varios pasos con validaciones propias o mucho volumen, donde el cobro por operación empieza a pesar.",
        ],
      },
      {
        question: "¿Cuándo conviene n8n?",
        answer: [
          "Cuando el flujo necesita más que conectar A con B: validaciones, transformaciones de datos propias, varias ramas según las reglas del negocio o conexión con sistemas que no tienen un conector hecho. Como se puede instalar en un servidor propio, tampoco tiene el límite de operaciones mensuales que tienen la mayoría de plataformas, y eso importa cuando el volumen crece.",
        ],
      },
      {
        question: "¿Cuándo conviene el desarrollo de software propio?",
        answer: [
          "Cuando el proceso es parte de lo que hace distinta a tu operación y ninguna herramienta, ni siquiera n8n con lógica a la medida, lo modela bien. También cuando tu equipo necesita una pantalla propia para trabajar, no solo un flujo corriendo detrás de otros sistemas. Es la opción de mayor inversión inicial, pero la única en la que el resultado es completamente tuyo.",
        ],
      },
      {
        question: "¿Se pueden combinar las tres?",
        answer: [
          "Sí, y en la práctica es lo más común. Construimos automatizaciones sobre n8n con Python para la lógica que n8n no trae, y hay aplicaciones a la medida que usan flujos de n8n por debajo para las tareas repetitivas. La pregunta no es qué herramienta usar para todo, sino cuál le corresponde a cada parte del problema.",
        ],
      },
    ],
    relatedServices: ["automatizacion-de-procesos"],
    datePublished: "2026-08-20",
    lastModified: "2026-11-17",
  },
];

export const GUIDES_INDEX_LAST_MODIFIED = "2026-11-17";

export function guideHref(slug: string): string {
  return `/guias/${slug}`;
}
