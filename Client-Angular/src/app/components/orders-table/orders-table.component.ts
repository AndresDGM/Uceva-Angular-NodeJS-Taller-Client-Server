import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Order, OrderStatus } from '../../interfaces/order.interface';

/**
 * Componente de tabla de órdenes.
 *
 * Se utiliza para mostrar un listado de órdenes en una tabla,
 * mostrando información como id, cliente, fecha, total,
 * estado y cantidad de productos.
 *
 * @remarks
 * Este componente recibe las órdenes desde un componente padre
 * a través del Input `orders` y utiliza el mapeo `statusMap`
 * para asignar tipos de Badge según el estado de cada orden.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-orders-table [orders]="ordersList"></app-orders-table>
 * ```
 */
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  imports: [BadgeAtom, DatePipe, CurrencyPipe],
})
export class OrdersTableComponent {
  /**
   * Listado de órdenes que se mostrarán en la tabla.
   *
   * @type {Order[]}
   */
  @Input() orders: Order[] = [];

  /**
   * Mapeo de estados de órdenes a tipos de Badge.
   *
   * @type {Record<OrderStatus, BadgeType>}
   *
   * @remarks
   * Permite asignar una representación visual diferente
   * según el estado actual de la orden.
   */
  statusMap: Record<OrderStatus, BadgeType> = {
    'Pendiente': 'warning',
    'Procesando': 'info',
    'Enviado': 'primary',
    'Entregado': 'success',
    'Cancelado': 'danger',
  };
}