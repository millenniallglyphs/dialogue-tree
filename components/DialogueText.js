import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import SimpleBlock from './simpleBlock';

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
                    display: inline-block;
                    height: 1.4em;
                    border-bottom: 8px solid #DEDBFF;
                    transition: height 1s, border 1s;
                    &:hover {
                      transition: height 1s, border 1s;
                      height: 1.4em;
                      border-bottom: 27px solid #DEDBFF;
                    }
                    `}>
                      {children}
                    </a>
                  ) : children === "XXIX" ? ( 
                    <a href="https://studioxxix.com" target="_blank" className={css`
                    display: inline-block;
                    height: 1.4em;
                    border-bottom: 8px solid #DEDBFF;
                    transition: height 1s, border 1s;
                    &:hover {
                      transition: height 1s, border 1s;
                      height: 1.4em;
                      border-bottom: 27px solid #DEDBFF;
                    }
                    `}>
                      {children}
                    </a>
                  ) : children === "hello@calvin.ooo" ? (
                    <a href="mailto:hello@calvin.ooo" target="_blank" className={css`
                    display: inline-block;
                   height: 1.4em;
                   border-bottom: 8px solid #DEDBFF;
                   transition: height 1s, border 1s;
                   &:hover {
                     transition: height 1s, border 1s;
                     height: 1.4em;
                     border-bottom: 27px solid #DEDBFF;
                   }
                  `}>
                    {children}
                  </a>
                  ) : children === "currently" ? ( 
                    <p className={css`
                      margin: 0;
                      padding: 0;
                    `}>
                      I’m growing <a href="mailto:hello@calvin.ooo" target="_blank" className={css`
                   height: 1.4em;
                   margin-top: -1em;
                   box-shadow: inset 0px -6px 0px #DEDBFF;
                   transition: box-shadow 1s;
                   &:hover {
                    box-shadow: inset 0px -1.2em 0px #DEDBFF;
                   }
                  `}>Enchanted Network</a> and creating an Internet of Rules with the <a href="mailto:hello@calvin.ooo" target="_blank" className={css`
                  height: 1.4em;
                  box-shadow: inset 0px -6px 0px #DEDBFF;
                   transition: box-shadow 1s;
                  &:hover {
                    box-shadow: inset 0px -1.2em 0px #DEDBFF;
                  }
                `}>Xalgorithms Foundation</a>.
                    </p>
                  ) : children === "db" ? ( 
                  <>
                  <div className={css`
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1em;
                    width: 100%;
                    @media (max-width: 1000px) {
                      grid-template-columns: 1fr;
                    }
                  `}>
                    <SimpleBlock caption="Design For General Purpose" image="/mocalt4.jpg" target="/projects/design-for-general-purpose" key={index} />
                    <SimpleBlock caption="Neighborhood Scale Software" image="/tabletop.jpg" target="/projects/neighborhood-scale-software" delay={index} />
                  </div>
                  </>
                  ) : children === "dc" ? ( 
                    <>
                    <div className={css`
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      gap: 1em;
                      width: 100%;
                      @media (max-width: 1000px) {
                        grid-template-columns: 1fr;
                      }
                    `}>
                      <SimpleBlock caption="Building a Distributed Brand" image="/brand-process-hero.jpg" target="/projects/building-a-distributed-brand" delay={index} />
                      <SimpleBlock caption="Design System Wins" image="/components-material.png" target="/projects/design-system-wins" delay={index} />
                    </div>
                    </>

                  ) : children === "dog-pic" ? ( 
                    <div className={css`
                        height: 250px;
                        max-width: 650px;
                        border-radius: 8px;
                        background-image: url(/cobol.jpg);
                        background-size: cover;
                        background-position: center;
                        animation-name: appearc;
                        animation-duration: 0.75s;
                        animation-delay: ${index + 's'};
                        animation-fill-mode: both;
                      `}></div>
                  ) : children === "cf" ? ( 
                    <p className={css`
                      margin: 0;
                      padding: 0;
                    `}>
                        <a className={css`
                        display: inline-block;
                        height: 1.4em;
                        border-bottom: 8px solid #DEDBFF;
                        transition: height 1s, border 1s;
                        &:hover {
                       transition: height 1s, border 1s;
                       height: 1.4em;
                       border-bottom: 27px solid #DEDBFF;
                     }
                    `}> Collaborative Futures: Leaving my Cabin</a>
  
                    </p>
                  ) : children === "daw" ? ( 
                    <p className={css`
                    margin: 0;
                    padding: 0;
                  `}>
                      <a className={css`
                      display: inline-block;
                      height: 1.4em;
                      border-bottom: 8px solid #DEDBFF;
                      transition: height 1s, border 1s;
                      &:hover {
                     transition: height 1s, border 1s;
                     height: 1.4em;
                     border-bottom: 27px solid #DEDBFF;
                   }
                  `}>Design for an Animate World</a>

                  </p>
                  ) : children === "cc" ? ( 
                    <p className={css`
                    margin: 0;
                    padding: 0;
                  `}>
                      <a className={css`
                      display: inline-block;
                      height: 1.4em;
                      border-bottom: 8px solid #DEDBFF;
                      transition: height 1s, border 1s;
                      &:hover {
                     transition: height 1s, border 1s;
                     height: 1.4em;
                     border-bottom: 27px solid #DEDBFF;
                   }
                  `}>Transcending the Creative Cloud</a>
                    </p>
                  ) : children === "trunnel-pic" ? ( 
                    <div className={css`
                        border-radius: 8px;
                        background-image: url(/trunnel.jpg);
                        background-size: cover;
                        background-position: center;
                        animation-name: appearc;
                        animation-duration: 0.75s;
                        animation-delay: 0s;
                        animation-fill-mode: both;
                      `}></div>
                  ) : (
                    <>
                    {children}
                    </>
                  )}
               
                </div>
            </div>
    )
}