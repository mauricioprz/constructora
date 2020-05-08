import Glide from "@glidejs/glide";
import React, { useEffect, useState, Fragment, useRef } from "react";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "../assets/css/carrousel.css";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Carousel = ({ element = "glide", option, children, controls, img }) => {
  const [slider] = useState(new Glide(`.${element}`, option));
  const [numberimg, setnumberimg] = useState(0);
  const nexButton = useRef();

  useEffect(() => {
    slider.mount();
    slider.on("run.before", (event) => {});
    autonextImg();
    nexButton.current.setAttribute("data-disabled", "false");
  }, [slider]);
  let numero = numberimg + 1;
  const autonextImg = () => {
    setInterval(() => {
      if (numero >= img.length - 1) {
        numero = 0;
        console.log("prueba");
        setnumberimg(0);
      } else {
        console.log("aumenta");
        setnumberimg(numero++);
        slider.go(">");
      }
    }, 3500);
  };
  const nextimg = () => {
    if (nexButton.current.attributes["data-disabled"].value == "false") {
      nexButton.current.setAttribute("data-disabled", "true");
      setTimeout(() => {
        nexButton.current.setAttribute("data-disabled", "false");
      }, 400);
      if (numberimg >= img.length - 1) {
        numero = 0;
        setnumberimg(0);
      } else {
        numero++;
        let number = numberimg + 1;
        setnumberimg(number);
      }
    }
  };

  const backimg = () => {
    if (nexButton.current.attributes["data-disabled"].value == "false") {
      nexButton.current.setAttribute("data-disabled", "true");
      setTimeout(() => {
        nexButton.current.setAttribute("data-disabled", "false");
      }, 400);
      if (numberimg == 0) {
        numero = 0;
        setnumberimg(img.length - 1);
      } else {
        numero--;
        let number = numberimg - 1;
        setnumberimg(number);
      }
    }
  };

  return (
    <Fragment>
      <div className="imagesVista">
        <img src={img[numberimg]} alt="" />
      </div>
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
                onClick={backimg}
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
                onClick={nextimg}
              >
                <button
                  ref={nexButton}
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
    </Fragment>
  );
};

export default Carousel;
