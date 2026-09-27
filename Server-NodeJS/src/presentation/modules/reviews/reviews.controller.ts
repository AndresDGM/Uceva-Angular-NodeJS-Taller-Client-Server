import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { ReviewsService } from "./reviews.service";

/**
 * Controlador de reseñas.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con reseñas,
 * delegando la lógica de negocio al `ReviewsService`.
 */
export class ReviewsController {

  /**
   * Servicio de reseñas.
   */
  private readonly reviewsService = new ReviewsService();

  /**
   * Maneja la petición HTTP para obtener un listado de reseñas.
   *
   * @remarks
   * El número de reseñas a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /reviews/10
   * ```
   */
  getAllReviews = (req: Request, res: Response): void => {
    const { countReviews } = req.params;

    setTimeout(() => {
      this.reviewsService
      .getAllReviews(Number(countReviews))
      .then((reviews) => res.status(201).json(reviews))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
