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
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931623/8_bpkuf4.png" />

        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931619/6_cvzbgn.png" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931620/7_sd8u5b.png" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931619/3_ji3ctw.png" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931619/5_pgkgby.jpg" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931619/2_vbk5ox.jpg" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931619/2_vbk5ox.jpg" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931618/4_b1pppk.jpg" />
      </Carousel>
    </div>
  );
};

export default ReactCarousel;
