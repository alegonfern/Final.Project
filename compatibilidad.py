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
    generos_juegos_compartidos = generos_juegos_usuario1 & generos_juegos_usuario2
    puntos += len(generos_juegos_compartidos) * 5
    
    # Juegos
    juegos_usuario1 = {juego.game for juego in usuario1.games}
    juegos_usuario2 = {juego.game for juego in usuario2.games}
    juegos_compartidos = juegos_usuario1 & juegos_usuario2
    puntos += len(juegos_compartidos) * 8
    
    # Géneros de Música
    generos_musica_usuario1 = {genero.genero_musica for genero in usuario1.generos_musica}
    generos_musica_usuario2 = {genero.genero_musica for genero in usuario2.generos_musica}
    generos_musica_compartidos = generos_musica_usuario1 & generos_musica_usuario2
    puntos += len(generos_musica_compartidos) * 2
    
    # Artistas
    artistas_usuario1 = {artista.artista for artista in usuario1.artistas}
    artistas_usuario2 = {artista.artista for artista in usuario2.artistas}
    artistas_compartidos = artistas_usuario1 & artistas_usuario2
    puntos += len(artistas_compartidos) * 3
    
    # Géneros de Película
    generos_pelicula_usuario1 = {genero.genero_pelicula for genero in usuario1.generos_pelicula}
    generos_pelicula_usuario2 = {genero.genero_pelicula for genero in usuario2.generos_pelicula}
    generos_pelicula_compartidos = generos_pelicula_usuario1 & generos_pelicula_usuario2
    puntos += len(generos_pelicula_compartidos) * 2
    
    # Películas
    peliculas_usuario1 = {pelicula.pelicula for pelicula in usuario1.peliculas}
    peliculas_usuario2 = {pelicula.pelicula for pelicula in usuario2.peliculas}
    peliculas_compartidas = peliculas_usuario1 & peliculas_usuario2
    puntos += len(peliculas_compartidas) * 3
    
    # Plataformas
    plataformas_usuario1 = {plataforma.plataforma for plataforma in usuario1.plataformas}
    plataformas_usuario2 = {plataforma.plataforma for plataforma in usuario2.plataformas}
    plataformas_compartidas = plataformas_usuario1 & plataformas_usuario2
    puntos += len(plataformas_compartidas) * 4
    
    # Calcula la edad de los usuarios
    edad_usuario1 = calcular_edad(usuario1.birth_date)
      
    # Rango de Edad
    for rango_edad_usuario2 in usuario2.rango_edad:
        if edad_usuario1 == rango_edad_usuario2.edad_minima or edad_usuario1 == rango_edad_usuario2.edad_maxima:
            puntos += 1
        elif edad_usuario1 > rango_edad_usuario2.edad_minima and edad_usuario1 < rango_edad_usuario2.edad_maxima:
            puntos += 2
    
    # Itera sobre la lista de relaciones sexo para encontrar la correcta
    for sexo_usuario2 in usuario2.sexo:
        if usuario1.sexo[0].genero_sexo == sexo_usuario2.genero_sexo:
            puntos += 4
    
    return puntos
