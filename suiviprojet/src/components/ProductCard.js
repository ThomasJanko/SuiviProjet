import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import AppContext from "../AppContext";

export default function ProductCard(props) {

  const store = useContext(AppContext);


  const addToCart = (e, product) => {
    //Create object with new property quantity
    e.preventDefault();
    let productToInsert = {
      id: product.id,
      title: product.attributes.title,
      image: product.attributes.image,
      price: product.attributes.price,
      quantity: 1,
    };

    const myCart = [];

    if (localStorage.getItem("cart")) {

      const localStorageCart = JSON.parse(localStorage.getItem("cart"));

      localStorageCart.forEach((element) => {
        myCart.push(element);
      });

      const indexOfExistingId = myCart.findIndex((el) => el.id === product.id);

      if (indexOfExistingId !== -1){
        myCart[indexOfExistingId].quantity ++;
      }
      else{
        myCart.push(productToInsert);
      }
      
      localStorage.setItem("cart", JSON.stringify(myCart));
    } else {
      myCart.push(productToInsert);
      localStorage.setItem("cart", JSON.stringify(myCart));
    }
  };
  return (
    <Link href={`/${props.product.id}`}>
      <div className="card items-center" key={props.product.id}>
        <div className="bgcolor">
          <img
            className="card-image justify-center"
            src={`http://localhost:1337${props.product.attributes.image.data.attributes.url}`}
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

      {store.state.user!="User"?
         <div className="product_button">
         <Button variant="contained" color="error" onClick={(e) => addToCart(e, props.product)}>
           Add to Cart
         </Button>
       </div>
       : <>
       </>
      }
      
       
      </div>
    </Link>
  );
}
