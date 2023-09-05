from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

# Definicion del modelo de datos:


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), nullable=False)
    mail = db.Column(db.String(250), nullable=False, unique=True)
    password_hash = db.Column(db.String(250), nullable=False)
    suscription_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
        print(f"Contraseña almacenada: {self.password_hash}")

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
'''
class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), nullable=False)
    mail = db.Column(db.String(250), nullable=False, unique=True)
    password_hash = db.Column(db.String(250), nullable=False)
    subscription_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    first_name = db.Column(db.String(250), nullable=False)
    last_name = db.Column(db.String(250), nullable=False)
    birth_date = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(250), nullable=False)
    profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'), primary_key=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
        print(f"Contraseña almacenada: {self.password_hash}")

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


class Profile(db.Model):
    __tablename__ = 'profile'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    profile_first_name = db.Column(db.String(250), nullable=False, unique=True)
    profile_last_name = db.Column(db.String(250), nullable=False, unique=True)
    profile_picture = db.Column(db.String(250))
    profile_achievements = db.Column(db.String(250))
    profile_interests = db.Column(db.String(250))
    profile_groups = db.Column(db.String(250))
    achievements = db.relationship('Achievements', backref='profile', lazy=True)
    interests = db.relationship('Interests', backref='profile', lazy=True)
    matches = db.relationship('Match', secondary='profile_matches', lazy='subquery', backref=db.backref('profiles', lazy=True))
    

class Interests(db.Model):
    __tablename__ = 'interests'
    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'), primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey('game.id'), primary_key=True)


game_interests = db.Table('game_interests', db.Column('game_id', db.Integer, db.ForeignKey('game.id'), primary_key=True), db.Column('interests_id', db.Integer, db.ForeignKey('interests.id'), primary_key=True))


class Game(db.Model):
    __tablename__ = 'game'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    interests = db.relationship('Interests', secondary=game_interests, lazy='subquery', backref=db.backref('games', lazy=True))


gender_games = db.Table('gender_games', db.Column('gender_id', db.Integer, db.ForeignKey('gender.id'), primary_key=True), db.Column('game_id', db.Integer, db.ForeignKey('game.id'), primary_key=True))


class Gender(db.Model):
    __tablename__ = 'gender'
    id = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.String(250), nullable=False)
    games = db.relationship('Game', secondary=gender_games, lazy='subquery', backref=db.backref('genders', lazy=True))


class InteractionAchievements(db.Model):
    __tablename__ = 'interaction_achievements'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    achievements_id = db.Column(db.Integer, db.ForeignKey('achievements.id'), primary_key=True)


profile_matches = db.Table('profile_matches', db.Column('profile_id', db.Integer, db.ForeignKey('profile.id'), primary_key=True), db.Column('match_id', db.Integer, db.ForeignKey('match.id'), primary_key=True))


class Match(db.Model):
    __tablename__ = 'match'
    id = db.Column(db.Integer, primary_key=True)
    # Columns of match table


class Home(db.Model):
    __tablename__ = 'home'
    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'), primary_key=True)
    profile_post_id = db.Column(db.Integer, db.ForeignKey('personal_post.id'), primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'), primary_key=True)
    personal_posts = db.relationship('Personal_post', backref='home', lazy=True)
    groups = db.relationship('Group', backref='home', lazy=True)
    
class PersonalPost(db.Model):
    __tablename__ = 'personal_post'
    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'), primary_key=True)
    home_id = db.Column(db.Integer, db.ForeignKey('home.id'), primary_key=True)


class Group(db.Model):
    __tablename__ = 'group'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    home_id = db.Column(db.Integer, db.ForeignKey('home.id'), primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'), primary_key=True)
    group_post_id = db.Column(db.Integer, db.ForeignKey('group_post.id'), primary_key=True)
    group_posts = db.relationship('GroupPost', backref='group', lazy=True)

class GroupPost(db.Model):
    __tablename__ = 'group_post'
    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'), primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'), primary_key=True)'''
