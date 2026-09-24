# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A zentral.com.co llegan dos tipos de comprador, ambos en Colombia (primero Barranquilla y la Costa Caribe, luego el resto del país y Latinoamérica):

- **Empresas que necesitan software construido para ellas**: gerentes generales o de operaciones de pymes y medianas cuyo proceso no cabe en una herramienta de mercado. Vienen a juzgar si Zentral puede diseñar, construir y mantener una aplicación para su operación.
- **Compradores de uno de los productos SaaS de Zentral**, cada uno desde un vertical concreto:
  - negocios pequeños (cafés, restaurantes, comercio) que quieren un programa de lealtad → Zentral Loyalty;
  - personal de facturación de prestadores de salud (IPS, clínicas) que tiene que revisar los RIPS JSON antes de radicarlos a la EPS → Zentral RIPS;
  - dueños de canchas de fútbol que quieren reservas, y los jugadores que las reservan (Barranquilla) → Zentral Sports;
  - organizaciones que necesitan saber cuándo llega y se va su gente de una sede (primero hospitales con médicos rotantes, después cualquier sector con personal en campo o en varias sedes) → Zentral Control.

La tarea en el sitio: entender en segundos qué hace Zentral, encontrar el producto (o el servicio) que le corresponde y abrir una conversación por WhatsApp.

## Product Purpose

Zentral Solutions S.A.S. (NIT 902.064.009-2, Barranquilla) es una empresa de ingeniería de software. Su negocio ahora se apoya en dos patas:

1. **Desarrollo de software a la medida**: aplicaciones, plataformas, herramientas internas y portales construidos para el proceso del cliente. El código fuente es del cliente.
2. **Una línea de productos SaaS verticales** con la marca Zentral: Loyalty, RIPS, Sports y Control.

Automatización de procesos, agentes IA, integración de sistemas, integración CRM–ERP y dashboards se siguen ofreciendo, pero son secundarios y ya no son el posicionamiento principal.

Éxito del sitio: un visitante de uno de los verticales llega al producto correcto y pide una demo; una empresa con un proceso propio pide una conversación sobre desarrollo a la medida.

## Positioning

Zentral no es una agencia ni una software factory tradicional. Construye productos verticales propios para problemas colombianos concretos (RIPS bajo la Resolución 948 de 2026, lealtad en Google Wallet sin app, asistencia validada por GPS y geocerca) y usa esa misma ingeniería para construir software a la medida para otras empresas. Los productos son la prueba de que el equipo entrega software real; el trabajo a la medida es donde esa capacidad se contrata.

## Operating Context

- El contacto ocurre sobre todo por **WhatsApp** (+57 333 762 8306); también hay un formulario que envía correo vía Resend, y el correo contacto@zentral.com.co.
- El CTA principal de cada producto es **"Solicitar demo"** por WhatsApp, con un mensaje prellenado que nombra el producto. Las páginas de producto no muestran precios.
- URLs indexadas que hay que conservar: `/servicios/automatizacion-de-procesos`, `/servicios/agentes-ia`, `/servicios/integracion-de-sistemas`, `/servicios/software-a-la-medida`, `/servicios/dashboards`, `/servicios/integracion-crm-erp`, `/recursos/*`, `/privacidad`.
- URLs nuevas de producto: `/productos/loyalty`, `/productos/rips`, `/productos/sports`, `/productos/control`.

## Capabilities and Constraints

Hechos confirmados por producto (tomados del repositorio de cada uno, septiembre de 2026). Solo esto se puede afirmar:

- **Zentral Loyalty**: SaaS multi-tenant de tarjetas de lealtad digitales que viven en el wallet del celular del cliente, sin instalar ninguna app. **Google Wallet está en vivo**; Apple Wallet está pendiente (decir "próximamente" o no mencionarlo). El negocio edita su tarjeta (logo, colores, número de sellos, premio). Los clientes se inscriben en una página pública con celular colombiano y consentimiento de habeas data. Los sellos se ponen por QR desde una PWA de cajero con PIN, o **acercando el celular a un tag NFC**. Los premios se redimen en caja. Las notificaciones al wallet tienen límites anti-spam (horario tranquilo, topes por negocio). Existe la función "promo de hoy": antes de publicarla se ve a cuántos clientes llega, solo llega a quien aceptó recibir publicidad (Ley 1581) y se borra sola a la hora de cierre del local.
- **Zentral RIPS**: revisa, filtra y analiza los **archivos RIPS en JSON de la Resolución 948 de 2026** (que reemplazó a la 2275 de 2023) antes de radicarlos a la EPS. Acepta JSON sueltos, carpetas completas y archivos .zip. Cuenta cuántas veces se facturó cada servicio, detecta inconsistencias y exporta a Excel. **Los archivos se procesan en el navegador y nunca salen del equipo**; el servidor solo maneja el ingreso y el NIT. Las cuentas están atadas a un NIT, y se marcan los archivos cuyo obligado no coincide con ese NIT. Avisa el plazo de radicación: 22 días hábiles desde la expedición (art. 15), contados con los festivos colombianos a partir del XML de la factura electrónica. Contrasta el lote contra el contrato según la modalidad (tarifario en evento; nota técnica y base de afiliados en cápita). Trae cargados los catálogos CUPS, CUM, CIE-10 y finalidad. Está publicada en https://rips.zentral.com.co para instituciones con cuenta aprobada. Rendimiento medido en un lote sintético: 539 MB en 22.000 archivos cargados en 12,9 s. **No** genera ni radica RIPS.
- **Zentral Sports**: encontrar y apartar canchas de fútbol en Barranquilla y su área metropolitana. Búsqueda por hora, mapa de sedes, disponibilidad por hora y reserva que se cierra por WhatsApp. La versión actual es una **demo con sedes, precios y calificaciones ficticias**. Se presenta con dos caras (los jugadores reservan; las sedes reciben reservas), pero **un panel de gestión para sedes todavía no existe** y no se puede afirmar.
- **Zentral Control**: el personal marca entrada y salida por **GPS con una geocerca por sede, validada en el servidor** (no se confía en el celular), con verificación por passkey. Maneja asignaciones o turnos por sede, tardanzas y ausencias con motivo, un **informe semanal automático en PDF** por grupo y exportación a Excel. Nació con médicos rotantes en hospitales; se vende de forma más amplia como control de asistencia de personal en varias sedes o en campo. No hay integraciones con nómina.
- **Desarrollo a la medida**: stack Next.js/React/TypeScript, Node.js, Python y PostgreSQL, desplegado en Vercel, AWS o Docker. Ciclos cortos de entrega, alcance cerrado antes del código, el código es del cliente, documentación y capacitación incluidas. Los proyectos toman entre 8 y 16 semanas según el alcance y se cotizan después de un diagnóstico.

Técnico: Next.js 15 App Router, Tailwind CSS v4 (todo el movimiento es CSS), lucide-react, Vercel Analytics, formulario de contacto con Resend y rate limiting, generación estática para las rutas de contenido. Solo español (es-CO).

## Brand Commitments

- Nombre: **Zentral** (razón social Zentral Solutions). Los productos siguen el patrón "Zentral + sustantivo": Zentral Loyalty, Zentral RIPS, Zentral Sports, Zentral Control.
- **El logo es fijo**: el isotipo Z (`public/isotipo-zentral2.svg`, `public/isotipo-zentral.png`) y el wordmark (`public/logo-zentral.svg`, `public/logo-zentral.png`).
- **El azul de marca #2563EB es fijo** como color de marca. Todo lo demás del sistema visual se puede reemplazar.
- **El sitio es siempre oscuro** (decisión del usuario, septiembre de 2026): fondo casi negro, sin modo claro.
- **Cada producto se identifica con el isotipo de Zentral teñido en su color de línea**, no con viñetas de letra (decisión del usuario, septiembre de 2026).
- El **"Zentral Core"** del hero (el isotipo en el centro, conectado a los cuatro productos) es el concepto firma y debe enlazar a la página de cada producto.
- Voz: hablar del beneficio para el negocio en español claro. Evitar "revolucionario", "IA mágica", "innovación disruptiva" y cualquier promesa exagerada. Decir con honestidad los límites (lo que un producto todavía no hace) es parte de la voz.

## Evidence on Hand

- **No hay clientes, logos, testimonios, métricas ni casos publicables.** No se puede inventar nada de eso. Las demostraciones de producto usan datos de ejemplo, rotulados como tales.
- Existen los repositorios reales de los cuatro productos; se pueden tomar capturas si sus servidores de desarrollo corren, y cualquier dato que se muestre debe ser de ejemplo.
- Datos de la empresa: NIT 902.064.009-2, fundada en 2026, Barranquilla, página de empresa en LinkedIn.
- Seis páginas de servicio largas y cinco artículos de recursos (en `config/content.ts`) con sustancia real del negocio (plazos y precios mínimos de los servicios de automatización).

## Product Principles

- Mostrar el producto funcionando, no adjetivos sobre él.
- Decir lo que existe hoy; rotular lo que viene y lo que es dato de ejemplo.
- A una conversación de distancia: cada página termina en un camino claro a WhatsApp.
- Credibilidad de ingeniería por encima del brillo de marketing: detalles que un competidor no puede copiar y pegar (resoluciones, reglas de validación, mecánica de privacidad).
- Los productos y el trabajo a la medida se refuerzan entre sí; ninguno debe leerse como un agregado de último momento.

## Accessibility & Inclusion

WCAG 2.2 AA como piso: foco visible en todo elemento interactivo, skip link, menús operables con teclado, respeto de `prefers-reduced-motion` y objetivos táctiles de 44px o más. Muchos visitantes llegan en el celular desde enlaces de WhatsApp.
