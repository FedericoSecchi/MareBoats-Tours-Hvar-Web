# QA — boat-rental-hvar-without-licence · 2026-10-26

| Chequeo | Resultado |
|---|---|
| Build | ✅ |
| 1 H1 | ✅ |
| Principal en H1 | ✅ verbatim como pregunta |
| Principal en title | ⚠️ no — el principal son 48 chars y la regla de ≤44 chars del title no deja meterlo entero. Se usa la secundaria `boat licence croatia` en title. Trade-off documentado en brief.md. |
| Cobertura keywords ≥ 80% | ✅ 100% (4/4 exactas) |
| copy_lint ≥ 85 | ✅ 96/100 |
| CTA visible | ✅ dos CTAs en el hero: Pasara 5hp + Private Charter |
| Title ≤ 44 chars de origen | ✅ 38 (rendered 55) |

## Nota de regla
Las dos reglas (principal en title + title ≤44) chocan cuando la
keyword principal es informacional larga. Preferencia: principal en
H1 verbatim (gana la question-match de voice/featured), title corto
con secundaria del cluster.
