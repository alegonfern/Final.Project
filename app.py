from flask import Flask, jsonify, request
from models import User
import requests
from models import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_admin import Admin
from flask_migrate import Migrate
from flask_admin.contrib.sqla import ModelView
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SECRET_KEY"] = "123456"  # Mi propia clave secreta
db.init_app(app)


# Configura migraciones
migrate = Migrate(app, db)  # Configura las migraciones

# Configuracion Flask-Admin
admin = Admin(app, name="Admin", template_mode="bootstrap3")
admin.add_view(ModelView(User, db.session))


# Middleware para manejar CORS manualmente
@app.after_request
def add_cors_headers(response):
    response.headers[
        "Access-Control-Allow-Origin"
    ] = "*"  # Permite solicitudes desde cualquier origen
    response.headers[
        "Access-Control-Allow-Methods"
    ] = "GET, POST, PUT, DELETE, OPTIONS"  # Métodos permitidos
    response.headers[
        "Access-Control-Allow-Headers"
    ] = "Content-Type, Authorization"  # Encabezados permitidos
    return response


# validacion de Inicio de Sesion con metodo POST.
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    user = User.query.filter_by(username=username).first()

    if user and check_password_hash(user.password_hash, password):
        # Autenticación exitosa
        return jsonify({"message": "Autenticación exitosa"})
    else:
        # Autenticación fallida, devuelve un mensaje de error
        return jsonify({"message": "Credenciales incorrectas"}), 401


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
    with app.app_context():
        db.drop_all()
        db.create_all()
