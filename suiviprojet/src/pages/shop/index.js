import React, { useState, useEffect } from "react";
import productService from "../../services/product.service";

const Index = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    productService
      .getProducts()
      .then((response) => {
        console.log("products", response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products__grid">
      {products &&
        products.map((product) => (
          <h1 key={product.id}>{product.attributes.title}</h1>
        ))}
    </div>
  );
};

export default Index;
