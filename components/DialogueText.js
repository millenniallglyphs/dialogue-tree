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
              animation-name: appear;
              animation-duration: 0.75s;
              animation-delay: ${index + 's'};
              animation-fill-mode: both;
              font-size: 2.4em;
              overflow: hidden;
              width: 100%;
              @media (max-width: 600px) {
                animation-name: appearb;
                font-size: 1.8em;
              }
              `}>
                <div className={css`
                     color: #FAFAFA;
                `}>
                  { children === "Selman" ? ( 
                    <a href="https://selmandesign.com" target="_blank" className={css`
                    color: #0D6AB1;
                    box-shadow: inset 0px -0.4em 0px rgba(13, 106, 177, 0.15);
                      transition: box-shadow 1s;
                      cursor: pointer;
                      &:hover {
                          box-shadow: inset 0px -1.2em 0px rgba(13, 106, 177, 0.15);
                      }
                    `}>
                      {children}
                    </a>
                  ) : children === "XXIX" ? ( 
                    <a href="https://studioxxix.com" target="_blank" className={css`
                    color: #0D6AB1;
                    box-shadow: inset 0px -0.4em 0px rgba(13, 106, 177, 0.15);
                      transition: box-shadow 1s;
                      cursor: pointer;
                      &:hover {
                          box-shadow: inset 0px -1.2em 0px rgba(13, 106, 177, 0.15);
                      }
                    `}>
                      {children}
                    </a>
                  ) : children === "hello@calvin.ooo" ? (
                    <p> 
                      Please, reach out to me at <a href="mailto:hello@calvin.ooo" target="_blank" className={css`
                      color: #0D6AB1;
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
                    <SimpleBlock caption="No Code Rules" image="/preview-rule.png" target="/projects/design-for-general-purpose" delay={index} color="#E154D3" bg="#EBDAF1" />
                  ) : children === "db" ? ( 
                      <SimpleBlock caption="Design System Wins" image="/preview-system.png" target="/projects/design-system-wins" delay={index} color="#86B10D" bg="#DDE8D2" />
                  ) :  children === "dc" ? (
                    <SimpleBlock caption="Building a Distributed Brand" image="/preview-brand.png" target="/projects/building-a-distributed-brand" delay={index} color="#5F0DB1" bg="#DACFEB" />
                  ) :  children === "dd" ? (
                    <SimpleBlock caption="Cross-chain bridge" image="/preview-software.png" target="/projects/neighborhood-scale-software" delay={index} color="#ED8526" bg="#EBE2D8" />
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
                    <div className={css`
                    width: 100%;
                    `}>
                    <p className={css`
                    margin: 0;
                    padding: 0;
                    
                  `}>
                    
                     <a href="https://enchanted.network/" target="_blank" className={css`
                      color: #0D6AB1;
                    box-shadow: inset 0px -0.4em 0px rgba(13, 106, 177, 0.15);
                      transition: box-shadow 1s;
                      cursor: pointer;
                      &:hover {
                          box-shadow: inset 0px -1.2em 0px rgba(13, 106, 177, 0.15);
                      }
                    `}>writes about teams</a> 
                    </p>
                    </div>
                  ) : children === "cd" ? (
                    <div className={css`
                    width: 100%;
                    `}>
                    <p className={css`
                    margin: 0;
                    padding: 0;
                    
                  `}> 
                  and <a href="https://gitlab.com/seeddisburser" target="_blank" className={css`
                    color: #0D6AB1;
                    box-shadow: inset 0px -0.4em 0px rgba(13, 106, 177, 0.15);
                      transition: box-shadow 1s;
                      cursor: pointer;
                      &:hover {
                          box-shadow: inset 0px -1.2em 0px rgba(13, 106, 177, 0.15);
                      }
                    `}>plays with code</a>.
                  </p>
                    </div>
                  ) : (
                    <>
                    {children}
                    </>
                  )}
               
                </div>
            </div>
    )
}