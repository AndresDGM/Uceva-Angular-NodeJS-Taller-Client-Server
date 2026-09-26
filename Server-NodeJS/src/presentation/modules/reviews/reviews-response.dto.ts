export interface ReviewsResponseDTO {
    id: number;
    productId: number;
    userId: number;
    rating: number;
    comment: string;
    date: Date;
}