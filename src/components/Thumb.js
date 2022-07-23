import React from "react";

export default function Thumb({ gender }) {
  return (
    <div className="thumb">
      <div className="container__image--thumb">
        <img
          className="thumb__img"
          alt="thumbnail"
          src={require(`../images/${gender}.jpg`)}
        />
      </div>
      <div className="container__thumb--text">
        <p className="thumb__text">{`Shop ${gender}`}</p>
      </div>
    </div>
  );
}
