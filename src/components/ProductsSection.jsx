import React from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';
import products from '../data/products';

function ProductsSection({ cartItems, onAddToCart, onRemove, onCheckout }) {
  const [activeTab, setActiveTab] = React.useState('products');

  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <h2 className="section-title">Premium Digital Tools</h2>
        <p className="section-desc">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="toggle-buttons">
        <button
          className={activeTab === 'products' ? 'toggle-btn active' : 'toggle-btn inactive'}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button
          className={activeTab === 'cart' ? 'toggle-btn active' : 'toggle-btn inactive'}
          onClick={() => setActiveTab('cart')}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {activeTab === 'products' ? (
        <div className="product-grid">
          {products.map((product) => {
            const isInCart = cartItems.some((item) => item.id === product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                isInCart={isInCart}
              />
            );
          })}
        </div>
      ) : (
        <Cart
          cartItems={cartItems}
          onRemove={onRemove}
          onCheckout={onCheckout}
        />
      )}
    </section>
  );
}

export default ProductsSection;
