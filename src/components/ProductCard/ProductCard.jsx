import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  return (
    <div className="card">
      <img src={props.product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>

        <Link to={`/ProductDetail/${props.product.id}`} className="btn btn-primary">
          Detay
        </Link>
        <Link to={`/DeleteProduct/${props.product.id}`} className="btn btn-danger">
          Sil
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;