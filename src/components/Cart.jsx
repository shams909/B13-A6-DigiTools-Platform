import React from 'react';
import { toast } from 'react-toastify';

function Cart({ cartItems, onRemove, onCheckout }) {

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  function handleRemove(item) {
    onRemove(item.id);
    toast.error(`${item.name} removed from cart.`);
  }

  function handleCheckout() {
    onCheckout();
    toast.info('Checkout complete! Thanks for your purchase.');
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-section">
        <div className="cart-empty">
          <p>🛒</p>
          <div>Your cart is empty. Add some products!</div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-section">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-left">
            <img className="cart-item-icon" src={item.icon} alt={item.name} />
            <div>
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">${item.price}/{item.period}</div>
            </div>
          </div>
          <button className="remove-btn" onClick={() => handleRemove(item)}>
            Remove
          </button>
        </div>
      ))}

      <div className="cart-total">
        <span className="cart-total-label">Total</span>
        <span className="cart-total-amount">${total}</span>
      </div>

      <button className="checkout-btn" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;
