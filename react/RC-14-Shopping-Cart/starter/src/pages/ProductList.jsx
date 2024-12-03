import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

  const [produkte, setProdukte] = useState([]);

  const [loading, setLoading] = useState(true);

  const getUrunler = async () => {
    const { data } = await axios.get(BASE_URL);

    // console.log(data);

    setProdukte(data);
  };

  useEffect(() => {
    getUrunler();
  }, []);

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        <p className="text-center text-danger w-100">Loading....</p>

        <>
          <article id="product-panel" className="col-md-6">
            {produkte.map((ürün) => (
              <ProductCard ürün={ürün} />
            ))}
          </article>
          <article className="col-md-4 m-3">
            <CardTotal />
          </article>
        </>

        <p className="text-center text-danger w-100">No products data...</p>
      </div>
    </div>
  );
};

export default ProductList;
