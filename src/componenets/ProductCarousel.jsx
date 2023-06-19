import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div id="carousel-container">
      <Slider id="product-carousel" ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div id="carousel-product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default ProductCarousel;
