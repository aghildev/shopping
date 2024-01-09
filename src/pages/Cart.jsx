import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(cartContext);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              // width: "100px",
              // height: "100px",
              border: "1px solid green",
            }}
          >
            <img src={item.image} alt={item.id} style={{ width: "300px" }} />
            <h2>{item.price}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
