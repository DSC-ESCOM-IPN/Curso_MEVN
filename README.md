## Hello Nodemon example with Podman/Docker and Volumes

### Requisitos:
Puedes utilizar cualquiera de las dos opciones 

 Software | Sitio oficial para iniciar 
------------- | ------------- | 
Podman  | https://podman.io/getting-started/ 
Docker  |  https://www.docker.com/get-started

### Estructura del proyecto

Primero debes crear un directorio en tu equipo sobre el que quieres trabajar
~~~bash
mkdir <NombreDirectorio>
cd <NombreDirectorio>
~~~
Dentro del directorio creado, deberán estar los archivos incluidos en este repo.

Todo el código que realices deberá estar dentro de ***src/***

### Levantando la aplicación

Estando sobre el directorio raíz del proyecto, basta con correr el script  ___montaContenedor.sh___
~~~bash
bash montaContenedor.sh
~~~

E indicar el software a utilizar:

~~~bash
¿Podman o Docker? (p/d)): <p|P|podman|d|D|docker>
~~~
___Para cambiar el nombre del contenedor sustituyendo "HolaNode" por un nombre de tu preferencia,
modificando el script en la linea 5 después de la bandera "--name"___

Esto construirá la imagen de ***node:12.8.0*** (puedes cambiar la versión modificando el Dockerfile)
que ya tiene preparado express y nodemon y finalmente iniciará el contenedor con un volumen en la 
carpeta ___src/___ donde el usuario podrá empezar a desarrollar
un proyecto de node

una vez detenido el contenedor, puedes iniciarlo igual observando el log del contenedor 
con el comando:

~~~bash
<docker|podman> start -a <HolaNode|ElNombreQuePusiste>
~~~


