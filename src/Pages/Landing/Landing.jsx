import React from 'react'
import Layout from '../../Componets/Layout/Layout'
import CarouselsEffect from "../../Componets/Carousel/CarouselsEffect";
import Catagory from "../../Componets/Category/Category";
import Product from "../../Componets/Product/Product";

function Landing() {
  return (
    <div>
      <Layout >
        <CarouselsEffect />
        <Catagory />
        <Product />
        </Layout>
    </div>
  );
}

export default Landing
