# MareBoats Hvar: reglas del negocio

Fuente única de verdad sobre cómo opera el negocio **hoy**. Todas las sesiones (chat y Claude Code) trabajan con esta información.

Versión 1 · 21/10/2026 · Aprobación: Fede.

**Qué hay acá y qué no.** Solo el estado actual del negocio. Los planes, estrategias y análisis no se copian: están listados en el índice (sección 11).

**Versión del repo.** El repo es público, así que esta copia no tiene los datos internos (reparto de socios, comisiones, descuentos internos, mínimo real de los compartidos). La versión completa vive en el Proyecto como `reglas-negocio.md`. Cualquier cambio se hace en las dos.

**Cómo se mantiene.** Cada cambio a precios, productos, horarios, extras o políticas se anota en el registro de decisiones (sección 9) con fecha y motivo, y se corrige la sección afectada en el mismo cambio. Si un dato no está en este documento ni en una fuente, no se inventa: se pregunta.

## Fuentes

Cada dato lleva la fuente entre corchetes. Si dos fuentes se contradicen, gana la decisión con fecha más reciente.

| Código | Fuente | Fecha |
|---|---|---|
| F | Fede, confirmado en chat | 21/10/2026 |
| D15 | `claude/15-portal-fase3-decisiones.md` (Proyecto) | 21/10/2026 |
| D14 | `claude/14-reglas-plataforma-fran.md` (Proyecto) | 17/10/2026 |
| D13 | `claude/13-tours-otono.md` (Proyecto) | 12/10/2026 |
| D12 | `claude/12-operacion-2027.md` (Proyecto) | 07/10/2026 |
| D06 | `plan-invierno/06-equipo-skippers.md` (Proyecto) | 07/10/2026 |
| GYG | Competencia en GetYourGuide, línea base (Proyecto) | 09/10/2026 |
| PR | `lib/pricing.ts` (repo) | commit `51458e9` |
| TD | `lib/tours-data.ts` (repo) | commit `51458e9` |
| SC | `lib/schema.ts` (repo) | commit `51458e9` |
| CM | `CLAUDE.md` (repo), con la fecha de la sección citada | hasta 12/10/2026 |
| PT | `docs/PENDING_TASKS.md` (repo) | 17-18/09/2026 |
| MEM | Memoria del Proyecto | según se indica |

---

## 1. Quién decide y dónde vive cada dato

- **Decide Fede.** Precios, copy público, OTAs y productos nuevos los aprueba Fede. No hace falta aprobación de Nikola. [F] [D14]
- **El portal de Fran manda en precios, horarios y ofertas.** `lib/pricing.ts` tiene que coincidir con el portal. Si no coinciden, se corrige `pricing.ts`, no el portal. [F]
- **Las reglas viven en este documento.** Si `CLAUDE.md` u otro documento dice algo distinto, gana este. [F]

| Dato | Dónde vive | Nota |
|---|---|---|
| Precios, horarios, ofertas | Portal de Fran (instalación de prueba: mareboats.estudioautomatizacion.com) | Manda el portal [F] [D15] |
| Precios en el sitio | `lib/pricing.ts` | Copia del portal. Cero precios fuera de este archivo [CM 12/07] |
| Reservas | Vesselio, hasta que el portal salga en vivo | "Lo que no está en Vesselio no está vendido" [D12] |
| Reglas de negocio | Este documento | [F] |
| Contenido del sitio (descripciones, includes, FAQ) | `lib/tours-data.ts` y JSX | [CM 12/07] |
| Reglas técnicas y de copy del sitio | `CLAUDE.md` | [CM] |
| Costos, márgenes, comisiones, descuentos internos | Fuera del repo y del build, siempre | Todo lo que entra al build es público [CM 12/07] |

---

## 2. Negocio y equipo

| Dato | Valor | Fuente |
|---|---|---|
| Nombre | MareBoats Hvar | [D14] |
| Moneda | EUR. Precios enteros | [D14] |
| Idioma con clientes | Inglés. El equipo habla EN, HR, IT, ES y DE | [D14] |
| Zona horaria | Europe/Zagreb | [D14] |
| Temporada | Abril a octubre. De noviembre a marzo, solo a pedido | [D14] |
| Contacto público | WhatsApp +385 95 196 6734 (WhatsApp Business). Lo atiende Nikola de 07:00 a 00:00 | [D14] |
| Email público | Ninguno. Todavía no hay email del negocio | [D15] |
| Punto de encuentro | Beach Križa, en el barril de MareBoats, debajo del Beach Bay Hvar Hotel; 3 minutos a pie del ferry. Nunca "Hvar Harbour main dock" | [D14] [CM 09/08] |
| Water taxi | Sin punto de encuentro: vamos al barco del cliente | [D14] |
| Embarque | Desde el muelle de Beach Križa. No está adaptado para movilidad reducida; la tripulación ayuda a subir y bajar | [MEM] [D14] |

### Roles

| Persona | Rol | Fuente |
|---|---|---|
| Fede | Decide todo lo de MareBoats (delegado por Nikola y Jozo). Manager y operaciones, web, sistemas, patrón | [D14] [MEM] |
| Nikola | Fundador. Ventas por teléfono y WhatsApp | [CM 20/07] [D12] |
| Jozo (Josip Mlačić) | Fundador y head skipper. Titular de la entidad legal. Único que maneja el Clubman 26 | [MEM] [D14] |
| Coti | Diseño, redes, Google Business Profile. En el portal carga colores y logo | [CM 20/07] [D15] |
| Skippers 2027 | **Abierto.** En el portal, Jozo y Fede son patrones reales; Skipper 2, 3 y 4 son de prueba | [D15] [D14] |

---

## 3. Flota

Capacidad de venta: **8 por lancha, sin excepción.** Están habilitadas para 12; en público siempre "Licensed for 12. We cap at 8." [D14] [CM]

| Lancha | Cómoda / máxima | Motor | Nota | Fuente |
|---|---|---|---|---|
| Blue Mariner | 5 / 8 | Honda 150 | También se alquila sin skipper | [D14] [D15] |
| Red Mariner | 5 / 8 | Honda 150 | También se alquila sin skipper | [D14] [D15] |
| Jolly 21 | 6 / 8 | Suzuki 250 desde 2027 (hoy Yamaha 250; reemplazo planificado) | | [D14] [D15] [MEM] |
| Clubman 26 | 6 / 8 | Suzuki 300 | **Solo la maneja Jozo.** Hace los transfers con equipaje | [D14] [CM 20/07] |
| Pasara 5hp × 2 | 5 personas | 5 hp | Propias. Motores de Fede y Coti | [D15] [MEM] |

Prioridad: los tours van antes que los alquileres. En el Mariner de alquiler, la prioridad la decide quien aprueba la reserva. [D14] [D15]

---

## 4. Productos y precios vigentes

Cada producto se nombra por su clave en `lib/pricing.ts`. "Online" = oferta de reserva directa en el portal.

### Tours y servicios con skipper

| Producto (clave) | Modalidad | Duración | Precio | Venta | Fuente |
|---|---|---|---|---|---|
| Red Rocks & Pakleni (`red-rocks-pakleni-islands`) | Compartido | 6 h | €85 por persona | Online | [PR] [D14] |
| | Privado medio día | 4 h | €400 | Online | [PR] [D14] |
| | Privado día completo | 6 h | €500 | Online | [PR] [D14] |
| Pakleni Islands (`pakleni-islands`) | Privado | 3 h / 4 h | €300 / €350 | Online | [PR] [D14] |
| 5 Islands & Blue Cave (`blue-cave-pakleni-islands`) | Compartido / Privado | 7 h | €150 por persona / €800 | Online. **Activo en 2027** | [PR] [D14] [F] |
| Sunset Cruise (`sunset-cruise`) | Privado, por tramos | 2 h | Ver tabla | Online | [PR] [D14] |
| Scenic Coast Cruise (`scenic-coast-cruise`) | Privado | 2 h | €250 hasta 4; +€40 por persona; máximo 6 | Online | [PR] [D14] |
| Private Charter (`private-boat-charter`) | Privado | 8 h | €500 por lancha + combustible (cobro posterior) | A pedido. Lanchas: Blue, Red, Jolly, Clubman (Clubman solo con Jozo) | [PR] [D15] |
| Zlatni Rat, Brač (`brac-zlatni-rat`) | Privado, hasta 8 | 6 h | €600 | Solo interno, por WhatsApp | [PR] [D14] |
| Transfer Split ciudad / aeropuerto (`split-airport-transfer`) | Privado | 1 a 1,5 h | €500 / €600 | WhatsApp | [PR] [TD] [D14] |
| Transfer Stari Grad (`stariGrad`) | Privado | | €400 | Solo interno, por WhatsApp | [PR] [CM 04/08] |
| Transfer Brač (`bracOneWay`, `bracReturn`) | Privado | | €450 ida / €800 ida y vuelta | WhatsApp | [PR] |
| Transfer Korčula, Biševo | | | Sin precio, a pedido | WhatsApp | [CM 21/07] [D14] |
| Water taxi a yates frente al puerto (`yachtsNearHarbour`) | | | €50 hasta 5; +€10 por persona; máximo 8 | WhatsApp | [PR] [D14] |
| Water taxi a Pakleni (`pakleniIslands`) | | | €100 hasta 5; +€20 por persona; máximo 8 | WhatsApp | [PR] [D14] |

- Los transfers fuera de Hvar se hacen (Split, aeropuerto, Brač). [F]
- El máximo de 8 del water taxi es una asunción, no está confirmado. [PR]
- Lancha con skipper "desde €500" (`RENTAL_WITH_SKIPPER_FROM`). [PR]

### Sunset por tramos

El tramo define cuántas lanchas salen. Botellas de vino = cantidad de lanchas. [PR] [CM 29/07]

| Personas | Lanchas | Precio |
|---|---|---|
| 1 a 4 | 1 | €250 |
| 5 | 1 | €350 |
| 6 | 2 | €500 |
| 7 a 8 | 2 | €700 |
| 9 o más | 3 | €1.000 |

Incluye vino, agua y fruta. [F] [CM 29/07]

### Grupos de 9 a 16 (privados que no son Sunset)

2 lanchas al doble de precio, sin descuento. Máximo 2 lanchas. Solo privados; los compartidos no se duplican. Van por WhatsApp. Las 3 lanchas son exclusivas del Sunset. [CM 13/07] [CM 29/07] [D14]

### Alquiler sin skipper (precio por día)

| Lancha (clave) | De quién | Personas | Precio | Combustible | Licencia | Depósito | Confirmación | Fuente |
|---|---|---|---|---|---|---|---|---|
| Pasara 5hp (`pasara5hp`) | Propia, 2 unidades | 5 | €150 | Incluido | No | | Al instante | [PR] [D15] |
| Pasara 20hp (`pasara20hp`) | De un tercero: se reenvía con comisión | 5 | €240 | Incluido | No se menciona en el copy | | A pedido: 3 h de anticipación, 2 h para aprobar | [PR] [D15] [CM 04/08] |
| Mariner 150hp (`mariner150hp`) | Propia: Blue y Red | 8 | €400 | Aparte: se entrega lleno y se devuelve lleno | Sí | €300 en efectivo | A pedido | [PR] [D14] [D15] |
| Speedboat 60hp (`speedboat60hp`) | De un tercero, fuera del sistema | 5 | €320 | Incluido | Sí | | WhatsApp | [PR] [D14] |

### Reglas de precio

- Sin temporadas de precio, sin precios por fecha y sin códigos de descuento en 2027. [D14]
- El precio no se baja en otoño: se agrega valor. [D13]
- GetYourGuide publica precios más altos a propósito (€95 por persona en el compartido de Red Rocks, €160 en el 5 Islands). Eso no se carga en el portal ni en `pricing.ts`. [D14] [CM 21/07]
- Fuera de esta etapa: la sección yacht 2027 (precios sin definir). [D14]

---

## 5. Horarios

**Regla:** online se venden turnos fijos. Si hay lugar, el equipo puede reservar desde el portal en otro horario. [D14]

| Producto | Horario online | Fuente |
|---|---|---|
| Red Rocks privado medio día | 09:00-13:00 o 14:00-18:00 | [D14] |
| Red Rocks privado día completo | 11:00-17:00 | [D14] |
| Red Rocks compartido | 11:00-17:00 | [D14] |
| Pakleni privado | 09:00, 11:00 o 14:00 | [D14] |
| 5 Islands | 10:00-17:00 | [D14] |
| Scenic Coast Cruise | Cualquier hora entre 09:00 y 15:00. De mitad de octubre a marzo, última salida 2 h antes de la puesta del sol | [D14] |
| Sunset | Según el mes, ver tabla | [D14] [D15] |
| Transfers, water taxi, Private Charter | A pedido | [D14] [D15] |

### Sunset: sale 1 h antes de la puesta del sol

| Mes | Salida |
|---|---|
| Abril | 18:30 |
| Mayo | 19:00 |
| Junio | 19:30 |
| Julio | 19:30 |
| Agosto | 19:00 |
| Septiembre | 18:15 |
| Octubre | 17:30 hasta el cambio de hora; **16:00 después** (25/10/2026 y 31/10/2027) |

[D14] [D15]

### Operación del día

- Primera salida 09:00; último regreso alrededor de las 21:30 (vuelta del Sunset). [D14]
- Margen entre salidas en la misma lancha: 60 minutos (rotación de 13:00 a 14:00). [D14]
- El día completo de 11:00 a 17:00 ocupa la lancha para los dos turnos de medio día. [D14]
- El combustible se carga a primera hora y dura alrededor de una semana: no entra en el margen. [D14]
- Si algún día se carga el invierno en el portal: el Scenic de noviembre a enero va sin el turno de las 15:00. [D15]

---

## 6. Extras

| Extra | Precio | Cómo se cobra | En qué ofertas | Quién confirma | Fuente |
|---|---|---|---|---|---|
| Underwater Scooter | €40 | Por unidad, no por persona (7 unidades) | **Solo Red Rocks privado y Pakleni privado.** Nunca en alquileres sin skipper | Al instante | [F] [PR] [D14] [D15] |
| Tour Memories: Drone & Underwater Photos | €200 | Por reserva | Solo privados, incluido Scenic. Solo si Fede va a bordo; se pide con un día de anticipación | El equipo, a mano | [PR] [D14] [D15] |
| Prosecco | €30 | Por botella | Scenic, Red Rocks privado, Pakleni privado y Private Charter | Al instante | [PR] [D14] [D15] [F] |
| Botella extra de vino | €30 | Por botella | Sunset | Al instante | [PR] [D14] |

**Tasas de terceros** (se muestran, no suman al total, se pagan en el lugar), solo en 5 Islands: entrada a la Blue Cave €24 por persona, obligatoria; Green Cave €15 por persona, opcional. [PR] [D14]

**No incluido:** almuerzo, en ningún tour. Combustible del Private Charter y del Mariner de alquiler. [D14] [TD]

El Underwater Scooter no se alquila suelto. [CM 27/07]

---

## 7. Políticas

### Salidas compartidas

- Mínimo que se publica: **6 personas.** Deja margen para cancelar si hay un problema. [F]
- Se confirman al instante; no hay mínimo automático en el portal. [D15]
- Si no se llena: reenvío a un barco asociado, juntar salidas o devolución. Se revisa cada mañana. [D15]
- Se llena una lancha antes de abrir otra. [D14]

### Cancelaciones

- Cancela el cliente: sin devolución. [D14]
- Cancela MareBoats por clima u operación: el cliente elige devolución total o nueva fecha. Antes se le ofrece una ruta alternativa protegida, si la hay. [D14]
- Cliente de paso por el día (ferry desde Split): devolución total en el momento. [D14]
- No se presenta: igual que una cancelación del cliente. [D14]
- Llegada tarde: en compartidos se espera 10 minutos; en privados, el tiempo perdido se descuenta del tour. [D14]
- Reservas de GetYourGuide: siguen la política de GYG y se cancelan desde GYG. [D14]
- Blue Cave cerrada: la entrada de €24 no se cobra. [D14]

### A bordo

- Perros: se aceptan. [CM] [D14]
- Botellas de vidrio y comida: permitidas. No se fuma. No hay baño a bordo. [CM]
- El Scenic no tiene parada para nadar. [D15] [TD]
- Seguridad: el bot de clima recomienda, el skipper decide en el agua. [D12] [CM]

### Al reservar

Datos obligatorios del cliente: nombre, email y WhatsApp (propuesta). [D14]

| Pregunta | Obligatoria | En qué ofertas | Fuente |
|---|---|---|---|
| Adultos y chicos, con la edad de los chicos | Sí | Todas | [D14] |
| ¿Alguien no sabe nadar o no quiere meterse al agua? | Sí | Tours, menos Scenic | [D14] [D15] |
| ¿Alguien con movilidad reducida? | Sí | Todas | [D14] |
| ¿Viajan con perro? | No | Todas | [D14] |
| Hora del vuelo o del ferry | Sí | Transfers y Scenic | [D14] |
| ¿Cómo nos encontraste? | No | Todas | [D14] |

### Copy público

Las reglas de copy (sin "RIB", sin cantidad de lanchas, sin nombres del equipo, diacríticos, punto de encuentro) viven en `CLAUDE.md`. Pendiente legal: el "no licence needed" de la Pasara 5hp (ver sección 10). [CM]

---

## 8. Cobro y canales

### Cómo se reserva hoy

- La web no reserva: lleva a WhatsApp, Nikola cierra y carga en Vesselio. [D14]
- El portal de Fran está en prueba. Plan: prueba en abril y mayo con Vesselio en paralelo; cambio completo solo si sale limpio; en julio y agosto no se toca nada. [D14]
- Páginas de reserva en mareboatshvar.com: `/booking/` y `/booking/status/`. [D15]

### Cobro

- **100% online en todas las ofertas.** La seña se puede volver a activar por oferta si los privados convierten poco. [D15]
- Medio de pago: **Teya** es el único (online, links y la máquina del muelle). En la prueba se usa Stripe en modo prueba. [D14] [D15]
- Cobros posteriores: combustible del Mariner de alquiler y del Private Charter, depósito de €300 en efectivo y los extras pedidos en el muelle. [D14] [D15]
- Fiscal: hoy se resuelve con Teya. Falta confirmar con el contador el pago online por link (ver sección 10). [D14]

### Canales

| Canal | Estado | Fuente |
|---|---|---|
| WhatsApp +385 95 196 6734 | Canal principal. Nikola, de 07:00 a 00:00. Backup sin definir | [D14] |
| Web mareboatshvar.com | Lleva a WhatsApp | [D14] |
| Portal de Fran | En prueba | [D15] |
| GetYourGuide | Entre el 20% y el 40% de las reservas de 2026. Red Rocks & Pakleni (t1029796) activo, €95 por persona. 5 Islands (t1099792) no aparecía el 9/10. Vesselio no se sincroniza: Nikola carga a mano | [D14] [GYG] |
| Booking.com | Ficha armada, sin publicar | [D14] |
| Viator y TripAdvisor | Bloqueados por el seguro | [D14] |
| Airbnb Experiences | Bloqueado por la documentación del Ministerio de Turismo | [D14] |
| Mattina Travel (Guadalajara) | Canal informal | [D14] |
| Hoteles | Sin acuerdos | [D14] |

### Reenvíos y comisiones

- Cuando no hay lancha, antes de derivar se ofrece otro horario, una Pasara o el Scenic si el slot lo permite. [D12]
- Pasara 20hp: es de un tercero; se reenvía con comisión (monto no registrado). [D15]
- Compartido que no se llena: reenvío a un barco asociado (ver sección 7). [D15]
- Speedboat 60hp: de un tercero, fuera del sistema. [D14]
- Sección yacht 2027: sin derivación a otras empresas. [brief-seccion-premium]

### Medición

- Conversión: la reserva confirmada (pago recibido), con el valor pagado online. Se dispara una sola vez en la página de estado. [D14]
- GA4 G-QV758MFFZ3, sin cross-domain. El dominio de pago va a "unwanted referrals" (checkout.stripe.com ahora, Teya después). [D14] [D15]
- Avisos del portal: los 9 van a Fede, con Franco en copia mientras dure la prueba. [D15]

---

## 9. Registro de decisiones

De la más nueva a la más vieja. Cada cambio a precios, productos, horarios, extras, políticas o textos se agrega acá, con fecha, motivo y fuente.

### 21/10/2026

- **Se crea este documento** como fuente única de reglas. Motivo: que chat y Claude Code trabajen con la misma información. [F]
- **5 Islands & Blue Cave sigue activo en 2027.** Reemplaza la nota de memoria que lo daba por discontinuado. [F]
- **Compartidos: mínimo público 6, mínimo real 4.** Motivo: el 6 deja margen para cancelar si hay un problema. [F]
- **Prosecco en "Private boat tour" = Red Rocks privado y Pakleni privado.** Aclara D15. [F]
- **Underwater Scooter solo en Red Rocks privado y Pakleni privado.** Corrige D14 y D15, que lo abrían a todos los privados con patrón. [F]
- **Fruta en el Sunset: incluida.** Deja sin efecto la corrección propuesta en D13. [F]
- **Transfers fuera de Hvar: sí.** Aclara una nota de memoria que se refería a llevar las lanchas, no a pasajeros. [F]
- **Aprobaciones: decide Fede; no hace falta Nikola.** [F]
- Fase 3 del portal cerrada. Motivo de cada punto en D15 cuando lo hay. [D15]
  - Pago 100% online en todas las ofertas. Motivo: operativamente más simple. [D15] [MEM]
  - Pasaras: 2 de 5hp propias; la 20hp pasa a ser de un tercero, a pedido y con comisión. [D15]
  - Mariner de alquiler: Blue y Red, a pedido. [D15]
  - Compartidos sin mínimo automático, confirmación al instante. [D15]
  - Sunset de octubre: 16:00 después del cambio de hora. [D15]
  - Private Charter cargado como oferta a pedido, 8 h, €500 por lancha + combustible. [D15]
  - Scenic sin scooter ni pregunta de nadar (no hay baño); drone y prosecco sí. [D15]
  - Email público: ninguno. Motivo: todavía no hay email del negocio. [D15]
  - Rutas de reserva `/booking/` y `/booking/status/`. [D15]

### 17/10/2026

- Reglas v1.0 para cargar el portal. [D14]
  - Fede decide todo lo de MareBoats: Nikola y Jozo se lo delegaron. [D14]
  - Teya es el único medio de pago. [D14]
  - Sin temporadas de precio, sin precios por fecha y sin códigos de descuento en 2027. [D14]
  - Online se venden turnos fijos. [D14]
  - Sunset sale 1 h antes de la puesta del sol, por mes. [D14]
  - Conexión con GetYourGuide en los dos sentidos: imprescindible antes de julio. [D14]

### 12/10/2026

- Precio de otoño: no se baja. Motivo: un precio de otoño publicado lo citan los asistentes de IA como el precio de MareBoats todo el año. [D13]

### Septiembre 2026

- Fede pasa a decidir precios, copy, OTAs y productos nuevos. [MEM]
- Producto nuevo: Scenic Coast Cruise, privado, 2 h, €250 hasta 4 (5 y 6 con recargo). Para temporada media y para los que llegan en ferry desde Split. [MEM]
- Land scooter discontinuado. `SCOOTER_RENTAL` queda en `pricing.ts` comentado. [PT]
- Capacidad en público: habilitado contra lo que llevamos ("Licensed for 12. We cap at 8."). [PT]

### 09/08/2026

- Speedboat 60hp: €290 → €320. [CM 09/08]
- Temporada: mayo-septiembre → abril-octubre. [CM 09/08]
- Punto de encuentro corregido a Beach Križa en todo el sitio. [CM 09/08]

### 04/08/2026

- Pasara 20hp: €200 → €240. Toda mención a licencia sacada del copy. Motivo: las fuentes sobre el límite legal no coinciden. [CM 04/08]
- 5 Islands: compartido €130 → €150, privado €700 → €800. [CM 04/08]
- Transfer Stari Grad: fuera del sitio público, se mantiene para cotizaciones internas. Motivo: decisión de negocio. [CM 04/08]

### 29/07/2026

- Sunset por tramos (1-4, 5, 6, 7-8, 9+) y lanchas por tramo. Motivo: el Sunset prioriza comodidad sobre densidad. [CM 29/07]
- Pakleni 4 h a €350, junto al de 3 h a €300. [CM 29/07]
- Mínimo compartido: público 6, real 4. Motivo: el 6 evita que los grupos se declaren menos para forzar la salida. [CM 29/07]

### 27/07/2026

- El Underwater Scooter no se alquila suelto: es extra de tours privados. Motivo: confusión de clientes por WhatsApp. [CM 27/07]

### 21/07/2026

- Pasara 5hp: €120 → €150. [CM]
- Mariner 150hp: €350 → €400. Motivo: bajar el volumen de alquiler y el riesgo operativo. [CM]
- Water taxi deja de ser "a pedido": €50 y €100 base. [CM 21/07]
- Producto nuevo: Zlatni Rat, Brač, €600. Transfer Brač €450 / €800. [CM 21/07]

### 13/07/2026

- Grupos grandes: máximo 8 por lancha, precio doble sin descuento, máximo 2 lanchas. [CM 13/07]
- Green Cave: €12 → €15 y pasa a ser opcional. [CM 13/07]

### 12/07/2026

- `lib/pricing.ts` pasa a ser la única fuente de precios del sitio. Motivo: los precios duplicados en 11 archivos ya se habían desincronizado. [CM 12/07]

### 29/05/2026

- Flota confirmada: 4 lanchas (Blue Mariner, Red Mariner, Jolly, Clubman) con capacidad cómoda y máxima. [CM 29/05]

---

## 10. Pendientes, por responsable

### Fede

- Acuerdo con Nikola por los motores de las Pasaras. [D15]
- Salida en vivo del portal: sumar a Nikola a los avisos operativos, sacar a Franco, crear el usuario Operador de Nikola y los usuarios Socio de Nikola y Jozo. [D15]
- Nombres y horarios reales de Skipper 2, 3 y 4. [D15]
- Fotos propias en el portal (Sitio web → Imágenes). [D15]
- Renovar la clave del portal antes de que venza (aprox. 17/11/2026). [D15]
- Portal: ajustar el scooter (solo Red Rocks y Pakleni privados) y el prosecco (Scenic, Red Rocks privado, Pakleni privado, Private Charter) según las decisiones del 21/10. [F]
- Comprobar en vivo que `pricing.ts` coincide con el portal. [F]
- Acceso de desarrollador en Teya y link de pago por reserva (Franco integra). [D14]
- Estado del 5 Islands (t1099792) en GetYourGuide: no aparecía el 9/10. [D14] [GYG]
- Pasarle a Franco 2 o 3 mails de GYG de ejemplo (confirmación y cancelación), con datos tapados. [D14]
- Acuerdo de soporte en temporada con Franco. [D14]
- Backup de Nikola en el teléfono. [D14]
- Botellas del Sunset en tramos medios ("una cada 3 personas, mínimo una por lancha"): decisión pendiente, antes era de Nikola. [CM 29/07]
- Sitio, desfasado respecto de este documento (con Claude Code):
  - `lib/schema.ts`: sacar `mare.boatshvar@gmail.com`. [D15] [SC]
  - `lib/schema.ts`: `openingHoursSpecification` vence el 31/10/2026; definir el horario de noviembre a marzo. Mismo tema que el horario de Google Business Profile. [SC] [D13] [CM]
  - Red Rocks: la ruta del sitio y de `llms.txt` termina en Palmižana con almuerzo en Bacchus. La ruta real (memoria y D06): Red Rocks → Dubovica → Borče (solo en boya) → Milna/Ždrilca (almuerzo en Tri Grede) → Hvar; Perna si sobra tiempo; Palmižana no es parada. Confirmar antes de cambiar el copy. [TD] [MEM] [D06]
  - Red Rocks compartido: una FAQ dice que el horario se confirma por WhatsApp; el horario es fijo, 11:00-17:00. [TD] [D14]
  - Sunset: `includes` dice "Wine included for groups up to 6"; la regla es una botella por lancha en todos los tramos. [TD] [PR]
  - Underwater Scooter: el texto del sitio ya dice "Red Rocks and Pakleni Islands private tours only". Sin cambio. [TD]

### Franco

- Mails al cliente sin "respondé a este correo": que manden a WhatsApp. [D15]
- Aviso de "salida en riesgo" para compartidos. [D15]
- Avisos al equipo por Telegram mediante webhook al n8n (WhatsApp como segunda opción). [D15]
- A futuro: que el cliente elija entre seña o total; marcar lanchas de terceros con comisión. [D15]
- Fase 4: confirmar orígenes habilitados y `PUBLIC_SITE_URL` = https://booking-api--mareboatshvar.netlify.app. [D15]
- Corregir en la guía: GA4 sin cross-domain, usar "unwanted referrals". [D15]
- Pedido de conexión a GYG a supplier-api@getyourguide.com como integrador, con el OK de Fede. [D14]

### Contador

- Cómo se cobra la Pasara 20hp de terceros (total y gasto al dueño, o solo la comisión online). [D15]
- Si lo fiscal de Teya vale también para el pago online por link, y cómo se nombra la seña en la factura (kapara o predujam). [D14]

### Nikola

- Motivo concreto del "no licence needed" de la Pasara 5hp: ley náutica (se queda) o seguro o licencia de charter (se saca). Hasta tener la respuesta, el sitio queda como está. [CM]
- Rango realista de combustible del Private Charter. [CM 21/07]
- Precios de los transfers a Korčula y Biševo. [CM 21/07]
- Confirmar que la entrada a la Blue Cave sigue en €24. [CM]

---

## 11. Índice de los demás documentos

No son reglas del negocio: son planes, análisis o contexto. Si alguno decide algo que cambia una regla, la decisión se pasa a este documento.

### Proyecto (claude.ai)

| Documento | Qué contiene |
|---|---|
| `claude/15-portal-fase3-decisiones.md` | Decisiones de la fase 3 del portal (21/10). Hay una copia idéntica en la raíz. No se borra hasta que Fede apruebe |
| `claude/14-reglas-plataforma-fran.md` | Reglas v1.0 del negocio para cargar el portal (17/10). No se borra hasta que Fede apruebe |
| `claude/13-tours-otono.md` | Producto y lanzamiento de los tours de otoño e invierno: formatos, horarios por luz, seguridad y copy propuesto |
| `claude/12-operacion-2027.md` | Borrador de cómo funciona un día de la temporada 2027: funciones, check-in, pantalla de salidas, clima y cancelaciones |
| `claude/analisis-precio-yacht-2027.md` | Análisis de precio de la sección yacht 2027. Tiene costos: no va al repo |
| `claude/brief-seccion-premium.md` | Brief de la sección yacht 2027 para Claude Code (también en `docs/` del repo) |
| `claude/04-electricidad-marina.md` | Método y lista de materiales del refit eléctrico de invierno 2026/27 |
| `plan-invierno/03-compra-barco.md` | Criterios y modelos para el Biograd Boat Show: Saxdor y semirrígidos de categoría |
| `plan-invierno/06-equipo-skippers.md` | Plantilla de skippers 2027, permisos de trabajo, propuesta de sueldo y manual del skipper |
| `mareboats_datos_temporada_2026.md` | Datos digitales de 2026 (GA4, Search Console, Ads, Google Business Profile) al 10/10. Subido dos veces |
| `Competencia de MareBoats Hvar en GetYourGuide- línea base de octubre 2026.md` y `baseline_2026-10.csv` | Precios y reseñas de la competencia en GYG al 9/10 |
| `Mercado de tours en Hvar 2027.pdf` | Análisis de mercado 2027: temporada media como palanca de crecimiento y riesgo de las reglas de fondeo en Pakleni |
| `BASELINE_SEO_GEO_2026-08.md` | Línea de base SEO y GEO al 09/08 y calendario de medición |
| `MareBoats_Informe_GA4_Ads.docx` | Informe de GA4 y Google Ads, 6/5 a 3/8 |
| `MareBoats_Proposal_2026_CORREGIDO.docx.pdf` | Propuesta de marketing y contenido para la temporada 2026 (abril) |
| `Mareboats tours 2026.pdf` | Catálogo de tours enviado por Nikola en abril de 2026. Precios viejos |
| `CLAUDE.md` y `CLAUDE_md.pdf` | Versiones viejas del contexto técnico. La vigente es la del repo |
| `mareBoats_tasks.json` | Plan de fases de la web de abril de 2026. Histórico |
| `KOSMOS_SKILL.md`, `human-copy-SKILL.md`, `ux-conversion-SKILL.md`, `13 instrucciones para ahorrar tokens en Claude y Claude Code.md` | Skills y reglas de trabajo de Somos Kosmos, no del negocio |
| `_chat.txt` | Export del WhatsApp entre Fede y Nikola, de 2023 a abril de 2026. Tiene datos personales y de acceso: no se copia a ningún lado |
| `Vies ontheWeb European Commission.pdf` | Validación del número de IVA en VIES (13/04/2026) |

### Repo

| Documento | Qué contiene |
|---|---|
| `CLAUDE.md` | Contexto técnico del sitio, reglas de copy y changelog |
| `docs/PENDING_TASKS.md` | Pendientes y decisiones del sitio (septiembre) |
| `docs/brief-seccion-premium.md` | Brief de la sección yacht 2027 |
| `PROYECTO.md` | Ficha corta del proyecto: paleta y tipografías |

### Memoria del Proyecto

`overview.md` (contexto general, flota, personas, planes de invierno), `learnings-and-principles.md`, `tools-and-systems.md` y `ways-of-working.md`.
