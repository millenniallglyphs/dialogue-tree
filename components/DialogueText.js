import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import SimpleBlock from './SimpleBlock';
import Link from 'next/link';

export default function DialogueText({children, index}) {
    const color = useContext(StyleSelect)

    return (
        
          <div className={css`
              display: inline-block;
              border-radius:  0.75em 0.75em 0.75em 0.12em;
              font-weight: 400;
              opacity: 1;
              margin-top: 0em;
              max-width: 700px;
              animation-name: appear;
              animation-duration: 0.75s;
              animation-delay: ${index + 's'};
              animation-fill-mode: both;
              @media (max-width: 1000px) {
                animation-name: appearb;
              }
              `}>
                <div className={css`
                     color: #04082B;
                `}>
                  { children === "Selman" ? ( 
                    <a href="https://selmandesign.com" target="_blank" className={css`
                    box-shadow: inset 0px -6px 0px #DEDBFF;
                      transition: box-shadow 1s;
                      cursor: pointer;
                      &:hover {
                          box-shadow: inset 0px -1.2em 0px #DEDBFF;
                      }
                    `}>
                      {children}
                    </a>
                  ) : children === "XXIX" ? ( 
                    <a href="https://studioxxix.com" target="_blank" className={css`
                    box-shadow: inset 0px -6px 0px #DEDBFF;
                      transition: box-shadow 1s;
                      cursor: pointer;
                      &:hover {
                          box-shadow: inset 0px -1.2em 0px #DEDBFF;
                      }
                    `}>
                      {children}
                    </a>
                  ) : children === "hello@calvin.ooo" ? (
                    <p> 
                      Please, reach out to me at <a href="mailto:hello@calvin.ooo" target="_blank" className={css`
                     box-shadow: inset 0px -6px 0px #DEDBFF;
                     transition: box-shadow 1s;
                     &:hover {
                         box-shadow: inset 0px -1.2em 0px #DEDBFF;
                     }
                  `}>
                    hello@calvin.ooo
                  </a>.
                  </p>
                  ) : children === "farm" ? (
                    <div>
                    <div className={css`
                        height: 250px;
                        max-width: 350px;
                        border-radius: 8px;
                        background-image: url(/farm.jpg);
                        background-size: cover;
                        background-position: center;
                        animation-name: appearc;
                        animation-duration: 0.75s;
                        animation-delay: ${index + 's'};
                        animation-fill-mode: both;
                      `}></div>
                    <p className={css`
                      margin: 0;
                      padding: 0;
                      `}>
                        I work remotely from Frog Creek Farm, in beautiful Western Washington.
                      </p>
                    
                    </div>
                  ) : children === "currently" ? ( 
                    <p className={css`
                      margin: 0;
                      padding: 0;
                    `}>
                      I’m  a product designer growing <a href="http://enchanted.network" target="_blank" className={css`
                   height: 1.4em;
                   margin-top: -1em;
                   box-shadow: inset 0px -6px 0px #DEDBFF;
                   transition: box-shadow 1s;
                   &:hover {
                    box-shadow: inset 0px -1.2em 0px #DEDBFF;
                   }
                  `}>Enchanted Network</a> and creating an Internet of Rules with the <a href="http://xalgorithms.org" target="_blank" className={css`
                  height: 1.4em;
                  box-shadow: inset 0px -6px 0px #DEDBFF;
                   transition: box-shadow 1s;
                  &:hover {
                    box-shadow: inset 0px -1.2em 0px #DEDBFF;
                  }
                `}>Xalgorithms Foundation</a>.
                    </p>
                  ) : children === "da" ? (
                    <SimpleBlock caption="No Code Rules People Understand" image="/preview-rule.png" target="/projects/design-for-general-purpose" delay={index} />
                  ) : children === "db" ? ( 
                      <SimpleBlock caption="Design System Wins" image="/preview-system.png" target="/projects/design-system-wins" delay={index} />
                  ) :  children === "dc" ? (
                    <SimpleBlock caption="Building a Distributed Brand" image="/preview-brand.png" target="/projects/building-a-distributed-brand" delay={index} bw="true" />
                  ) :  children === "dd" ? (
                    <SimpleBlock caption="Neighborhood Scale Software" image="/preview-software.png" target="/projects/neighborhood-scale-software" delay={index} />
                   ) : children === "dog-pic" ? ( 
                    <div className={css`
                      width: 100%;
                    `}>
                    <div className={css`
                        max-width: 350px;
                        border-radius: 8px;
                        background-image: url(/cobol.jpg);
                        background-size: cover;
                        background-position: center;
                        animation-name: appearc;
                        animation-duration: 0.75s;
                        animation-delay: ${(index + 1) + 's'};
                        animation-fill-mode: both;
                      `}></div>
                      <p className={css`
                      margin: 0;
                      padding: 0;
                    `}>This is Cobol :&#x29;</p>
                      </div>
                  ) : children === "cf" ? ( 
                    <p className={css`
                      margin: 0;
                      padding: 0;
                    `}>
                      <Link href="/writing/collaborative-futures">
                        <a className={css`
                        box-shadow: inset 0px -6px 0px #DEDBFF;
                        transition: box-shadow 1s;
                        cursor: pointer;
                        &:hover {
                            box-shadow: inset 0px -1.2em 0px #DEDBFF;
                        }
                     }
                    `}> Collaborative Futures: Leaving my Cabin</a>
                      </Link>
                    </p>
                  ) : children === "daw" ? ( 
                    <p className={css`
                    margin: 0;
                    padding: 0;
                  `}>
                    <Link href="/writing/design-for-an-animate-world">
                      <a className={css`
                      box-shadow: inset 0px -6px 0px #DEDBFF;
                      transition: box-shadow 1s;
                      cursor: pointer;
                      &:hover {
                          box-shadow: inset 0px -1.2em 0px #DEDBFF;
                      }
                   }
                  `}>Design for an Animate World</a>
                  </Link>
                  </p>
                  ) : children === "cc" ? ( 
                    <p className={css`
                    margin: 0;
                    padding: 0;
                  `}>
                    
                      I'm a designer who <a href="https://enchanted.network/" target="_blank" className={css`
                    box-shadow: inset 0px -6px 0px #DEDBFF;
                      transition: box-shadow 1s;
                      cursor: pointer;
                      &:hover {
                          box-shadow: inset 0px -1.2em 0px #DEDBFF;
                      }
                    `}>writes</a> and <a href="https://gitlab.com/seeddisburser" target="_blank" className={css`
                    box-shadow: inset 0px -6px 0px #DEDBFF;
                      transition: box-shadow 1s;
                      cursor: pointer;
                      &:hover {
                          box-shadow: inset 0px -1.2em 0px #DEDBFF;
                      }
                    `}>codes</a>.
                    </p>
                  ) : (
                    <>
                    {children}
                    </>
                  )}
               
                </div>
            </div>
    )
}