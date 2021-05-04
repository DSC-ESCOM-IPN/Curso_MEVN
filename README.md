# Node y MongoDB para trabajar con esquemas flexibles

En esta clase transformamos la API vista en la Clase 15 para trabajar con un esquema flexible, utilizando Mongodb Client en vez de Mongoose, para iniciar el ejercicio debes:

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

## Prueba tus endpoints como más te guste

Ahora debes probar los endpoints, para acceder a ellos la ruta será la de tu host más los definidos en [user.routes.js](https://github.com/DSC-ESCOM-IPN/Curso_MEVN/blob/Clase16/routes/user.routes.js), por ejemplo:

~~~bash
http://localhost:8080/user/all
~~~

Puedes probar tus endpoint con alguna de las siguientes herramientas:

- [Curl](https://curl.se/)
- [Postman](https://www.postman.com/)
- [Apigee](https://cloud.google.com/apigee/)