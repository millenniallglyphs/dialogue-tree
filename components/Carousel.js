import { css } from '@emotion/css';
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentArray, setCurrentArray] = useState(images);

  const [counter, setCounter] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const arrayPrev = () => {
    setCurrentArray(images => images.concat(images[currentIndex]))
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setCounter(counter+1);
  }


  const renderCards = () => {
    return currentArray.map((index, keys) => (
        <>
                <div className={css`
                height: 30vw;
                width: 30vw;
                position: absolute;
                margin-top: ${
                    (keys-counter) === 0 ? ("10vh") :
                    (keys-counter) === 1 ? ("0px") : 
                    (keys-counter) === 2 ? ("0px") :
                    (keys-counter) === 3 ? ("10vh") :
                    ("20vh")
                };
                margin-left: ${keys*30+(counter*-30)-7.5}vw;
                display: block;
                padding: 1em;
                border-radius: 8px;
                background: ${index.i ? ( "url(" + index.i + ")") : ("red")};
                background-size: cover;
                background-position: center;
                box-shadow: 24px 24px 24px 0px rgba(0, 0, 0, 0.13);
                transition: all 1s;
                transform: rotate(${
                    (keys-counter) === 0 ? ("-15deg") :
                    (keys-counter) === 1 ? ("-5deg") : 
                    (keys-counter) === 2 ? ("5deg") :
                    (keys-counter) === 3 ? ("15deg") :
                    ("0deg")
                    });
                &:hover {
                    z-index: +1;
                    box-shadow: 48px 48px 48px 0px rgba(0, 0, 0, 0.33);
                }
                `} key={index.t}>
                <h3>
                    {index.t}
                </h3>
                </div>
            
        </>
    ));
  };

  console.log({images});

  return (
    <div className="carousel">
      <button className="carousel-button previous" onClick={arrayPrev}>
        Previous
      </button>
      <div className={css`
        gap: 0em;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        padding-bottom: 120px;
        padding-top: 100px;
      `}>
       {renderCards()}
       </div>
      <button className="carousel-button next" onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;







