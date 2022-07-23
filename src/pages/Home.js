import React from "react";
import { nanoid } from "nanoid";
// import Carousel from "../components/Carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Thumb from "../components/Thumb";

export default function Home() {
  const itemCategories = ["men", "women"];

  const thumbElements = itemCategories.map((gender) => {
    return <Thumb gender={gender} key={nanoid()} />;
  });

  return (
    <div>
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="carousel"
      >
        <div>
          <img
            className="carousel__image"
            alt="carousel"
            src={require(`../images/carousel-1.jpg`)}
          />
        </div>
        <div>
          <img
            className="carousel__image"
            alt="carousel"
            src={require(`../images/carousel-2.jpg`)}
          />
        </div>
        <div>
          <img
            className="carousel__image"
            alt="carousel"
            src={require(`../images/carousel-3.jpg`)}
          />
        </div>
      </Carousel>
      <div className="container__thumb"> {thumbElements}</div>
    </div>
  );
}
