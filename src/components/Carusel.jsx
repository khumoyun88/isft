import React from "react";
import Slider from "react-slick";

const SimpleCarousel = () => {
  // Slider settings
  const settings = {
    dots: true,  // Shows the dots below the carousel
    infinite: true,  // Enables infinite scrolling
    speed: 500,  // Speed of the transition
    slidesToShow: 1,  // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll at once
    autoplay: true,  // Enables automatic sliding
    autoplaySpeed: 2000,  // Delay in ms between slides
    arrows: true,  // Shows the next/previous arrows
  };

  return (
    <div>
      <h2   class="text-[30px] pb-2 pl-2">ISFT hayoti</h2>
      <Slider {...settings}>
        <div>
          <img src="/1.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img src="/2.jpeg" alt="Slide 2" />
        </div>
        <div>
          <img src="/3.jpeg" alt="Slide 3" />
        </div>
        <div>
          <img src="/4.jpeg" alt="Slide 4" />
        </div>
        <div>
          <img src="/5.jpeg" alt="Slide 5" />
        </div>
        <div>
          <img src="/6.jpeg" alt="Slide 6" />
        </div>
        <div>
          <img src="/7.jpeg" alt="Slide 7" />
        </div>
        <div>
          <img src="/8.jpeg" alt="Slide 8" />
        </div>
        
      </Slider>
    </div>
  );
};

export default SimpleCarousel;
