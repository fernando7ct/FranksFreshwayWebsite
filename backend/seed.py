from app import create_app, db
from app.models import Product

app = create_app()

with app.app_context():
    apple = Product(
        name="Apple",
        description="Fresh and crispy apple.",
        price=0.99,
        image_url="https://via.placeholder.com/150",
        deal=False,
        deal_price=None,
    )
    banana = Product(
        name="Banana",
        description="Sweet organic banana.",
        price=0.59,
        image_url="https://via.placeholder.com/150",
        deal=True,
        deal_price=0.49,
    )

    db.session.add(apple)
    db.session.add(banana)
    db.session.commit()
    print("✅ Seeded the database with example products.")

    ## Do not need this file
    