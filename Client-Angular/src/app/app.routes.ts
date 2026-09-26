import { Routes } from '@angular/router';
import { UsersPage } from './pages/users/users.page';
import { ProductsPage } from './pages/products/products.page';
import { CategoriesPage } from './pages/categories/categories.page';
import { ReviewsPage } from './pages/reviews/reviews.page';
import { OrdersPage } from './pages/orders/orders.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 * @see {@link CategoriesPage}
 * @see {@link OrdersPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de categorías.
   *
   * @remarks
   * Renderiza el componente `CategoriesPage`, encargado
   * de mostrar y gestionar el listado de categorías.
   */
  { path: 'categories', component: CategoriesPage },

  /**
   * Ruta de reseñas.
   *
   * @remarks
   * Renderiza el componente `ReviewsPage`, encargado
   * de mostrar y gestionar el listado de reseñas.
   */
  { path: 'reviews', component: ReviewsPage },

  /**
   * Ruta de órdenes.
   *
   * @remarks
   * Renderiza el componente `OrdersPage`, encargado
   * de mostrar y gestionar el listado de órdenes.
   */
  { path: 'orders', component: OrdersPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];