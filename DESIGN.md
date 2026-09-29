---
name: Zentral
description: Software a la medida, construido como producto. El sitio es un mapa de red de noche: Zentral es el intercambiador, el desarrollo a la medida es la troncal y cada producto propio es un ramal.
colors:
  background: "#0a0a0a"
  surface: "#141414"
  border: "#2a2a2e"
  foreground: "#fafafa"
  muted: "#a1a1aa"
  primary: "#2563eb"
  primary-hover: "#1d4ed8"
  link: "#60a5fa"
  line-loyalty: "#f23d6d"
  line-rips: "#17a673"
  line-custom: "#2563eb"
  line-neutral: "#6b7280"
typography:
  hero:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.15rem + 4.6vw, 5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  h1:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.45rem + 3vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  h2:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.35rem + 2.4vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.028em"
  h3:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 1.15rem + 0.55vw, 1.625rem)"
    fontWeight: 800
    lineHeight: 1.18
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  question:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.375
  body:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  station:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 800
    lineHeight: 1.25
  small:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  ui:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.375
  caption:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  label:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.02em"
  meta:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.375
  data:
    fontFamily: "Overpass Mono, ui-monospace, monospace"
    letterSpacing: "0"
    fontFeature: "tnum"
rounded:
  focus: "6px"
  button: "10px"
  card: "16px"
  full: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter-tablet: "40px"
  gutter-desktop: "64px"
  container-max: "1280px"
  navbar-height: "72px"
  section-y: "80px"
  section-y-md: "112px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.foreground}"
    typography: "{typography.small}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-lg:
    typography: "{typography.body}"
    padding: "0 28px"
    height: "56px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.button}"
    padding: "0 20px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
  button-inverse:
    backgroundColor: "#ffffff"
    textColor: "{colors.primary-hover}"
    rounded: "{rounded.button}"
  button-inverse-hover:
    backgroundColor: "#dbe7ff"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    typography: "{typography.small}"
    rounded: "{rounded.button}"
    padding: "12px 16px"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "28px"
  platform-sign:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.card}"
    padding: "16px 32px 16px 20px"
  contact-card:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.card}"
    padding: "40px"
  line-mark-md:
    width: "32px"
  navbar:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.small}"
    height: "72px"
---

# Design System: Zentral

## Overview

**Creative North Star: "Mapa de red"**

El sitio se dibuja como el mapa de noche de un sistema de transporte. Zentral es el intercambiador (el isotipo de marca, con su degradado, dentro de un anillo claro); el desarrollo a la medida es la troncal azul, lo principal de la red, y los dos productos propios (Zentral RIPS y Zentral Loyalty) son ramales delgados con su color, su isotipo teñido y sus estaciones: secundarios a propósito, la prueba de que la troncal construye producto. El Zentral Core, el mapa de la portada, es la pieza que enseña el negocio de un vistazo; el resto del sitio repite la misma gramática a otras escalas: la franja de estaciones sobre las puertas del vagón, el diagrama vertical dentro del vagón, el letrero de andén con la marca de la línea.

El soporte es siempre oscuro: un suelo casi negro, paneles de andén un paso más claros y texto casi blanco, como un plano de metro iluminado de noche. No hay modo claro; es una decisión de marca. Los colores de ramal están afinados para leerse sobre negro (entre 5 y 7 a 1 contra el fondo); la jerarquía la da el grosor de la troncal, no el color. La letra es Overpass, descendiente de Highway Gothic, la familia de la señalización vial colombiana; Overpass Mono aparece solo cuando hay un dato (código, hora, norma). La densidad es de cartel: titulares grandes y pesados, texto corrido corto, mucho aire entre líneas de producto.

El movimiento es todo CSS y siempre cuenta algo del mundo: las líneas se trazan desde el intercambiador una sola vez, un tren claro va y viene despacio por cada línea, y señalar un producto (cursor o foco) apaga las demás líneas y lanza un expreso hasta la terminal. Lo oscuro es el suelo del mapa, no un escenario: el mundo rechaza el brillo azul, los halos y las rejillas bento de 1px del SaaS oscuro, y la página de captura más bento de la categoría.

**Key Characteristics:**
- Siempre oscuro: suelo casi negro, andén un paso más claro, texto casi blanco; sin modo claro.
- Tres líneas: la troncal azul a la medida y un ramal de color por producto propio; el color de línea es trazo, anillo y marca, nunca texto corrido.
- Cada producto se identifica con el isotipo de Zentral teñido en su color de línea, nunca con un círculo con letra.
- Círculos para líneas y estaciones, 10px para controles, 16px para paneles, 6px para el anillo de foco.
- Overpass 800 con tracking negativo para titulares; Overpass Mono solo para datos.
- Recorridos en vez de tarjetas: los productos se presentan como franjas de estaciones.
- Movimiento CSS con significado de transporte y equivalente estático bajo movimiento reducido.

## Colors

Texto claro sobre suelo casi negro, un azul de marca que es a la vez la línea de Zentral y el color de acción, un azul claro para enlaces y foco, y dos colores de ramal que solo trazan y marcan.

### Primary
- **Azul Zentral** (primary): el color de marca fijo. Fondo del botón de acción principal, selección de texto, cursor de escritura, la troncal a la medida del mapa y el campo del cierre de página (la sección de contacto entera sobre azul). Sobre negro da 3.8 a 1: sirve como trazo y como fondo de botón con texto blanco, no como texto.
- **Azul Zentral profundo** (primary-hover): hover del botón primario (el fondo oscurece para que el texto blanco siga en 6.7 a 1) y texto del botón inverso sobre el campo azul.
- **Azul señal** (link): el azul de marca aclarado para leerse sobre negro (7.8 a 1). Texto de enlaces de acción, hover de los enlaces del navbar y color del contorno de foco en todo el sitio.

### Secondary
Los colores de línea. Cada uno tiñe el isotipo de su línea y traza su recorrido en el mapa, la navegación, el pie y su página.
- **Azul a la medida** (line-custom): la troncal, el desarrollo a la medida; mismo valor que el azul de marca. En el mapa es sólida y la más gruesa; solo se dibuja punteada donde algo está en obra (ver The Punteado-Es-Obra Rule).
- **Verde RIPS** (line-rips): Zentral RIPS.
- **Rosa Loyalty** (line-loyalty): Zentral Loyalty.
- **Gris ramal** (line-neutral): solo el hover de los bordes de campo del formulario.

### Neutral
- **Suelo de noche** (background): fondo de todas las páginas, relleno de estaciones, muescas y del intercambiador, fondo del formulario sobre el campo azul, anillo de la terminal de cierre, y el color con el que se mezcla el trazo inferior del isotipo teñido.
- **Andén de noche** (surface, también `--color-card`): paneles informativos, letrero de andén, letrero «Transbordo a otras líneas», muestras de producto, campos de formulario y pie de página.
- **Junta** (border): bordes de 1px y 1.5px, divisores entre secciones, la regla del pie y el pulgar de la barra de scroll.
- **Luz** (foreground): texto principal, anillo del intercambiador, trenes y expresos del mapa, contorno del botón secundario.
- **Luz tenue** (muted): texto secundario (7.7 a 1 sobre el suelo, 7.2 a 1 sobre el andén), sectores, pies de muestra.

### Named Rules
**The Siempre-Oscuro Rule.** Un solo tema, oscuro (`color-scheme: dark`), por decisión de marca. Ninguna superficie del sitio pasa a fondo claro; el único campo de color es el azul de marca del cierre. La excepción es la muestra de Loyalty, que conserva los colores del pase del negocio que representa.

**The Trazo-No-Texto Rule.** Los colores de línea son para trazos, anillos de estación, el isotipo teñido y subrayados de pestaña activa, nunca para texto corrido. El nombre de cada producto va en luz al lado de su marca.

**The Una-Línea-Azul Rule.** El azul de marca es la línea de Zentral y es la acción. Ningún otro color hace de botón primario, y el azul no se usa como brillo, halo ni degradado de fondo; el único degradado del sitio es el del isotipo original en el intercambiador.

**The Azul-Señal Rule.** Sobre negro, el texto azul y el foco usan el azul señal, no el de marca. El azul de marca queda para fondos de acción y trazos.

## Typography

**Display Font:** Overpass (con ui-sans-serif, system-ui)
**Body Font:** Overpass (con ui-sans-serif, system-ui)
**Label/Mono Font:** Overpass Mono (con ui-monospace), solo para datos

**Character:** Una sola familia de señalización vial, variable y auto-hospedada con next/font, que pasa de letrero de estación (800, tracking negativo, interlineado 1) a texto de lectura sin cambiar de voz. La mono es la voz de la máquina: aparece con cifras tabulares cuando el contenido es un dato.

### Hierarchy
- **Hero** (800, hasta 80px, 1): el letrero de estación de la portada, a todo el ancho, en dos líneas.
- **H1** (800, hasta 60px, 1.02): nombre del producto en el letrero de andén, titular de páginas internas y del cierre sobre azul.
- **H2** (800, hasta 52px, 1.04): títulos de sección, seguidos de una sola frase de apoyo en luz tenue (máx. 60ch).
- **H3** (800, hasta 26px, 1.18): nombres de producto en las filas de líneas, estaciones grandes del diagrama vertical, subtítulos de bloque.
- **Lead** (400, 20px, 1.55): la frase de apoyo del primer pliegue desde `md` (18px en el celular).
- **Question** (800, 20px, interlineado ajustado): preguntas frecuentes de producto y el título del tramo en construcción del diagrama de línea.
- **Body** (400, 18px, 1.6): texto corrido; medidas de 34 a 60ch según el bloque. También el nombre (en 800) de las líneas del letrero de transbordo.
- **Station** (800, 17px, 1.25): títulos de estación de la franja mediana, «Para quién es», los tipos de trabajo de «Qué construimos» y las tecnologías del panel «Con qué construimos».
- **Small** (400, 16px, 1.55): descripciones de estación, sectores, navegación, botones medianos, campos.
- **UI** (15px): texto de interfaz compacto: nombre de terminal del mapa en el celular, sector de terminal en escritorio, la lista «Con qué construimos».
- **Caption** (14px): etiquetas de campo, nota de estación, migas de pan, línea legal del pie.
- **Label** (700, 13px, 0.02em, sin mayúsculas forzadas): rótulo de dato dentro de un componente («Plazo», «Con qué construimos») y encabezado de columna del pie.
- **Meta** (400, 13px): pie de las muestras de producto y dato secundario del mapa en el celular.
- **Data** (Overpass Mono, cifras tabulares, tracking 0): NIT, conteos, horas, normas y códigos dentro de las muestras de producto.

Los rótulos del mapa suben un paso de la escala desde `lg`: nombre de UI (15px, 800) a Body (18px, 800), sector de Meta (13px) a UI (15px) y dato de Meta a Caption (14px, 700).

**Excepción de muestra.** Dentro de las muestras de producto (RIPS y Loyalty) la letra baja a los tamaños de la interfaz que representan (11, 12, 12.5, 13.5 y 17px, entre otros). Esos valores pertenecen a la pieza, no a la escala del sitio.

### Named Rules
**The Sin-Antetítulo Rule.** Una sección se abre con su título y una frase; no lleva antetítulo encima. El rótulo de 13px vive dentro de componentes, pegado a su dato, nunca sobre un titular de sección.

**The Mono-Es-Dato Rule.** Overpass Mono solo para cifras y códigos. Si el texto se puede leer en voz alta como frase, va en Overpass.

## Layout

Contenedor maestro de 1280px de ancho máximo con márgenes de 20px en el celular, 40px desde `md` y 64px desde `lg`. Las secciones respiran 80px arriba y abajo (112px desde `md`) y se separan con un borde superior en junta; el primer pliegue compensa el navbar fijo de 72px con 112-128px de relleno superior, y el ancla de scroll deja 96px de holgura.

La retícula de escritorio es de 12 columnas con repartos asimétricos: 5/7 en el primer pliegue (texto y acciones a la izquierda, mapa a la derecha), 4/8 en las filas de producto (marca, nombre y promesa, luego la franja), 7/5 en la cabecera de producto y de la página a la medida (letrero y texto, luego la muestra o el panel de datos), 7/5 con el panel de tecnologías fijo (`sticky`) en «Qué te entregamos», 4/4/4 en el pie y 5/7 en el cierre (texto sobre azul, formulario). Por debajo de `lg` todo apila en una columna.

El mapa tiene dos geometrías: apaisada desde `md` (840 por 560, intercambiador a la izquierda, la troncal recta hasta el borde derecho y los dos ramales saliendo a 45° arriba y abajo para correr en horizontal hasta terminales más cortas) y vertical en el celular (360 por 420, las líneas bajan en haz desde el intercambiador y se abren una a una sin cruzarse; la troncal es la espina exterior izquierda y la que llega más lejos). La franja de estaciones es horizontal desde `md` y vertical en el celular, con la línea a la izquierda de la lista.

### Named Rules
**The Recorrido-No-Tarjeta Rule.** En `/productos`, los productos se listan como filas con su franja de estaciones, separadas por 64-80px de aire, no como rejilla de tarjetas. En la portada y en `/desarrollo-a-la-medida` van en una banda secundaria (`OwnProducts`): titular H3 «También tenemos productos propios.» a 4/12 y los dos productos a 8/12, cada uno con marca de 24px, nombre, sector y promesa; sin franjas ni tarjetas, con 64-80px de aire vertical en vez de 80-112px.

## Elevation & Depth

El sistema es plano y tonal. La profundidad la dan el paso de suelo a andén, los bordes de 1.5px en junta y el contraste de la luz sobre negro. Hay sombras negras, largas y con dispersión negativa solo en dos casos: lo que flota sobre la página (el navbar al hacer scroll) y las muestras de producto, que se presentan como un objeto puesto sobre el andén.

### Shadow Vocabulary
- **Navbar en scroll** (`box-shadow: 0 8px 28px -18px rgba(0,0,0,0.8)`): aparece junto con el borde inferior cuando la página baja más de 16px o se abre el menú móvil.
- **Muestra de producto** (`box-shadow: 0 28px 64px -34px rgba(0,0,0,0.9)`): la pieza de RIPS (el pase de Loyalty usa -30px de dispersión).

### Named Rules
**The Plano-Salvo-Flotante Rule.** Paneles, franjas, botones y campos no llevan sombra. Solo lleva sombra lo que flota (el navbar en scroll) o lo que es una muestra de producto.

## Shapes

Cuatro formas y nada más: el círculo para todo lo que pertenece a la red (estaciones, intercambiador, extremos redondeados de los trazos y de las franjas), 10px para controles (botones, campos, rótulos del mapa), 16px para paneles (andén, letrero de andén, formulario, avisos) y 6px como forma propia del anillo de foco. Los trazos de línea son octilineales (horizontal, vertical y 45°) con uniones y extremos redondeados; en el mapa la troncal es 2.25 veces más gruesa que un ramal, y anillos, muescas y trenes se derivan del grosor de cada línea. Lo que está en obra se dibuja con trazos con huecos.

La marca de cada producto es el isotipo de Zentral (proporción 600 por 550) en un solo color: el trazo superior en el color de la línea y el inferior en ese mismo color mezclado al 78% con el suelo, para conservar la profundidad del degradado original. Se dibuja a 20, 24, 32, 48 y 64px de ancho.

Las estaciones son anillos huecos: círculo de 30px relleno del color del suelo con borde de 6px del color de la línea. Las estaciones por construir son anillos de 18px con borde de 4px sobre el tramo punteado; la lista «Qué construimos» usa anillos de 20px con borde de 5px; las terminales al pie de página de producto, de la página a la medida y del cierre son anillos de 44px con borde de 9px. En el mapa, las terminales son anillos rellenos del suelo y las paradas intermedias son muescas del color del suelo que cortan la línea.

### Named Rules
**The Cuatro-Formas Rule.** Círculo, 10px, 16px, y 6px solo para el contorno de foco. Las muestras de producto pueden llevar la forma del producto que representan (la tarjeta de wallet de Loyalty), pero ningún componente del sitio inventa otro radio.

**The Punteado-Es-Obra Rule.** Un trazo punteado significa «en construcción» y solo aparece en tres sitios: la franja del proceso a la medida (modo «build», que se vuelve sólida al recorrerla), la línea que llega a la terminal del cierre sobre azul y el tramo de lo que un producto todavía no hace en su diagrama de línea. El mapa de red nunca lleva punteado: la troncal es sólida. No se usa como decoración.

**The Isotipo-Teñido Rule.** Un producto se marca con el isotipo de Zentral en su color de línea, nunca con un círculo con letra ni con un icono genérico. La marca es decorativa: el nombre va siempre escrito al lado.

## Components

### Buttons
Rótulos firmes, en negrita, que se comprimen un poco al pulsarse.
- **Shape:** esquinas de control (10px).
- **Primary:** azul de marca con texto blanco, Overpass 700; 44px de alto con 20px laterales (mediano) o 56px con 28px y texto de 18px (grande, en el primer pliegue y las cabeceras). Lleva flecha a la derecha salvo en el navbar.
- **Hover / Focus:** el fondo oscurece al azul profundo en 150ms; al pulsar escala a 0.97 (sin escala bajo movimiento reducido). Foco global: contorno azul señal de 2.5px, separado 3px, con esquinas de 6px.
- **Secondary:** contorno de luz de 1.5px sobre transparente, texto en luz; en hover se rellena de luz con texto del color del suelo. Se lee como rótulo y no compite con la acción. El botón del menú móvil usa el mismo contorno.
- **Inverse:** blanco con texto azul profundo, solo sobre el campo azul del cierre; hover a un azul muy pálido.

### Chips
- **Marca de línea (isotipo teñido):** el isotipo de Zentral en el color de la línea, a 20px (`xs`, navbar de escritorio), 24px (`sm`, mapa, menú móvil, pie), 32px (`md`, letrero de transbordo), 48px (`lg`, filas de producto en `/productos`) y 64px (`xl`, letrero de andén). Es decorativa (`aria-hidden`).

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** andén para paneles informativos, letrero de andén, letrero de transbordo, avisos y muestras; suelo para el formulario sobre el campo azul.
- **Shadow Strategy:** ninguna (ver Elevation & Depth), salvo las muestras.
- **Border:** 1.5px en junta en el letrero de andén, el letrero de transbordo, los avisos y las muestras; los paneles de datos no llevan borde.
- **Internal Padding:** 20-40px según el panel (28px/36px en el panel de datos, 24px/40px en el formulario).
- **Letrero de andén:** panel de andén con borde, la marca de línea de 64px y el nombre en H1 con su sector en luz tenue; abre cada página de producto y la página a la medida (con la marca azul). El letrero «Transbordo a otras líneas» al pie de cada producto repite el panel de andén con marcas de 32px: el otro producto y «Desarrollo a la medida».

### Inputs / Fields
- **Style:** fondo de andén dentro del formulario oscuro, borde de 1.5px en junta, esquinas de control, 12px por 16px de relleno, texto de 16px; etiqueta encima en Caption negrita de luz. Placeholder en gris medio (#8b8f98).
- **Hover:** el borde pasa a gris ramal.
- **Focus:** borde azul de marca más anillo de 2px en azul al 25%.
- **Error / Disabled:** mensaje en rojo claro (#f87171) negrita con `role="alert"`; el botón de envío pendiente baja a 70% de opacidad con cursor de espera.

### Navigation
- **Navbar:** suelo de noche, fijo, 72px de alto; wordmark blanco (`public/logo-zentral.svg`) a la izquierda y, desde `lg`, tres enlaces directos, uno por línea (A la medida, Zentral RIPS, Zentral Loyalty), cada uno con su marca de 20px y el nombre en 16px negrita de luz, hover a azul señal subrayado; a la derecha el botón primario mediano sin flecha. Sin menús desplegables. Señalar un enlace (cursor fino o foco) apaga al 16% las otras líneas del mapa de la portada (`data-nav-line`). Sin borde al tope de la página; al bajar 16px aparece el borde en junta y la sombra de navbar.
- **Mobile:** botón cuadrado de 44px con contorno de luz; el panel ocupa el alto restante sobre el suelo, las tres líneas en filas separadas por junta con marca de 24px y nombre en 18px negrita, y el botón primario grande a lo ancho. Retiene el foco y cierra con Esc.
- **Footer:** andén de noche, como la leyenda del mapa, en tres columnas de 4/12: marca con tagline y contacto, «Lo que hacemos» (las tres líneas con su marca de 24px) y «Empresa» (Productos propios, Política de privacidad), con rótulo de 13px; la regla de 1px antes del NIT.

### Mapa de red (Zentral Core)
Firma del sistema. SVG decorativo con rótulos HTML que son los enlaces reales. Intercambiador: círculo del color del suelo con anillo de luz (9px, 6px en el celular) y el isotipo original, con su degradado de marca, dentro. La troncal a la medida sale recta hasta el borde derecho, sólida, con extremos redondos y 2.25 veces más gruesa que un ramal (`TRUNK_SCALE`; 18 contra 8 en la geometría apaisada); su rótulo es «A la medida» y enlaza a `/desarrollo-a-la-medida`. RIPS y Loyalty salen a 45° hacia arriba y hacia abajo, delgados, y corren en horizontal hasta terminales más cortas. Terminales (anillo relleno del suelo con borde del color de la línea), muescas del color del suelo en las paradas intermedias, trenes y trazo grueso se derivan del grosor de cada línea. Sin punteado en el mapa. El rótulo de la troncal lleva la marca de línea de 24px, nombre en 800, sector en luz tenue y un dato en negrita. Los rótulos de los ramales solo dicen el nombre, en 700 y luz tenue con marca de 20px (pasan a luz al señalarlos); en `/productos` (`productDetail`) recuperan el rótulo completo, porque la página es de ellos.
- **Carga:** las líneas se trazan desde el intercambiador en 1100ms con `ease-zentral`, escalonadas 110ms; luego aparecen estaciones y rótulos.
- **Reposo:** un tren de luz recorre cada línea cada 9s.
- **Señalar (cursor fino o foco de teclado, en el rótulo o en el enlace del navbar):** la línea señalada gana un trazo grueso (por opacidad, no por grosor), las demás bajan a 16% y sus rótulos a 45%, y un expreso de luz corre hasta la terminal en 700ms con `ease-snap`.

### Franja de estaciones (strip map)
Una línea recta de 8px con extremos redondos y estaciones anilladas, como el esquema sobre las puertas del vagón. Horizontal desde `md`, vertical en el celular. Se traza al entrar en pantalla con animaciones ligadas al scroll cuando el navegador las soporta; si no, se ve completa. En modo «build» (el proceso a la medida) arranca punteada y se vuelve sólida al recorrerla. En la lista de productos, señalar una fila engrosa su franja (escala 1.5 en Y), apaga las otras al 20% y lanza un tren de luz de 40px.

### Diagrama de línea
Versión vertical dentro del vagón para las páginas de producto y para «Qué te entregamos» en la línea a la medida: estaciones en servicio sobre trazo sólido con títulos H3 y, en los productos, un tramo final punteado con lo que el producto todavía no hace, en anillos pequeños. Los límites se dicen en el mismo mapa que las capacidades.

### Muestra de producto (specimen)
Representación del producto funcionando con datos de ejemplo, no una captura. Contenido oculto a lectores de pantalla y siempre un pie de 13px en luz tenue, fuera de la pieza, que dice que los datos son ficticios. RIPS es una tarjeta de andén con borde de 1.5px en junta, esquinas de 16px y sombra de muestra; datos en Overpass Mono y la pestaña activa subrayada o rellena con el color de su línea. Loyalty es la excepción deliberada: el pase conserva los colores del negocio (verde profundo y dorado) y su propia forma de tarjeta de wallet.

### Campo azul de cierre
La sección de contacto es el único campo de color: azul de marca de borde a borde, texto blanco, la línea a la medida punteada en blanco que llega a una terminal anillada (la conversación es donde la obra empieza), el botón inverso y el formulario en una tarjeta del color del suelo. La página a la medida cierra en cambio sobre el suelo, con la troncal azul sólida llegando a su terminal de 44px y el botón primario.

## Do's and Don'ts

### Do:
- **Do** dar a cada producto nuevo su color de línea afinado para negro (5 a 7 a 1 sobre el suelo) y registrarlo en `lib/lines.ts` y en `@theme` como `--color-line-*`; su marca es el isotipo teñido con ese color.
- **Do** poner el nombre escrito en luz al lado de toda marca o trazo de color.
- **Do** usar el azul señal para enlaces de texto y foco, y el azul de marca para fondos de acción y trazos.
- **Do** mostrar los productos como recorridos (franja o diagrama con estaciones) y reservar los paneles de 16px para información de apoyo.
- **Do** rellenar estaciones, muescas y el intercambiador con el color del suelo, para que las líneas se lean como cortadas en el plano.
- **Do** usar el trazo punteado solo para decir «en construcción»: la franja del proceso a la medida, la línea del cierre sobre azul y lo que un producto aún no hace; nunca en el mapa de red.
- **Do** atar todo gesto de «señalar una línea» a cursor fino (`hover: hover` y `pointer: fine`) o a `:focus-visible`, y dar a cada animación su equivalente estático bajo `prefers-reduced-motion`.
- **Do** usar `ease-zentral` para trazados de entrada y `ease-snap` para respuestas a la interacción.
- **Do** rotular toda muestra de producto como datos de ejemplo, debajo y fuera de la pieza.

### Don't:
- **Don't** añadir un modo claro ni paneles de fondo blanco; el único campo de color es el azul del cierre.
- **Don't** marcar productos con círculos con letra; la marca es el isotipo teñido.
- **Don't** usar brillo azul, halos, degradados de fondo ni rejillas bento de 1px: el negro es el suelo del mapa, no un escenario.
- **Don't** construir la página de producto como captura de pantalla más rejilla bento.
- **Don't** usar colores de línea para texto corrido, ni el azul de marca para texto sobre negro.
- **Don't** poner antetítulos sobre los títulos de sección.
- **Don't** introducir radios fuera del círculo, 10px, 16px y el foco de 6px en componentes del sitio.
- **Don't** usar Overpass Mono para frases; solo para datos.
- **Don't** añadir sombras a paneles, botones, campos o franjas.
