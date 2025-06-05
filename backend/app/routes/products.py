from flask import Blueprint, jsonify
from app.models import Product

products_bp = Blueprint('products', __name__)

@products_bp.route('/', methods=['GET'])
def get_all_products():
    products = Product.query.all()
    product_list = []
    for p in products:
        product_list.append({
            "id": p.id,
            "name": p.name,
            "description": p.description,
            "price": p.price,
            "image_url": p.image_url,
            "deal": p.deal,
            "deal_price": p.deal_price,
        })
    return jsonify(product_list)