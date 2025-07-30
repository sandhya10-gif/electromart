// src/components/Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { FaSearch } from "react-icons/fa";

export default function Navbar({ searchTerm, setSearchTerm }) {
  const { cartItems } = useContext(CartContext) || {};
  const cartCount = cartItems ? cartItems.length : 0;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Optional: implement navigation if needed
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>ElectroMart</h2>

      <form onSubmit={handleSearch} style={styles.searchForm}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchBtn}>
          <FaSearch />
        </button>
      </form>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>
          Cart {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
        </Link>
        <Link to="/checkout" style={styles.link}>Checkout</Link>

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#333",
    color: "#fff",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    fontSize: "24px",
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    position: "relative",
  },
  badge: {
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 8px",
    fontSize: "12px",
    marginLeft: "4px",
  },
  searchForm: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
    overflow: "hidden",
    marginRight: "15px",
    flex: 1,
    maxWidth: "300px",
  },
  searchInput: {
    border: "none",
    padding: "6px 10px",
    width: "100%",
    outline: "none",
  },
  searchBtn: {
    backgroundColor: "#555",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
  },
};
