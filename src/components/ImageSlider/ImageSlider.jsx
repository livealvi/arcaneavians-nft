import Slider from "react-slick";
import "./ImageSlider.css";

const ImageSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <h1>Preview</h1>
      <Slider className="image_slider" {...settings}>
        {[...Array(8).keys()].map((fileNo) => (
          <div className="image_slider__container" key={fileNo}>
            <img
              className="image_slider__image"
              src={`/SliderImg/ArcaneAviansRandom${fileNo+1}.png`}
              alt=""
            ></img>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ImageSlider;
