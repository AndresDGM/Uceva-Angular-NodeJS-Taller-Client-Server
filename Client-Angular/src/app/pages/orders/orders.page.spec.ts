import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { OrdersPage } from './orders.page';
import { OrdersService } from '../../services/orders/orders.service';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';

/**
 * Pruebas unitarias para la página de órdenes.
 *
 * @remarks
 * Verifica la creación del componente, la carga de órdenes,
 * la asignación de los datos recibidos y el manejo de errores.
 */
describe('OrdersPage', () => {
  let component: OrdersPage;
  let fixture: ComponentFixture<OrdersPage>;
  let ordersService: {
    getAllOrders: jest.Mock;
  };

  beforeEach(async () => {
    ordersService = {
      getAllOrders: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [OrdersPage],
      providers: [
        {
          provide: OrdersService,
          useValue: ordersService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPage);
    component = fixture.componentInstance;
  });

  /**
   * Verifica que la página pueda ser creada correctamente.
   */
  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Verifica que la página solicite diez órdenes al servicio
   * cuando se inicializa.
   */
  it('debería llamar a getAllOrders al iniciar', () => {
    ordersService.getAllOrders.mockReturnValue(of(ORDERS_MOCK));

    component.ngOnInit();

    expect(ordersService.getAllOrders).toHaveBeenCalledWith(10);
  });

  /**
   * Verifica que las órdenes recibidas del servicio
   * sean asignadas correctamente al componente.
   */
  it('debería asignar las órdenes recibidas del servicio', () => {
    ordersService.getAllOrders.mockReturnValue(of(ORDERS_MOCK));

    component.ngOnInit();

    expect(component.orders).toEqual(ORDERS_MOCK);
  });

  /**
   * Verifica que el componente cambie al estado de éxito
   * cuando las órdenes se cargan correctamente.
   */
  it('debería cambiar al estado success cuando la petición es exitosa', () => {
    ordersService.getAllOrders.mockReturnValue(of(ORDERS_MOCK));

    component.ngOnInit();

    expect(component.state).toBe('success');
  });

  /**
   * Verifica que el componente cambie al estado de error
   * cuando falla la petición de órdenes.
   */
  it('debería manejar el error cuando falla getAllOrders', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    ordersService.getAllOrders.mockReturnValue(
      throwError(() => new Error('Error al obtener órdenes')),
    );

    component.ngOnInit();

    expect(component.state).toBe('error');

    consoleErrorSpy.mockRestore();
  });
});