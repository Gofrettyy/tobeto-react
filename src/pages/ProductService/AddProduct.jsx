
import React, { useState } from 'react';
import "./AddProduct.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    
  });

  const addProduct = (newProduct) => {
    console.log('Ürün ekleniyor:', newProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({
      name: '',
      price: '',
    });
  };
  return (
    <form onSubmit={handleSubmit} className="ui form">
  <div className="field">
    <label>Ürün İsmi</label>
    <input type="text" name="Ürün İsmi" placeholder="Ürün İsmi"/>
  </div>
  <div className="field">
    <label>Fiyat</label>
    <input type="text" name="Fiyat" placeholder="Fiyat"/>
  </div>
  <div className="field">
  </div>
  <button className="ui button" type="submit">Ürün Ekle</button>
    </form>
  );
};

export default AddProduct;