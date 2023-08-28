from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
import requests

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
db = SQLAlchemy(app)

# Definicion del modelo de datos:


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
    eye_color = db.Column(db.String(250), nullable=True, default="Unknown")
    gender = db.Column(db.String(250), nullable=True, default="Unknown")
    heigth = db.Column(db.Integer, nullable=True, default="Unknown")
    weight = db.Column(db.Integer, nullable=True, default="Unknown")


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


# Creacion de Endpoint GET personajes y Planetas.


# GET para obtener datos personajes desde Api Externa y alimentar mi Base de datos.
@app.route("/external-character", methods=["GET"])
def get_external_character():
    response = requests.get("https://www.swapi.tech/api/people/")
    external_character_data = response.json()

    character_list = external_character_data["results"]
    num_characters_added = 0  # Contador para el número de personajes agregados

    for character_data in character_list:
        character_url = character_data["url"]
        character_uid = character_data["uid"]
        character_response = requests.get(character_url)
        character_details = character_response.json()["result"]["properties"]

        new_character = Character(
            name=character_details["name"],
            id=int(character_uid),
            eye_color=character_details["eye_color"],
            gender=character_details["gender"],
            heigth=int(character_details["height"]),
            weight=int(character_details["mass"]),
        )

        db.session.add(new_character)
        db.session.commit()
        num_characters_added += 1

    message = f"{num_characters_added} characters created from external source"
    return jsonify({"message": message}), 201


# Método GET para listar todos los personajes y id.
@app.route("/characters", methods=["GET"])
def get_all_characters():
    characters = Character.query.all()
    character_list = []
    for character in characters:
        character_data = {
            "id": character.id,
            "name": character.name,
        }
        character_list.append(character_data)
    return jsonify(character_list)


# Método GET para obtener el detalle de un personaje en particular.
@app.route("/character/<int:character_id>", methods=["GET"])
def get_character_details(character_id):
    character = Character.query.get(character_id)
    if character is None:
        return jsonify({"message": "Character not found"}), 404

    character_details = {
        "id": character.id,
        "name": character.name,
        "eye_color": character.eye_color,
        "gender": character.gender,
        "heigth": character.heigth,
        "weight": character.weight,
    }

    return jsonify(character_details)


if __name__ == "__main__":
    with app.app_context():
        db.drop_all()
        db.create_all()
        app.run(debug=True)
