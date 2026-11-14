import swaggerJsdoc from 'swagger-jsdoc';
import { envs } from './envs';

const cleanPrefix = envs.API_PREFIX.replace(/^\/+|\/+$/g, '');
const productionServerUrl =
  envs.DOMAIN && envs.DOMAIN !== 'localhost'
    ? `https://${envs.DOMAIN}${cleanPrefix ? `/${cleanPrefix}` : ''}`
    : null;

const servers = [
  ...(productionServerUrl
    ? [{ url: productionServerUrl, description: 'Servidor de producción' }]
    : []),
  {
    url: `http://localhost:${envs.PORT}`,
    description: 'Servidor local',
  },
];

/**
 * Especificación de Swagger (OpenAPI) para la API.
 *
 * @remarks
 * Este objeto configura Swagger mediante `swagger-jsdoc`,
 * generando automáticamente la documentación OpenAPI a partir
 * de comentarios JSDoc presentes en los archivos de rutas.
 *
 * La especificación resultante es consumida por Swagger UI
 * para mostrar la documentación interactiva de la API.
 *
 * @example
 * ```ts
 * import swaggerUi from 'swagger-ui-express';
 *
 * app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
 * ```
 */
export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Client Server NodeJS',
      version: '1.0.0',
      description: 'Documentación de la API con Swagger',
    },
    servers,
  },
  apis: [
    './src/presentation/modules/**/*.routes.ts', // donde están tus comentarios
    './src/config/swagger.schemas.ts', // donde están los schemas
  ],
});