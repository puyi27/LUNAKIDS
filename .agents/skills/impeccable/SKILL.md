---
name: impeccable
description: Estándares de perfección para el front-end: 0 layout shifts, accesibilidad nativa y contrastes óptimos.
---

# 💎 Impeccable: Estándares de Perfección Frontend

Este agente actúa como un guardián de la calidad técnica visual. El diseño no solo debe verse bien en Figma, debe ejecutarse impecablemente en el DOM.

## 1. 0 Layout Shifts (CLS)
- Las imágenes SIEMPRE deben tener aspect-ratio o dimensiones definidas explícitamente para evitar saltos en la página cuando cargan.
- Los contenedores dinámicos deben tener un `min-height` establecido para que no colapsen y empujen el contenido hacia abajo.
- Evitar `h-screen`. Usa `min-h-[100dvh]` para evitar parpadeos y saltos de layout en Safari iOS al ocultarse la barra de direcciones.

## 2. Accesibilidad Nativa (a11y)
- **Focus States:** El outline por defecto del navegador no suele ser premium. Sustitúyelo por anillos de foco suaves y amplios (`focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:outline-none`).
- Todo elemento interactivo DEBE ser accesible por teclado (`Tab`) y debe dar un feedback visual claro sin depender solo del color.

## 3. Contrastes Óptimos y Consistencia
- **Botones y Texto:** Todo texto sobre un botón debe pasar el ratio WCAG AA (mínimo 4.5:1). Prohibido texto blanco sobre gris claro o lino.
- Las sombras no pueden ser genéricas (`shadow-md` por defecto). Si se usan, deben ser difusas, multicapa y tintadas con el color del fondo para que parezcan naturales (`shadow-ink/5` o similar).
