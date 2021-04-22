import os


def hola_mundo(nombre):
    print("Hola mundo", nombre)

print(os.environ)
print(os.environ["PATH"])
hola_mundo("Carlos")
