import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ReactCarousel = () => {
  return (
    <div className="flex flex-col">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        swipeable={true}
        infiniteLoop={true}
        showStatus={false}
      >
        <img src="../src/assets/carouselimg/1.png" />

        <img src="../src/assets/carouselimg/2.jpg" />
        <img src="../src/assets/carouselimg/3.png" />
        <img src="../src/assets/carouselimg/4.jpg" />
        <img src="../src/assets/carouselimg/5.jpg" />
        <img src="../src/assets/carouselimg/6.png" />
        <img src="../src/assets/carouselimg/7.png" />
        <img src="../src/assets/carouselimg/8.png" />
      </Carousel>
    </div>
  );
};

export default ReactCarousel;
