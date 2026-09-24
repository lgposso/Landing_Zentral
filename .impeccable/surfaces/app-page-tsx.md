---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/productos/page.tsx","app/productos/[slug]/page.tsx"]
---

# Surface brief — zentral.com.co (home, /productos, /productos/[slug])

Mode: Persuade. Visitors: SMB/clinic/venue buyers and companies wanting custom software, mostly on phones from WhatsApp in Barranquilla daylight, some at office desks. Action: WhatsApp — "Agenda una conversación" (home) and "Solicitar demo" (product). Proof: products shown working with labeled example data; no clients, prices or testimonials. Constraints: logo (original white wordmark on the dark ground) and brand blue #2563EB fixed; /servicios, /recursos, /privacidad URLs kept and inherit the world.

## Direction contract

THESIS: Zentral is the interchange and each product is a line on its network; the Zentral Core is the map. It refuses the old glowing orbit (blue halos, 1px bento grids) and the category's screenshot-plus-bento page; the black ground stays, as the night map.

OWN-WORLD: Night transit map, always dark (user decision): ground #0A0A0A, platform panels #141414, border #2A2A2E, text #FAFAFA, muted #A1A1AA. Octilinear route lines with round caps, bright enough to read on black: Loyalty rose #F23D6D, RIPS green #17A673, Sports orange #EE7A1C, Control violet #9164F2, Zentral brand blue #2563EB (dashed = line under construction = custom work). Station notches cut in the ground color, hollow terminus rings, interchange roundel with a light ring around the brand isotype. Each product is marked by the Zentral isotype tinted in its line color (user decision), never by a lettered bullet. Overpass (Highway Gothic lineage, the FHWA letterforms of Colombian road signs) for display and text; Overpass Mono only for data (codes, hours, amounts). Strip maps, not cards.

STORY: See the network → pick your line → ride its strip map (how it works, what it does, what it doesn't) → request a demo over WhatsApp; or commission your own line (a la medida).

FIRST VIEWPORT: Full-width station-sign H1 "Software para problemas concretos." in two lines, ~80px Overpass 800. Below it, left 5/12: the 20-word subtitle, primary blue "Agenda una conversación", secondary light-outline "Ver los productos". Right 7/12: the network map, hub roundel with the isotype, four colored lines at 45° to termini marked with the tinted isotype (name, sector, one fact) that are links, and a dashed blue line down to "Tu proyecto". Mobile: H1, subtitle, CTAs, then the portrait branch map.

FORM: Transit network diagram / metro wayfinding (grounded list position 1, IMPECCABLE'S PICK). Seed key 2efadade. Roll record: `impeccable concept-seed --scope direction --mode persuade` printed "DIRECTION CONCEPT SEED (key: 2efadade; mode: persuade; source: api; approved pool: c3b204a1eed6)", ASSIGNED INDEX 7 (grounded list position 7, stamped-card ephemera); decision page key 64935203 answered {"optionId":"model-pick"}; choice ping sent with `--kind pick --from 2efadade`.

SIGNATURE INTERACTION: Hover or focus a line anywhere (map terminus, the nav's Productos menu, a home product row) → that line thickens, the others drop to 20%, a train runs hub → terminus. Load: lines draw outward from the hub once. Custom-dev strip map goes from dashed to solid as it scrolls. Reduced motion: static map, no trains.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
