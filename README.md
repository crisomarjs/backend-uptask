# UPTASK MERN - Backend

Este es el **backend** del proyecto **UPTASK MERN**, desarrollado con **Node.js + Express + TypeScript**.  
Se encarga de manejar la API para autenticación, proyectos, tareas, notas y equipos.  

---

## 🚀 Tecnologías utilizadas

- Node.js + Express
- TypeScript
- MongoDB con Mongoose
- JWT para autenticación
- Nodemailer para envío de emails

---

## 📦 Instalación

Clona el repositorio:

```bash
git clone https://github.com/crisomarjs/backend-uptask
cd backend-uptask
npm install
````

## ⚙️ Configuración de variables de entorno

Debes crear un archivo .env en la raíz de uptask_backend con las siguientes variables:
```bash
DATABASE_URL = tu_url_de_mongodb
FRONTEND_URL = tu_url_frontend
SMT_HOST=tu_host_de_correo
SMT_PORT=tu_puerto
SMT_USER=tu_user
SMT_PASS=tu_password
JWT_SECRET=tu_palabra_secreta
````

## 📂 Estructura del proyecto

```bash
src/
 ├── config/         # Configuración (DB, emails, etc.)
 ├── controllers/    # Controladores de la API
 ├── emails/         # Plantillas y lógica de correos
 ├── middleware/     # Middlewares de Express
 ├── models/         # Modelos de MongoDB con Mongoose
 ├── routes/         # Definición de rutas de la API
 ├── utils/          # Utilidades y helpers
 ├── index.ts        # Entrada principal de la app
 └── server.ts       # Configuración del servidor Express
````

---
## 🔗 Repositorios

- [Frontend](https://github.com/crisomarjs/uptask-frontend)
- [Backend](https://github.com/crisomarjs/backend-uptask)
