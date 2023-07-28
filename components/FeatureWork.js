import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/css';
import Link from 'next/link';

const FeatureWork = (image, title, link, key) => {
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

console.log(image.title);


  return (
    <div
      ref={elementRef}
      key={key}
    >
        <>
            
                <Link href={image.link}>
                    <div className={css`
                        display: flex;
                        flex-direction: column;
                        gap: 1em;
                        opacity: ${ isVisible ? ("1") : ("0") };
                        transform: rotate( ${ isVisible ? ("0deg") : ("10deg")} );
                        transform: scale( ${ isVisible ? ("1") : ("0.8") } );
                        transition: opacity 1s, transform 1s;
                        :hover {
                            cursor: pointer;
                        }
                        &:hover>*>*>*>#beep  {
                            margin-left: 1em;
                            margin-right: 0em;
                          }
                          >*>*>*>#beep {
                            margin-left: 0em;
                            margin-right: 1em;
                            transition: margin 1s;
                          }
                    `}>
                        <div className={css`
                            overflow: hidden;
                            height: 50vw;
                            width: 100%;
                        `}>
                        <div className={css`
                        height: 50vw;
                        width: 100%;
                      
                        background: ${image.image ? ( "url(" + image.image + ")") : ("red")};
                        background-size: cover;
                        background-position: center;
                        transform: scale(1, 1);
                        transition: transform 2s;
                        &:hover {
                            cursor: pointer;
                            transform: scale(1.1, 1.1);
                        }
                        `} key={image.title}>
                            
                        
                        </div>
                        <div className={css`
                            height: 50vw;
                            width: 100%;
                            margin-top: -50vw;
                            z-index: 5;
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            align-content: flex-end;
                            align-items: flex-end;
                            justify-content: flex-end;
                            gap: 1em;
                            padding: 6em 0;
                            `}>
                                <div className={css`
                                max-width: 1000px;
                                margin: 0 auto;
                                width: 100%;
                                `}>
                                    <h2 className={css`
                                        margin: 0;
                                        padding: 0;
                                        color: ${ image.title === "Informed Decision Making" ? ("#FAFAFA") : ("#1A3448") };
                                    `}>
                                        {image.title}
                                    </h2>
                                </div>
                                    <div className="linkbutton">
                                        <div>
                                            <p className="callout">
                                            <span className={css`
                                                color: ${ image.title === "Informed Decision Making" ? ("#ECEAEA") : ("#4A5B68") };
                                            `}>
                                            Read
                                            </span>
                                            </p>
                                        </div>
                                        <div id="beep">
                                        <p className="callout">
                                            <span className={css`
                                                color: ${ image.title === "Informed Decision Making" ? ("#ECEAEA") : ("#4A5B68") };
                                            `}>

                                                {">"}
                                            </span>
                                            
                                            </p>
                                        </div>
                                    
                                </div>
                            </div>
                        
                        </div>
                        
                    </div>
                   
                </Link>
                 
            </>
    </div>
  );
};

export default FeatureWork;
