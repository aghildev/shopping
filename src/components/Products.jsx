import React, { useEffect, useState } from "react";
import styles from "../styles/productcard.module.css";
const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      setData(products);
    };
    getProducts();
  }, []);
  console.log(data);
  return (
    <div className={styles.productContainer}>
      {data.map((item) => {
        return (
          <div key={item.id} className={styles.productCard}>
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
