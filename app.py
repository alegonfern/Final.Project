from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
import requests

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
    specie = db.Column(db.String(250), nullable=True)
    gender = db.Column(db.String(250), nullable=True)
    heigth = db.Column(db.Integer, nullable=True)
    weight = db.Column(db.Integer, nullable=True)


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


# GET para obtener datos desde StarWars
@app.route("/external-character", methods=["GET"])
def get_external_character():
    response = requests.get("https://www.swapi.tech/api/people/")
    external_character_data = (
        response.json()
    )  # Obtener lista de personajes en formato JSON

    # Creo un nuevo objeto Character a partir de los datos externos
    character_list = external_character_data[
        "results"
    ]  # Lista de personajes desde la respuesta JSON
    for character_data in character_list:
        new_character = Character(
            name=character_data["name"],
            id=int(character_data["uid"]),  # Convierto uid a entero
        )

    db.session.add(new_character)  # Agrego el nuevo personaje
    db.session.commit()  # Realizar el commit para persistir en la base de datos

    return jsonify({"message": "Characters created from external source"}), 201


# ruta /characters  método GET lista todos los personajes y devuelve como una respuesta JSON.
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
