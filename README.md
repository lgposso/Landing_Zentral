# Zentral — Landing

Landing page de **Zentral Solutions**, construida siguiendo `docs/ZENTRAL-DESIGN-SPEC.md`.

Stack: Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide.

---

## Puesta en marcha

### 1. Instalar Node.js

Este equipo todavía no tiene Node instalado. Descarga **Node.js 20 LTS o superior**
desde <https://nodejs.org> (instalador `.msi`, incluye npm), y **cierra y vuelve a
abrir la terminal / VS Code** para que se refresque el `PATH`.

Comprobación:

```powershell
node -v   # v20.x o superior
npm -v
```

### 2. Instalar dependencias y arrancar

```powershell
npm install
npm run dev
```

Abre <http://localhost:3000>.

### ⚠️ Nota sobre OneDrive

El proyecto vive dentro de una carpeta sincronizada con OneDrive. `node_modules`
son decenas de miles de archivos y provoca sincronización constante, lentitud y
bloqueos de archivo durante el build.

Después del primer `npm install`, haz clic derecho sobre la carpeta `node_modules`
→ **"Liberar espacio"**, o (mejor) mueve todo el proyecto fuera de OneDrive.

---

## Scripts

| Comando             | Qué hace                                    |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo                      |
| `npm run build`     | Build de producción                         |
| `npm start`         | Sirve el build de producción                |
| `npm run lint`      | ESLint                                      |
| `npm run typecheck` | Comprobación de tipos sin emitir            |

---

## Estructura

```
app/          Rutas, layout, metadata, sitemap, robots, OG image
components/
  ui/         Primitivos del sistema de diseño (Button, Card, Section…)
  layout/     Navbar, Footer, Logo
  providers/  MotionProvider
features/     Una carpeta por sección de la landing
hooks/        useScrolled, usePointerParallax, usePrefersReducedMotion
lib/          motion.ts (variantes Framer), utils.ts
config/       site.ts (metadata y CTAs) · content.ts (TODO el copy)
types/        Tipos compartidos
scripts/      prepare-logos.ps1
docs/         Especificación de diseño (ES y EN)
public/       Logos procesados
```

### Dónde tocar cada cosa

| Quiero cambiar…            | Archivo                                  |
| -------------------------- | ---------------------------------------- |
| Cualquier texto de la web  | `config/content.ts`                      |
| Colores, tipografía, radios| `app/globals.css` (bloque `@theme`)       |
| Metadata, SEO, contacto    | `config/site.ts`                         |
| Destino de los botones CTA | `config/site.ts` → `ctaConfig`           |
| Orden de las secciones     | `app/page.tsx`                           |
| El diagrama animado        | `features/hero/ZentralCore.tsx`          |

---

## Pendientes antes de publicar

Están marcados en el código como `TODO(zentral)`:

1. **`config/site.ts` → `ctaConfig`** — los botones "Agenda una conversación"
   apuntan a `#`. Conéctalos a WhatsApp, Calendly o correo. Ejemplo:

   ```ts
   primary: {
     label: "Agenda una conversación",
     href: "https://wa.me/57XXXXXXXXXX?text=Hola%2C%20quiero%20agendar%20una%20conversación",
     isExternal: true,
   }
   ```

2. **`config/site.ts` → `url`** — cambiar `https://zentral.com.co` por el dominio real.
   Se usa en canonical, Open Graph, sitemap y datos estructurados.

3. **`config/site.ts` → `contact` y `social`** — correo, teléfono y perfiles.
   Los perfiles vacíos no se renderizan.

4. **Logo en SVG** — hoy sólo existe en PNG. Un SVG mejoraría nitidez y peso.

---

## Sobre los logos

Los archivos de marca originales son PNG de 24bpp **sin canal alfa**, con fondo
negro sólido y bastante relleno alrededor del arte. Sobre el fondo del sitio
(`#0A0A0A`) se verían como un rectángulo negro recortado.

`scripts/prepare-logos.ps1` los convierte a PNG con transparencia real
(`alfa = max(R,G,B)`, color desmultiplicado) y los recorta al contenido.
Genera `public/logo-zentral.png`, `public/isotipo-zentral.png`, `app/icon.png` y
`app/apple-icon.png`.

Sólo hay que volver a ejecutarlo si cambian los archivos de marca originales:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\prepare-logos.ps1
```

---

## Decisiones de diseño

- **El grid respeta el §7 del spec**: 1280px de ancho máximo y 24/48/96px de
  padding lateral, más 140px de ritmo vertical entre secciones. Los valores
  viven en [`components/ui/Container.tsx`](components/ui/Container.tsx).
  - Consecuencia de ese ancho: cada celda de las rejillas mide ~360px, así que
    sus títulos usan **24px**, no los 28px de la escala H3. A 28px casi todos
    partían en dos líneas y el texto quedaba en una columna demasiado estrecha.
    La escala H3 sigue disponible como token para el resto del ecosistema.
- **Navbar de 104px** (`h-26`) en lugar de 80px, para dar aire al logotipo, que
  va a 36/44px. El tamaño se elige con la prop `size` de
  [`Logo`](components/layout/Logo.tsx): `lg` en el navbar, `sm` en el pie.
  `scroll-padding-top` está sincronizado a 128px para que los saltos de ancla
  no queden bajo la barra.
- **Las secciones no llevan numeración ni eyebrow.** Abren directamente con su
  H2, por decisión de marca.
- **Fondo negro puro; el color sólo en los objetos.** No hay ninguna capa
  ambiente: ni retícula, ni auroras, ni grano, ni bandas de superficie
  alternas. El azul de marca vive únicamente en objetos — líneas de las
  rejillas, iconos, segunda línea de los títulos y botones.

  Hubo una capa ambiente (auroras azules a la deriva) y se retiró: **cualquier
  color a baja opacidad repartido por toda la pantalla deja de leerse como azul
  y se lee como gris.** Si algún día se quiere reintroducir ambiente, la regla
  es color concentrado con caída corta, nunca un velo uniforme.

- **Forma estándar de sección: título a la izquierda, rejilla enmarcada a la
  derecha.** [`SplitSection`](components/ui/SplitSection.tsx) +
  [`GridFrame` / `GridCell`](components/ui/GridFrame.tsx). Las cinco secciones
  de contenido usan la misma forma a propósito: da al sitio una cadencia
  reconocible al hacer scroll en lugar de un layout distinto cada vez.
  - Los divisores se consiguen con `gap-px` y el color de la línea como fondo
    del contenedor. Los huecos de 1px dejan ver ese fondo y componen la retícula
    completa, sin cuadrar bordes celda por celda ni lidiar con líneas dobles.
  - Las celdas son **negras, sin radio y sin sombra**: aquí la separación la
    marca la línea, no un relleno. Por eso ya no existe el componente `Card`
    (radio 24px, elevación al hover) que definía el §10 del spec.

- **Celdas que se despliegan** ([`ExpandableCell`](components/ui/ExpandableCell.tsx)).
  Colapsadas muestran sólo marca y título; el detalle aparece al pasar el
  cursor (escritorio) o al pulsar el botón `+` (móvil).

  | Sección | Celda | Por qué |
  | --- | --- | --- |
  | Problema | `ExpandableCell` | El título ya transmite el dolor; el detalle amplía |
  | **Soluciones** | **`GridCell`** | Responde a "¿qué hacen ustedes?" — tiene que poder escanearse sin pasar el cursor por seis celdas |
  | Cómo trabajamos | `ExpandableCell` | La secuencia 01-04 se entiende sola |
  | Casos de uso | `ExpandableCell` | Mucho detalle por celda; el sector basta como resumen |
  | Tecnologías | `GridCell` | El contenido es una lista, no una descripción: colapsarla dejaría la celda vacía |

  Ambos tipos de celda comparten fondo, padding y realce al pasar el cursor,
  así que conviven en la misma página sin desentonar. Cambiar el
  comportamiento de una sección es cambiar qué componente usa.
  - El despliegue anima `grid-template-rows` de `0fr` a `1fr`, que es la única
    forma de animar hacia una altura automática sin medirla en JavaScript ni
    fijar un máximo a ojo.
  - La celda tiene altura mínima y el contenido va anclado abajo
    (`justify-end`): al crecer el detalle empuja marca y título hacia arriba en
    lugar de estirar la fila, así que **las celdas nunca cambian de tamaño**.
  - El detalle sigue en el DOM aunque esté colapsado — sólo está recortado
    visualmente — así que los lectores de pantalla y los buscadores lo leen
    siempre.
  - El botón `+` existe en todos los tamaños pero en escritorio es invisible
    hasta recibir cursor o foco. Sin él, quien navega con teclado no tendría
    forma de desplegar la celda.
  - **Contrapartida:** colapsar oculta copy hasta que se interactúa. Se gana
    limpieza; se pierde escaneabilidad. Por eso Soluciones se dejó abierta: si
    todas las secciones se colapsan, un visitante que sólo escanea la página
    nunca llega a leer qué hace la empresa.

- **Títulos de sección a dos tonos**: primera línea en blanco, segunda en azul.
  El acento usa `primary-hover` (#3B82F6), **no** `primary` (#2563EB): sobre
  negro el primario da 3.2:1 de contraste y el hover 4.8:1, así que sólo este
  último cumple AA con holgura.

- **Un único listener de puntero** en
  [`PointerSpotlight`](components/ui/PointerSpotlight.tsx) alimenta el foco de
  cursor de todas las celdas `.zentral-spotlight`. No pinta nada; sólo escribe
  `--spot-x` / `--spot-y`. Así las celdas siguen siendo componentes de servidor
  y el coste no crece con el número de tarjetas.

- **El azul es el único acento.** No hay logotipos de tecnologías a color en la
  sección de stack — se listan como texto, con la jerarquía puesta en la tipografía.
- **Sin fotografías, robots, cerebros ni engranajes** (§4 del spec).
- **Los títulos de tarjeta usan 20px**, no los 28px de la escala H3: en columnas
  de 250–330px, 28px rompe el equilibrio. La escala H3 queda disponible como
  token para el resto del ecosistema.
- **El hover de las tarjetas es CSS puro**, sin JavaScript, para que puedan
  renderizarse en el servidor y no engorden el bundle.
- **`prefers-reduced-motion`** se respeta en tres capas: reset global en
  `globals.css`, `MotionConfig reducedMotion="user"` para Framer, y desmontaje
  explícito de las animaciones SMIL del Zentral Core.

---

## Verificación

```powershell
npm run typecheck
npm run lint
npm run build; npm start   # luego Lighthouse en incógnito sobre localhost:3000
```

Objetivos del spec: Lighthouse > 95 en las cuatro categorías · LCP < 2.5s ·
CLS < 0.1 · INP < 200ms.
