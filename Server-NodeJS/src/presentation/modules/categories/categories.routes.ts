import { Router } from "express";
import { CategoriesController } from "./categories.controller";

export class CategoriesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new CategoriesController();

    /**
     * @openapi
     * /api/categories/{countCategories}:
     *   get:
     *     summary: Obtener listado de categorías
     *     description: Retorna una lista de categorías generadas dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Categories
     *     parameters:
     *       - in: path
     *         name: countCategories
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de categorías a generar
     *     responses:
     *       200:
     *         description: Lista de categorías generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Category'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countCategories", controller.getAllCategories);

    return router;
  }
}