archivo = "Home"
valor_antiguo = "class="
valor_nuevo = "className="

with open(archivo, 'r') as f:
    contenido = f.read()

contenido_modificado = contenido.replace(valor_antiguo, valor_nuevo)

with open(archivo, 'w') as f:
    f.write(contenido_modificado)
