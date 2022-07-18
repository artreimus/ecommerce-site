import React from "react";
import products from "../data";
import Product from "../components/Product";

export default function Men() {
  const menProducts = products.filter((product) => {
    return product.gender === "men";
  });

  console.log(menProducts);

  const productElements = menProducts.map((product) => (
    <Product product={product} key={product.id} />
  ));

  return (
    <div>
      <h2 className="title">Men</h2>
      <div className="container__products row">{productElements}</div>
    </div>
  );
}
