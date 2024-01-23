import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./ProductDetails.module.css";

import Product from "../utils/Product";

const ProductDetails: React.FC<Product> = (props) => {
  const navigate = useNavigate();

  const carouselSettings = {
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 5000,
  };

  const addToCartHandler = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/cart")
  }

  return (
    <div className={classes.main__container}>
      <div className={classes.product_images}>
        <Slider {...carouselSettings}>
          {props.images.map((image) => (
            <div key={image}>
              <img src={image} alt="product display" />
            </div>
          ))}
        </Slider>
      </div>
      <div className={classes.main_details}>
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
      </div>
      <div className={classes.buttons}>
        <form>
          <button type="submit" onClick={addToCartHandler}>Add to Cart</button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
