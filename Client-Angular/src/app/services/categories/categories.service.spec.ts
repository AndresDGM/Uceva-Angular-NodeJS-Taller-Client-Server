import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Category } from '../../interfaces/categories.interface';
import { CATEGORIES_MOCK } from '../../mocks/categories.mocks';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(CategoriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllCategories', () => {

    it('debería realizar una petición GET y retornar una lista de categorías', () => {
      const countCategories = 5;
      const mockCategories: Category[] = CATEGORIES_MOCK;

      service.getAllCategories(countCategories).subscribe((categorias) => {
        expect(categorias).toEqual(mockCategories);
        expect(categorias.length).toBe(mockCategories.length);
      });

      const req = httpMock.expectOne(`api/categories/${countCategories}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockCategories);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countCategories = 3;

      service.getAllCategories(countCategories).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/categories/${countCategories}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });

});