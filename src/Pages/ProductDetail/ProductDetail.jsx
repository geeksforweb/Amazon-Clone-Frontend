import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // ✅ MUST be react-router-dom
import axios from "axios";

import Layout from "../../Componets/Layout/Layout";
import ProductCard from "../../Componets/Product/ProductCard";
import { productUrl } from "../../Api/endpoints";
import Loader from "../../Componets/Loader/Loader";

function ProductDetail() {
  // Get productId from URL
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data); // Save full product object
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setIsLoading(false);
      });
  }, [productId]); // dependency REQUIRED
  return (
    <Layout>
      {isLoading ? (<Loader />) : (
        // Render ProductCard only when product data is available
        <ProductCard product={product}
        flex={true}
        renderDesc={true}
        renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail;
