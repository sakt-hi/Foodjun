import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/Constants";
import IconArrowLeftShort from "../assets/IconArrowLeftShort";
import IconArrowRightShort from "../assets/IconArrowRightShort";

const Recipes = ({ recipes, title }) => {
  const carouselContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);

  const scrollStep = 500; // Adjust as needed for scroll distance

  const scrollCarousel = (direction) => {
    const container = carouselContainerRef.current;
    if (container) {
      if (direction === "right") {
        container.scrollTo({
          left: scrollPosition + scrollStep,
          behavior: "smooth",
        });
        setScrollPosition(scrollPosition + scrollStep);
      } else if (direction === "left") {
        container.scrollTo({
          left: scrollPosition - scrollStep,
          behavior: "smooth",
        });
        setScrollPosition(scrollPosition - scrollStep);
      }
    }
  };

  useEffect(() => {
    const container = carouselContainerRef.current;
    if (container) {
      const isScrollable = container.scrollWidth > container.clientWidth;
      setDisableLeftArrow(scrollPosition === 0);
      setDisableRightArrow(
        !isScrollable ||
          scrollPosition >= container.scrollWidth - container.clientWidth
      );
    }
  }, [scrollPosition]);

  return (
    <div className="WOYM-container">
      <div className="carousel-container">
        <p className="section-title">{title}</p>
        <div className="carsl-btn-container">
          <button
            onClick={() => scrollCarousel("left")}
            disabled={disableLeftArrow}
            className={disableLeftArrow ? "disabled" : ""}
          >
            <IconArrowLeftShort />
          </button>
          <button
            onClick={() => {scrollCarousel("right");console.log('click')}}
            disabled={disableRightArrow}
            className={disableRightArrow ? "disabled" : ""}
          >
            <IconArrowRightShort />
          </button>
        </div>
      </div>
      <div className="WOYM-item"  ref={carouselContainerRef}>
        {recipes.map((item) => (
          <Link className="WOYM-image" key={item.id} to={item.action.link}>
            <img src={IMAGE_URL + item.imageId} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
