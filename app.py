from flask import Flask, jsonify, request
from models import User, Profile,Sexo, RangoEdad, GeneroGame, Game,GeneroMusica,Artista,GeneroPelicula,Pelicula,Plataforma, FriendRequest, Match
import requests
from models import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_admin import Admin
from flask_migrate import Migrate
from flask_admin.contrib.sqla import ModelView
from flask_cors import CORS
import logging
from datetime import datetime
from flask import make_response
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from compatibilidad import compatibilidad

app = Flask(__name__)
app.config['DEBUG'] = True 
app.config['ENV'] = "development"
CORS(app, resources={r"/*": {"origins": "*"}})
logging.basicConfig(filename="app.log", level=logging.INFO)

jwt = JWTManager(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SECRET_KEY"] = "123456"  # Mi propia clave secreta
app.config["JWT_SECRET_KEY"] = "123456"
db.init_app(app)


# Configura migraciones
migrate = Migrate(app, db)  # Configura las migraciones


# Configuracion Flask-Admin
admin = Admin(app, name="Admin", template_mode="bootstrap3")


# Modifico la clase UserAdmin para manejar la contraseña
class UserAdminView(ModelView):
    column_exclude_list = [
        "password_hash"
    ]  # Excluir el campo de contraseña en la vista
    
    def create_model(self,form):
        user=User()
        form.populate_obj(user) # Aplicar cambio password hash.
        profile=Profile()
        user.password_hash=generate_password_hash(form.password_hash.data)
        user.profile=profile
        self.session.add(user)
        self.session.commit()
        return True

# Agrego la vista personalizada de UserAdmin al admin
admin.add_view(UserAdminView(User, db.session))
admin.add_view(ModelView(Profile, db.session))

# validacion de Inicio de Sesion con metodo POST.
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    user = User.query.filter_by(username=username).first()

    if user:
        if check_password_hash(user.password_hash, password):
            # Autenticación exitosa
            logging.info(f"Autenticación exitosa para el usuario: {username}")
            token = create_access_token(identity=user.id)  # Genera el token JWT
            user_id = user.id
            return jsonify({"token": token, "message": "Autenticación exitosa", "user_id": user_id})
        else:
            # Autenticación fallida, contraseña incorrecta
            logging.warning(
                f"Autenticación fallida para el usuario: {username} (contraseña incorrecta)"
            )
    else:
        # Autenticación fallida, usuario no encontrado
        logging.warning(
            f"Autenticación fallida para el usuario: {username} (usuario no encontrado)"
        )

    # Devuelve un mensaje de error
    return jsonify({"message": "Credenciales incorrectas"}), 401


# Ruta para obtener la lista de usuarios en formato JSON
@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()  # Obtén todos los usuarios de la base de datos
    user_list = []  # Crea una lista para almacenar los usuarios en formato JSON

    # Itera sobre los usuarios y crea un diccionario JSON para cada uno
    for user in users:
        user_data = {
            "id": user.id,
            "username": user.username,
            "mail": user.mail,
            "subscription_date": user.suscription_date.strftime("%Y-%m-%d %H:%M:%S"),
            "last_name": user.last_name,
            "first_name": user.first_name,
            "url_avatar": user.url_avatar
            # Asegúrate de formatear la fecha como desees
        }
        user_list.append(user_data)  # Agrega el usuario a la lista

    return jsonify(
        {"users": user_list}
    )  # Devuelve la lista de usuarios en formato JSON

@app.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = User.query.get(user_id)  # Obtén el usuario por su ID
    if not user:
        return jsonify({"message": "Usuario no encontrado"}), 404  # Retorna un mensaje de error si el usuario no se encuentra

    # Crear un diccionario con los datos del usuario
    user_data = {
        "id": user.id,
        "username": user.username,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "birth_date": user.birth_date.strftime("%Y-%m-%d")  # Formatea la fecha como desees
    }

    return jsonify(user_data)  # Retorna los datos del usuario en formato JSON


@app.route("/signup", methods=["POST"])
def signup():
    user=User()
    data = request.get_json()
    username = data.get("username")
    first_name = data.get("first_name")
    last_name = data.get("last_name")
    email = data.get("email")
    password = data.get("password")
    url_avatar=data.get("url_avatar")
    profile=Profile()
    user.profile=profile
    
    # Formato datetime
    birth_date_str = data.get("birth_date")
    birth_date = datetime.strptime(birth_date_str, "%Y-%m-%d")

    gender = data.get("gender")
    suscription_date = datetime.utcnow()
  
    # Verifica si el usuario o el correo ya existen en la base de datos
    existing_user = User.query.filter_by(username=username).first()
    existing_email = User.query.filter_by(mail=email).first()

    if existing_user:
        return jsonify({"message": "El nombre de usuario ya existe"}), 400
    if existing_email:
        return jsonify({"message": "El correo electrónico ya está registrado"}), 400

    # Crea un nuevo usuario y almacena la contraseña en formato hash
    new_user = User(
        username=username,
        mail=email,
        first_name=first_name,
        last_name=last_name,
        birth_date=birth_date,
        gender=gender,
        suscription_date=suscription_date,
        url_avatar=url_avatar
    )
    new_user.set_password(password) 
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Usuario creado con éxito"}), 201


#Enpoint usuario por ID
@app.route("/user/<int:user_id>", methods=["GET"])
def get_user_profile(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({"error": "Usuario no encontrado"}), 404

    profile_data = {
        "nombre": user.first_name,
        "apellido": user.last_name,
        "fecha_de_nacimiento": user.birth_date.strftime("%Y-%m-%d")
    }

    return jsonify(profile_data)

#Enpoint para actualizar nombre y apellido
@app.route('/user/<int:user_id>/profile', methods=['PUT'])
def update_user_profile(user_id):
    user = User.query.get(user_id)
    if user is None:
        return jsonify({'error': 'User not found'}), 404

    data = request.get_json()

    # Validación del nombre
    first_name = data.get('first_name', user.first_name)
    if not first_name.isalpha():
        return jsonify({'error': 'El nombre solo puede contener letras'}), 400

    # Validación del apellido
    last_name = data.get('last_name', user.last_name)
    if not last_name.isalpha():
        return jsonify({'error': 'El apellido solo puede contener letras'}), 400

    user.first_name = first_name
    user.last_name = last_name

    db.session.commit()

    return jsonify({'message': 'Profile updated successfully'})



#End point guardar intereses
@app.route('/intereses', methods=['POST'])
def agregar_intereses():
    try:
        data = request.json

        # Obtén el ID de usuario proporcionado en los datos (DEBE SER POR CONTEXT)
        user_id = data["user_id"]

        # Obtén los datos de intereses del arreglo en los datos
        generos_game = data["generos_game"]
        games = data["games"]
        generos_musica = data["generos_musica"]
        artistas = data["artistas"]
        generos_pelicula = data["generos_pelicula"]
        peliculas = data["peliculas"]
        plataformas = data["plataformas"]
        edad_minima = data["edad_minima"]
        edad_maxima = data["edad_maxima"]
        sexo = data["sexo"]
       

        # Géneros de Juegos
        for genero_nombre in generos_game:
            genero = GeneroGame(genero=genero_nombre, user_id=user_id)
            db.session.add(genero)

        # Juegos
        for game_nombre in games:
            game = Game(game=game_nombre, user_id=user_id)
            db.session.add(game)

        # Géneros de Música
        for genero_musica_nombre in generos_musica:
            genero_musica = GeneroMusica(genero_musica=genero_musica_nombre, user_id=user_id)
            db.session.add(genero_musica)

        # Artistas
        for artista_nombre in artistas:
            artista = Artista(artista=artista_nombre, user_id=user_id)
            db.session.add(artista)

        # Géneros de Película
        for genero_pelicula_nombre in generos_pelicula:
            genero_pelicula = GeneroPelicula(genero_pelicula=genero_pelicula_nombre, user_id=user_id)
            db.session.add(genero_pelicula)

        # Películas
        for pelicula_nombre in peliculas:
            pelicula = Pelicula(pelicula=pelicula_nombre, user_id=user_id)
            db.session.add(pelicula)

        # Plataformas
        for plataforma_nombre in plataformas:
            plataforma = Plataforma(plataforma=plataforma_nombre, user_id=user_id)
            db.session.add(plataforma)

        # Género (Sexo)
        sexo_usuario = Sexo(genero_sexo=sexo["genero_sexo"], user_id=user_id)
        db.session.add(sexo_usuario)


        # Rangos de Edad
        rango_edad = RangoEdad(edad_minima=edad_minima, edad_maxima=edad_maxima, user_id=user_id)
        db.session.add(rango_edad)
        

        # Guarda los cambios en la base de datos
        db.session.commit()

        return jsonify({"message": "Intereses almacenados exitosamente"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/calcular_compatibilidad', methods=['POST'])
def calcular_compatibilidad():
    data = request.json  # Supongamos que envías datos con los IDs de los usuarios

    # Recupera los IDs de los dos usuarios de la solicitud POST
    usuario1_id = 1
    usuario2_id = 2

    # Recupera los usuarios desde la base de datos
    usuario1 = User.query.get(usuario1_id)
    usuario2 = User.query.get(usuario2_id)

    # Asegúrate de que ambos usuarios existan
    if not usuario1 or not usuario2:
        return jsonify({"message": "Usuario(s) no encontrado(s)"}), 404

    # Aquí deberías calcular la puntuación de compatibilidad según tus criterios
    puntuacion_compatibilidad = compatibilidad(usuario1, usuario2)

    return jsonify({"compatibilidad": puntuacion_compatibilidad})

@app.route('/calcular_compatibilidad_entre_usuarios', methods=['GET'])
def calcular_compatibilidad_entre_usuarios():
    # Obtener todos los usuarios registrados en la base de datos
    usuarios = User.query.all()

    # Crear una lista de resultados de compatibilidad
    resultados_compatibilidad = []

    # Calcular la compatibilidad para cada par de usuarios únicos
    for i, usuario1 in enumerate(usuarios):
        for usuario2 in usuarios[i + 1:]:
            # Comprueba si la compatibilidad ya se calculó para esta pareja
            puntuacion_compatibilidad = compatibilidad(usuario1, usuario2)
            resultados_compatibilidad.append({
                "usuario1_id": usuario1.id,
                "usuario2_id": usuario2.id,
                "compatibilidad": puntuacion_compatibilidad
            })

    return jsonify({"compatibilidades": resultados_compatibilidad})



@app.route("/Home", methods=["GET"])
@jwt_required()  # Protege la ruta con autenticación JWT
def home():
    
    return jsonify({"message": "Bienvenido a la ruta privada Home"})  

@app.route("/Intereses", methods=["GET"])
@jwt_required()  # Protege la ruta con autenticación JWT
def intereses():
    
    return jsonify({"message": "Bienvenido a la ruta privada Intereses"})  
    
@app.route("/Group", methods=["GET"])
@jwt_required()  # Protege la ruta con autenticación JWT
def group():
    
    return jsonify({"message": "Bienvenido a la ruta privada Group"})  

@app.route("/Matchpreview", methods=["GET"])
@jwt_required()  # Protege la ruta con autenticación JWT
def matchpreview():
    
    return jsonify({"message": "Bienvenido a la ruta privada Matchpreview"}) 

@app.route("/Match", methods=["GET"])
@jwt_required()  # Protege la ruta con autenticación JWT
def match():
    
    return jsonify({"message": "Bienvenido a la ruta privada Match"})  

@app.route("/Chat", methods=["GET"])
@jwt_required()  # Protege la ruta con autenticación JWT
def chat():
    
    return jsonify({"message": "Bienvenido a la ruta privada Chat"})

@app.route("/Calendar", methods=["GET"])
@jwt_required()  # Protege la ruta con autenticación JWT
def calendar():
    
    return jsonify({"message": "Bienvenido a la ruta privada Eventos"})

@app.route("/genero/<int:user_id>", methods=["GET"])
def get_generos_by_user_id(user_id):
    generos = Genero.query.filter_by(user_id=user_id).all()

    generos_data = [
        {
            "id": genero.id,
            "user_id": genero.user_id,
            "genero": genero.genero,
        }
        for genero in generos
    ]

    return jsonify(generos_data)

@app.route("/genero/<int:user_id>/<int:genero_id>", methods=["DELETE"])
def delete_genero(user_id, genero_id):
    genero = Genero.query.filter_by(user_id=user_id, id=genero_id).first()

    if not genero:
        return jsonify({"error": "Género no encontrado"}), 404

    db.session.delete(genero)
    db.session.commit()

    return jsonify({"message": "Género eliminado exitosamente"})

@app.route("/game/<int:user_id>", methods=["GET"])
def get_games_by_user_id(user_id):
    games = Game.query.filter_by(user_id=user_id).all()

    games_data = [
        {
            "id": game.id,
            "user_id": game.user_id,
            "game": game.games,
        }
        for game in games
    ]

    return jsonify(games_data)


@app.route("/game/<int:user_id>/<int:game_id>", methods=["DELETE"])
def delete_game(user_id, game_id):
    game = Game.query.filter_by(user_id=user_id, id=game_id).first()

    if not game:
        return jsonify({"error": "Juego no encontrado"}), 404

    db.session.delete(game)
    db.session.commit()

    return jsonify({"message": "Juego eliminado exitosamente"}) 

@app.route('/friend-request', methods=['POST'])
def send_friend_request():
    data = request.get_json()

    sender_id = data.get('senderId')
    receiver_id = data.get('receiverId')

    # Verifica que los campos requeridos estén presentes
    if sender_id is None or receiver_id is None:
        return jsonify({"error": "Campos senderId y receiverId requeridos"}), 400

    # Verifica si existe una solicitud de amistad recíproca
    if has_mutual_friend_request(sender_id, receiver_id):
        # Si existe una solicitud mutua, crea una entrada en la tabla Match
        create_match(sender_id, receiver_id)

    # Crea una nueva solicitud de amistad
    friend_request = FriendRequest(sender_id=sender_id, receiver_id=receiver_id, status='Aceptada')

    try:
        db.session.add(friend_request)
        db.session.commit()
        return jsonify({"message": "Solicitud de amistad creada con éxito"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Error al crear la solicitud de amistad", "details": str(e)}), 500

def has_mutual_friend_request(sender_id, receiver_id):
    # Comprueba si hay una solicitud mutua en la base de datos
    mutual_request = FriendRequest.query.filter_by(sender_id=receiver_id, receiver_id=sender_id, status='Aceptada').first()
    return mutual_request is not None

def create_match(user_id_1, user_id_2):
    # Crea una nueva entrada en la tabla Match
    match = Match(user_id_1=user_id_1, user_id_2=user_id_2)

    try:
        db.session.add(match)
        db.session.commit()
    except Exception as e:
        db.session.rollback()


# Variable global para almacenar los datos obtenidos del GET
usuarios_obtenidos = []

@app.route('/obtener-usuarios-externos', methods=['GET'])
def obtener_usuarios_externos():
    try:
        N = request.args.get('N', type=int, default=13)  # Parámetro opcional para la cantidad de usuarios, valor por defecto 10

        # Realiza el método GET y almacena los datos en la variable global
        response = requests.get(f'https://randomuser.me/api/?results={N}')
        if response.status_code == 200:
            data = response.json()
            usuarios_obtenidos.extend(data['results'])
            return jsonify({'message': 'Usuarios obtenidos con éxito'}), 200
        else:
            return jsonify({'error': 'Error al obtener datos de la API externa'}), 500

    except Exception as e:
        logging.error(f'Error al obtener usuarios externos: {str(e)}')
        return jsonify({'error': 'Error al obtener usuarios externos'}), 500

@app.route('/crear-usuarios-desde-api', methods=['POST'])
def crear_usuarios_desde_api():
    try:
        # Obtén los datos almacenados en la variable global
        for user_data in usuarios_obtenidos:
            username = user_data['login']['username']
            first_name = user_data['name']['first']
            last_name = user_data['name']['last']
            email = user_data['email']
            password = user_data['login']['password']
            birth_date_str = user_data['dob']['date']
            gender = user_data['gender']
            suscription_date = datetime.utcnow()
            url_avatar = user_data['picture']['large']
            # Verifica si el usuario o el correo ya existen en la base de datos
            existing_user = User.query.filter_by(username=username).first()
            existing_email = User.query.filter_by(mail=email).first()

            if existing_user or existing_email:
                continue  # Si el usuario o el correo ya existen, pasa al siguiente usuario

            # Crea un nuevo usuario y almacena la contraseña en formato hash
            new_user = User(
                username=username,
                mail=email,
                first_name=first_name,
                last_name=last_name,
                birth_date=datetime.strptime(birth_date_str, "%Y-%m-%dT%H:%M:%S.%fZ"),
                gender=gender,
                suscription_date=suscription_date,
                url_avatar=url_avatar
            )
            new_user.set_password(password)
            db.session.add(new_user)

        # Realiza la transacción en la base de datos
        db.session.commit()

        return jsonify({'message': 'Usuarios creados con éxito a partir de los datos del método GET'}), 201

    except Exception as e:
        logging.error(f'Error al crear usuarios desde la API externa: {str(e)}')
        db.session.rollback()  # Revierte cualquier cambio en la base de datos en caso de error
        return jsonify({'error': 'Error al crear usuarios desde la API externa'}), 500

@app.route('/bdintereses', methods=['POST'])
def bd_intereses():
    try:
        data = request.json

        # Asegúrate de que data sea una lista de usuarios con sus intereses
        if not isinstance(data, list):
            return jsonify({"error": "Se esperaba una lista de usuarios"}), 400

        for user_data in data:
            # Obtén el ID de usuario proporcionado en los datos
            user_id = user_data["user_id"]

            # Obtén los datos de intereses del usuario actual
            generos_game = user_data["generos_game"]
            games = user_data["games"]
            generos_musica = user_data["generos_musica"]
            artistas = user_data["artistas"]
            generos_pelicula = user_data["generos_pelicula"]
            peliculas = user_data["peliculas"]
            plataformas = user_data["plataformas"]
            edad_minima = user_data["edad_minima"]
            edad_maxima = user_data["edad_maxima"]
            sexo = user_data["sexo"]

            # Crea el usuario
            user = User(id=user_id)  # Asegúrate de usar el modelo correcto para tu User

            # Géneros de Juegos
            for genero_nombre in generos_game:
                genero = GeneroGame(genero=genero_nombre, user_id=user_id)
                db.session.add(genero)

            # Juegos
            for game_nombre in games:
                game = Game(game=game_nombre, user_id=user_id)
                db.session.add(game)

            # Géneros de Música
            for genero_musica_nombre in generos_musica:
                genero_musica = GeneroMusica(genero_musica=genero_musica_nombre, user_id=user_id)
                db.session.add(genero_musica)

            # Artistas
            for artista_nombre in artistas:
                artista = Artista(artista=artista_nombre, user_id=user_id)
                db.session.add(artista)

            # Géneros de Película
            for genero_pelicula_nombre in generos_pelicula:
                genero_pelicula = GeneroPelicula(genero_pelicula=genero_pelicula_nombre, user_id=user_id)
                db.session.add(genero_pelicula)

            # Películas
            for pelicula_nombre in peliculas:
                pelicula = Pelicula(pelicula=pelicula_nombre, user_id=user_id)
                db.session.add(pelicula)

            # Plataformas
            for plataforma_nombre in plataformas:
                plataforma = Plataforma(plataforma=plataforma_nombre, user_id=user_id)
                db.session.add(plataforma)

            # Género (Sexo)
            sexo_usuario = Sexo(genero_sexo=sexo["genero_sexo"], user_id=user_id)
            db.session.add(sexo_usuario)

            # Rangos de Edad
            rango_edad = RangoEdad(edad_minima=edad_minima, edad_maxima=edad_maxima, user_id=user_id)
            db.session.add(rango_edad)

        # Guarda los cambios en la base de datos
        db.session.commit()

        return jsonify({"message": "Intereses almacenados exitosamente"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
    with app.app_context():
        db.drop_all()
        db.create_all()
