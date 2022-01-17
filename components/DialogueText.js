import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';

export default function DialogueText({children, index}) {
    const color = useContext(StyleSelect)

    return (
        
          <div className={css`
              display: inline-block;
              border-radius: 0.75em 0.75em 0.75em 0.12em;
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
                     color: #39435B;
                `}>
                {children}
                </div>
            </div>
    )
}