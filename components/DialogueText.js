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
              background-color: #fff;
              opacity: 1;
              margin-top: 0em;
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
                      border-bottom: 2px solid #04082B;
                      &::after {
                        content: "↗"
                      }
                    `}>
                      {children}
                    </a>
                  ) : children === "XXIX" ? ( 
                    <a href="https://studioxxix.com" target="_blank" className={css`
                      border-bottom: 2px solid #04082B;
                      &::after {
                        content: "↗"
                      }
                    `}>
                      {children}
                    </a>
                  ) : children === "hello@calvin.ooo" ? (
                    <a href="mailto:hello@calvin.ooo" target="_blank" className={css`
                    border-bottom: 2px solid #04082B;
                    &::after {
                      content: "↗"
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
                    border-bottom: 2px solid #04082B;
                    &::after {
                      content: "↗"
                    }
                  `}>Enchanted Network</a>  and Building an Internet of Rules with the <a href="mailto:hello@calvin.ooo" target="_blank" className={css`
                  border-bottom: 2px solid #04082B;
                  &::after {
                    content: "↗"
                  }
                `}>Xalgorithms Foundation</a>.
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