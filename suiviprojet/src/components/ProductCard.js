import React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function ProductCard(props) {
  return (
    <Link href={`/${props.product.id}`}>
      <div className="card items-center" key={props.product.id}>
        <div className="bgcolor">
          <img
            className="card-image justify-center"
            src={props.product.attributes.image}
          />
        </div>

        <div className="product_data">
          <h1>{props.product.attributes.title}</h1>
          <div className="pricecolor">
            <p className="price">${props.product.attributes.price}</p>
          </div>
          <p className="card_desc">{props.product.attributes.description}</p>
          {/* <Link href={`/shop/${props.product.id}`}> */}
          {/* <div><Button text="See product" type="button" class="btn_card rounded_2"/></div> */}
          {/* </Link> */}
        </div>

        <div className="product_button">
          <Button variant="contained" color="error">
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
}
