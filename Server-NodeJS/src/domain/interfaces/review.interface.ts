/**
 * Interfaz que representa una reseña en el sistema.
 *
 * Contiene la información básica necesaria para mostrar una reseña
 * o calificación asociada a un producto y realizada por un usuario.
 *
 * @remarks
 * Cada reseña debe tener un `id` único, el identificador del producto (`productId`),
 * el identificador del usuario (`userId`), una calificación numérica (`rating`),
 * un comentario descriptivo (`comment`) y la fecha de creación (`date`).
 *
 * @example
 * ```ts
 * const resena: Review = {
 *   id: 1,
 *   productId: 10,
 *   userId: 25,
 *   rating: 4.5,
 *   comment: 'Excelente calidad y entrega rápida.',
 *   date: new Date('2024-02-10')
 * };
 * ```
 */
export interface Review {
    /** Identificador único de la reseña */
    id: number;

    /** Identificador del producto al que pertenece la reseña */
    productId: number;

    /** Identificador del usuario que realizó la reseña */
    userId: number;

    /** Calificación otorgada al producto (por ejemplo de 0 a 5) */
    rating: number;

    /** Comentario u opinión detallada de la reseña */
    comment: string;

    /** Fecha en la que fue creada la reseña */
    date: Date;
}