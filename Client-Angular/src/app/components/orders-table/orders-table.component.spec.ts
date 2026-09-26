import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersTableComponent } from './orders-table.component';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';

/**
 * Pruebas unitarias para el componente de tabla de órdenes.
 *
 * @remarks
 * Verifica la creación del componente, la representación de las órdenes
 * y el mapeo de los estados a los tipos de Badge correspondientes.
 */
describe('OrdersTableComponent', () => {
  let component: OrdersTableComponent;
  let fixture: ComponentFixture<OrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersTableComponent);
    component = fixture.componentInstance;
    component.orders = ORDERS_MOCK;
    fixture.detectChanges();
  });

  /**
   * Verifica que el componente pueda ser creado correctamente.
   */
  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Verifica que la tabla de órdenes se renderice correctamente.
   */
  it('debería renderizar una tabla', () => {
    const table = fixture.nativeElement.querySelector('table');

    expect(table).toBeTruthy();
  });

  /**
   * Verifica que se genere una fila por cada orden recibida.
   */
  it('debería renderizar una fila por cada orden', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');

    expect(rows.length).toBe(ORDERS_MOCK.length);
  });

  /**
   * Verifica que los datos principales de cada orden
   * se muestren correctamente en las columnas de la tabla.
   */
  it('debería mostrar los datos de la orden en cada columna', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');

    expect(rows[0].textContent).toContain('1');
    expect(rows[0].textContent).toContain('Juan Pérez');
    expect(rows[0].textContent).toContain('Pendiente');
    expect(rows[0].textContent).toContain('3');
  });

  /**
   * Verifica que cada estado de orden tenga asignado
   * el tipo de Badge correspondiente.
   */
  it('debería mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap.Pendiente).toBe('warning');
    expect(component.statusMap.Procesando).toBe('info');
    expect(component.statusMap.Enviado).toBe('primary');
    expect(component.statusMap.Entregado).toBe('success');
    expect(component.statusMap.Cancelado).toBe('danger');
  });
});