import { useEffect, useState } from "react";
import "../../assets/css/Slider.css";

const slides = [
  {
    eachSlide: "url(https://cardbankernad.com/assets/img/about/slider03.jpg)",
  },
  {
    eachSlide: "url(https://cardbankernad.com/assets/img/about/slider04.jpg)",
  },
  {
    eachSlide: "url(https://cardbankernad.com/assets/img/about/slider05.jpg)",
  },
];

export const Slider = () => {
  const [active, setActive] = useState(0);
  const  autoplay = useState(true);
  const max = slides.length;

  const intervalBetweenSlides = () =>
    autoplay && setActive(active === max - 1 ? 0 : active + 1);

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 2500);
    return () => clearInterval(interval);
  });


  const nextOne = () => active < max - 1 && setActive(active + 1);

  const prevOne = () => active > 0 && setActive(active - 1);

  const isActive = (value) => active === value && "active";

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    };
  };

  const renderSlides = () =>
  slides.map((item, index) => (
    <div
      className="each-slide"
      key={index}
      style={{ backgroundImage: item.eachSlide }}
    ></div>
  ));


  const renderDots = () =>
  slides.map((_, index) => (
    <li className={isActive(index) + " dots"} key={index}>
      <button onClick={() => setActive(index)}>
        <span>&#9679;</span>
      </button>
    </li>
  ));


  const renderArrows = () => (
    <>
      <button type="button" className="arrows prev" onClick={() => prevOne()}>
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button type="button" className="arrows next" onClick={() => nextOne()}>
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </>
  );

  return (
    <section className="slider">
      <div className="wrapper" style={setSliderStyles()}>
        {renderSlides()}
      </div>
      {renderArrows()}
      <ul className="dots-container">{renderDots()}</ul>
    </section>
  );
};
