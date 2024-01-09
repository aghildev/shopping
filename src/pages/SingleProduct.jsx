import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../context/CartContext";

const SingleProduct = () => {
  const { productid } = useParams();
  const [data, setData] = useState([]);
  const { cartItems, setCartItems } = useContext(cartContext);
  console.log(cartItems);
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${productid}`);
      const data = await res.json();
      setData(data);
    };
    getProduct();
  }, []);
  console.log(data);
  const handleAddToCart = () => {
    setCartItems([...cartItems, data]);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={data.image}></img>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <h2>${data.price}</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
