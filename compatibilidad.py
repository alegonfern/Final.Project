from datetime import datetime

def calcular_edad(birth_date):
    # Calcula la edad a partir de la fecha de nacimiento
    today = datetime.today()
    age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
    return age

def compatibilidad(usuario1, usuario2):
    puntos = 0

    # Géneros de Juegos
    generos_juegos_usuario1 = {genero.genero for genero in usuario1.generos_game}
    generos_juegos_usuario2 = {genero.genero for genero in usuario2.generos_game}
    
    # Cantidad máxima de registros en esta categoría
    max_registros_generos_juegos = max(len(generos_juegos_usuario1), len(generos_juegos_usuario2)) or 1
    
    generos_juegos_compartidos = generos_juegos_usuario1 & generos_juegos_usuario2
    puntos += len(generos_juegos_compartidos) * 5 / max_registros_generos_juegos

    # Juegos
    juegos_usuario1 = {juego.game for juego in usuario1.games}
    juegos_usuario2 = {juego.game for juego in usuario2.games}
    max_registros_juegos = max(len(juegos_usuario1), len(juegos_usuario2)) or 1
    juegos_compartidos = juegos_usuario1 & juegos_usuario2
    puntos += len(juegos_compartidos) * 8 / max_registros_juegos
    
    # Géneros de Música
    generos_musica_usuario1 = {genero.genero_musica for genero in usuario1.generos_musica}
    generos_musica_usuario2 = {genero.genero_musica for genero in usuario2.generos_musica}
    max_registros_generos_musica = max(len(generos_musica_usuario1), len(generos_musica_usuario2)) or 1
    generos_musica_compartidos = generos_musica_usuario1 & generos_musica_usuario2
    puntos += len(generos_musica_compartidos) * 2 / max_registros_generos_musica

    # Artistas (mismo patrón para otras categorías)

    artistas_usuario1 = {artista.artista for artista in usuario1.artistas}
    artistas_usuario2 = {artista.artista for artista in usuario2.artistas}
    max_registros_artistas = max(len(artistas_usuario1), len(artistas_usuario2)) or 1
    artistas_compartidos = artistas_usuario1 & artistas_usuario2
    puntos += len(artistas_compartidos) * 3 / max_registros_artistas
    
    # Géneros de Película
    generos_pelicula_usuario1 = {genero.genero_pelicula for genero in usuario1.generos_pelicula}
    generos_pelicula_usuario2 = {genero.genero_pelicula for genero in usuario2.generos_pelicula}
    max_registros_generos_pelicula = max(len(generos_pelicula_usuario1), len(generos_pelicula_usuario2)) or 1
    generos_pelicula_compartidos = generos_pelicula_usuario1 & generos_pelicula_usuario2
    puntos += len(generos_pelicula_compartidos) * 2 / max_registros_generos_pelicula
    
    # Películas
    peliculas_usuario1 = {pelicula.pelicula for pelicula in usuario1.peliculas}
    peliculas_usuario2 = {pelicula.pelicula for pelicula in usuario2.peliculas}
    max_registros_peliculas = max(len(peliculas_usuario1), len(peliculas_usuario2)) or 1
    peliculas_compartidas = peliculas_usuario1 & peliculas_usuario2
    puntos += len(peliculas_compartidas) * 3 / max_registros_peliculas
    
    # Plataformas
    plataformas_usuario1 = {plataforma.plataforma for plataforma in usuario1.plataformas}
    plataformas_usuario2 = {plataforma.plataforma for plataforma in usuario2.plataformas}
    max_registros_plataformas = max(len(plataformas_usuario1), len(plataformas_usuario2)) or 1
    plataformas_compartidas = plataformas_usuario1 & plataformas_usuario2
    puntos += len(plataformas_compartidas) * 4 / max_registros_plataformas
    
    # Calcula la edad de los usuarios
    edad_usuario1 = calcular_edad(usuario1.birth_date)
      
    # Rango de Edad
    for rango_edad_usuario2 in usuario2.rango_edad:
        if edad_usuario1 == rango_edad_usuario2.edad_minima or edad_usuario1 == rango_edad_usuario2.edad_maxima:
            puntos += 1
        elif edad_usuario1 > rango_edad_usuario2.edad_minima and edad_usuario1 < rango_edad_usuario2.edad_maxima:
            puntos += 2
    
    
  # Verifica si alguno de los usuarios no tiene información de género (sexo)
    if (not usuario1.sexo or not usuario2.sexo) and (usuario1.sexo or usuario2.sexo):
        puntos += 0  # Si alguno de los usuarios no tiene género, asigna 0 puntos solo si el otro tiene género
    else:
        for sexo_usuario2 in usuario2.sexo:
            if usuario1.sexo and usuario1.sexo[0].genero_sexo == sexo_usuario2.genero_sexo:
                puntos += 4
    
    # Normalización de las puntuaciones para que estén en una escala de 0 a 10
    puntos *= 100 / 33

     # Redondear a un decimal
    return f"{round(puntos, 1)}%"
