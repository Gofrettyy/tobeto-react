import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(response.data); 
      } catch (error) {
        console.error('Ürün detayları alınırken bir hata oluştu', error);
      }
    };

    fetchProductDetail();
  }, [productId]);

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }
  

  return (
    <div>
      <h2>Ürün Detay Sayfası</h2>
      <h3>{product.title} </h3>
      <p>{product.description}  </p>

      <Link to="/" className="btn btn-primary">
        Ana Sayfa
      </Link>
  
    </div>
    
  );
};

export default ProductDetail;