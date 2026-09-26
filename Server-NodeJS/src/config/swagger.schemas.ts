/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       description: Representa una categoría del sistema
 *       required:
 *         - id
 *         - name
 *         - description
 *         - icon
 *         - status
 *         - productCount
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Lácteos
 *         description:
 *           type: string
 *           example: Productos derivados de la leche
 *         icon:
 *           type: string
 *           example: bi-box-seam
 *         status:
 *           type: string
 *           enum:
 *             - Activa
 *             - Inactiva
 *           example: Activa
 *         productCount:
 *           type: number
 *           example: 12
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa una orden del sistema
 *       required:
 *         - id
 *         - customerName
 *         - date
 *         - total
 *         - status
 *         - itemCount
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         customerName:
 *           type: string
 *           example: Juan Pérez
 *         date:
 *           type: string
 *           format: date-time
 *           example: 2026-09-26T10:30:00.000Z
 *         total:
 *           type: number
 *           example: 250000
 *         status:
 *           type: string
 *           enum:
 *             - Pendiente
 *             - Procesando
 *             - Enviado
 *             - Entregado
 *             - Cancelado
 *           example: Procesando
 *         itemCount:
 *           type: number
 *           example: 3
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       description: Representa una reseña del sistema
 *       required:
 *         - id
 *         - productId
 *         - userId
 *         - rating
 *         - comment
 *         - date
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         productId:
 *           type: number
 *           example: 1
 *         userId:
 *           type: number
 *           example: 1
 *         rating:
 *           type: number
 *           enum: 
 *              - 0
 *              - 0.5
 *              - 1
 *              - 1.5
 *              - 2
 *              - 2.5
 *              - 3
 *              - 3.5
 *              - 4
 *              - 4.5
 *              - 5
 *         comment:
 *           type: string
 *           example: Muy Bueno.
 *         date:
 *           type: string
 *           format: date-time
 *           example: '2024-02-15T18:30:00.000Z'
 */
export {};