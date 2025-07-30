import React from "react";
import { useParams } from "react-router-dom";

const allProducts = [
  {
    id: 1,
    name: "Smartwatch",
    price: 2999,
    image: "https://m.media-amazon.com/images/I/81lHcy9QDzL._AC_UL480_FMwebp_QL65_.jpg",
    desc: "Stylish smartwatch with health tracking and long battery life."
  },
  {
    id: 2,
    name: "Smart LED TV",
    price: 25999,
    image: "https://m.media-amazon.com/images/I/719d1sN-1HL._SX522_.jpg",
    desc: "55-inch 4K Smart LED TV with voice control and streaming apps."
  },
  {
    id: 3,
    name: "USB Keyboard",
    price: 499,
    image: "https://m.media-amazon.com/images/I/61bw-BHgEsL._SX522_.jpg",
    desc: "Durable USB keyboard with comfortable keys and plug-and-play support."
  },
  {
    id: 4,
    name: "Adjustable Laptop Tabletop Stand",
    price: 249,
    image: "https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_UL480_FMwebp_QL65_.jpg",
    desc:"STRIFF Adjustable Laptop Tabletop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand (Black)"
  },
  {
    id: 5,
    name: "Writing Pad With Screen",
    price: 199,
    image: "https://m.media-amazon.com/images/I/51nzIs6jTCL._AC_UL480_FMwebp_QL65_.jpg",
    desc:"Portronics Ruffpad 8.5E Re-Writable LCD Writing Pad with Screen 21.5cm (8.5-inch) for Drawing, Playing, Handwriting Gifts for Kids & Adults, India's first notepad to save and share your child's first creatives via Ruffpad app on your Smartphone(Black)"
  },
  {
    id: 6,
    name: "TOYTONIC Handheld Gaming Console for Kids & Adults ",
    price: 7289,
    image: "https://m.media-amazon.com/images/I/511gYPs6+QL._SY355_.jpg",
    desc:"TOYTONIC Handheld Gaming Console for Kids & Adults | 520 Classic Built-in Games | Retro Video Game Player | Portable, Rechargeable, TV Output | Toy & Gift for Boys Girls Ages 6-14 | Mini Game Bo"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "300px", borderRadius: "10px" }} />
      <p style={{ fontSize: 18, marginTop: 10 }}>Price: ₹ {product.price}</p>
      <p style={{ marginTop: 10 }}>{product.desc}</p>
    </div>
  );
};

export default ProductDetail;
