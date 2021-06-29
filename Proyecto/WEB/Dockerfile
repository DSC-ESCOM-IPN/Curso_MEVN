FROM node:16.3-buster

RUN git clone https://github.com/DSC-ESCOM-IPN/Curso_MEVN.git -b Clase31-32-33

WORKDIR Curso_MEVN/web

RUN npm install && \
    npm run lint && \
    npm run build

EXPOSE 8080

COPY entrypoint.sh .

CMD ./entrypoint.sh


