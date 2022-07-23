import React from "react";
import { Link } from "react-router-dom";
import formatCurrency from "../utilities/formatCurrency";

export default function Product({ product }) {
  return (
    <Link to={`/shop/${product.id}`}>
      <div className="product">
        <div className="container__image--product">
          <img
            src={require(`../images/${product.image}.jpg`)}
            alt={product.name}
          />
        </div>
        <div className="container__product--desc col">
          <p className="product__name">{product.name}</p>
          <p className="product__price">{formatCurrency(product.price)}</p>
        </div>
      </div>
    </Link>
  );
}
