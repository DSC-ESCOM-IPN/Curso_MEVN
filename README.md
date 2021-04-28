# Introducción a Mongo DB

Recapitulando de sesiones anteriores, podemos crear nuestro contenedor de mongodb con:

~~~bash
podman run -d --name some-mongo \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    -p 27017:27017 \
    mongo:4.4.5
~~~

Para conectarnos a nuestro contenedor de mongo, debemos de correr alguna de las siguientes maneras conexión:

~~~bash
mongo --username mongoadmin --password --host localhost --port 27017

mongo "mongodb://mongoadmin:secret@localhost:27017"
~~~

Despues de crear a un usuario como se muestra en [createUser](https://github.com/DSC-ESCOM-IPN/Curso_MEVN/blob/Clase14/Queries/createUser.js):

~~~bash
mongo --username <your-username> --password --authenticationDatabase admin --host localhost --port 27017

mongo "mongodb://<your-username>:<your-password>@localhost:27017/?authSource=admin"
~~~
