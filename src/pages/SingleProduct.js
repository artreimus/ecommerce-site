import { useState } from "react";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data";
import formatCurrency from "../utilities/formatCurrency";

// Create an object with name, img, price, id and quantity (quantity should be a state)
// Pass the object to cart

export default function SingleProduct() {
  const { getItemQuantity, setCartQuantity } = useShoppingCart();

  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  const [selectedQuantity, setSelectedQuantity] = useState();

  function handleSelectedQuantityChange(event) {
    const { value } = event.target;
    setSelectedQuantity(parseInt(value));
  }

  let quantityInCart = getItemQuantity(productId);

  function setOptions(product) {
    let optionArray = [];
    for (let i = 1; i < product.quantity - quantityInCart; i++) {
      optionArray.push(
        <option value={`${i}`} key={i}>
          {i}
        </option>
      );
    }
    return optionArray;
  }

  const optionElement = setOptions(product);

  return (
    <div className="single-product">
      <div className="container__image--product">
        <img
          src={require(`../images/${product.image}.jpg`)}
          alt={product.name}
        />
      </div>
      <div className="container__single-product--desc row">
        <h2 className="single-product__name">{product.name}</h2>
        <p className="single-product__price">{formatCurrency(product.price)}</p>
      </div>
      {/* <div className="row">
        <button className="button">+</button>
      </div> */}
      <div className="row">
        <select
          value={selectedQuantity}
          onChange={handleSelectedQuantityChange}
          required
        >
          <option value="">-</option>
          {optionElement}
        </select>
        <button
          className="button"
          onClick={() => setCartQuantity(productId, selectedQuantity)}
        >
          Add to Cart{" "}
          <span className="material-symbols-outlined icon__cart">
            add_shopping_cart
          </span>
        </button>
      </div>
    </div>
  );
}
