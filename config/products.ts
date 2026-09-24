import type { Product, ProductSlug } from "@/types";

/**
 * La línea de productos SaaS de Zentral: fuente única del Zentral Core, la
 * sección de productos de la home, el índice /productos, cada página
 * /productos/[slug], el sitemap y el JSON-LD.
 *
 * Regla de contenido: cada afirmación sale del repositorio del producto
 * (README y docs, septiembre de 2026). Lo que no está construido no se
 * promete; va en `limits` o en `status`. No hay clientes publicables, así que
 * aquí no hay logos, testimonios ni cifras de clientes.
 */
export const products: Product[] = [
  /* ------------------------------------------------------------------------ */
  /* Zentral Loyalty — ~/Desktop/Zentral_Loyalty                              */
  /* ------------------------------------------------------------------------ */
  {
    slug: "loyalty",
    name: "Zentral Loyalty",
    shortName: "Loyalty",
    sector: "Fidelización para comercios",
    tagline: "La tarjeta de sellos, ahora en el celular de tu cliente.",
    summary:
      "Tarjetas de lealtad digitales que viven en Google Wallet, sin que tu cliente instale ninguna app. Se sellan con un QR en caja o acercando el celular a un tag NFC.",
    coreFact: "Google Wallet, sin app",
    keyword: "tarjeta de lealtad digital Colombia",
    metaTitle: "Zentral Loyalty: tarjetas de lealtad digitales en Google Wallet",
    metaDescription:
      "Tarjetas de sellos digitales para cafés, restaurantes y comercios en Colombia. Viven en Google Wallet, sin app, y se sellan por QR o NFC. Solicita una demo.",
    status: {
      label: "Disponible en Google Wallet",
      note: "Apple Wallet llega cuando Apple apruebe la cuenta de desarrollador; el diseño del pase ya está listo.",
    },
    problem: {
      title: "La tarjeta de cartón se pierde, y la app nadie la instala.",
      paragraphs: [
        "La tarjeta de sellos de papel funciona porque es simple, pero se queda en otra billetera, se moja o se pierde con tres sellos puestos. Y el negocio no sabe quién la tiene, cada cuánto vuelve ni cómo avisarle de una promoción.",
        "La alternativa de siempre, una app propia del negocio, choca con lo obvio: nadie instala una app para tomarse un café. Zentral Loyalty pone la tarjeta en el wallet que el celular ya trae, junto a los boletos y las tarjetas que el cliente ya guarda ahí.",
      ],
    },
    steps: [
      {
        title: "Diseñas tu tarjeta",
        description:
          "Desde el panel subes el logo, eliges los colores, defines cuántos sellos hacen falta y cuál es el premio.",
      },
      {
        title: "El cliente se inscribe en segundos",
        description:
          "Escanea un QR en el local, deja su celular y acepta el tratamiento de datos. La tarjeta queda en su Google Wallet sin descargar nada.",
      },
      {
        title: "Sellas en caja",
        description:
          "El cajero sella desde el celular del local con su PIN, escaneando el QR de la tarjeta o digitando el código. O el cliente acerca su celular a un tag NFC en el mostrador.",
      },
      {
        title: "Entregas el premio",
        description:
          "Al completar los sellos, la tarjeta lo muestra y el cajero redime el premio en caja. El conteo vuelve a empezar.",
      },
    ],
    capabilities: [
      {
        title: "Tarjeta con tu marca",
        description:
          "Logo, colores, número de sellos y premio, editables desde el panel y visibles en la tarjeta del cliente.",
      },
      {
        title: "Sellado por QR o NFC",
        description:
          "Una pantalla de sellado para el cajero, con PIN y cámara, o tags NFC que el cliente toca con el celular. El NFC respeta el horario del local, exige una espera entre sellos y tiene tope diario.",
      },
      {
        title: "Promo de hoy",
        description:
          "Publicas la promoción del día y aparece en la tarjeta de quienes aceptaron recibir publicidad. Antes de publicarla ves a cuántos llega, y se borra sola a la hora de cierre.",
      },
      {
        title: "Avisos que no se vuelven spam",
        description:
          "Las notificaciones al wallet tienen horario tranquilo y topes por negocio, para que el cliente no termine borrando la tarjeta.",
      },
    ],
    audiences: [
      {
        who: "Cafés, panaderías y restaurantes",
        description:
          "Negocios de visita frecuente, donde el cliente vuelve cada semana y un premio a la décima compra cambia el hábito.",
      },
      {
        who: "Comercio de barrio y servicios",
        description:
          "Peluquerías, lavaderos, tiendas: cualquier negocio que ya usaría una tarjeta de sellos de papel si no se perdiera.",
      },
    ],
    trust: {
      title: "Datos del cliente, con consentimiento.",
      paragraphs: [
        "La inscripción pide la autorización de tratamiento de datos (Ley 1581 de 2012) y, por separado, la de recibir publicidad. La promo del día solo le llega a quien dio esa segunda autorización.",
        "Los cajeros no tienen cuenta en el panel: entran solo con su PIN a la pantalla de sellado, desde un dispositivo vinculado al negocio.",
      ],
    },
    limits: [
      "Apple Wallet todavía no está disponible: llega cuando Apple apruebe la cuenta de desarrollador.",
      "Por ahora cada negocio opera con un solo local.",
    ],
    questions: [
      {
        question: "¿Mi cliente tiene que descargar una app?",
        answer:
          "No. La tarjeta se guarda en Google Wallet, que viene en los celulares Android. El cliente escanea un QR, se inscribe y la guarda.",
      },
      {
        question: "¿Y los clientes que tienen iPhone?",
        answer:
          "Apple Wallet está en camino: el diseño del pase ya está resuelto y depende de que Apple apruebe la cuenta de desarrollador. Mientras tanto, la tarjeta funciona en Android con Google Wallet.",
      },
      {
        question: "¿Cómo evito que alguien se ponga sellos de más?",
        answer:
          "En caja sella el cajero con su PIN. Por NFC, cada tarjeta tiene un tiempo de espera entre sellos, solo sella dentro del horario del local y tiene un tope diario.",
      },
      {
        question: "¿Qué necesito para empezar?",
        answer:
          "Tu logo, los colores de tu marca y la regla del premio. Para sellar basta el celular del local; los tags NFC son opcionales.",
      },
    ],
    demoMessage: "Hola, quiero una demo de Zentral Loyalty",
    applicationCategory: "BusinessApplication",
    lastModified: "2026-09-24",
  },

  /* ------------------------------------------------------------------------ */
  /* Zentral RIPS — ~/Desktop/Visualizador-json                               */
  /* ------------------------------------------------------------------------ */
  {
    slug: "rips",
    name: "Zentral RIPS",
    shortName: "RIPS",
    sector: "Facturación en salud",
    tagline: "Revisa tus RIPS antes de que los revise la EPS.",
    summary:
      "Revisa, filtra y analiza los RIPS en JSON de la Resolución 948 de 2026 antes de radicarlos. Los archivos se procesan en tu navegador y no salen de tu equipo.",
    coreFact: "Resolución 948 de 2026",
    keyword: "revisar RIPS JSON Resolución 948",
    metaTitle: "Zentral RIPS: revisa tus RIPS JSON antes de radicar",
    metaDescription:
      "Revisa, filtra y analiza los RIPS JSON de la Resolución 948 de 2026 antes de radicarlos a la EPS: inconsistencias, plazo de radicación y Excel. Sin subir datos de pacientes.",
    status: {
      label: "En producción",
      note: "Publicado en rips.zentral.com.co para instituciones con cuenta aprobada.",
    },
    appUrl: "https://rips.zentral.com.co",
    problem: {
      title: "Con el JSON se perdió la tabla dinámica.",
      paragraphs: [
        "Cuando los RIPS eran archivos de texto plano, facturación los abría en Excel, filtraba y contaba. Con el paso a JSON esa revisión desapareció: el software médico genera un archivo que nadie en el área puede leer, y se radica sin saber qué lleva adentro.",
        "El costo llega después, en glosas, devoluciones y facturas que hay que anular porque vencieron. La Resolución 948 de 2026 da 22 días hábiles desde la expedición para radicar, y las notificaciones del Ministerio se van volviendo rechazos.",
      ],
    },
    steps: [
      {
        title: "Eliges la modalidad",
        description:
          "Evento, o cápita en recuperación o en promoción y mantenimiento. De eso depende contra qué se compara el lote: el tarifario, la nota técnica o la base de afiliados.",
      },
      {
        title: "Arrastras los archivos",
        description:
          "JSON sueltos, la carpeta completa del mes o un .zip sin descomprimir. Si sueltas un archivo dos veces, no se cuenta dos veces.",
      },
      {
        title: "Revisas el lote",
        description:
          "Resumen con gráficas, frecuencias por servicio y diagnóstico, el detalle de cada servicio, las facturas con su fecha límite y la lista de inconsistencias.",
      },
      {
        title: "Exportas a Excel",
        description:
          "Lo filtrado, las frecuencias, las facturas o las inconsistencias, con cifras que se pueden sumar. También el formato plano del RIPS antiguo, el que el área ya sabía revisar.",
      },
    ],
    capabilities: [
      {
        title: "Inconsistencias antes de radicar",
        description:
          "Facturas repetidas, servicios en cero, diagnósticos que no cumplen CIE-10, servicios sin CUPS o CUM, cantidades que no cuadran con el total y pacientes con datos contradictorios. Cada chequeo aplica solo donde el documento técnico exige el campo.",
      },
      {
        title: "Plazo de radicación",
        description:
          "Cuenta los 22 días hábiles de cada factura desde el XML de la factura electrónica, con los festivos colombianos, y avisa las vencidas y las que están a cinco días hábiles o menos.",
      },
      {
        title: "Contraste contra el contrato",
        description:
          "Lo facturado contra el tarifario en evento; lo prestado contra la nota técnica y la base de afiliados en cápita; la cobertura por momento del curso de vida en promoción y mantenimiento.",
      },
      {
        title: "Catálogos del Ministerio incluidos",
        description:
          "CUPS, CUM, CIE-10 y finalidad vienen cargados: los códigos aparecen con su nombre sin que nadie suba una tabla.",
      },
    ],
    audiences: [
      {
        who: "Facturación de IPS y clínicas",
        description:
          "Quien arma el cierre del mes y necesita verificar qué contiene el archivo que genera el software médico antes de radicarlo.",
      },
      {
        who: "Auditoría y gerencia",
        description:
          "Quien necesita ver qué se facturó, cuánto y a quién, sin pedirle un informe al área de sistemas.",
      },
    ],
    trust: {
      title: "Los RIPS no salen de tu equipo.",
      paragraphs: [
        "Los archivos se leen dentro del navegador de quien usa la herramienta. El servidor solo recibe las credenciales y los datos de la cuenta (razón social, NIT y correo); los datos de pacientes no pasan por él.",
        "Cada cuenta pertenece a una institución y se aprueba a mano. Al cargar, el NIT del obligado de cada archivo se compara con el de la cuenta: el que no coincide no se carga y queda señalado. Cerrar sesión descarta el lote, para que en un puesto compartido nadie vea lo que cargó el anterior.",
      ],
    },
    limits: [
      "No genera ni radica RIPS: revisa los que genera tu software médico.",
      "El lote no se guarda entre sesiones. Al volver se cargan los archivos otra vez, para revisar siempre lo que de verdad se va a radicar.",
      "Necesita conexión a internet para iniciar sesión.",
    ],
    questions: [
      {
        question: "¿Está al día con la Resolución 948 de 2026?",
        answer:
          "Sí. Sigue la Resolución 948 de 2026, que reemplazó a la 2275 de 2023, incluido el plazo de 22 días hábiles para radicar del artículo 15.",
      },
      {
        question: "¿Mis datos de pacientes quedan en un servidor?",
        answer:
          "No. Los RIPS se procesan en tu navegador y no salen de tu equipo. El servidor solo maneja quién entra y con qué NIT.",
      },
      {
        question: "¿Qué tan grande puede ser el lote?",
        answer:
          "Se midió con un lote sintético de 539 MB repartido en 22.000 archivos: cargarlo tomó unos 13 segundos, y filtrar por un código, milisegundos.",
      },
      {
        question: "¿Reemplaza la validación del Ministerio?",
        answer:
          "No. Es una revisión previa: muestra qué contiene el lote y dónde hay problemas antes de enviarlo, para que llegue a la validación con menos sorpresas.",
      },
    ],
    demoMessage: "Hola, quiero una demo de Zentral RIPS",
    applicationCategory: "BusinessApplication",
    lastModified: "2026-09-24",
  },

  /* ------------------------------------------------------------------------ */
  /* Zentral Sports — ~/Desktop/reserva_futbol                                */
  /* ------------------------------------------------------------------------ */
  {
    slug: "sports",
    name: "Zentral Sports",
    shortName: "Sports",
    sector: "Reservas de canchas",
    tagline: "Dices a qué hora quieres jugar. La ciudad se reduce a eso.",
    summary:
      "Encuentra cancha de fútbol en Barranquilla por hora: mapa de sedes, disponibilidad y una reserva que se cierra por WhatsApp con la sede.",
    coreFact: "Reserva por WhatsApp",
    keyword: "reservar cancha de fútbol Barranquilla",
    metaTitle: "Zentral Sports: reserva canchas de fútbol en Barranquilla",
    metaDescription:
      "Encuentra cancha de fútbol en Barranquilla por hora: mapa de sedes, disponibilidad y reserva por WhatsApp. Conoce la demo de Zentral Sports.",
    status: {
      label: "Versión de demostración",
      note: "La demo usa sedes, precios y horarios ficticios sobre barrios reales de Barranquilla.",
    },
    problem: {
      title: "Conseguir cancha todavía es escribirle a cada sede.",
      paragraphs: [
        "Armar el partido es lo fácil. Lo difícil es encontrar dónde: escribirle a cinco sedes, esperar respuesta, preguntar precio y hora, y descubrir que a las ocho ya no queda nada.",
        "Del otro lado, la sede responde la misma pregunta cien veces por semana, «¿tienen cancha a las 8?», y sus horas libres solo las ve quien ya tiene su número guardado.",
      ],
    },
    steps: [
      {
        title: "Eliges la hora",
        description:
          "La hora es el filtro principal. Debajo de cada hora ves cuántas sedes tienen algo libre.",
      },
      {
        title: "Comparas en el mapa",
        description:
          "Lista de sedes y mapa sincronizados, con filtros por fecha y tipo de cancha.",
      },
      {
        title: "Escoges la cancha",
        description:
          "Entras a la sede con la hora ya puesta en la primera cancha que la tiene libre.",
      },
      {
        title: "Cierras por WhatsApp",
        description:
          "La reserva se confirma con la sede por WhatsApp, con el mensaje ya armado: sede, cancha, fecha y hora.",
      },
    ],
    capabilities: [
      {
        title: "Búsqueda por hora",
        description:
          "Primero la hora a la que puede el equipo; después, dónde. Es el orden en que se arma un partido de verdad.",
      },
      {
        title: "Mapa de sedes",
        description:
          "Sedes de Barranquilla y su área metropolitana sobre el mapa, sincronizado con la lista y los filtros.",
      },
      {
        title: "Búsquedas que se comparten",
        description:
          "Fecha, hora y tipo de cancha viajan en el enlace: se manda al grupo de WhatsApp y todos ven lo mismo.",
      },
      {
        title: "Mis reservas",
        description:
          "Las reservas quedan guardadas en el navegador para volver a verlas antes del partido.",
      },
    ],
    audiences: [
      {
        who: "Jugadores",
        description:
          "Quien organiza el partido de la semana y quiere saber, sin llamar, dónde hay cancha libre a la hora que puede el equipo.",
      },
      {
        who: "Sedes deportivas",
        description:
          "Canchas que quieren mostrar sus horas libres a jugadores que están buscando, y recibir la reserva por WhatsApp ya armada en vez de contestar la misma pregunta todo el día.",
      },
    ],
    trust: {
      title: "Qué es real en la demo.",
      paragraphs: [
        "La demo recorre el camino completo de un jugador con sedes, precios, horarios y calificaciones ficticios. Los barrios y las coordenadas sí son de Barranquilla, para que el mapa se lea como el de la ciudad.",
        "La disponibilidad es simulada pero estable: los horarios no cambian al recargar, y hay más demanda en la noche y los fines de semana por la mañana, como pasa en la realidad.",
      ],
    },
    limits: [
      "Es una versión de demostración: todavía no hay sedes reales conectadas.",
      "Todavía no existe un panel para que la sede administre su disponibilidad; la reserva se cierra por WhatsApp directamente con ella.",
      "Por ahora cubre canchas de fútbol en Barranquilla y su área metropolitana.",
    ],
    questions: [
      {
        question: "¿Cómo se paga la reserva?",
        answer:
          "Zentral Sports no cobra la reserva. Se confirma por WhatsApp con la sede, y el pago se acuerda con ella como se hace hoy.",
      },
      {
        question: "Tengo una cancha, ¿cómo aparezco?",
        answer:
          "Escríbenos por WhatsApp. Te mostramos la demo con tu sede en mente y te contamos qué haría falta para que tus horas libres aparezcan.",
      },
      {
        question: "¿Solo funciona en Barranquilla?",
        answer:
          "Por ahora sí: canchas de fútbol en Barranquilla y su área metropolitana.",
      },
    ],
    demoMessage: "Hola, quiero ver la demo de Zentral Sports",
    applicationCategory: "SportsApplication",
    lastModified: "2026-09-24",
  },

  /* ------------------------------------------------------------------------ */
  /* Zentral Control — ~/Desktop/control-rotantes                             */
  /* ------------------------------------------------------------------------ */
  {
    slug: "control",
    name: "Zentral Control",
    shortName: "Control",
    sector: "Asistencia del personal",
    tagline: "Quién llegó, a qué hora y a qué sede. Sin planillas.",
    summary:
      "Entrada y salida del personal por GPS, con una geocerca por sede validada en el servidor. Tardanzas, ausencias con motivo e informe semanal en PDF.",
    coreFact: "Geocerca en el servidor",
    keyword: "control de asistencia por GPS",
    metaTitle: "Zentral Control: control de asistencia por GPS y geocerca",
    metaDescription:
      "Control de entrada y salida del personal por GPS, con geocerca por sede validada en el servidor. Tardanzas, ausencias e informe semanal en PDF. Solicita una demo.",
    problem: {
      title: "La planilla firmada no dice dónde estaba nadie.",
      paragraphs: [
        "Cuando la gente trabaja en varias sedes (rotantes en distintos hospitales, técnicos en campo, equipos por turnos), el control de asistencia termina en planillas de papel, fotos por WhatsApp o la palabra de cada quien. Nadie puede comprobar a qué hora llegó una persona ni si estaba donde debía.",
        "Y cada semana alguien arma a mano el consolidado de horas, tardanzas y ausencias: trabajo repetitivo sobre datos que no se pueden verificar.",
      ],
    },
    steps: [
      {
        title: "Defines sedes y asignaciones",
        description:
          "Cada sede con su ubicación y su radio; cada persona con la sede y el turno que le tocan.",
      },
      {
        title: "La persona marca desde su celular",
        description:
          "Entrada y salida con un toque. El servidor comprueba la ubicación contra la geocerca de la sede asignada y la marcación se confirma con una passkey.",
      },
      {
        title: "Las excepciones quedan con motivo",
        description:
          "Una llegada tarde pide el motivo, y una ausencia se reporta con el suyo. Nada queda como un vacío en la planilla.",
      },
      {
        title: "El informe llega solo",
        description:
          "Cada lunes a las 7:00 a. m. llega por correo el consolidado de la semana en PDF, uno por grupo.",
      },
    ],
    capabilities: [
      {
        title: "Geocerca validada en el servidor",
        description:
          "La distancia a la sede se calcula en el servidor, no en el celular. Una marcación fuera del radio no se acepta.",
      },
      {
        title: "Verificación con passkey",
        description:
          "Cada marcación se confirma con la passkey del celular de la persona: huella, rostro o el desbloqueo del dispositivo.",
      },
      {
        title: "Tardanzas y ausencias con motivo",
        description:
          "Las llegadas tarde y las ausencias quedan registradas con su razón, listas para revisar sin perseguir a nadie.",
      },
      {
        title: "Informe semanal y Excel",
        description:
          "Un PDF por grupo cada lunes con horas totales, tardanzas, el detalle por persona y las ausencias; y los registros exportables a Excel.",
      },
    ],
    audiences: [
      {
        who: "Hospitales y programas académicos",
        description:
          "Donde nació: residentes y médicos rotantes que marcan en el hospital de su rotación, con un informe semanal por programa.",
      },
      {
        who: "Equipos en varias sedes o en campo",
        description:
          "Técnicos, supervisores, personal de servicios o de seguridad: cualquier equipo que no marca en una sola oficina.",
      },
    ],
    trust: {
      title: "Una marcación que se puede comprobar.",
      paragraphs: [
        "El celular propone la ubicación; el servidor decide. La distancia a la sede se calcula en el servidor, y ninguna marcación se escribe directamente desde el celular.",
        "Las horas se calculan en la zona horaria de la institución (Bogotá por defecto), así que una tardanza es una tardanza aunque el servidor corra en otro huso horario.",
      ],
    },
    limits: [
      "Todavía no se integra con sistemas de nómina.",
      "Para marcar, el celular necesita el GPS activo y conexión a internet.",
    ],
    questions: [
      {
        question: "¿Qué pasa si alguien marca desde fuera de la sede?",
        answer:
          "La marcación se rechaza. El servidor compara la ubicación con la geocerca de la sede asignada y no la acepta fuera del radio.",
      },
      {
        question: "¿Sirve para algo distinto de hospitales?",
        answer:
          "Sí. El motor es el mismo para cualquier equipo que trabaje en sedes o en campo: sedes con geocerca, personas con asignaciones y un informe por grupo.",
      },
      {
        question: "¿Hay que instalar relojes o lectores en la sede?",
        answer:
          "No. Cada persona marca desde su propio celular; en la sede no hay nada que instalar.",
      },
      {
        question: "¿Qué recibe el coordinador?",
        answer:
          "Cada lunes a las 7:00 a. m., un PDF por grupo con las horas de la semana, las tardanzas, el detalle por persona y las ausencias reportadas.",
      },
    ],
    demoMessage: "Hola, quiero una demo de Zentral Control",
    applicationCategory: "BusinessApplication",
    lastModified: "2026-09-24",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function productHref(slug: ProductSlug): string {
  return `/productos/${slug}`;
}
