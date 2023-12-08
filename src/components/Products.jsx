import React, { useEffect, useState } from "react";
import styles from "../styles/productcard.module.css";
import { Link } from "react-router-dom";
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
      {data.length > 0 ? (
        data.map((item) => {
          return (
            <Link to={`/product/${item.id}`} className={styles.productCard}>
              <div key={item.id}>
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
              </div>
            </Link>
          );
        })
      ) : (
        <h2 style={{ textAlign: "center" }}>Loading....</h2>
      )}
    </div>
  );
};

export default Products;
