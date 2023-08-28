from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
db = SQLAlchemy(app)


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), nullable=False)
    mail = db.Column(db.String(250), nullable=False, unique=True)
    password = db.Column(db.String(250), nullable=False)
    suscription_date = db.Column(db.DateTime, nullable=False)


class Character(db.Model):
    __tablename__ = "character"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    specie = db.Column(db.String(250))
    gender = db.Column(db.String(250), nullable=False)
    heigth = db.Column(db.Integer)
    weight = db.Column(db.Integer)


class Planet(db.Model):
    __tablename__ = "planet"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    weather = db.Column(db.String(250))
    land = db.Column(db.String(250), nullable=False)
    population = db.Column(db.Integer)


class Favorite(db.Model):
    __tablename__ = "favorite"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    planet_id = db.Column(db.Integer, db.ForeignKey("planet.id"))
    character_id = db.Column(db.Integer, db.ForeignKey("character.id"))
    user = db.relationship("User")
    planet = db.relationship("Planet")
    character = db.relationship("Character")


# ruta /characters  método GET lista todos los personajesy devuelve como una respuesta JSON.
@app.route("/characters", methods=["GET"])
def get_all_characters():
    characters = Character.query.all()
    character_list = []
    for character in characters:
        character_data = {
            "id": character.id,
            "name": character.name,
            "specie": character.specie,
            "gender": character.gender,
            "heigth": character.heigth,
            "weight": character.weight,
        }
        character_list.append(character_data)
    return jsonify(character_list)


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

        # Agregar un personaje a la base de datos para probar el endpoint
        new_character = Character(
            name="Luke Skywalker", specie="Human", gender="Male", heigth=175, weight=70
        )
        db.session.add(new_character)
        db.session.commit()

        app.run(debug=True)
