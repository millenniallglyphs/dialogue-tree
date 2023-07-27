import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/css';
import Link from 'next/link';

const FeatureWork = (key, index) => {
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




  return (
    <div
      ref={elementRef}
      key={key}
    >
        <>
                <Link href={index}>
                    <div className={css`
                        display: flex;
                        flex-direction: column;
                        gap: 1em;
                        padding-bottom: 2em;
                        opacity: ${ isVisible ? ("1") : ("0") };
                        transform: rotate( ${ isVisible ? ("0deg") : ("10deg")} );
                        transform: scale( ${ isVisible ? ("1") : ("0.8") } );
                        transition: opacity 1s, transform 1s;
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
                            overflow: hidden;
                            height: 30vw;
                            width: 100%;
                        `}>
                        <div className={css`
                        height: 30vw;
                        width: 100%;
                        background: ${index.i ? ( "url(" + index.i + ")") : ("red")};
                        background-size: cover;
                        background-position: center;
                        transform: scale(1, 1);
                        transition: transform 2s;
                        &:hover {
                            z-index: t+1;
                            cursor: pointer;
                            transform: scale(1.1, 1.1);
                        }
                        `} key={index.t}>
                        
                        </div>
                        </div>
                        <h2 className={css`
                            margin: 0;
                            padding: 0;
                            color: #1A3448;
                        `}>
                            {index.t}
                        </h2>
                        <div className="linkbutton">
                <div>
                    <p className="callout">
                    Read
                    </p>
                </div>
                <div id="beep">
                <p className="callout">
                    {">"}
                    </p>
                </div>
            </div>
                    </div>
                </Link>
                
            </>
    </div>
  );
};

export default FeatureWork;
