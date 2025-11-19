# Etapa 1: Construcción
FROM node:20-alpine AS builder

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración primero (para aprovechar la cache de Docker)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Compilar la aplicación Vue con Vite
RUN npm run build

# Etapa 2: Servidor de producción
FROM nginx:alpine

# Copiar los archivos compilados desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de Nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto
EXPOSE 80

# Comando de inicio
CMD ["nginx", "-g", "daemon off;"]
