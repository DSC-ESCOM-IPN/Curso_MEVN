# CRUD Mongo y Node

En esta clase tomaremos lo visto en la Clase 6 y en la Clase 15, integrando vistas al CRUD que hicimos de estudiantes, para eso necesitas:

## Tener listo tu contenedor de mongo corriendo

Remplaza <your-mongo-container-id> con el ID de tu contenedor

~~~bash
podman container start <your-mongo-container-id>
~~~

Para ver el id de tu contenedor puedes ejecutar:

~~~bash
podman ps -a
~~~


## Modificar el archivo .env con tus datos

Remplaza los valores encerrados en "<>" con los valores de tu servidor de mongo

~~~bash
DB_USER=<your-username>
DB_HOST=<your-host>
DB_PORT=<your-port>
DB_NAME=<your-db-name>
DB_PASS=<your-password>
~~~

## Instala las dependencias del projecto

~~~bash
npm install
~~~

## Corre el projecto como ambiente de desarrollo
~~~bash
npm run dev
~~~

## Las cookies se pueden visualizar en las herramientas de desarrollador en el navegador 

* [Cross-Site Request Forgery (CSRF)](https://www.youtube.com/watch?v=eWEgUcHPle0)
* [Cross-Site Scripting (XSS)](https://www.youtube.com/watch?v=EoaDgUgS6QA)