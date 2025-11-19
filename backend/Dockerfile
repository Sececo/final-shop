# Etapa 1: Construcción
FROM node:20-alpine AS builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración primero (para aprovechar la cache de Docker)
COPY package*.json tsconfig.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY ./src ./src

# Compilar TypeScript a JavaScript
RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine AS production

WORKDIR /app

# Copiar solo lo necesario desde la etapa de construcción
COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

# Variables de entorno (puedes ajustarlas según tu proyecto)
ENV NODE_ENV=production
ENV PORT=3000

# Exponer el puerto
EXPOSE 3000

# Comando de inicio
CMD ["node", "dist/index.js"]
