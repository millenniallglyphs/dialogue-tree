import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/css';

const SelfPic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);


  const rootMargin = "0px";

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([elementRef]) => {
            setIsVisible(elementRef.isIntersecting);
        }, { rootMargin }
    );

    elementRef.current && observer.observe(elementRef.current);

    return () => observer.unobserve(elementRef.current);
}, []);

console.log(isVisible + " hi hi");


  return (
    <div
      ref={elementRef}
    >
        <div className={css`
              width: 100%;
              height: 30vw;
              background: url(/v2/layer-00.png);
              background-size: cover;
              background-position: center;
              opacity: ${ isVisible ? ("1") : ("0") };
              transform: rotate( ${ isVisible ? ("0deg") : ("10deg")} );
                transform: scale( ${ isVisible ? ("1") : ("0.8") } );
                transition: opacity 3s, transform 3s;
                @media (max-width: 600px) {
                  height: 90vw;
                }
            `}>
        </div>
       <div className={css`
            margin-top: -30vw;
              width: 100%;
              height: 30vw;
              background: url(/v2/layer-01.png);
              background-size: cover;
              background-position: center;
              opacity: ${ isVisible ? ("1") : ("0") };
            transform: scale( ${ isVisible ? ("1") : ("0.8") } );
            transition: opacity 1s, transform 2s;
            transition-delay: 1s;
            @media (max-width: 600px) {
              margin-top: -90vw;
              height: 90vw;
            }
            `}>
        </div>
        <div className={css`
            margin-top: -30vw;
              width: 100%;
              height: 30vw;
              background: url(/v2/layer-02.png);
              background-size: cover;
              background-position: center;
              opacity: ${ isVisible ? ("1") : ("0") };
            transform: scale( ${ isVisible ? ("1") : ("0.8") } );
            transition: opacity 1s, transform 2s;
            transition-delay: 2s;
            @media (max-width: 600px) {
              margin-top: -90vw;
              height: 90vw;
            }
            `}>
        </div>
        
    </div>
  );
};

export default SelfPic;
