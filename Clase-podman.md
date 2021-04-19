## Podman Image comand

~~~ bash

podman image --help

~~~

## Pull ubuntu

~~~bash
podman image list

podman image pull ubuntu:21.04

podman image  pull ubuntu:16.04

podman image list

podman image rm ubuntu:16.04

podman image list

~~~

## Podman search

~~~bash
podman image search node
podman image search mongodb

podman image search --filter=is-official node
podman image search --list-tags  docker.io/library/node --limit 10000 | grep '^docker.io/library/node  15'

podman image search docker.io/library/node --list-tags

podman image pull docker.io/library/node:15.14
podman image pull mongo:3.4-xenial


~~~

## Execute MongoDB

~~~bash
podman run -d --name some-mongo \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    -p 27017:27017 \
    mongo:4.4.5

~~~

## Login MongoDB

- [Usuarios y roles](https://docs.mongodb.com/manual/tutorial/manage-users-and-roles/)
- [Shell](https://docs.mongodb.com/manual/reference/mongo-shell/)

~~~bash

sudo apt install mongodb-clients

mongo --username mongoadmin --password secret --authenticationDatabase admin --host 127.0.0.1 --port 27017

show dbs


use newdb

~~~

~~~bash
use admin

db.createUser(
  {
    user: "reportsUser",
    pwd: "pass", 
    roles: [
       { role: "readWrite", db: "newdb" },
       { role: "read", db: "admin" },
    ],
    passwordDigestor:"server",
    mechanisms: [
        "SCRAM-SHA-1",
        "SCRAM-SHA-256"
    ]
  }
)


use newdb

db.newcollection.insert({"mensaje":"Hola mundo"})


~~~

~~~bash

mongo --username reportsUser --password pass --authenticationDatabase newdb --host 127.0.0.1 --port 27017
podm
use newdb
db.newcollection.insert({"mensaje":"Podman was here"})
db.newcollection.find()

~~~

# Mongo express

~~~bash
ifconfig

podman run -it --name mongo-express \
  -e ME_CONFIG_MONGODB_SERVER=10.88.0.1 \
  -e ME_CONFIG_MONGODB_ADMINUSERNAME="mongoadmin" \
  -e ME_CONFIG_MONGODB_ADMINPASSWORD="secret" \
  -p 8081:8081 mongo-express:0.54.0

~~~