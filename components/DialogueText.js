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
                  ) : children === "gp" ? (
                    
                    <p className={css`
                    margin: 0;
                    padding: 0;
                  `}> <span>1.  </span>
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
                  `}>  Human Centered + General Purpose</a>

                  </p>
                  ) : children === "ns" ? ( 
<p className={css`
                    margin: 0;
                    padding: 0;
                  `}> <span>2.  </span>
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
                  `}>  Designing Neighborhood Scale Software</a>

                  </p>
                  ) : children === "db" ? ( 
                  <p className={css`
                    margin: 0;
                    padding: 0;
                  `}> <span>3.  </span>
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
                  `}> Implementing a Distributed Brand</a>

                  </p>

                  ) : children === "ds" ? ( 
                    <p className={css`
                    margin: 0;
                    padding: 0;
                  `}> <span>4.  </span>
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

                  ) : (
                    <>
                    {children}
                    </>
                  )}
               
                </div>
            </div>
    )
}