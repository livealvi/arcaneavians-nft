import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 3,
  };
  return (
    <Slider className="image-slider" {...settings}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((fileNo) => (
        <div className="slider__image_container" key={fileNo}>
          <img src={`/SliderImg/ArcaneAviansRandom${fileNo}.png`} alt=""></img>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
