import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/css';

const ScrollAnimationComponent = ({children}) => {
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
      className={css`
        opacity: ${ isVisible ? ("1") : ("0") };
        transform: scale( ${ isVisible ? ("1") : ("0.8") } );
        transition: opacity 3s, transform 3s;
      `}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationComponent;
