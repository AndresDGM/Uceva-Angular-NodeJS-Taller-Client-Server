/**
 * Interfaz que representa una orden del sistema.
 *
 * Contiene la información básica necesaria para mostrar una orden
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada orden debe tener un `id` único, un `customerName` con el nombre
 * del cliente, una fecha de creación, el valor total de la orden,
 * un estado válido y la cantidad de productos incluidos.
 *
 * @example
 * ```ts
 * const orden: Order = {
 *   id: 1,
 *   customerName: 'Juan Pérez',
 *   date: '2026-09-26T10:30:00.000Z',
 *   total: 250000,
 *   status: 'Procesando',
 *   itemCount: 3
 * };
 * ```
 */
export interface Order {
  /** Identificador único de la orden */
  id: number;

  /** Nombre completo del cliente asociado a la orden */
  customerName: string;

  /** Fecha de creación de la orden */
  date: string;

  /** Valor total de la orden */
  total: number;

  /** Estado actual de la orden */
  status: OrderStatus;

  /** Cantidad de productos incluidos en la orden */
  itemCount: number;
}

/**
 * Tipo de estado de una orden.
 *
 * @remarks
 * Este tipo restringe el estado a los valores predefinidos:
 * - 'Pendiente'
 * - 'Procesando'
 * - 'Enviado'
 * - 'Entregado'
 * - 'Cancelado'
 *
 * Se utiliza principalmente para representar el estado actual
 * de una orden en la interfaz.
 *
 * @example
 * ```ts
 * const estado: OrderStatus = 'Procesando';
 * ```
 */
export type OrderStatus =
  | 'Pendiente'
  | 'Procesando'
  | 'Enviado'
  | 'Entregado'
  | 'Cancelado';