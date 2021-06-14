# Crear Imagen personalizada de nginx

~~~ bash
sudo docker container build -t nginx-estatico . 
~~~
# Crear contenedor con volumenes

~~~ bash

sudo docker run -d --name nginx-estatico \
    -p 80:80 \
    -p 8080:8080 \
    --hostname mven.dsc-escom.com \
    -v ${PWD}/files/mven-site.conf:/etc/nginx/conf.d/mven-site.conf \
     nginx-estatico
~~~

# Modificar el puerto y /etc/hosts
# Releer la configuracion de nginx

~~~ bash
sudo docker exec nginx-estatico nginx -s reload 
~~~
