// src/pages/Home.js
import React, { useState, useContext } from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../CartContext";

const products = [
  {
    id: 1,
    name: "Smartwatch",
    price: 2999,
    image:
      "https://m.media-amazon.com/images/I/81lHcy9QDzL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    name: "Smart LED TV",
    price: 25999,
    image: "https://m.media-amazon.com/images/I/719d1sN-1HL._SX522_.jpg",
  },
  {
    id: 3,
    name: "USB Keyboard",
    price: 499,
    image: "https://m.media-amazon.com/images/I/61bw-BHgEsL._SX522_.jpg",
  },
    {
      id: 4,
      name: "Adjustable Laptop Tabletop Stand",
      price: 249,
      image: "https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 5,
      name: "Writing Pad With Screen",
      price: 199,
      image: "https://m.media-amazon.com/images/I/51nzIs6jTCL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 6,
      name: "TOYTONIC Handheld Gaming Console for Kids & Adults ",
      price: 728,
      image: "https://m.media-amazon.com/images/I/511gYPs6+QL._SY355_.jpg",
    }
    
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useContext(CartContext);

  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#f7f7f7",
      minHeight: "100vh",
      fontFamily: "Arial",
    },
    grid: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    },
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div style={styles.container}>
        <div style={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
