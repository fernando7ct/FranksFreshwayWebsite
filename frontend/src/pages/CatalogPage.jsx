import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

export default function CatalogPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <Navbar />
      <div className="catalog-container">
        <h1>All Products</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image_url}
                alt={product.name}
                className="product-img"
              />
              <div className="product-info">
                <span className="product-name">{product.name}</span>
                <span className="product-price">
                  ${product.price}
                  <span className="product-unit">{product.unit}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}