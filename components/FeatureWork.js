import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/css';
import Link from 'next/link';

const FeatureWork = (image, title, link, key, featured) => {
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
                        :hover>:nth-child(2)>#beep  {
                            margin-left: 1em;
                            margin-right: 0em;
                          }
                        >:nth-child(1)>#beep {
                        margin-left: 0em;
                        margin-right: 1em;
                        transition: margin 1s;
                        background: red;
                        }
                    `}>
                        <div className={css`
                            overflow: hidden;
                            height: 45vw;
                            width: 100%;
                            @media (max-width: 600px) {
                                height: 65vw;
                            }
                        `}>
                        <div className={css`
                        height: ${image.featured ? ("45vw") : ("35vw") };
                        width: 100%;
                        background: ${image.image ? ( "url(" + image.image + ")") : ("red")};
                        background-size: cover;
                        background-position: center;
                        transform: scale(1, 1);
                        transition: transform 2s;
                        :hover {
                            cursor: pointer;
                            transform: scale(1.1, 1.1);
                        }
                        @media (max-width: 600px) {
                            height: 65vw;
                        }
                        `} key={image.title}>
                            
                        
                        </div>
                        
                        </div>
                        
                                    
                <div className="linkbutton">
                    <div className={css`
                        margin-bottom: 2px;
                        font-family: "twkLausanne";
                        color: #1A3448;
                    `}>
                       <h4 className={css`
                                        margin: 0;
                                        padding: 0;
                                        color: #1A3448;
                                    `}>
                                        {image.title}
                                    </h4>
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
    </div>
  );
};

export default FeatureWork;
