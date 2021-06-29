FROM node:16.3-buster

RUN apt update -y && \
    apt install git mongo-tools -y
RUN git clone https://github.com/DSC-ESCOM-IPN/Curso_MEVN.git -b Clase31-32-33

WORKDIR Curso_MEVN/api

RUN  npm install

EXPOSE 5000

COPY entrypoint.sh .
CMD ./entrypoint.sh