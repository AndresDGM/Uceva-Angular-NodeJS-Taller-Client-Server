import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from '../../../domain/interfaces/order.interface';

/**
 * Servicio encargado de la generación y gestión de órdenes.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar órdenes
 * ficticias, principalmente con fines de prueba o demostración.
 */
export class OrdersService {

  /**
   * Estados disponibles para las órdenes.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente un estado
   * a cada orden generada.
   */
  private statuses: OrderStatus[] = [
    'Pendiente',
    'Procesando',
    'Enviado',
    'Entregado',
    'Cancelado',
  ];

  /**
   * Obtiene un listado de órdenes generadas dinámicamente.
   *
   * @param countOrders Cantidad de órdenes a generar.
   * @returns Promesa que resuelve un arreglo de órdenes.
   *
   * @example
   * ```ts
   * const orders = await ordersService.getAllOrders(5);
   * ```
   */
  public async getAllOrders(countOrders: number): Promise<Order[]> {
    const orders: Promise<Order>[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push(this.generateOrder(i));
    }

    return Promise.all(orders);
  }

  /**
   * Genera una orden ficticia.
   *
   * @param id Identificador único de la orden.
   * @returns Promesa que resuelve una orden generada.
   */
  private generateOrder(id: number): Promise<Order> {
    return Promise.resolve({
      id,
      customerName: faker.person.fullName(),
      date: faker.date.recent({ days: 30 }).toISOString(),
      total: faker.number.float({
        min: 50000,
        max: 1500000,
        fractionDigits: 2,
      }),
      status: faker.helpers.arrayElement(this.statuses),
      itemCount: faker.number.int({ min: 1, max: 10 }),
    });
  }
}