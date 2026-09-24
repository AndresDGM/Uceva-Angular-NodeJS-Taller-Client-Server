import { Category } from "../interfaces/categories.interface";

export const CATEGORIES_MOCK: Category[] = [
    {
        id: 1,
        name: 'Lácteos',
        description: 'Productos derivados de la leche',
        icon: 'bi-cup-hot',
        status: 'Activa',
        productCount: 12,
    },
    {
        id: 2,
        name: 'Frutas y Verduras',
        description: 'Productos frescos de la huerta',
        icon: 'bi-apple',
        status: 'Inactiva',
        productCount: 8,
    }
];