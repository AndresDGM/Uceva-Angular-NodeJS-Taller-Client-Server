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
     * @openapi
     * /api/reviews/{countReviews}:
     *   get:
     *     summary: Obtener listado de reviews
     *     description: Retorna una lista de reviews generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Reviews
     *     parameters:
     *       - in: path
     *         name: countReviews
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de reviews a generar
     *     responses:
     *       200:
     *         description: Lista de reviews generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Review'
     *       400:
     *         description: Parámetro inválido
     */
  static get routes(): Router {
    const router = Router();
    const controller = new ReviewsController();

    router.get("/:countReviews", controller.getAllReviews);

    return router;
  }
}