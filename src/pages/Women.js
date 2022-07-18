import React from "react";
import products from "../data";
import Product from "../components/Product";

export default function Women() {
  const womenProducts = products.filter((product) => {
    return product.gender === "women";
  });

  const productElements = womenProducts.map((product) => (
    <Product product={product} key={product.id} />
  ));

  return (
    <div>
      <h2 className="title">Women</h2>
      <div className="container__products row">{productElements}</div>
    </div>
  );
}
