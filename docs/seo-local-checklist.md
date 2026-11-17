# SEO local: lo que se hace fuera del sitio

El sitio ya tiene las páginas para **agentes de IA Barranquilla** y **automatizaciones Barranquilla**. Para búsquedas con el nombre de una ciudad, Google también pesa mucho lo que pasa fuera del sitio. Esta lista es de tareas manuales, en orden de impacto.

## 1. Perfil de Google Business (lo que más pesa para salir en el mapa)

Se crea en business.google.com como **negocio de área de servicio**, sin oficina abierta al público.

- **Nombre:** Zentral Solutions, exactamente como en la Cámara de Comercio. No agregar palabras clave al nombre: Google suspende perfiles por eso.
- **Categoría principal:** Desarrollador de software. **Secundarias:** Consultor informático y Servicio de diseño de sitios web, solo si aplica.
- **Dirección:** se registra para verificar, pero se oculta. Se marca «Entrego productos y servicios a mis clientes».
- **Zonas de servicio:** Barranquilla, Soledad, Puerto Colombia, Malambo y Galapa.
- **Teléfono:** +57 333 762 8306, el mismo del sitio.
- **Sitio web:**
  ```
  https://zentral.com.co/?utm_source=google&utm_medium=organic&utm_campaign=gbp
  ```
- **Servicios**, cada uno con descripción y enlace a su página:
  - Agentes de IA: `https://zentral.com.co/desarrollo-a-la-medida/agentes-de-ia`
  - Automatización de procesos: `https://zentral.com.co/desarrollo-a-la-medida/automatizacion-de-procesos`
  - Desarrollo de software a la medida: `https://zentral.com.co/desarrollo-a-la-medida`
- **Descripción (750 caracteres):** quiénes son, qué construyen y que se reúnen en persona en el área metropolitana. Sin precios ni promesas.
- **Fotos reales:** el logo, el equipo trabajando y pantallas de RIPS y de la demostración de agentes. Nada de fotos de banco de imágenes.
- **Publicaciones:** una cada 1–2 semanas, por ejemplo una guía nueva, un agente de la demostración o una actualización de RIPS.
- **Cuando quede verificado:** pásame el enlace del perfil para agregarlo a `sameAs` en los datos estructurados (`components/StructuredData.tsx` → `siteConfig.social`).

## 2. Reseñas

- Pídeselas a cada cliente al cerrar una entrega y a las instituciones que usan Zentral RIPS. Usa el enlace corto «Pedir reseñas» del perfil.
- Responde todas, también las malas, en uno o dos días.
- No las compres ni las intercambies. Google las detecta y las borra.

## 3. Search Console y Bing

- **Google Search Console:**
  - Verifica el dominio `zentral.com.co` con un registro DNS en Cloudflare.
  - Envía `https://zentral.com.co/sitemap.xml`.
  - En «Inspección de URLs», pide la indexación de las dos páginas nuevas y de `/guias`.
- **Bing Webmaster Tools:** importa desde Search Console. Bing alimenta la búsqueda de ChatGPT y de Copilot.
- **Seguimiento semanal:**
  - En Search Console → Rendimiento, filtra las consultas que contengan «barranquilla» y anota la posición de las dos búsquedas objetivo.
  - En Vercel Analytics, mira los clics de `cta_click` que vienen de `agentes-de-ia-*` y `automatizacion-de-procesos-*`.

## 4. Datos iguales en todas partes y menciones locales

- El mismo nombre, teléfono, ciudad y sitio en todos lados. Las diferencias le restan confianza a Google.
- **Directorios:**
  - el directorio empresarial de la Cámara de Comercio de Barranquilla;
  - Clutch y GoodFirms, que aceptan empresas nuevas y piden reseñas verificadas;
  - Páginas Amarillas.
- **Menciones locales**, que pesan más que cualquier directorio:
  - ProBarranquilla;
  - alianzas o charlas en universidades como Uninorte;
  - una nota en prensa local como El Heraldo sobre un caso real cuando exista.

## Lo que no conviene hacer

- No crear páginas por barrio ni por ciudad sin atención real allí: Google las trata como páginas puerta.
- No meter «Barranquilla» en el nombre del perfil de Google Business.
- No publicar precios ni casos inventados para «llenar» el perfil.
