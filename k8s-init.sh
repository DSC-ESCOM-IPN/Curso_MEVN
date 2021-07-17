#!/bin/bash

export APP_ENV=production
export DOCKER_ACCT=dsc-escom-ipn

cluster_name=$([ -z "$1" ] && echo "kind" || echo $1 )

echo "Building docker images..."
docker build ./web/ -t ${DOCKER_ACCT}/cart-web:1.0
docker build ./api/ -t ${DOCKER_ACCT}/cart-api:1.0
docker tag mongo ${DOCKER_ACCT}/mongo:1.0

echo "Creating mongo secrets..."
kubectl create secret generic api-env \
 --from-literal=db-user='vue-app' \
 --from-literal=db-host='cart-db-service' \
 --from-literal=db-port='27017' \
 --from-literal=db-name='mydb' \
 --from-literal=db-pass='dsc-escom-ipn' \
 --from-literal=token-pass='double_secret'

kubectl create secret generic web-env \
 --from-literal=node-env='production' \
 --from-literal=vue-app-base-url='http://cart-front:5000/' \
 --from-literal=vue-app-base-api-url='/api/'

echo "Pulling docker images to kind..."
kind load docker-image ${DOCKER_ACCT}/mongo:1.0 --name=$cluster_name
kind load docker-image ${DOCKER_ACCT}/cart-web:1.0 --name=$cluster_name
kind load docker-image ${DOCKER_ACCT}/cart-api:1.0 --name=$cluster_name

echo "Creating K8s resources..."
kubectl create -f k8s

sleep 5

echo "Getting all the resources..."
kubectl get all
