from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "sqlite:///mydatabase.db"  # Reemplaza con tu URI de base de datos

db = SQLAlchemy(app)
migrate = Migrate(app, db)

if __name__ == "__main__":
    with app.app_context():
        # Importa tus modelos aquí para asegurarte de que se registren
        from models import User  # Reemplaza con tus modelos

        # Aplica las migraciones pendientes
        from flask_migrate import upgrade, init

        init()  # Solo necesitas ejecutar esto una vez para inicializar las migraciones
        upgrade()
