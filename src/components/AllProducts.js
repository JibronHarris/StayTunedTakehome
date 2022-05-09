import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'http://localhost:8000/product/allProducts',
        withCredentials: false,
      };
      const data = await axios.request(options);
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>All Product</p>
    </div>
  );
};

export default AllProducts;
