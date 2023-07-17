import { css } from '@emotion/css';
import React, { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

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
            <Link href={index.l}>
                <div className={css`
                height: 30vw;
                width: 30vw;
                position: absolute;
                margin-top: ${
                    (keys-counter) === 0 ? ("15vh") :
                    (keys-counter) === 1 ? ("5vh") : 
                    (keys-counter) === 2 ? ("5vh") :
                    (keys-counter) === 3 ? ("15vh") :
                    ("25vh")
                };
                margin-left: ${keys*30+(counter*-30)-7.5}vw;
                padding: 2em;
                display: flex;
                flex-direction: column;
                border-radius: 8px;
                background: ${index.i ? ( "url(" + index.i + ")") : ("red")};
                background-size: cover;
                background-position: center;
                justify-content: flex-end;
                box-shadow: 24px 24px 24px 0px rgba(0, 0, 0, 0.13);
                transition: margin 2.5s, transform 2.5s;
                transition-timing-function: ease-in-out;
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
                    cursor: pointer;
                    transform: scale(1.1, 1.1);
                }
                `} key={index.t}>
                <h3 className={css`
                    margin: 0;
                    padding: 0;
                    color: ${ index.t === "Informed Decision Making" ? ("#FAFAFA") : ("#1A3448")};
                `}>
                    {index.t}
                </h3>
                </div>
            </Link>
            
        </>
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger your event here
     arrayPrev();
    }, 4000);

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, [arrayPrev]);


  return (
    <div className="carousel">
        <div className={css`
            max-width: 1000px;
            margin: auto;
        `}>
      </div>
      <div className={css`
        gap: 0em;
        width: 100vw;
        height: 80vh;
        padding-bottom: 120px;
        padding-top: 10px;
        position:relative;
      `}>
        <div className={css`
        position:absolute;
        overflow:hidden;
        width: 100vw;
        height: 80vh;
        `}>
            {renderCards()}
       </div>
       </div>
    </div>
  );
};

export default Carousel;







