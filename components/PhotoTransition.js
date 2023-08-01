import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/css';

export default function PhotoTransition({children, rotate}) {
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
    }, [isVisible]);

    return(
        <div
            ref={elementRef}
        >
            <div className={css`
              width: 100%;
              opacity: ${ isVisible ? ("1") : ("0") };
              display: block;
            transform: scale( ${ isVisible ? ("1") : ("0.6") } ) rotate(${ isVisible ? (rotate) : ("0") }deg);
            transition: opacity 3s, transform 3s;
            `}>
                {children}
            </div>
        </div>
    )
}