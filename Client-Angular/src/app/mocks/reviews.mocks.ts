import { Review } from "../interfaces/reviews.interface";

export const REVIEWS_MOCK: Review[] = [
    {
        id: 1,
        productId: 1,
        userId: 1,
        rating: 4.5,
        comment: 'Excelente producto, superó mis expectativas.',
        date: new Date('2024-02-15T18:30:00.000Z'),
    },
    {
        id: 2,
        productId: 2,
        userId: 2,
        rating: 3,
        comment: 'Buen producto, aunque la entrega tardó más de lo esperado.',
        date: new Date('2024-02-16T10:15:00.000Z'),
    }
];
