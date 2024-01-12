import React from 'react';
import './ImageSliderAutoCarouselCSS.css';
import img1 from "../../../public/assets/images/office/1.jpg"
import img2 from "../../../public/assets/images/office/2.jpg"
import img3 from "../../../public/assets/images/office/3.jpg"
import img4 from "../../../public/assets/images/office/4.jpg"
import img5 from "../../../public/assets/images/office/5.jpg"
import img6 from "../../../public/assets/images/office/6.jpg"
import img7 from "../../../public/assets/images/office/7.jpg"
import img8 from "../../../public/assets/images/office/8.jpg"
import img9 from "../../../public/assets/images/office/9.jpg"

const ImageSliderAutoCarousel: React.FC = () => {
  return (
    <>
      <section className="mt:-80 max-parent-grid-container-width m-auto">
        <div className="img-slider">
          <div className="slide active">
            <img src={img1.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img2.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img3.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img4.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img5.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img6.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img7.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img8.src} alt="" loading="lazy" />
          </div>
          <div className="slide">
            <img src={img9.src} alt="" loading="lazy" />
          </div>

          <div className="navigation">
            <div className="btn active" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            <div className="btn" />
            {/*<div class="btn"></div>*/}
          </div>
        </div>
      </section>
      {/* image slider ends */}
    </>
  );
};

export default ImageSliderAutoCarousel;
