import React, { useState } from "react";
import TitlePage from "../../components/TitlePage";

export default function index() {
  const [productList, setProductList] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );

  const incrementQuantity = (product) => {
    const indexOfExistingId = productList.findIndex(
      (el) => el.id === product.id
    );

    if (indexOfExistingId !== -1) {
      productList[indexOfExistingId].quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(productList));
    setProductList(JSON.parse(localStorage.getItem("cart")));
  };

  const decrementQuantity = (product) => {
    const indexOfExistingId = productList.findIndex(
      (el) => el.id === product.id
    );

    if (
      indexOfExistingId !== -1 &&
      productList[indexOfExistingId].quantity > 1
    ) {
      productList[indexOfExistingId].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(productList));
      setProductList(JSON.parse(localStorage.getItem("cart")));
    }
  };

  const deleteProduct = (product) => {
    const filteredCart = productList.filter((item) => item.id != product.id);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setProductList(filteredCart);
  };

  const deleteCart = () => {
    localStorage.removeItem("cart");
    setProductList(JSON.parse(localStorage.getItem("cart")));
  };

  const renderTotalAmount = () => {
    return (
      <p>
        {" "}
        Montant Total :{" "}
        {productList.reduce(
          (total, product) => total + product.quantity * product.price,
          0
        )} €{" "}
      </p>
    );
  };

  return (
    <div className="page__cart">
      <TitlePage title="My Cart" />

      {productList ? (
        <>
        <div className="summaryCart">
            <button classes="btn btn__color-black" onClick={() => deleteCart()}>
              {" "}
              Vider le panier{" "}
            </button>
            {renderTotalAmount()}
          </div>
          <table>
            <thead>
              <tr>
                <th>Produit</th>
                <th>Titre</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productList &&
                productList.map((product) => (
                  <tr key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <td>{product.title}</td>
                    <td>{product.price} €</td>
                    <td className="quantityTD">
                      <button onClick={() => decrementQuantity(product)}>
                        {" "}
                        -1{" "}
                      </button>
                      <p>{product.quantity}</p>
                      <button onClick={() => incrementQuantity(product)}>
                        {" "}
                        +1{" "}
                      </button>
                    </td>
                    <td>{(product.quantity * product.price).toFixed(2)} €</td>
                    <td className="trashTD">
                      <button onClick={() => deleteProduct(product)}>
                        {" "}
                        Supprimer{" "}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="">Votre panier est vide</p>
      )}
    </div>
  );
}
