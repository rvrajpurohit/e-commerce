import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
  // Sample cart items data for demonstration purposes
  const [cartItems, setCartItems] = useState([]);

  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle item removal from cart
  const handleRemoveItem = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <table>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </td>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                  +
                </button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-section">
        <p>
          Shipping Tax: <span>$5.00</span>
        </p>
        <p>
          Total: <span className="green">${cartTotal.toFixed(2)}</span>
        </p>
      </div>
      <Link to="/checkout" className="checkout-button">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export  {Cart};
