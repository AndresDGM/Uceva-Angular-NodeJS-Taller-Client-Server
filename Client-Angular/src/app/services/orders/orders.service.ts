import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/order.interface';

/**
 * Servicio encargado de la gestión de órdenes.
 *
 * Proporciona métodos para obtener información de órdenes
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private ordersService: OrdersService) {}
 *
 * this.ordersService.getAllOrders(10).subscribe(orders => {
 *   console.log(orders);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   *
   * Se inyecta mediante la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de órdenes desde el backend.
   *
   * @param countOrders Número de órdenes a obtener.
   * @returns Observable que emite un arreglo de órdenes.
   *
   * @example
   * ```ts
   * this.ordersService.getAllOrders(5).subscribe(orders => {
   *   console.log(orders);
   * });
   * ```
   */
  getAllOrders(countOrders: number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`api/orders/${countOrders}`);
  }
}