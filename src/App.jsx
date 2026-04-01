import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductsSection from './components/ProductsSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  // Cart state: array of product objects
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart (no duplicates)
  function handleAddToCart(product) {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCartItems([...cartItems, product]);
    }
  }

  // Remove one product from cart by id
  function handleRemove(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  // Clear all cart items on checkout
  function handleCheckout() {
    setCartItems([]);
  }

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <ProductsSection
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
      <Steps />
      <Pricing />

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready To Transform Your Workflow?</h2>
        <p className="cta-desc">
          Join thousands of professionals who are already using DigiTools to work smarter.
          Start in the free tier today.
        </p>
        <div className="cta-buttons">
          <button className="btn-white">Explore Products</button>
          <button className="btn-outline-white">View Pricing</button>
        </div>
        <div className="cta-small">No credit card · No hidden fees · Cancel any time</div>
      </section>

      <Footer />

      {/* Toast notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        theme="dark"
      />
    </div>
  );
}

export default App;
