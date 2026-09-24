/**
 * Interfaz que representa una categoría del sistema.
 *
 * Contiene la información básica necesaria para mostrar una categoría
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada categoría debe tener un `id` único, un `name` descriptivo,
 * una `description`, un `icon` de bootstrap-icons, un `status` válido
 * y la cantidad de productos asociados (`productCount`).
 *
 * @example
 * ```ts
 * const categoria: Category = {
 *   id: 1,
 *   name: 'Lácteos',
 *   description: 'Productos derivados de la leche',
 *   icon: 'bi-cup-hot',
 *   status: 'Activa',
 *   productCount: 12
 * };
 * ```
 */
export interface Category {
  /** Identificador único de la categoría */
  id: number;

  /** Nombre de la categoría */
  name: string;

  /** Descripción de la categoría */
  description: string;

  /** Icono de bootstrap-icons asociado a la categoría */
  icon: string;

  /** Estado de la categoría */
  status: CategoryStatus;

  /** Cantidad de productos asociados a la categoría */
  productCount: number;
}

/**
 * Tipo de estado de una categoría.
 *
 * @remarks
 * Este tipo restringe el estado a los valores predefinidos:
 * - 'Activa'
 * - 'Inactiva'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: CategoryStatus = 'Activa';
 * ```
 */
export type CategoryStatus = 'Activa' | 'Inactiva';