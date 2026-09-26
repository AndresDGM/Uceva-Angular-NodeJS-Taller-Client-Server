import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review, ReviewsRatings } from '../../interfaces/reviews.interface';

@Component({
  selector: 'app-reviews-table',
  imports: [CommonModule, ],
  templateUrl: './reviews-table.component.html',
})
export class ReviewsTableComponent {
  // Arreglo de 5 estrellas base
  readonly stars = [1, 2, 3, 4, 5];

  @Input() reviews: Review[] = [];

}
