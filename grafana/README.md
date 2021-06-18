# Crear red
~~~ Bash

podman  network create -d bridge grafana --subnet 192.168.0.0/16
~~~
# Descargar imagenes 
~~~ Bash
podman pull grafana/grafana:7.5.8-ubuntu
podman pull mysql:5.7
podman pull nginx:1.20.1
~~~

# Crear contenedor de mysql 
~~~ Bash

podman run --name grafana-mysql -d \
  --network grafana \
  --network-alias grafana.mysql \
  -e MYSQL_ROOT_PASSWORD=n0m3l0s3 \
  -e MYSQL_DATABASE=grafana \
  -e MYSQL_USER=grafana \
  -e MYSQL_PASSWORD=GR4f4n4 \
   mysql:5.7
~~~
# Crear contenedor de grafana 
~~~ Bash

podman run -d --name grafana-server \
  --network grafana \
  --network-alias grafana.server \
  -v ${PWD}/grafana.ini:/etc/grafana/grafana.ini \
  grafana/grafana:7.5.8-ubuntu
~~~

# Crear contenedor de nginx 
~~~ bash

sudo docker run -d --name grafana-nginx \
    -p 80:80 \
    -p 8080:8080 \
    --hostname grafana.dsc-escom.com \
    --network-alias nginx.server \
    -v ${PWD}/grafana-site.conf:/etc/nginx/conf.d/grafana-site.conf \
    nginx:1.20.1
~~~