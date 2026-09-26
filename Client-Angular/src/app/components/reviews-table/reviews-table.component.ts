import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review, ReviewsRatings } from '../../interfaces/reviews.interface';

/**
 * Componente de tabla de reseñas.
 *
 * Se utiliza para mostrar un listado de reseñas en una tabla,
 * presentando detalles como id de producto, cliente, calificación por estrellas,
 * comentario y fecha de publicación.
 *
 * @remarks
 * Este componente recibe las reseñas desde un componente padre
 * a través del Input `reviews` y utiliza el arreglo `stars`
 * para renderizar dinámicamente las estrellas de calificación.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-reviews-table [reviews]="reviewsList"></app-reviews-table>
 * ```
 */
@Component({
  selector: 'app-reviews-table',
  imports: [CommonModule],
  templateUrl: './reviews-table.component.html',
})
export class ReviewsTableComponent {
  /**
   * Arreglo base de 5 estrellas utilizado para evaluar y renderizar
   * la calificación en el template HTML.
   * @type {number[]}
   */
  readonly stars = [1, 2, 3, 4, 5];

  /**
   * Listado de reseñas que se mostrarán en la tabla.
   * @type {Review[]}
   * @remarks
   * Este Input permite pasar un array de reseñas desde un componente contenedor
   * como `ReviewsPage`. Cada elemento debe cumplir con la interfaz `Review`.
   */
  @Input() reviews: Review[] = [];
}
