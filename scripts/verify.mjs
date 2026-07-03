// scripts/verify.mjs
import { execSync } from 'child_process';
import fs from 'fs';

console.log("======================================");
console.log("🛡️ LUNAKIDS HARNESS VERIFICATION 🛡️");
console.log("======================================");

try {
  console.log("\n[1/2] Verificando compilación de producción (Build)...");
  execSync('npx next build', { stdio: 'inherit' });
  console.log("✅ Build de producción exitoso.");

  console.log("\n[2/2] Chequeo de dependencias de Backend...");
  if (!fs.existsSync('.env.local')) {
    console.log("⚠️ Advertencia: No existe archivo .env.local.");
    console.log("Asegúrate de que el Mock de Supabase en lib/supabase.js esté activo.");
  } else {
    console.log("✅ Archivo .env.local detectado.");
  }

  console.log("\n======================================");
  console.log("🚀 VERIFICACIÓN COMPLETADA CON ÉXITO 🚀");
  console.log("El código está listo para hacer commit y desplegar.");
  console.log("======================================");
  process.exit(0);

} catch (error) {
  console.error("\n❌ Error durante la verificación. La tarea NO está terminada.");
  console.error("Revisa los logs superiores y corrige el error antes de continuar.");
  process.exit(1);
}
