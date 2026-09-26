import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { OrdersService } from './orders.service';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';

/**
 * Pruebas unitarias para el servicio de órdenes.
 *
 * @remarks
 * Verifica la creación del servicio y el comportamiento del método
 * encargado de obtener las órdenes desde la API.
 */
describe('OrdersService', () => {
  let service: OrdersService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrdersService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(OrdersService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  /**
   * Verifica que el servicio pueda ser creado correctamente.
   */
  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Pruebas relacionadas con la obtención de órdenes.
   */
  describe('getAllOrders', () => {
    /**
     * Verifica que el servicio realice una petición GET
     * y retorne correctamente la lista de órdenes.
     */
    it('debería realizar una petición GET y retornar una lista de órdenes', () => {
      service.getAllOrders(5).subscribe((orders) => {
        expect(orders).toEqual(ORDERS_MOCK);
      });

      const request = httpTesting.expectOne('api/orders/5');

      expect(request.request.method).toBe('GET');

      request.flush(ORDERS_MOCK);
    });

    /**
     * Verifica que el servicio propague correctamente
     * los errores producidos por la petición HTTP.
     */
    it('debería propagar un error si la petición HTTP falla', () => {
      service.getAllOrders(5).subscribe({
        next: () => fail('Se esperaba un error HTTP'),
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const request = httpTesting.expectOne('api/orders/5');

      request.flush('Error', {
        status: 500,
        statusText: 'Server Error',
      });
    });
  });
});