FROM node:14.16-buster

COPY  package.json src/ /app/

WORKDIR /app

RUN npm init -y

RUN npm install express --save-dev

EXPOSE 3000

CMD node /app/index.js
