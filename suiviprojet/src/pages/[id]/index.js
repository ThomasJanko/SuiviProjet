import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [product, setProduct] = useState();

  useEffect(() => {
    const id = router.query.id;

    fetch(`http://localhost:1337/api/products/${id}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data.data);
      });
  }, []);

  return (
    <>
      <div className="one-product">
        <div className="one-product__asset">
          <img
            className="one-product__asset__image"
            src=""
          />
        </div>
        <span className="divider" />
        <div className="one-product__data">
          <h1 className="one-product__data__title">
            {product && product.attributes.title}
          </h1>
          <p className="one-product__data__price">
            {product && product.attributes.price} €
          </p>
          <p className="one-product__data__desc">
            {product && product.attributes.description}
          </p>

          <button className="one-product__data__buttonADD">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
