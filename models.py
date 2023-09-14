from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True) 
    username = db.Column(db.String(250), nullable=False)
    mail = db.Column(db.String(250), nullable=False, unique=True)
    password_hash = db.Column(db.String(250), nullable=False)
    suscription_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    first_name = db.Column(db.String(250), nullable=False)
    last_name = db.Column(db.String(250), nullable=False)
    birth_date = db.Column(db.DateTime, nullable=False)
    gender = db.Column(db.String(250), nullable=False)
    profile = db.relationship("Profile",uselist=False)
    generos= relationship("Genero", back_populates="user")
    games= relationship("Game", back_populates="user")
   
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
        print(f"Contraseña almacenada: {self.password_hash}")

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    profile_picture = db.Column(db.String(255))
    description = db.Column(db.String(255))
    social_media = db.Column(db.String(255))
    rating = db.Column(db.Integer)
    registration_date = db.Column(db.Date)

class Genero(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    genero = db.Column(db.String(255))
    user = relationship("User", back_populates="generos")

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    games = db.Column(db.String(255))
    user = relationship("User", back_populates="games")


class FriendRequest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    receiver_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    status = db.Column(db.String(50))

class Match(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id_1 = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user_id_2 = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    connection_date = db.Column(db.Date)
