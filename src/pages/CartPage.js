import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); 
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    const handleCheckout = () => {
    navigate("/checkout"); // 👈 Navigate to Checkout page
  };

  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Arial",
      backgroundColor: "#f7f7f7",
      minHeight: "100vh"
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },
    item: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      backgroundColor: "#fff",
      marginBottom: "15px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    },
    name: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "8px"
    },
    price: {
      fontSize: "16px",
      color: "#4CAF50",
      fontWeight: "bold",
      marginBottom: "10px"
    },
    removeBtn: {
      backgroundColor: "#e74c3c",
      color: "#fff",
      border: "none",
      padding: "8px 12px",
      borderRadius: "5px",
      cursor: "pointer"
    },
    total: {
      fontSize: "20px",
      fontWeight: "bold",
      marginTop: "20px"
    },
    actions: {
      marginTop: "20px",
      display: "flex",
      gap: "10px"
    },
    actionBtn: {
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold"
    },
    checkout: {
      backgroundColor: "#000",
      color: "#fff"
    },
    clear: {
      backgroundColor: "#ccc",
      color: "#333"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        <FaShoppingCart />
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} style={styles.item}>
            <div style={styles.name}>{item.name}</div>
            <div style={styles.price}>₹{item.price}</div>
            <button style={styles.removeBtn} onClick={() => removeFromCart(item)}>
              Remove
            </button>
          </div>
        ))
      )}
      <div style={styles.total}>Total: ₹{total}</div>
      <div style={styles.actions}>
        <button
          style={{ ...styles.actionBtn, ...styles.checkout }}
          onClick={handleCheckout} // 👈 Updated
        >Proceed to Checkout</button>
        <button style={{ ...styles.actionBtn, ...styles.clear }} onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartPage;
