import { Order } from '../interfaces/order.interface';

export const ORDERS_MOCK: Order[] = [
  {
    id: 1,
    customerName: 'Juan Pérez',
    date: '2026-09-20T10:30:00.000Z',
    total: 250000,
    status: 'Pendiente',
    itemCount: 3,
  },
  {
    id: 2,
    customerName: 'María Gómez',
    date: '2026-09-21T14:00:00.000Z',
    total: 480000,
    status: 'Procesando',
    itemCount: 5,
  },
  {
    id: 3,
    customerName: 'Carlos Rodríguez',
    date: '2026-09-22T09:15:00.000Z',
    total: 750000,
    status: 'Enviado',
    itemCount: 2,
  },
  {
    id: 4,
    customerName: 'Ana Martínez',
    date: '2026-09-23T16:45:00.000Z',
    total: 120000,
    status: 'Entregado',
    itemCount: 1,
  },
  {
    id: 5,
    customerName: 'Pedro López',
    date: '2026-09-24T11:20:00.000Z',
    total: 95000,
    status: 'Cancelado',
    itemCount: 4,
  },
];