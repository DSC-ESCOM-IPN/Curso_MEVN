# Aplicación final de carrito de compra

En estas tres clases veremos como hacer un carrito de compra básico, utilizando nuestra API finalizada en la clase 24

## Recomendaciones

- Conocer la [API](https://github.com/DSC-ESCOM-IPN/Curso_MEVN/tree/Clase22-23-24) que se hizo en el curso.
- Instalar las [Vue Devtools](https://v3.vuejs.org/guide/installation.html#vue-devtools) para Vue 3 en tu navegador.
- Tener un servidor web activo, puedes ocupar el paquete [serve](https://www.npmjs.com/package/serve).
- Tener [node](https://nodejs.org/es/) instalado.

## Requisitos

Para iniciar la aplicación más rápido debes de cargar la copia de seguridad de la base de datos que tenemos en el repositorio, puedes hacerlo de la sigueinte manera:

- Conectarse a la base de datos
~~~bash
mongo --username <your-user> --password <your-password> --authenticationDatabase mydb --host <your-host> --port 27017
~~~

- Cargar la copia de seguridad
~~~bash
mongorestore --uri="mongodb://<your-user>:<your-password>@<your-host>/mydb" ./db
~~~

- Crear nueva copia de seguridad (opcional)
~~~bash
mongodump -u vue-app -p dsc-escom-ipn -h 34.68.51.65:27017 -d mydb -o ./db
~~~

## Contenido

- [api](https://github.com/DSC-ESCOM-IPN/Curso_MEVN/tree/Clase31-32-33/api): Contiene el código final de la API hecha en Express

- [web](https://github.com/DSC-ESCOM-IPN/Curso_MEVN/tree/Clase31-32-33/web): Contiene el código de la aplicación en Vue del carrito de compra

## Sigue los videos de las clases

[Lista de reproducción](https://www.youtube.com/watch?v=aabUBH2X6sU&list=PLGq0oojVfS53AjzCUHnvYZ8PnNJ6oM7CI)
