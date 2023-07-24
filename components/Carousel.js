import { css } from '@emotion/css';
import React, { useState } from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import LinkButton from './LinkButton';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentArray, setCurrentArray] = useState(images);

  const [counter, setCounter] = useState(0)

  const [loadStyle, setLoadStyle] = useState(false)

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoadStyle(true)
    });
  });

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
              <div key={index.t} className={css`
                position: absolute;
                margin-top: ${
                    (keys-counter) === 0 ? ("15vh") :
                    (keys-counter) === 1 ? ("5vh") : 
                    (keys-counter) === 2 ? ("5vh") :
                    (keys-counter) === 3 ? ("15vh") :
                    ("25vh")
                };
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-left: ${keys*30+(counter*-30)-7.5}vw;
                transition: ${ loadStyle ? ('margin 2.5s, transform 2.5s') : ('none !important')};
                transition-timing-function: ease-in-out;
                transform: rotate(${
                    (keys-counter) === 0 ? ("-15deg") :
                    (keys-counter) === 1 ? ("-5deg") : 
                    (keys-counter) === 2 ? ("5deg") :
                    (keys-counter) === 3 ? ("15deg") :
                    ("0deg")
                    });
                &:hover>:nth-child(3)>#beep  {
                  margin-left: 1em;
                  margin-right: 0em;
                }
                >:nth-child(3)>#beep {
                  margin-left: 0em;
                  margin-right: 1em;
                  transition: margin 1s;
                }
              `}>
                <div className={css`
                  height: 20vw;
                  width: 27vw;
                  overflow: hidden;
                  border-radius: 8px;
                `}>
                <div className={css`
                height: 20vw;
                width: 27vw;
                transition: margin 2.5s, transform 2.5s;
                padding: 2em;
                display: flex;
                flex-direction: column;
                border-radius: 8px;
                background: ${index.i ? ( "url(" + index.i + ")") : ("red")};
                background-size: cover;
                background-position: center;
                justify-content: flex-end;
                
                &:hover {
                    z-index: +1;
                    cursor: pointer;
                    transform: scale(1.1, 1.1);
                }
                `} >
                
                </div>
                
                </div>
               
                  <div className={css`
                    width: 25vw;
                    padding: 1em 2.5vw;
                    text-align: center;
                    display: flex;
                flex-direction: column;
                align-items: center;
                  `}>
                  <h3 className={css`
                      margin: 0;
                      padding: 0;
                      text-align: center;
                      color: #1A3448;
                      font-size: 2em;
                      font-family: 'garamond' !important;
                  `}>
                      {index.t}
                  </h3>
                  
                  <div>
                  </div>
                  </div>
                  <div className="linkbutton">
                <div className={css`
                    margin-bottom: 2px;
                    font-family: "twkLausanne";
                `}>
                    Read
                </div>
                <div id="beep">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
        <path d="M11.1368 5.99072L6.56799 1.42186L7.77256 0.217285L14.3977 6.84248L7.77256 13.4676L6.56799 12.263L11.1368 7.69425H0.769531V5.99072H11.1368Z" fill="#1A3448"/>
        </svg>
                </div>
            </div>
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
            width: 100%;
            max-width: 750px;
            margin: auto;
        `}>
          <h3 className={css`
        text-align: center;
        width: 100%;
        margin: 0;
        padding: 0;
        color: #1A3448;
      `}>
        Featured Work
      </h3>
      </div>
      
      <div className={css`
        gap: 0em;
        width: 100vw;
        height: 70vh;
        padding-bottom: 40px;
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







