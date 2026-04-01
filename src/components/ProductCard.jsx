import React from 'react';
import { toast } from 'react-toastify';

function ProductCard({ product, onAddToCart, isInCart }) {

  function getTagClass(tagType) {
    if (tagType === 'best-seller') return 'card-tag tag-best-seller';
    if (tagType === 'popular') return 'card-tag tag-popular';
    if (tagType === 'new') return 'card-tag tag-new';
    return 'card-tag';
  }

  function handleBuyClick() {
    if (!isInCart) {
      onAddToCart(product);
      toast.success(`${product.name} added to cart!`);
    }
  }

  return (
    <div className="product-card">
      <span className={getTagClass(product.tagType)}>{product.tag}</span>

      <img className="card-icon" src={product.icon} alt={product.name} />

      <h3 className="card-name">{product.name}</h3>
      <p className="card-desc">{product.description}</p>

      <div className="card-price">
        ${product.price}<span>/{product.period}</span>
      </div>

      <ul className="card-features">
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button
        className={isInCart ? 'buy-btn added' : 'buy-btn'}
        onClick={handleBuyClick}
      >
        {isInCart ? 'Added to Cart ✓' : 'Buy Now'}
      </button>
    </div>
  );
}

export default ProductCard;
