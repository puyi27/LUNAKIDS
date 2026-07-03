// scripts/init.mjs
import { execSync } from 'child_process';
import fs from 'fs';

console.log("======================================");
console.log("🌱 INICIALIZANDO LUNAKIDS HARNESS 🌱");
console.log("======================================");

console.log("\n[1/3] Instalando dependencias de NPM...");
try {
  execSync('npm install', { stdio: 'inherit' });
} catch (e) {
  console.error("Error instalando dependencias");
}

console.log("\n[2/3] Verificando entorno...");
if (!fs.existsSync('.env.local')) {
  console.log("⚠️ Advertencia: No existe .env.local.");
  console.log("Se utilizará el modo pasivo (Mock) de Supabase.");
  console.log("Si tienes las credenciales (NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY), créalas ahora.");
}

console.log("\n[3/3] Chequeando directorios críticos...");
if (!fs.existsSync('.agents')) fs.mkdirSync('.agents');
if (!fs.existsSync('scripts')) fs.mkdirSync('scripts');

console.log("\n======================================");
console.log("✅ ENTORNO LISTO. Puedes usar 'npm run dev' para empezar.");
console.log("No olvides usar 'npm run verify' antes de cerrar tus tareas.");
console.log("======================================");
