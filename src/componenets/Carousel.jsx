import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    // pauseOnHover: true,
  };

  return (
    <Slider id="banner-slider" {...settings}>
      <div className="img-div">
        <img
          className="ad-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Motorola/Venus/GWpearl/D83904047_WLD_BAU_MotorolaKV_DesktopTallHero_1500x600._CB603852200_.jpg"
          alt="Image 1"
        />
      </div>
      <div className="img-div">
        <img
          className="ad-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Jun/deals-rec-3000-1200._CB603900295_.jpg"
          alt="Image 2"
        />
      </div>
      <div className="img-div">
        <img
          className="ad-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/EEStore_June_DesktopHero_3000x1200._CB603864033_.jpg"
          alt="Image 3"
        />
      </div>
    </Slider>
  );
};
export default Carousel;
