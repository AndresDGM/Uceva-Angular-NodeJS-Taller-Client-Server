import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/categories.interface';

/**
 * Servicio encargado de la gestión de categorías.
 *
 * Proporciona métodos para obtener información de categorías
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private categoriesService: CategoriesService) {}
 *
 * this.categoriesService.getAllCategories(10).subscribe(categories => {
 *   console.log(categories);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de categorías desde el backend.
   *
   * @param countCategories Número de categorías a obtener.
   * @returns Observable que emite un array de categorías.
   *
   * @example
   * ```ts
   * this.categoriesService.getAllCategories(5).subscribe(categories => {
   *   console.log(categories);
   * });
   * ```
   */
  getAllCategories(countCategories: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`api/categories/${countCategories}`);
  }
}