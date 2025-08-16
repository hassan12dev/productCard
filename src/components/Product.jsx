import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, collection, image, discount, bgColor }) => {
  return (
    <div className="card">

      <div className="badge">{discount}% OFF</div>
      <h3>{title}</h3>
      <p className="collection">{collection}</p>
      <img src={image} alt={title} className="product-img" />
   
      <button className="shop-btn">SHOP NOW</button>
    </div>
  );
};

export default ProductCard;
