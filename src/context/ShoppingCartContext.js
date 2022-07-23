import { useContext, createContext, useState } from "react";
import Cart from "../pages/Cart";
import products from "../data";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext();

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("cart-items", []);

  const cartQuantity = cartItems.reduce((prevQuantity, item) => {
    return item.quantity + prevQuantity;
  }, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    setCartItems((prevCartItems) => {
      if (prevCartItems.find((item) => item.id === id)) {
        return prevCartItems.map((item) => {
          const product = products.find((product) => product.id === id);
          return item.id === id
            ? item.quantity < product.quantity
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item, quantity: item.quantity }
            : item;
        });
      }
    });
  }

  function decreaseCartQuantity(id) {
    setCartItems((prevCartItems) => {
      if (prevCartItems.find((item) => item.quantity > 1)) {
        return prevCartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCartItems.filter((item) => item.id !== id);
      }
    });
  }

  function setCartQuantity(id, quantity) {
    if (isNaN(quantity)) return;
    console.log(quantity);
    setCartItems((prevCartItems) => {
      if (prevCartItems.find((item) => item.id === id) == null) {
        return [...prevCartItems, { id, quantity: quantity }];
      } else {
        return prevCartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
    });
  }

  function removeFromCart(id) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        setCartQuantity,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
