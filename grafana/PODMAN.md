~~~bash
podman pod create --name pod-grafana -p 8080:80 -p 3000:3000

~~~

~~~
podman run --name grafana-mysql-pod -d \
  --pod pod-grafana \
  -e MYSQL_ROOT_PASSWORD=n0m3l0s3 \
  -e MYSQL_DATABASE=grafana \
  -e MYSQL_USER=grafana \
  -e MYSQL_PASSWORD=GR4f4n4 \
   mysql:5.7
~~~


# Crear contenedor de grafana 
~~~ Bash

podman run -d --name grafana-server-pod \
  -v ${PWD}/grafana.ini:/etc/grafana/grafana-pod.ini \
  grafana/grafana:7.5.8-ubuntu
~~~