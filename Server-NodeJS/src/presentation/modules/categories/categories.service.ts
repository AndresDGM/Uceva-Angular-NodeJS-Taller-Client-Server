import { Category, CategoryStatus } from '../../../domain/interfaces/category.interface';
import { faker } from '@faker-js/faker';

/**
 * Servicio encargado de la generación y gestión de categorías.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar categorías
 * ficticias, principalmente con fines de prueba o demostración.
 */
export class CategoriesService {

  /**
   * Iconos de bootstrap-icons disponibles para las categorías.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente un icono
   * a cada categoría generada.
   */
  private icons: string[] = [
    'bi-box-seam',
    'bi-cart',
    'bi-egg-fried',
    'bi-cup-hot',
    'bi-apple',
    'bi-basket',
    'bi-tag',
    'bi-shop',
  ];

  /**
   * Estados disponibles para las categorías.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente un estado
   * a cada categoría generada.
   */
  private statuses: CategoryStatus[] = [
    'Activa',
    'Inactiva',
  ];

  /**
   * Obtiene un listado de categorías generadas dinámicamente.
   *
   * @param countCategories Cantidad de categorías a generar
   * @returns Promesa que resuelve un arreglo de categorías
   *
   * @example
   * ```ts
   * const categories = await categoriesService.getAllCategories(5);
   * ```
   */
  public async getAllCategories(countCategories: number): Promise<Category[]> {
    const categories: Promise<Category>[] = [];

    for (let i = 1; i <= countCategories; i++) {
      categories.push(this.generateCategory(i));
    }

    return Promise.all(categories);
  }

  /**
   * Genera una categoría ficticia.
   *
   * @param id Identificador único de la categoría
   * @returns Promesa que resuelve una categoría generada
   */
  private generateCategory(id: number): Promise<Category> {
    const name = faker.commerce.department();
    const adjective = faker.commerce.productAdjective();

    return Promise.resolve({
      id,
      name,
      description: `${adjective} ${name}`,
      icon: faker.helpers.arrayElement(this.icons),
      status: faker.helpers.arrayElement(this.statuses),
      productCount: faker.number.int({ min: 1, max: 30 }),
    });
  }
}