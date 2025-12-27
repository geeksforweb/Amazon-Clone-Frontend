import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../Componets/Layout/Layout";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../Api/endpoints";
import ProductCard from "../../Componets/Product/ProductCard";
import classes from "./Results.module.css";
import Loader from "../../Componets/Loader/Loader";
function Results() {
const [results, setResults] = useState([]);
const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
useEffect(() => {
  setIsLoading(true);
  axios
    .get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {
      setResults(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
      setIsLoading(false);
    });
    }
, []);  
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />

          <div className={classes.results__container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} 
              renderDesc={false}
              renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
