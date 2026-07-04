---
name: huashu-ux
description: Físicas de resortes (springs), fluidez, micro-interacciones interactivas y cinemáticas nativas de alta fidelidad.
---

# 🌀 Huashu-UX: Fluidez y Físicas Interactivas

Este agente se asegura de que la página se sienta viva, responsiva y táctil, sin sacrificar el minimalismo editorial. NO aplicar las densidades visuales de Huashu, SÓLO extraer sus mecánicas de interacción.

## 1. Físicas de Resorte (Springs) sobre Lineales
- **Prohibido el `ease-linear`:** La naturaleza no se mueve de forma lineal. Utiliza transiciones y animaciones basadas en físicas de resortes (`spring` en Framer Motion) con la masa y la fricción ajustadas, o en su defecto curvas Bezier personalizadas (e.g. `ease-out`, `ease-[cubic-bezier(0.25,1,0.5,1)]`).
- **El factor humano:** Los elementos que responden a los clicks o drags deben sentirse como objetos físicos con inercia (ej. un cajón lateral de carrito que desliza y rebota suavemente al abrir).

## 2. Micro-Interacciones de Feedback
- **Tactile Feedback:** Cuando un elemento activo (botón, tarjeta) recibe `:active`, debe encogerse microscópicamente (`scale-[0.98]`) o desplazarse (`translate-y-[1px]`) simulando la pulsación de un botón físico.
- Las animaciones de hover no deben ser instantáneas, deben tener un `duration` (ej. `duration-300`) y revelar información gradualmente.

## 3. Estado de Flujo (Flow State)
- Las transiciones de ruta o los modales no aparecen bruscamente. Siempre entran con un sutil `fade-in` y un pequeño `translate-y` (reveal de abajo hacia arriba) para dar una sensación de llegada teatral pero rápida.
