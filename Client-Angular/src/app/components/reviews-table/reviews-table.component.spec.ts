import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { REVIEWS_MOCK } from '../../mocks/reviews.mocks';
import { ReviewsTableComponent } from './reviews-table.component';

describe('ReviewsTableComponent', () => {
  let component: ReviewsTableComponent;
  let fixture: ComponentFixture<ReviewsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el arreglo de 5 estrellas', () => {
    expect(component.stars).toEqual([1, 2, 3, 4, 5]);
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada reseña', () => {
    component.reviews = REVIEWS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.reviews.length);
  });

  it('debería mostrar los datos de la reseña en cada columna', () => {
    component.reviews = REVIEWS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const review = component.reviews[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(review.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(String(review.productId));
      expect(columns[2].nativeElement.textContent.trim()).toBe(String(review.userId));
      expect(columns[3].nativeElement.textContent).toContain(`(${review.rating})`);
      expect(columns[4].nativeElement.textContent.trim()).toBe(review.comment);
    });
  });

  it('debería renderizar los iconos de estrella correspondientes al rating', () => {
    // Review 1 has rating 4.5 -> 4 fill stars, 1 half star
    component.reviews = [REVIEWS_MOCK[0]];
    fixture.detectChanges();

    const fillStars = fixture.debugElement.queryAll(By.css('.bi-star-fill'));
    const halfStars = fixture.debugElement.queryAll(By.css('.bi-star-half'));

    expect(fillStars.length).toBe(4);
    expect(halfStars.length).toBe(1);
  });
});

