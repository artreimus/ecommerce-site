import React from "react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Nav() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <nav className="col">
      <div className="nav__container--one row">
        <h3 className="logo">
          <NavLink to="/"> Arthur Reimus</NavLink>
        </h3>
        <button className="container__cart" onClick={openCart}>
          <span className="material-symbols-outlined icon__bag">
            shopping_bag
          </span>
          <div className="indicator">
            <span className="indicator__number">{cartQuantity}</span>
          </div>
        </button>
      </div>
      <div className="nav__container--two row">
        <ul className="nav__list--one row">
          <li className="nav__item">
            <NavLink to="/shop">Shop All</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/shop/men">Men</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/shop/women">Women</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
