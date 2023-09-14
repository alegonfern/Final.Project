<<<<<<< HEAD
archivo = "Home"
=======
archivo = "Carousel.jsx"
>>>>>>> bac920e7daa77a47b5e27615ca90600b0cef8dc2
valor_antiguo = "class="
valor_nuevo = "className="

with open(archivo, 'r') as f:
    contenido = f.read()

contenido_modificado = contenido.replace(valor_antiguo, valor_nuevo)

with open(archivo, 'w') as f:
    f.write(contenido_modificado)
