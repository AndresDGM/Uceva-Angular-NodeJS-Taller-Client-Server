import { Router } from "express";
import { ReviewsController } from "./reviews.controller";

/**
 * Rutas del módulo de reseñas.
 *
 * @remarks
 * Esta clase define las rutas correspondientes al recurso de reseñas
 * y las asocia con su respectivo controlador.
 */
export class ReviewsRoutes {

  /**
   * Obtiene y configura las rutas de Express para reseñas.
   *
   * @returns Enrutador de Express configurado
   */
  static get routes(): Router {
    const router = Router();
    const controller = new ReviewsController();

    router.get("/:countReviews", controller.getAllReviews);

    return router;
  }
}