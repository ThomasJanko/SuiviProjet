import React, { useState, useEffect } from "react";
import productService from "../../services/product.service";

const Index = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    productService
      .getProducts()
      .then((data) => {
        console.log("products", data.data).data;
        setProducts(data.data.data);
        console.log("productxxxxxs", products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products__grid">
      {products &&
        products.map((product) => (
          <h1 key={product.id}>{product.title}</h1>
        ))}
    </div>
  );
};

export default Index;
