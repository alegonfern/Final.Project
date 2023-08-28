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
    specie = db.Column(db.String(250), nullable=True, default="Unknown")
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


# GET para obtener datos desde StarWars
@app.route("/external-character", methods=["GET"])
def get_external_character():
    response = requests.get("https://www.swapi.tech/api/people/")
    external_character_data = (
        response.json()
    )  # Obtener lista de personajes en formato JSON
    # Cero una ista para almacenar nuevos personajes
    new_characters = []

    # Creo un nuevo objeto Character a partir de los datos externos
    character_list = external_character_data["results"]

    # Lista de personajes desde la respuesta JSON
    for character_data in character_list:
        new_character = Character(
            name=character_data["name"],
            id=int(character_data["uid"]),  # Convierto uid a entero
        )
        new_characters.append(new_character)  # Agrego el nuevo personaje a la lista
    db.session.add_all(new_characters)  # Agrego todos los personajes
    db.session.commit()  # Realizar el commit para persistir en la base de datos

    num_characters_added = len(
        character_list
    )  # Obtener el número de personajes agregados
    message = f"{num_characters_added} characters created from external source"
    return jsonify({"message": message}), 201


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
        db.drop_all()
        db.create_all()
        app.run(debug=True)
