import { test, expect } from '@playwright/test';

test.describe('LUNAKIDS Atelier E2E', () => {
  test('Flujo Atelier: Producto VIP muestra botón de Conserje de WhatsApp en vez de Añadir a la Cesta', async ({ page }) => {
    // 1. Visitar Home
    await page.goto('/');
    
    // 2. Navegar a la Colección
    const collectionLink = page.getByRole('link', { name: 'Colección' }).first();
    await collectionLink.click();
    await expect(page).toHaveURL(/.*\/coleccion/);

    // 3. Verificar que cargan los productos y entrar en el primero (que es Atelier VIP)
    const productLink = page.locator('a[href^="/producto/"]').first();
    await expect(productLink).toBeVisible();
    await productLink.click({ force: true });
    
    // Esperar a que la página del producto cargue
    await expect(page).toHaveURL(/.*\/producto\/.+/);

    // 4. Verificar que NO hay botón de añadir a la cesta
    const addToCartBtn = page.getByRole('button', { name: /Añadir a la Cesta/i });
    await expect(addToCartBtn).toHaveCount(0);

    // 5. Verificar que SÍ está el enlace de Conserje VIP de WhatsApp
    const conserjeLink = page.getByRole('link', { name: /Hablar con el Conserje del Atelier/i });
    await expect(conserjeLink).toBeVisible();
    
    // Verificar que el enlace apunta a WhatsApp
    await expect(conserjeLink).toHaveAttribute('href', /wa\.me/);
  });
});
