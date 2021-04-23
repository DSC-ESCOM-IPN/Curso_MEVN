import os


def hola_mundo(nombre):
    print("Hola mundo", nombre)

print(os.environ)
nombre = os.environ["NAME"]
hola_mundo(nombre)
