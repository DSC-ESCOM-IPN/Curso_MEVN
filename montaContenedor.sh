#!/bin/bash

montarHolaMundo() {
  "$1" build -t hola-node .
  "$1" run --name HolaNode -p 3000:3000 -v "$(pwd)/src":/usr/src/app/src -it hola-node
}

read -p "¿Podman o Docker? (p/d)): " OPT
case $OPT in
     p | P | podman)
          montarHolaMundo "podman"
          ;;
     d | D | docker)
          montarHolaMundo "docker"
          ;;
     *)
          echo "opcion invalida"
          ;;
esac
