import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "sqlite:///freshway.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv("JWT_SECRET", "supersecret")