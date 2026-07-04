import { test, expect } from '@playwright/test';

test.describe('LUNAKIDS Shop E2E', () => {
  test('Flujo de compra: Home -> Colección -> Producto -> Carrito', async ({ page }) => {
    // 1. Visitar Home
    await page.goto('/');
    await expect(page).toHaveTitle(/Luna Kids/i);

    // 2. Navegar a la Colección
    const collectionLink = page.getByRole('link', { name: 'Colección' }).first();
    await collectionLink.click();
    await expect(page).toHaveURL(/.*\/coleccion/);

    // 3. Verificar que cargan los productos y entrar en uno que no sea Atelier (el segundo producto -> link 3)
    const productLink = page.locator('a[href^="/producto/"]').nth(2);
    await expect(productLink).toBeVisible();
    await productLink.click({ force: true });
    
    // Esperar a que la página del producto cargue
    await expect(page).toHaveURL(/.*\/producto\/.+/);

    // 4. Seleccionar talla usando el slider de la cinta métrica (simulado interactuando con las teclas)
    const tapeMeasure = page.getByRole('slider');
    await expect(tapeMeasure).toBeVisible();
    await tapeMeasure.focus();
    await page.keyboard.press('ArrowRight'); // Mover a la siguiente talla

    // 5. Añadir a la Cesta
    const addToCartBtn = page.getByRole('button', { name: /Añadir a la Cesta/i });
    await expect(addToCartBtn).toBeVisible();
    await addToCartBtn.click();

    // 6. Verificar que se abre el carrito (CartDrawer)
    const cartHeader = page.getByRole('heading', { name: /Tu paquete de Sevilla/i });
    await expect(cartHeader).toBeVisible();

    // 7. Verificar subtotal
    const subtotalText = page.getByText(/Subtotal/i);
    await expect(subtotalText).toBeVisible();

    // 8. Preparar el envío ( Checkout button )
    const checkoutBtn = page.getByRole('button', { name: /Preparar mi envío/i });
    await expect(checkoutBtn).toBeVisible();
  });
});
