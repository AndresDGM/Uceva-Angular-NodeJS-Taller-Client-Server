import { Component, inject } from '@angular/core';
import { ReviewsTableComponent } from '../../components/reviews-table/reviews-table.component';
import { Review } from '../../interfaces/reviews.interface';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de reseñas.
 *
 * Se utiliza para gestionar y mostrar un listado de reseñas
 * utilizando el componente `ReviewsTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `ReviewsService`
 * para obtener las reseñas y pasarlas al componente de tabla.
 * Controla los estados de la petición ('loading', 'success', 'error')
 * y forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-reviews.page',
  imports: [ReviewsTableComponent, AlertComponent],
  templateUrl: './reviews.page.html',
})
export class ReviewsPage {
  /**
   * Listado de reseñas obtenidas desde el servicio.
   * @type {Review[]}
   */
  reviews: Review[] = [];

  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener reseñas.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private reviewsService = inject(ReviewsService);

  /**
   * Inicializa el componente y carga las reseñas.
   * @remarks
   * Se suscribe al método `getAllReviews()` del servicio y
   * asigna los datos recibidos a la propiedad `reviews`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.reviewsService.getAllReviews(10).subscribe({
      next: (reviews) => {
        this.reviews = reviews;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
