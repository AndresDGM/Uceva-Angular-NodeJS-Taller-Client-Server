import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { NavbarOrganism } from '@brejcha13320/design-system-bootstrap';
import { App } from './app';

/**
 * Pruebas unitarias para el componente principal de la aplicación.
 *
 * @remarks
 * Verifica la creación del componente, la configuración del navbar,
 * la renderización del organismo de navegación y la presencia
 * del router outlet.
 */
describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Verifica que el componente principal pueda ser creado correctamente.
   */
  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Verifica que la configuración del navbar contenga
   * correctamente las opciones de navegación de la aplicación.
   */
  it('debería definir la configuración del navbar correctamente', () => {
    expect(component.navbarConfig).toEqual({
      title: 'Angular Client',
      iconConfig: {
        icon: 'bootstrap',
        size: 2,
      },
      navLinks: [
        { text: 'Usuarios', url: '/users' },
        { text: 'Productos', url: '/products' },
        { text: 'Categorías', url: '/categories' },
        { text: 'Reseñas', url: '/reviews' },
        { text: 'Ordenes', url: '/orders' },
      ],
    });
  });

  /**
   * Verifica que el organismo del navbar se renderice correctamente.
   */
  it('debería renderizar el componente NavbarOrganism', () => {
    const navbar = fixture.debugElement.query(By.directive(NavbarOrganism));

    expect(navbar).toBeTruthy();
  });

  /**
   * Verifica que la configuración del navbar sea
   * transferida correctamente al organismo de navegación.
   */
  it('debería pasar la configuración al NavbarOrganism', () => {
    const navbarComponent = fixture.debugElement
      .query(By.directive(NavbarOrganism))
      .componentInstance;

    expect(navbarComponent.navbarConfig).toEqual(component.navbarConfig);
  });

  /**
   * Verifica que el template principal contenga
   * un router outlet para la navegación de Angular.
   */
  it('debería contener un router-outlet en el template', () => {
    const routerOutlet = fixture.debugElement.query(By.css('router-outlet'));

    expect(routerOutlet).toBeTruthy();
  });
});