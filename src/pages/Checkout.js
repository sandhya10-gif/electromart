import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Arial",
    },
    title: {
      fontSize: "24px",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #eee",
    },
    total: {
      fontWeight: "bold",
      fontSize: "18px",
      textAlign: "right",
      marginTop: "20px",
    },
    button: {
      marginTop: "20px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    empty: {
      textAlign: "center",
      color: "#777",
      fontSize: "18px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Checkout</h2>

      {cartItems.length === 0 ? (
        <p style={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.item}>
              <span>{item.name}</span>
              <span>₹ {item.price}</span>
            </div>
          ))}
          <div style={styles.total}>Total: ₹ {total}</div>
          <button style={styles.button}>Proceed to Payment</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
