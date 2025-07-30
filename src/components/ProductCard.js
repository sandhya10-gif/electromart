import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      width: "200px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center"
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "8px"
    },
    name: {
      fontSize: "18px",
      margin: "12px 0",
      color: "#333",
      textDecoration: "none"
    },
    price: {
      fontSize: "16px",
      color: "#4CAF50",
      fontWeight: "bold"
    },
    button: {
      marginTop: "10px",
      padding: "8px 12px",
      backgroundColor: "black",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    },
    added: {
    color: "green",
    fontSize: "12px",
    marginTop: "6px",
    transition: "opacity 0.3s ease",
    opacity: 1
  }
  };

  return (
    <div style={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <h3 style={styles.name}>{product.name}</h3>
      </Link>
      <p style={styles.price}>₹ {product.price}</p>
      <button style={styles.button} onClick={handleAdd}>
        Add to Cart
      </button>
      {added && <div style={styles.added}>✓ Added to Cart</div>}
    </div>
  );
};

export default ProductCard;
