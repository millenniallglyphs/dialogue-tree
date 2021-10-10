import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';

export default function DialogueText({children, index}) {
    const color = useContext(StyleSelect)

    return (
        <div className="dhold">
            <h2 className={css`
                opacity: 1;
                margin-top: 0.5em;
                margin-bottom: 0.5em;
                animation-name: appear;
                animation-duration: 2s;
                animation-delay: ${1.5*index + 's'};
                animation-fill-mode: backwards;
              `}>
              <span className={css`
              padding-top: 0.5em;
              padding-bottom: 0.5em;
              border-radius: 0.5em;
              color: ${ color.styled==="light" ? ('#39435B') : ('#fff')};
              font-weight: 400;
              line-height: 1.8em;
              `}
              >
                {children}
              </span>
            </h2>
          </div>
    )
}