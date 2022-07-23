import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data";
import formatCurrency from "../utilities/formatCurrency";

export default function CartItem({ id, quantity }) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  const product = products.find((item) => item.id === id);
  if (product === null) return null;

  return (
    <div className="cart-item row">
      <div className="container__image--cart-item">
        <img
          src={require(`../images/${product.image}.jpg`)}
          alt={product.name}
        />
      </div>
      <div className="col">
        <p className="cart-item__name">{product.name}</p>
        <p className="cart-item__price">{formatCurrency(product.price)}</p>
        <div className="row cart-item__row">
          <button
            className="cart-item__button"
            disabled={product.quantity === quantity}
            onClick={() => increaseCartQuantity(id)}
          >
            +
          </button>
          <p className="cart-item__quantity">{quantity} </p>
          <button
            className="cart-item__button"
            onClick={() => decreaseCartQuantity(id)}
          >
            -
          </button>
        </div>
        <p className="cart-item__total">
          {formatCurrency(product.price * quantity)}
        </p>
      </div>
    </div>
  );
}
