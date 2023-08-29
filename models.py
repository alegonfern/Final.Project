from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime

db = SQLAlchemy()

# Definicion del modelo de datos:


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), nullable=False)
    mail = db.Column(db.String(250), nullable=False, unique=True)
    password = db.Column(db.String(250), nullable=False)
    suscription_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)


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
    climate = db.Column(db.String(250), nullable=True, default="Unknown")
    terrain = db.Column(db.String(250), nullable=True, default="Unknown")
    population = db.Column(db.Integer, nullable=True, default="Unknown")


class Favorite(db.Model):
    __tablename__ = "favorite"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    planet_id = db.Column(db.Integer, db.ForeignKey("planet.id"))
    character_id = db.Column(db.Integer, db.ForeignKey("character.id"))
    user = db.relationship("User")
    planet = db.relationship("Planet")
    character = db.relationship("Character")
