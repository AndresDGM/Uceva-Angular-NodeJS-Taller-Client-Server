import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { CategoriesService } from "./categories.service";

/**
 * Controlador de categorías.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con categorías,
 * delegando la lógica de negocio al `CategoriesService`.
 */
export class CategoriesController {

  /**
   * Servicio de categorías.
   */
  private readonly categoriesService = new CategoriesService();

  /**
   * Maneja la petición HTTP para obtener un listado de categorías.
   *
   * @remarks
   * El número de categorías a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /categories/10
   * ```
   */
  getAllCategories = (req: Request, res: Response): void => {
    const { countCategories } = req.params;

    setTimeout(() => {
      this.categoriesService
      .getAllCategories(Number(countCategories))
      .then((categories) => res.status(201).json(categories))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}