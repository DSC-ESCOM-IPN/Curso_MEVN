FROM ubuntu:20.04

RUN apt update -y

RUN apt install python3 python3-dev vim git -y

COPY src /app/src

WORKDIR /app/src

CMD python3 holamundo-env.py