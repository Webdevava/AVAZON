import ProductCard from "./ProductCard";
import Carousel from "./Carousel";
import ProductCarousel from "./ProductCarousel";

const Hero = () => {
  return (
    <div id="hero">
      <Carousel />
      <ProductCard />
      <ProductCarousel />
    </div>
  );
};

export default Hero;
