## Nodemon example with Podman and Volumes

### Construir la imagen del contenedor

Para construir la imagen debemos entrar a la carpeta "nodemon-example" con:

~~~bash
cd nodemon-example/
~~~

Una vez ahí debemos ejecutar:

~~~bash
podman build -t nodemon-example .
~~~

Esto crea una imagen con la etiqueta "nodemon-example"

### Iniciar el contenedor con volumenes

Para iniciar el contenedor con el mapeo para sacarle provecho a nodemon, debemos de mapear la carpeta src del host con la carpeta /app/ que se decribe en el Containerfile y como se copió la carpeta src completa, queda en la ruta: /app/src/, la misma que será nuestra ruta destino en el contenedor.

~~~bash
podman container run -d -p 3000:3000 -v ./src/:/app/src/ nodemon-example
~~~

Finalmente, cualquier cambio que hagas dentro de src/ se mapeará al contendedor, cambia algo del index.js y checa que se refresque en [http://localhost:3000](http://localhost:3000)