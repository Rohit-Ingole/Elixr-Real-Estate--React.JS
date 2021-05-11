import React, { useState, useRef, useEffect } from "react";

import Button from "../Button";

import * as style from "./styles";

function Hero({ slides }) {
  const [current, setCurrent] = useState(0);

  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function clean() {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <style.HeroSection>
      <style.HeroWrapper>
        {slides.map((slide, index) => (
          <style.HeroSlide key={index}>
            {index === current && (
              <style.HeroSlider>
                <style.HeroImage src={slide.image} alt={slide.alt} />

                <style.HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>

                  <Button
                    content={slide.label}
                    primary={false}
                    maxWidth={true}
                  />
                </style.HeroContent>
              </style.HeroSlider>
            )}
          </style.HeroSlide>
        ))}

        <style.SliderButtons>
          <style.PrevArrow onClick={prevSlide} />

          <style.NextArrow onClick={nextSlide} />
        </style.SliderButtons>
      </style.HeroWrapper>
    </style.HeroSection>
  );
}

export default Hero;
