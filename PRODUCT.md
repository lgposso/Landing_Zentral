# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A zentral.com.co llegan dos tipos de comprador, ambos en Colombia (primero Barranquilla y la Costa Caribe, luego el resto del país y Latinoamérica):

- **Empresas que necesitan software construido para ellas** (el comprador principal): gerentes generales o de operaciones de empresas medianas y pymes cuyo proceso no cabe en una herramienta de mercado. Vienen a juzgar si Zentral puede diseñar, construir y mantener una aplicación para su operación.
- **Compradores de uno de los dos productos propios**, cada uno desde un vertical concreto:
  - personal de facturación de prestadores de salud (IPS, clínicas) que tiene que revisar los RIPS JSON antes de radicarlos a la EPS → Zentral RIPS;
  - negocios pequeños (cafés, restaurantes, comercio) que quieren un programa de lealtad → Zentral Loyalty.

La tarea en el sitio: entender en segundos qué hace Zentral, juzgar si puede construir lo que la empresa necesita (o encontrar el producto que le corresponde) y abrir una conversación por WhatsApp.

## Product Purpose

Zentral Solutions S.A.S. (NIT 902.064.009-2, Barranquilla) es una empresa de software premium. Desde septiembre de 2026 el sitio se enfoca en tres líneas, en este orden:

1. **Desarrollo de software a la medida** (lo principal): aplicaciones, plataformas, herramientas internas y portales construidos para el proceso del cliente. El código fuente es del cliente.
2. **Zentral RIPS** y 3. **Zentral Loyalty**: los productos propios, que Zentral construye y opera.

Zentral Sports, Zentral Control y los servicios de automatización, agentes IA, integraciones y dashboards salieron del sitio. Sus URLs viejas redirigen de forma permanente (ver `next.config.ts`).

Éxito del sitio: una empresa con un proceso propio pide una conversación sobre desarrollo a la medida; un visitante de uno de los dos verticales llega a su producto y pide una demo.

## Positioning

Zentral es una empresa de software premium: lo que vende primero es desarrollo a la medida, que se decide en una conversación y justifica un precio alto. No es una agencia ni una software factory tradicional, porque además construye y opera productos propios para problemas colombianos concretos (RIPS bajo la Resolución 948 de 2026, lealtad en Google Wallet sin app). Esos productos, secundarios en el sitio a propósito, son la prueba de que el equipo entrega software real que ya funciona; el trabajo a la medida es donde esa capacidad se contrata. Titular de la home: «Software a la medida, construido como producto.»

## Operating Context

- El contacto ocurre sobre todo por **WhatsApp** (+57 333 762 8306); también hay un formulario que envía correo vía Resend, y el correo contacto@zentral.com.co.
- El CTA principal de cada producto es **"Solicitar demo"** por WhatsApp, con un mensaje prellenado que nombra el producto. Las páginas de producto no muestran precios.
- URLs vivas: `/`, `/desarrollo-a-la-medida`, `/productos`, `/productos/rips`, `/productos/loyalty`, `/privacidad`.
- URLs retiradas con redirección permanente: `/servicios/*` y `/recursos/*` → `/desarrollo-a-la-medida`; `/productos/sports` y `/productos/control` → `/productos`.

## Capabilities and Constraints

Hechos confirmados por producto (tomados del repositorio de cada uno, septiembre de 2026). Solo esto se puede afirmar:

- **Zentral Loyalty**: SaaS multi-tenant de tarjetas de lealtad digitales que viven en el wallet del celular del cliente, sin instalar ninguna app. **Google Wallet está en vivo**; Apple Wallet está pendiente (decir "próximamente" o no mencionarlo). El negocio edita su tarjeta (logo, colores, número de sellos, premio). Los clientes se inscriben en una página pública con celular colombiano y consentimiento de habeas data. Los sellos se ponen por QR desde una PWA de cajero con PIN, o **acercando el celular a un tag NFC**. Los premios se redimen en caja. Las notificaciones al wallet tienen límites anti-spam (horario tranquilo, topes por negocio). Existe la función "promo de hoy": antes de publicarla se ve a cuántos clientes llega, solo llega a quien aceptó recibir publicidad (Ley 1581) y se borra sola a la hora de cierre del local.
- **Zentral RIPS**: revisa, filtra y analiza los **archivos RIPS en JSON de la Resolución 948 de 2026** (que reemplazó a la 2275 de 2023) antes de radicarlos a la EPS. Acepta JSON sueltos, carpetas completas y archivos .zip. Cuenta cuántas veces se facturó cada servicio, detecta inconsistencias y exporta a Excel. **Los archivos se procesan en el navegador y nunca salen del equipo**; el servidor solo maneja el ingreso y el NIT. Las cuentas están atadas a un NIT, y se marcan los archivos cuyo obligado no coincide con ese NIT. Avisa el plazo de radicación: 22 días hábiles desde la expedición (art. 15), contados con los festivos colombianos a partir del XML de la factura electrónica. Contrasta el lote contra el contrato según la modalidad (tarifario en evento; nota técnica y base de afiliados en cápita). Trae cargados los catálogos CUPS, CUM, CIE-10 y finalidad. Está publicada en https://rips.zentral.com.co para instituciones con cuenta aprobada. Rendimiento medido en un lote sintético: 539 MB en 22.000 archivos cargados en 12,9 s. **No** genera ni radica RIPS.
- **Desarrollo a la medida**: stack Next.js/React/TypeScript, Node.js, Python y PostgreSQL, desplegado en Vercel, AWS o Docker. Ciclos cortos de entrega, alcance cerrado antes del código, el código es del cliente, documentación y capacitación incluidas. Los proyectos toman entre 8 y 16 semanas según el alcance y se cotizan después de un diagnóstico.

Técnico: Next.js 15 App Router, Tailwind CSS v4 (todo el movimiento es CSS), lucide-react, Vercel Analytics, formulario de contacto con Resend y rate limiting, generación estática para las rutas de contenido. Solo español (es-CO).

## Brand Commitments

- Nombre: **Zentral** (razón social Zentral Solutions). Los productos siguen el patrón "Zentral + sustantivo": Zentral RIPS, Zentral Loyalty.
- **El logo es fijo**: el isotipo Z (`public/isotipo-zentral2.svg`, `public/isotipo-zentral.png`) y el wordmark (`public/logo-zentral.svg`, `public/logo-zentral.png`).
- **El azul de marca #2563EB es fijo** como color de marca. Todo lo demás del sistema visual se puede reemplazar.
- **El sitio es siempre oscuro** (decisión del usuario, septiembre de 2026): fondo casi negro, sin modo claro.
- **Cada producto se identifica con el isotipo de Zentral teñido en su color de línea**, no con viñetas de letra (decisión del usuario, septiembre de 2026).
- El **"Zentral Core"** del hero es el concepto firma: el isotipo como intercambiador, del que sale la **troncal azul del desarrollo a la medida** (sólida y más gruesa, lo principal) y los **ramales de RIPS y Loyalty**. Cada terminal enlaza a su página.
- Voz: hablar del beneficio para el negocio en español claro. Evitar "revolucionario", "IA mágica", "innovación disruptiva" y cualquier promesa exagerada. Decir con honestidad los límites (lo que un producto todavía no hace) es parte de la voz. No usar «en producción»: fuera del oficio se lee como «en proceso»; decir «disponible» o «ya funciona».

## Evidence on Hand

- **No hay clientes, logos, testimonios, métricas ni casos publicables.** No se puede inventar nada de eso. Las demostraciones de producto usan datos de ejemplo, rotulados como tales.
- Existen los repositorios reales de los dos productos; se pueden tomar capturas si sus servidores de desarrollo corren, y cualquier dato que se muestre debe ser de ejemplo.
- Datos de la empresa: NIT 902.064.009-2, fundada en 2026, Barranquilla. Hay página de empresa en LinkedIn, pero el sitio no la enlaza (decisión del usuario, 2026-09-28).
- La página `/desarrollo-a-la-medida` (en `config/content.ts` → `customDevPage`) con sustancia real del negocio: stack, entregables, plazo e inversión. Su escenario aplicado va rotulado como ilustrativo.

## Product Principles

- Mostrar el producto funcionando, no adjetivos sobre él.
- Decir lo que existe hoy; rotular lo que viene y lo que es dato de ejemplo.
- A una conversación de distancia: cada página termina en un camino claro a WhatsApp.
- Credibilidad de ingeniería por encima del brillo de marketing: detalles que un competidor no puede copiar y pegar (resoluciones, reglas de validación, mecánica de privacidad).
- El desarrollo a la medida va primero; los productos propios lo respaldan como prueba y cada uno conserva su página para su propio comprador.

## Accessibility & Inclusion

WCAG 2.2 AA como piso: foco visible en todo elemento interactivo, skip link, menús operables con teclado, respeto de `prefers-reduced-motion` y objetivos táctiles de 44px o más. Muchos visitantes llegan en el celular desde enlaces de WhatsApp.
