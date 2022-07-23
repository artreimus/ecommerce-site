import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error col">
      <span class="material-symbols-outlined icon__error">error</span>
      <h1 className="error__message">Error 404</h1>
      <p className="error__detail">Page Doesn't Exist </p>
      <Link to="/" className="button">
        Return Home
      </Link>
    </div>
  );
}
