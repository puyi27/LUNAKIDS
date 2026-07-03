#!/bin/bash
# scripts/init.sh
# Inicialización de Entorno LUNAKIDS

echo "======================================"
echo "🌱 INICIALIZANDO LUNAKIDS HARNESS 🌱"
echo "======================================"

echo "[1/3] Instalando dependencias de NPM..."
npm install

echo "[2/3] Verificando entorno..."
if [ ! -f ".env.local" ]; then
  echo "⚠️ Advertencia: No existe .env.local."
  echo "Se utilizará el modo pasivo (Mock) de Supabase."
  echo "Si tienes las credenciales (NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY), créalas ahora."
fi

echo "[3/3] Chequeando directorios críticos..."
mkdir -p .agents
mkdir -p scripts

echo "======================================"
echo "✅ ENTORNO LISTO. Puedes usar 'npm run dev' para empezar."
echo "No olvides usar 'npm run verify' antes de cerrar tus tareas."
echo "======================================"
