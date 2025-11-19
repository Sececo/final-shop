# Final Shop 🛒

Proyecto fullstack con **Vue 3 + TypeScript** en el frontend y **Node.js + Express + TypeScript** en el backend.  
La aplicación se orquesta con **Docker Compose**, incluyendo un servicio de base de datos **MySQL**.

---

## 🚀 Tecnologías principales

- **Frontend**: Vue 3 + Vite + TypeScript
- **Backend**: Node.js + Express + TypeScript
- **Base de datos**: MySQL 8
- **Contenedores**: Docker & Docker Compose
- **ORM / Modelado**: Sequelize (con DTOs para validación y consistencia)
- **Servidor frontend**: Nginx (multi-stage build)

---

## 📂 Estructura del proyecto
```Tree

|-- README.md
|-- backend
|   |-- Dockerfile
|   |-- node_modules
|   |-- package-lock.json
|   |-- package.json
|   |-- src
|   |   |-- app.ts
|   |   |-- config
|   |   |   `-- database.ts
|   |   |-- controllers
|   |   |   |-- jeanController.ts
|   |   |   `-- shirtController.ts
|   |   |-- dtos
|   |   |   |-- jeanDTO.ts
|   |   |   `-- shirtDTO.ts
|   |   |-- models
|   |   |   |-- jeanModel.ts
|   |   |   `-- shirtModel.ts
|   |   |-- repositories
|   |   |   |-- jeanRepository.ts
|   |   |   `-- shirtRepository.ts
|   |   |-- services
|   |   |   |-- jeanService.ts
|   |   |   `-- shirtService.ts
|   |   `-- types
|   |       |-- jean.d.ts
|   |       `-- shirt.d.ts
|   `-- tsconfig.json
|-- docker-compose.yml
`-- frontend
    `-- final-shop
        |-- Dockerfile
        |-- node_modules
        |-- README.md
        |-- index.html
        |-- package-lock.json
        |-- package.json
        |-- public
        |   `-- vite.svg
        |-- src
        |   |-- App.vue
        |   |-- assets
        |   |   `-- vue.svg
        |   |-- components
        |   |   `-- HelloWorld.vue
        |   |-- main.ts
        |   `-- style.css
        |-- tsconfig.app.json
        |-- tsconfig.json
        |-- tsconfig.node.json
        `-- vite.config.ts


```

---

## 🐳 Docker Compose

El proyecto se levanta con:

```bash
docker-compose up --build
```
---

## Servicios Definidos:
  * frontend → Vue 3 compilado y servido con Nginx (puerto 5173 → 80)
  * backend → API REST con Express + TS (puerto 3000)
  * db → MySQL 8 con volumen persistente (mysql_data)
---
## ⚙️ Scripts Principales

### Backend
* ``` npm run dev ``` → Desarrollo con nodemon + ts-node
* ```npm run build ``` → Compila TypeScript a ``` dist/ ```
* ```npm start ``` → Ejecuta el backend desde ``` dist/app.js ```


### Frontend
* ``` npm run dev ``` → Desarrollo con Vite
* ```npm run build ``` → Compila la app Vue a ``` dist/ ```
* ``` npm run preview ``` → Sirve la build localmente

---
## 📌 DTOs y arquitectura
* **CreateDTO** → valida datos de entrada obligatorios (ej. ``` CreateShirtDTO ```, ``` CreateJeanDTO ```).
* **UpdateDTO** → permite actualizaciones parciales con validaciones mínimas.
* **Controller → Service → Repository**→ flujo claro y consistente:
  * Controller construye DTOs desde ``` req.body``` / ```req.params```.
  * Service recibe DTOs y devuelve ResponseDTOs.
  * Repository interactúa con la base de datos.
---
## 🛠️ Variables de entorno
El backend usa variables de entorno para conectarse a la base de datos:

```Env
DB_HOST=db
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=central
NODE_ENV=production
PORT=3000

```
El frontend puede usar .env para configurar URLs de la API.

---
## 📖 Endpoints principales (ejemplo)

**Shirts**
* ```GET /shirts ``` → lista todas las camisas
* ```GET /shirts/:id ```→ obtiene una camisa por ID
* ```POST /shirts ``` → crea una nueva camisa
* ```PUT /shirts/:id ``` → actualiza una camisa existente
* ```DELETE /shirts/:id ``` → elimina una camisa

**Jeans**

* ```GET /shirts ```
* ```GET /shirts/:id ```
* ```POST /shirts ```
* ```PUT /shirts/:id ```
* ```DELETE /shirts/:id ```
---

## ✅ Posibles Próximos pasos

* Añadir nginx.conf personalizado para SPA en frontend.
* Configurar HEALTHCHECK en Docker para backend y frontend.
* Mejorar seguridad de credenciales en producción (.env + secrets).
* Documentar migraciones y seeds de la base de datos.
* Desarrollar el Frontend
---

## 🏗️ Arquitectura del Proyecto

```arch
          ┌───────────────────────┐
          │       Frontend        │
          │  Vue 3 + Vite + TS    │
          │  Servido con Nginx    │
          └───────────▲───────────┘
                      │
                      │ HTTP (REST API)
                      │
          ┌───────────┴───────────┐
          │       Backend         │
          │ Node.js + Express + TS│
          │   DTOs / Services     │
          │   Repositories        │
          └───────────▲───────────┘
                      │
                      │ Sequelize ORM
                      │
          ┌───────────┴───────────┐
          │        Database        │
          │        MySQL 8         │
          │   Persistencia datos   │
          └────────────────────────┘

```
## Infraestructura:
- Docker Compose orquesta los tres servicios.
- Red interna `app-network` conecta frontend, backend y base de datos.
- Volumen `mysql_data` asegura persistencia de la información.


---

## 📌 Explicación rápida
- **Frontend (Vue 3 + Vite + TS)** → compilado y servido por Nginx. Se comunica con el backend vía HTTP.  
- **Backend (Node.js + Express + TS)** → expone API REST, usa DTOs para validar entrada/salida y Sequelize para interactuar con la BD.  
- **Database (MySQL 8)** → almacena la información persistente (ej. productos, usuarios).  
- **Docker Compose** → levanta todo junto, con red bridge interna y volumen para persistencia de MySQL.  
---

