from app import create_app, db
from app.models import Product, Admin, WeeklyAd  # make sure these exist in models.py

app = create_app()

with app.app_context():
    db.create_all()
    print("✅ Database tables created.")