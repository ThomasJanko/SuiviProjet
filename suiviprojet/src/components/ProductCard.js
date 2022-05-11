import React from "react";
import Button from "@mui/material/Button";

export default function ProductCard(props) {
  return (
    <div className="card items-center" key={props.product.id}>
      <div className="bgcolor">
        <img className="card-image justify-center" src={props.product.image} />
      </div>

      <div className="product_data">
        <h1>{props.product.title}</h1>
        <div className="pricecolor">
          <p className="price">${props.product.price}</p>
        </div>
        <p className="card_desc">{props.product.description}</p>
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
  );
}
