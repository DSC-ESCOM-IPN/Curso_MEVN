podman  network create -d bridge grafana

podman pull grafana/grafana:7.5.8-ubuntu

podman run --name grafana-mysql -d \
  --network controller \
  --network-alias grafana.mysql \
  -e MYSQL_ROOT_PASSWORD=n0m3l0s3 \
  -e MYSQL_DATABASE=grafana \
  -e MYSQL_USER=grafana \
  -e MYSQL_PASSWORD=GR4f4n4 \
  -p 3036:3036 \
   mysql:5.7

podman run -d --name grafana-server grafana/grafana:7.5.8-ubuntu \
  -p 3000:3000 \
  --network grafana \
  --network-alias grafana.server \
  -v ${PWD}/grafana.ini:/etc/grafana/grafana.ini \
  grafana/grafana:7.5.8-ubuntu
