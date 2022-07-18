import React from "react";
import Product from "../components/Product";
import products from "../data";

export default function Shop() {
  const productElements = products.map((product) => (
    <Product product={product} key={product.id} />
  ));

  return (
    <section>
      <h2 className="title">All Products</h2>
      <div className="container__products row">{productElements}</div>
    </section>
  );
}
