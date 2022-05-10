import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../css/Products.css';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'http://localhost:8000/product/allProducts',
        withCredentials: false,
      };
      const res = await axios.request(options);
      console.log(res);
      setProducts(res.data);
    };
    fetchData();
  }, []);

  const productPriceDropAlert = (product) => {
    alert(`${product.name}: ${product.price}`);
  };

  return (
    <div>
      <h1>All Products</h1>
      <div>
        {products.map((product) => {
          return (
            <div>
              <li>{`${product.name}: ${product.price}`}</li>
              <img src={product.imageUrl} alt="game cover design"></img>
              <button className="pure-button" onClick={() => productPriceDropAlert(product)}>
                Get Reminded on Price Drop!
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
