## Pull ubuntu

### Ejecutar el contenedor

~~~bash
podman run -it --name ubuntu ubuntu:20.04

# dentro del contenedor

apt update -y

apt install python3 python3-dev vim git -y
~~~

### Copiar archivo

~~~bash

podman cp src/holamundo.py ubuntu:/
~~~

## Ejecutar dentro del contenedor

~~~bash

python3 holamundo.py
printenv

~~~

~~~bash

podman build -t python-ev .
podman run -d --name python-env python-ev