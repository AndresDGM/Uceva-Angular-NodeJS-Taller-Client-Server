# 🧪 Taller: Client-Server en Angular y NodeJS

- Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) 20.3.14.

- El objetivo del taller es practicar la creación de 2 proyectos para representar la arquitectura
cliente servidor, con las Tecnologias de Angular y NodeJS.

## 📋 Requisitos Previos

Antes de iniciar, asegúrate de tener instaladas las siguientes herramientas:

- Node.js
- npm
- Angular CLI
- Git
- Visual Studio Code

Puedes verificar Angular CLI en consola con: ```ng version```

## ▶️ Iniciar el Server (Server-NodeJS) en Modo Desarrollo

Sigue estos pasos para ejecutar el proyecto localmente:

### 1️⃣ Abrir la consola

Ubícate en la raíz del proyecto de ServerNodejs (donde se encuentra el archivo package.json).

### 2️⃣ Instalar dependencias

```npm i```

### 3️⃣ Ejecutar el proyecto

Para ejecutar el proyecto debemos usar el siguiente comando

```npm run start```

### 4️⃣ Abrir en el navegador

Cuando el servidor esté en ejecución, abre un navegador y accede a: `http://localhost:3000/`

### 🔁 Documentación de APIs con Swagger

Para acceder a la documentación de las APIs debemos acceder al siguiente enlace:

- `http://localhost:3000/api/docs`

Aqui encontraras toda la información necesaria respecto al consumo de cada API y ejemplos de sus respuestas

### 🔁 Funcionamiento de APIs

Debemos poder observar una respuesta mediante un navegador web o el promagrama Postman de las siguientes urls:

- `http://localhost:3000/api/users`
- `http://localhost:3000/api/products`

## ▶️ Iniciar el Client (Client-Angular) en Modo Desarrollo

Sigue estos pasos para ejecutar el proyecto localmente:

### 1️⃣ Abrir la consola

Ubícate en la raíz del proyecto de Client-Angular (donde se encuentra el archivo package.json).

### 2️⃣ Instalar dependencias

```npm i```

### 3️⃣ Ejecutar el proyecto

Para ejecutar el proyecto debemos usar el siguiente comando

```npm run start```

### 4️⃣ Abrir en el navegador

Cuando el servidor esté en ejecución, abre un navegador y accede a: `http://localhost:4200/`

## 🧪 Pruebas Unitarias

El proyecto utiliza Jest para la ejecución de pruebas unitarias.

### ▶️ Ejecutar pruebas una sola vez

```npm run test```

### 🔁 Ejecutar pruebas en modo watch

Este modo vuelve a ejecutar las pruebas cada vez que se detecta un cambio en el código.

```npm run test:watch```

### 🔁 Ejecutar coverage de pruebas

Este modo permite ejecutar todas las pruebas unitarias del proyecto y generar un reporte de cobertura, el cual muestra qué porcentaje del código fuente está siendo validado por las pruebas.

```npm run test:coverage```

### 📘 Generar documentación con Compodoc

Este modo permite generar la documentación técnica del proyecto a partir de los comentarios JSDoc en el código fuente, facilitando la visualización de la API del Design System y sus componentes.

El comando genera un sitio estático con la documentación del proyecto, incluyendo componentes, interfaces, tipos, módulos y diagramas de dependencias.

```npm run compodoc```

## ⚙️ Generación de Archivos con Angular CLI

A continuación se presentan los comandos más utilizados para generar componentes standalone.

### 🧩 Generar un componente (con carpeta propia)

```ng g c [ruta]/[nombre-componente]```

#### Ejemplo:

```ng g c pages/users```

#### Archivos Generados

```
src/app/pages/users/
├── users.html
├── users.scss
├── users.spec.ts
└── users.ts
```

### 📄 Generar un componente sin carpeta (--flat)

```ng g c [ruta]/[nombre-componente] --flat```

#### Ejemplo:

```ng g c pages/products/products.component --flat```

#### Archivos Generados

```
src/app/pages/products/
├──products.component.html
├──products.component.scss
├──products.component.spec.ts
└──products.component.ts
```

### 📄 Generar un servicio

```ng g s [ruta]/[nombre-servicio] ```

#### Ejemplo:

```ng g c services/users/users.service```

#### Archivos Generados

```
src/app/services/users/
├──users.service.spec.ts
└──users.service.ts
```

### 🎓 Observaciones Importantes

- En este taller se utilizan componentes standalone
- Mantener una estructura clara favorece la escalabilidad y mantenibilidad
- Revisar cobertura de pruebas unitarias y documentación

---

## 🚀 Despliegue (CI/CD y Docker Compose)

El proyecto cuenta con dos flujos de GitHub Actions que se ejecutan automáticamente al hacer `push` a la rama `develop` (o manualmente con `workflow_dispatch`):

- **Frontend (`Client-Angular`):** [`.github/workflows/frontend.yml`](.github/workflows/frontend.yml) ejecuta pruebas unitarias con Jest, compila Angular y despliega en **GitHub Pages**.
- **Backend (`Server-NodeJS`):** [`.github/workflows/backend.yml`](.github/workflows/backend.yml) construye la imagen Docker, la publica en **GitHub Container Registry (GHCR)** y la despliega por SSH en el servidor remoto usando [`Server-NodeJS/docker-compose.yml`](Server-NodeJS/docker-compose.yml).

### 🔐 Secrets requeridos en GitHub

Configurar en **Settings → Secrets and variables → Actions → Secrets**:

| Secret | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `SSH_HOST` | Dirección IP o dominio del servidor remoto | `123.45.67.89` |
| `SSH_USER` | Usuario SSH con permisos para ejecutar Docker | `ubuntu` |
| `SSH_PORT` | Puerto del servicio SSH | `22` |
| `SSH_KEY` | Llave privada SSH completa (incluyendo encabezado y pie) | `-----BEGIN OPENSSH PRIVATE KEY----- ...` |

*(Nota: `GITHUB_TOKEN` es generado automáticamente por GitHub Actions para autenticar con GHCR y GitHub Pages).*

### ⚙️ Variables dinámicas (`vars`) en GitHub

Configurar en **Settings → Secrets and variables → Actions → Variables**:

| Variable | Descripción | Valor por defecto en Compose | Ejemplo |
| :--- | :--- | :--- | :--- |
| `IMAGE_NAME` | Nombre de la imagen Docker (en minúsculas) | `uceva-server-nodejs` | `uceva-server-nodejs` |
| `IMAGE_TAG` | Etiqueta (tag) de la imagen a construir y desplegar | `latest` | `latest` |
| `CONTAINER_NAME` | Nombre del contenedor y prefijo de routers/middlewares en Traefik | `uceva-server-nodejs` | `uceva-server-nodejs` |
| `DOMAIN` | Dominio donde Traefik expondrá el servicio | `localhost` | `api.aguevaradev.me` |
| `TRAEFIK_NETWORK` | Nombre de la red externa de Docker compartida con Traefik | `traefik-network` | `traefik-network` |
| `PORT` | Puerto del servidor Express y mapeo del contenedor | `3000` | `3001` |

### 🐳 Variables dinámicas de `Server-NodeJS/docker-compose.yml`

Durante el despliegue, el workflow genera dinámicamente el archivo `.env` en `Server-NodeJS/` y lo copia junto con `docker-compose.yml` a `~/deployments/${IMAGE_NAME}` en el servidor remoto.

Además de las variables anteriores, el `docker-compose.yml` soporta:

| Variable | Descripción | Valor por defecto |
| :--- | :--- | :--- |
| `IMAGE_AUTOR` | Registro y propietario de la imagen en minúsculas (inyectado por el workflow como `ghcr.io/<github.actor>`) | *(vacío)* |
| `API_PREFIX` | Prefijo de la ruta en Traefik (inyectado automáticamente desde el nombre del repositorio en minúsculas) | `uceva-angular-nodejs-taller-client-server` |
| `PUBLIC_PATH` | Carpeta de archivos estáticos servidos por Express | `public` |

#### Funcionamiento de Traefik en el Compose

- **Red externa:** conecta el contenedor a `default` y a la red externa `${TRAEFIK_NETWORK:-traefik-network}` (`traefik-net`).
- **Enrutamiento (`Host` + `PathPrefix`):** atiende peticiones hacia `https://${DOMAIN}/${API_PREFIX}/...` usando el entrypoint `websecure` y TLS con `letsencrypt`.
- **StripPrefix:** elimina `/${API_PREFIX}` antes de reenviar la petición al puerto `${PORT:-3000}` del contenedor Node.js.

#### Comandos útiles en el servidor

```bash
cd ~/deployments/<IMAGE_NAME>
docker compose ps
docker compose logs -f
docker compose pull && docker compose up -d
```