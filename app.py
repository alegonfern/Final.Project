from flask import Flask, jsonify, request
from models import User, Profile, Interest
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

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
logging.basicConfig(filename="app.log", level=logging.INFO)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SECRET_KEY"] = "123456"  # Mi propia clave secreta
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
            return jsonify({"message": "Autenticación exitosa"})
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
            "subscription_date": user.suscription_date.strftime("%Y-%m-%d %H:%M:%S")
            # Asegúrate de formatear la fecha como desees
        }
        user_list.append(user_data)  # Agrega el usuario a la lista

    return jsonify(
        {"users": user_list}
    )  # Devuelve la lista de usuarios en formato JSON

@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    username = data.get("username")
    first_name = data.get("first_name")
    last_name = data.get("last_name")
    email = data.get("email")
    password = data.get("password")
    
    # Parsear la cadena de fecha a un objeto datetime
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
        suscription_date=suscription_date
    )
    new_user.set_password(password) 
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Usuario creado con éxito"}), 201

#Enpoint usuario por ID
@app.route("/user/<int:user_id>/profile", methods=["GET"])
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
        return jsonify({'error': 'Usuario no encontrado'}), 404

    data = request.get_json()
    user.first_name = data.get('first_name', user.first_name)
    user.last_name = data.get('last_name', user.last_name)

    db.session.commit()

    return jsonify({'message': 'Perfil actualizado de forma correcta'})


#Endpoint guardar intereses
@app.route('/guardar_intereses', methods=['POST'])
def guardar_intereses():
    try:
        data = request.get_json()
        user_id = data.get('user_id')
        interes = data.get('interest')
        favorite_games = data.get('favorite_games')

        nuevo_interes = Interest(user_id=user_id, interest=interes, favorite_games=favorite_games)
        db.session.add(nuevo_interes)
        db.session.commit()

        return jsonify({'message': 'Intereses guardados correctamente'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
    with app.app_context():
        db.drop_all()
        db.create_all()
