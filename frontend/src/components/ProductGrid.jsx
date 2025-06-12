import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => (
  <div className="products-grid">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductGrid;
