const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image_url} alt={product.name} className="product-img" />
    <div className="product-info">
      <span className="product-name">{product.name}</span>
      <span className="product-price">
        ${product.price}
        <span className="product-unit">{product.unit}</span>
      </span>
    </div>
  </div>
);

export default ProductCard;