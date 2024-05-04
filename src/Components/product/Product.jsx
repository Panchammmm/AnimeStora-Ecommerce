import React from "react";
import './product.css';

export function Product(props) {
  return (
    <>
      <div className="card">
        <img className="product--image" src={props.url} alt="product" />

        <div className="details">
          <h2>{props.name}</h2>
          <p className="price">{props.price}</p>
          <p>{props.description}</p>
        </div>

        <button>+ Add to Cart</button>
      </div>
    </>
  );
}

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
