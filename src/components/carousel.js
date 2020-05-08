import Glide from "@glidejs/glide";
import React, { useEffect, useState } from "react";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "../assets/css/carrousel.css";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Carousel = ({ element = "glide", option, children, controls }) => {
  const [slider] = useState(new Glide(`.${element}`, option));

  useEffect(() => {
    slider.mount();
    slider.on("run.before", (event) => {});
  }, [slider]);
  return (
    <div className={element}>
      <div className="glide__track caruosel_custom" data-glide-el="track">
        <ul className="glide__slides ul-custom">
          {children.map((slide, key) => {
            return React.cloneElement(slide, {
              key: key,
              className: `glide__slide`,
              "data-key": key,
            });
          })}
        </ul>
        <div
          className="glide__bullets butom_slider"
          data-glide-el="controls[nav]"
        >
          {children.map((index, key) => {
            return (
              <button
                className="glide__bullet"
                data-glide-dir={`=${key}`}
                key={key}
              ></button>
            );
          })}
        </div>
        {controls && (
          <React.Fragment>
            <div
              className="glide__arrows control_anterior"
              data-glide-el="controls"
            >
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <FontAwesomeIcon className="iconF" icon={faArrowLeft} />
              </button>
            </div>
            <div
              className="glide__arrows control_siguiente"
              data-glide-el="controls"
            >
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <FontAwesomeIcon className="iconF" icon={faArrowRight} />
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Carousel;
