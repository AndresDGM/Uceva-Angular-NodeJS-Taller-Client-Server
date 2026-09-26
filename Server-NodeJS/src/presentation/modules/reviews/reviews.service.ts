import { faker } from '@faker-js/faker';
import { Review } from '../../../domain/interfaces/review.interface';

export class ReviewsService {

  public async getAllReviews(countProducts: number): Promise<Review[]> {
    const reviews: Promise<Review>[] = [];

    for (let i = 1; i <= countProducts; i++) {
      reviews.push(this.generateReview(i));
    }

    return Promise.all(reviews);
  }

  private generateReview(id: number): Promise<Review> {
    return Promise.resolve({
      id,
      productId: faker.number.int({ min: 1, max: 100 }),
      userId: faker.number.int({ min: 1, max: 50 }),
      rating: faker.number.int({ min: 0, max: 10 }) / 2,
      comment: faker.lorem.sentence(),
      date: faker.date.recent()
    });
  }
}
