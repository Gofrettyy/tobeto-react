import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []); 

  const fetchProducts = async (props) => {
    let response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };
  return (
    <div>
      <h1>Ürün Listesi</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description}
            <button onClick={() => deleteProduct(product.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
  export default ProductList;