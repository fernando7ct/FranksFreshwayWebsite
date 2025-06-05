import { useEffect, useState } from "react";
import { getProducts } from "./api/products";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h2>Product Catalog</h2>
      {products.length === 0 && <p>Loading...</p>}
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{ marginBottom: "2rem", listStyle: "none" }}
          >
            <img
              src={product.image_url}
              alt={product.name}
              width={80}
              style={{ verticalAlign: "middle" }}
            />
            <span style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
              {product.name}
            </span>{" "}
            — ${product.price.toFixed(2)}
            <br />
            <span>{product.description}</span>
            {product.deal && (
              <span style={{ color: "orange", marginLeft: "0.5rem" }}>
                Weekly Deal: ${product.deal_price}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
