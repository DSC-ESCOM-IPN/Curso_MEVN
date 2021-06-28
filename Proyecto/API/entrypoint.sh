#!/bin/bash

cd  ../

mongorestore --uri="mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@$MONGO_HOST/mydb" ./db

cd api

npm run dev

while :
do
	echo ""
	sleep 1
done
