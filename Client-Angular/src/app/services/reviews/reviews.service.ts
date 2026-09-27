import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../interfaces/reviews.interface';


/**
 * Servicio encargado de la gestión de reseñas.
 *
 * Proporciona métodos para obtener información de reseñas
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private reviewsService: ReviewsService) {}
 *
 * this.reviewsService.getAllReviews(10).subscribe(reviews => {
 *   console.log(reviews);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de reseñas desde el backend.
   *
   * @param countReviews Número de reseñas a obtener.
   * @returns Observable que emite un array de reseñas.
   *
   * @example
   * ```ts
   * this.reviewsService.getAllReviews(5).subscribe(reviews => {
   *   console.log(reviews);
   * });
   * ```
   */
  getAllReviews(countReviews: number): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`api/reviews/${countReviews}`);
  }
}
