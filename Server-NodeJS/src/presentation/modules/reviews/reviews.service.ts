import { faker } from '@faker-js/faker';
import { Review } from '../../../domain/interfaces/review.interface';

/**
 * Servicio encargado de la generación y gestión de reseñas.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar reseñas
 * ficticias, principalmente con fines de prueba o demostración.
 */
export class ReviewsService {

  /**
   * Obtiene un listado de reseñas generadas dinámicamente.
   *
   * @param countReviews Cantidad de reseñas a generar
   * @returns Promesa que resuelve un arreglo de reseñas
   *
   * @example
   * ```ts
   * const reviews = await reviewsService.getAllReviews(10);
   * ```
   */
  public async getAllReviews(countReviews: number): Promise<Review[]> {
    const reviews: Promise<Review>[] = [];

    for (let i = 1; i <= countReviews; i++) {
      reviews.push(this.generateReview(i));
    }

    return Promise.all(reviews);
  }

  /**
   * Genera una reseña ficticia.
   *
   * @param id Identificador único de la reseña
   * @returns Promesa que resuelve una reseña generada
   */
  private generateReview(id: number): Promise<Review> {
    return Promise.resolve({
      id,
      productId: faker.number.int({ min: 1, max: 100 }),
      userId: faker.number.int({ min: 1, max: 50 }),
      rating: faker.number.int({ min: 0, max: 10 }) / 2,
      comment: faker.lorem.sentence(),
      date: faker.date.recent()
    });
  }
}
