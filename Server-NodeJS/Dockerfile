FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

# Se instalan todas las dependencias porque @faker-js/faker está en devDependencies
# y también se requiere TypeScript para compilar.
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
COPY public ./public

# Se desactiva declaration/declarationMap para evitar el error TS2742 en server.ts
RUN npx tsc --declaration false --declarationMap false

ENV NODE_ENV=production
ENV PORT=3000
ENV PUBLIC_PATH=public

EXPOSE 3000

CMD ["node", "dist/app.js"]
