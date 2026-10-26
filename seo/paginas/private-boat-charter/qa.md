# QA — private-boat-charter · 2026-10-26

| Chequeo | Resultado |
|---|---|
| Build | ✅ |
| 1 H1 | ✅ |
| Principal en title y H1 | ✅ `private boat charter hvar` |
| Cobertura keywords ≥ 80% | ✅ 100% (5 exactas + 1 parcial de 6) |
| copy_lint ≥ 85 | ✅ 97/100 |
| 0 [CONFIRMAR] en copy público | ✅ (sigue pendiente con Nikola, pero no se renderiza) |
| JSON-LD válido | ✅ TouristTrip + BreadcrumbList |
| CTA visible 360×740 | ✅ hero + footer |
| Title ≤ 44 chars de origen | ✅ `Private Boat Charter Hvar` = 25, rendered 42 |

## Antes / después

- **Title**: sin cambio (`Private Boat Charter Hvar`, 25).
- **H1**: sin cambio (ya era el principal).
- **Description del tour**: reescrita para abrir con *"A private boat
  with skipper in Hvar, your route for the full day"* y rotar la
  explicación del fuel. Las keywords del cluster entraron todas sin
  forzar.
- **Fuel**: antes decía "usually a few hundred euros for a long day
  depending on distance" — número inventado. Ahora: "we give you a
  realistic fuel estimate before you commit, based on your plan for
  the day".

## kw_coverage.py / copy_lint.py
```
Principal: private boat charter hvar · title ✓ · H1 ✓
Cobertura: 5 exactas + 1 parcial de 6 = 100%

Palabras: 868 · Puntaje humano: 97/100 · ✅ pasa
```

## Pendiente
- [CONFIRMAR] rango concreto de fuel por tipo de día (Nikola, desde
  julio).
