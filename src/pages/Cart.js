import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "../utilities/formatCurrency";
import products from "../data";

export default function Cart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const stylesSideNav = {
    width: isOpen ? "75%" : "0%",
    padding: isOpen ? "1em 1em" : "1em 0em",
  };

  const stylesDark = {
    width: isOpen ? "100%" : "0%",
  };

  const cartItemElements = cartItems.map((item) => {
    return <CartItem key={item.id} {...item} />;
  });

  return (
    <>
      <div className="dark-bg" onClick={closeCart} style={stylesDark}></div>
      <div className="cart sidenav" style={stylesSideNav}>
        <h2 className="cart__title">Cart</h2>
        {cartItemElements}
        {cartItems.length !== 0 && (
          <div className="container__cart-total row">
            <button className="button cart__button--checkout">
              Checkout{" "}
              <span className="material-symbols-outlined icon__cart">
                shopping_cart_checkout
              </span>{" "}
            </button>
            <p>
              Total: {""}
              <span>
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const product = products.find(
                      (item) => item.id === cartItem.id
                    );
                    return total + (product?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </span>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
