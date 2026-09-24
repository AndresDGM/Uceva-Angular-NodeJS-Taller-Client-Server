import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType, IconAtom } from '@brejcha13320/design-system-bootstrap';
import { Category, CategoryStatus } from '../../interfaces/categories.interface';

/**
 * Componente de tabla de categorías.
 *
 * Se utiliza para mostrar un listado de categorías en una tabla,
 * mostrando información como id, nombre, descripción, icono, estado
 * y la cantidad de productos asociados a cada categoría.
 *
 * @remarks
 * Este componente recibe las categorías desde un componente padre
 * a través del Input `categories` y utiliza el mapeo `statusMap`
 * para asignar colores a los badges según el estado.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-categories-table [categories]="categoriesList"></app-categories-table>
 * ```
 */
@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  imports: [BadgeAtom, IconAtom],
})
export class CategoriesTableComponent {
  /**
   * Listado de categorías que se mostrarán en la tabla.
   * @type {Category[]}
   * @remarks
   * Este Input permite pasar un array de categorías desde un componente padre.
   * Cada categoría debe cumplir la interfaz `Category`.
   */
  @Input() categories: Category[] = [];
  /**
   * Mapeo de estados de categorías a tipos de Badge.
   * @type {Record<CategoryStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado:
   * - 'Activa' → 'success' (verde)
   * - 'Inactiva' → 'danger' (rojo)
   *
   * Esto permite que en la tabla cada categoría tenga un badge visual
   * que indique su estado de forma clara para el usuario.
   */
  statusMap: Record<CategoryStatus, BadgeType> = {
    'Activa': 'success',
    'Inactiva': 'danger',
  }
}