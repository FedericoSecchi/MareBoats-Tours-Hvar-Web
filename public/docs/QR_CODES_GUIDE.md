# QR Codes — MareBoats Hvar

3 códigos QR físicos para imprimir y colocar en puntos clave del negocio.
Cada uno apunta a una página específica del sitio que captura la mejor
intención del guest en ese momento.

Actualizado: abril 2026

---

## Herramienta recomendada

**Generador gratuito:** https://www.qr-code-generator.com

Configuración sugerida:
- Color primario: **#3BC9DB** (turquesa de la marca) sobre blanco
- Color alternativo (impresión económica): negro sobre blanco — siempre
  funciona, máximo contraste
- Formato: **PNG alta resolución (300 dpi mínimo)** para impresión nítida
- Tamaño mínimo impreso: **3 × 3 cm** — por debajo de eso los escaneos
  empiezan a fallar con luz baja

**Antes de imprimir:** probar el QR con al menos 3 teléfonos diferentes
(iPhone reciente, Android reciente, un teléfono más viejo) y desde 30 cm
y 1 m de distancia.

---

## QR #1 — Cartel en el muelle (booking barrel)

**URL:** https://mareboatshvar.com/landing/explore

**Objetivo:** turistas que pasan por el muelle y ven el barril ven los
tours, precios y pueden contactar por WhatsApp desde el móvil.

**Texto sugerido del cartel:**

```
BOAT TOURS FROM HVAR HARBOUR
[ QR AQUÍ ]
Scan for tours & prices
mareboatshvar.com/landing/explore
```

**Ubicación física:** parte frontal del barril, altura ~1 m (a la vista
pero sin estorbar el paso). Usar vinilo resistente al agua o laminado.

---

## QR #2 — Sticker en el barco

**URL:** https://mareboatshvar.com/landing/review

**Objetivo:** al terminar el tour, guests felices escanean el sticker y
dejan review en Google en menos de 30 segundos. Empuja ranking local.

**Texto sugerido del sticker:**

```
⭐ Enjoyed the tour?
Leave a review — 30 seconds
[ QR AQUÍ ]
```

**Ubicación física:** popa del barco o interior de la cabina, a la altura
de los ojos cuando el guest se sienta. Sticker laminado resistente a sal
y sol. Medida recomendada: **8 × 8 cm**.

---

## QR #3 — Guide impreso / tarjeta

**URL:** https://mareboatshvar.com/landing/guide-hvar

**Objetivo:** guests que ya reservaron tour escanean el QR para recibir
la guía de Hvar — restaurantes, playas, tips locales. Suma engagement,
repite tráfico al sitio y captura SEO long-tail.

**Texto sugerido de la tarjeta:**

```
HVAR LOCAL GUIDE
Where to eat · what to do · hidden spots
[ QR AQUÍ ]
Scan for the full guide
```

**Uso sugerido:** entregar la tarjeta después de cada tour, dentro de un
folder con confirmación o como tarjeta de negocio. Medida estándar tarjeta
de negocio: **9 × 5 cm**.

---

## Resumen de URLs

| QR | URL completa                                              | Prioridad |
|----|-----------------------------------------------------------|-----------|
| #1 | https://mareboatshvar.com/landing/explore                 | Alta      |
| #2 | https://mareboatshvar.com/landing/review                  | Alta      |
| #3 | https://mareboatshvar.com/landing/guide-hvar              | Media     |

---

## Buenas prácticas para Nikola

1. **Un QR, un objetivo.** No mezclar llamadas a la acción.
2. **Probar antes de imprimir.** Un QR que no escanea daña la marca.
3. **Explicar la acción.** Debajo del QR siempre escribir qué pasa al
   escanearlo ("Scan for tours & prices" / "Leave a review").
4. **Renovar si cambia la URL.** Si algún día cambia el sitio web, los
   QR físicos quedan inválidos. Por eso conviene usar un redirector
   propio (ej. `/review` redirige a Google) — así el QR no cambia
   aunque cambie el destino final.
5. **Material resistente.** Vinilo o laminado para exterior/barco.
   Papel común se arruina con la humedad del muelle.

---

## Futuro (opcional)

Si en algún momento queremos medir conversión, podemos agregar un query
param a cada URL para distinguir el origen:

- `?src=qr-dock` (cartel muelle)
- `?src=qr-boat` (sticker barco)
- `?src=qr-card` (tarjeta impresa)

Eso nos permitiría ver en Google Analytics cuál de los 3 QR genera más
tráfico. No es urgente, pero útil para decidir dónde reforzar.
