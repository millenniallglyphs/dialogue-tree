import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';

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
                      Right now, I’m growing <a href="mailto:hello@calvin.ooo" target="_blank" className={css`
                   display: inline-block;
                   height: 1.4em;
                   border-bottom: 8px solid #DEDBFF;
                   transition: height 1s, border 1s;
                   &:hover {
                     transition: height 1s, border 1s;
                     height: 1.4em;
                     border-bottom: 27px solid #DEDBFF;
                   }
                  `}>Enchanted Network</a> and creating an Internet of Rules with the <a href="mailto:hello@calvin.ooo" target="_blank" className={css`
                  display: inline-block;
                  height: 1.4em;
                  border-bottom: 8px solid #DEDBFF;
                  transition: height 1s, border 1s;
                  &:hover {
                    transition: height 1s, border 1s;
                    height: 1.4em;
                    border-bottom: 27px solid #DEDBFF;
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
                  `}>
                    <div>
                    <div className={css`
                      height: 250px;
                      max-width: 650px;
                      background: red;
                      border-radius: 8px;
                      background-image: url(/mocalt4.jpg);
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
                    `}> General-purpose Construction </a>

                    </p>

                    </div>
                    <div>
                    <div className={css`
                      height: 250px;
                      max-width: 650px;
                      background: red;
                      border-radius: 8px;
                      background-image: url(/tabletop.jpg);
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
                  `}>  Neighborhood Scale Software</a>

                  </p>
                    </div>
                  
                  </div>
                  </>
                  ) : children === "dc" ? ( 
                    <>
                    <div className={css`
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      gap: 1em;
                      width: 100%;
                    `}>
                     
                      <div>
                    <div className={css`
                        height: 250px;
                        max-width: 650px;
                        background: red;
                        border-radius: 8px;
                        background-image: url(/brand-process-hero.jpg);
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
                    `}> Building a Distributed Brand</a>
  
                    </p>
                    </div>
                    <div>
                    <div className={css`
                        height: 250px;
                        max-width: 650px;
                        border-radius: 8px;
                        background-image: url(/components-material.png);
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
                    `}>Design System Wins</a>
  
                    </p>
  
                    </div>
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