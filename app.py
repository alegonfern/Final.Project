from flask import Flask, jsonify
from models import Planet, Character, User, Favorite
import requests
from models import db

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
db.init_app(app)


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

    message = f"{num_characters_added} characters created from external API source"
    return jsonify({"message": message}), 201


# GET para obtener datos planetas desde Api Externa y alimentar mi Base de datos.
@app.route("/external-planet", methods=["GET"])
def get_external_planet():
    response = requests.get("https://www.swapi.tech/api/planets/")
    external_planet_data = response.json()

    planet_list = external_planet_data["results"]
    num_planets_added = 0  # Contador para el número de planetas agregados

    for planet_data in planet_list:
        planet_url = planet_data["url"]
        planet_uid = planet_data["uid"]
        planet_response = requests.get(planet_url)
        planet_details = planet_response.json()["result"]["properties"]

        population = planet_details["population"]
        if population.lower() == "unknown":
            population_int = None  # Asigno None para indicar un valor desconocido
        else:
            population_int = int(population)

        new_planet = Planet(
            name=planet_details["name"],
            id=int(planet_uid),
            climate=planet_details["climate"],
            terrain=planet_details["terrain"],
            population=population_int,
        )

        db.session.add(new_planet)
        db.session.commit()
        num_planets_added += 1

    message = f"{num_planets_added} planets created from external API source"
    return jsonify({"message": message}), 201


# Método GET para listar todos los personajes, solo Nombre e ID.
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


# Método GET para obtener el detalle de un personaje en particular segun id.
@app.route("/character/<int:character_id>", methods=["GET"])
def get_character_details(character_id):
    character = Character.query.get(character_id)
    if character is None:
        return jsonify({"message": "Character id not found"}), 404

    character_details = {
        "id": character.id,
        "name": character.name,
        "eye_color": character.eye_color,
        "gender": character.gender,
        "heigth": character.heigth,
        "weight": character.weight,
    }

    return jsonify(character_details)


# Método GET para listar todos los planetas, solo Nombre e ID.
@app.route("/planets", methods=["GET"])
def get_all_planets():
    planets = Planet.query.all()
    planet_list = []
    for planet in planets:
        planet_data = {
            "id": planet.id,
            "name": planet.name,
        }
        planet_list.append(planet_data)
    return jsonify(planet_list)


# Método GET para obtener el detalle de un planeta en particular segun id.
@app.route("/planet/<int:planet_id>", methods=["GET"])
def get_planet_details(planet_id):
    planet = Planet.query.get(planet_id)
    if planet is None:
        return jsonify({"message": "Planet id not found"}), 404

    planet_details = {
        "id": planet.id,
        "name": planet.name,
        "climate": planet.climate,
        "terrain": planet.terrain,
        "population": planet.population,
    }

    return jsonify(planet_details)


if __name__ == "__main__":
    with app.app_context():
        db.drop_all()
        db.create_all()
        app.run(debug=True)
