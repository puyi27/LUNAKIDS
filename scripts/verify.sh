#!/bin/bash
# scripts/verify.sh
# Harness Verification Script for LUNAKIDS

echo "======================================"
echo "🛡️ LUNAKIDS HARNESS VERIFICATION 🛡️"
echo "======================================"

echo "[1/3] Running Next.js Linting..."
npm run lint
LINT_EXIT=$?
if [ $LINT_EXIT -ne 0 ]; then
  echo "❌ Error: Linter falló. Corrige los problemas de sintaxis o hooks antes de continuar."
  exit 1
fi
echo "✅ Linting superado."

echo "[2/3] Verificando compilación de producción (Build)..."
# Usamos un build rápido que comprueba tipos y generación de páginas estáticas
npm run build
BUILD_EXIT=$?
if [ $BUILD_EXIT -ne 0 ]; then
  echo "❌ Error: La compilación ha fallado. Esto romperá el despliegue en Vercel."
  echo "Por favor, revisa el error en los logs de build superior, corrígelo, y vuelve a ejecutar verify."
  exit 1
fi
echo "✅ Build de producción exitoso."

echo "[3/3] Chequeo de dependencias de Backend..."
if [ ! -f ".env.local" ]; then
  echo "⚠️ Advertencia: No existe archivo .env.local."
  echo "Asegúrate de que el Mock de Supabase en lib/supabase.js esté activo si esto es intencionado."
else
  echo "✅ Archivo .env.local detectado."
fi

echo "======================================"
echo "🚀 VERIFICACIÓN COMPLETADA CON ÉXITO 🚀"
echo "El código está listo para hacer commit y desplegar."
echo "======================================"
exit 0
