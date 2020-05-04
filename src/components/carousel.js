import Glide from "@glidejs/glide";
import React, { useEffect, useState } from "react";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "../assets/css/carrousel.css";
const Carousel = ({ element = "glide", option, children, controls }) => {
  const [slider] = useState(new Glide(`.${element}`, option));

  useEffect(() => {
    slider.mount();
    slider.on("run.before", (event) => {});
  }, [slider]);

  return (
    <div className={element}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children.map((slide, idex) => {
            return React.cloneElement(slide, {
              key: indexedDB,
              className: `${slide.props.className} glide__slide`,
            });
          })}
        </ul>
      </div>
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
      </div>
      {controls && (
        <div className="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            prev
          </button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            next
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
