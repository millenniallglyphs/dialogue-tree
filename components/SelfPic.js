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
              height: 37vw;
              background: url(/v2/grid.png);
              background-size: cover;
              background-position: center;
              opacity: ${ isVisible ? ("1") : ("0") };
              transform: rotate( ${ isVisible ? ("0deg") : ("10deg")} );
                transform: scale( ${ isVisible ? ("1") : ("0.8") } );
                transition: opacity 3s, transform 3s;
            `}>
        </div>
       <div className={css`
            margin-top: -37vw;
              width: 100%;
              height: 37vw;
              background: url(/v2/portrait.png);
              background-size: cover;
              background-position: center;
              opacity: ${ isVisible ? ("1") : ("0") };
            transform: scale( ${ isVisible ? ("1") : ("0.8") } );
            transition: opacity 1s, transform 2s;
            transition-delay: 1s;
            `}>
        </div>
        
    </div>
  );
};

export default SelfPic;
