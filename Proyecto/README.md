# Crear pods

~~~Bash

podman pod create --name pod-mven -p 8080:80 -p 3000:3000

docker network create -d bridge mven-network

~~~


# Mongo

Es necesario crear un contenedor y cargar la copia de la base de datos. La copia de la base de datos se cargara al crearse el contenedor del API

## Crear contenedor de Mongo


~~~ bash
sudo docker run -d \
    --network mven-network \
    --network-alias mongo.mven \
    --name mongo-mven-con \
    -e MONGO_INITDB_ROOT_USERNAME=mogo-admin \
    -e MONGO_INITDB_ROOT_PASSWORD=M0ng0P4ss \
    mongo:bionic
~~~

# API

Se debe clonar el repositorio y hacer la copia de la base de datos, esto se hara en el archivo entrypoint

## Crear la imagen

~~~Bash
sudo docker build -t api-node-img ./API
~~~

## Crear el contenedor del API

~~~Bash
sudo docker run -d \
    --network mven-network \
    --network-alias api.mven \
    --name api-mven-con \
    -e MONGO_INITDB_ROOT_USERNAME=mogo-admin \
    -e MONGO_INITDB_ROOT_PASSWORD=M0ng0P4ss \
    -e MONGO_HOST=mongo.mven \
    -p 5000:5000 \
    -v ${PWD}/API/.env:/Curso_MEVN/api/.env \
    api-node-img
~~~

# Web

## Crear imagen web

~~~ bash

sudo docker build -t web-node-img ./WEB

~~~

## Crear contenedor web

~~~Bash

sudo docker run -it \
    --network mven-network \
    --network-alias web.mven \
    --name web-mven-con \
    -p 8080:8080 \
    -v ${PWD}/WEB/.env:/Curso_MEVN/web/.env \
    web-node-img bash
~~~