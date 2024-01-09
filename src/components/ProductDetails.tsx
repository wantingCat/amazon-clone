import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./ProductDetails.module.css";

import Product from "../utils/Product";

const ProductDetails: React.FC<Product> = (props) => {
  const carouselSettings = {
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 5000,
  };

  return (
    <>
      <div className={classes.product_images}>
        <Slider {...carouselSettings}>
          {props.images.map((image) => (
            <div key={image}>
              <img src={image} alt="product display" />
            </div>
          ))}
        </Slider>
      </div>
      <div className={classes.product_title}>
        <h2>
          {props.title} <em>({props.brand})</em>
        </h2>
      </div>
      <div className={classes.price}>
        <h2>
          <strong>${props.price}</strong>{" "}
          <em>({props.discountPercentage}% off)</em>
        </h2>
      </div>
      <div className={classes.description}>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default ProductDetails;
