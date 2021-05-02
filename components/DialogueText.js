import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';

export default function DialogueText({children, index}) {
    const color = useContext(StyleSelect)

    return (
        <div className="dhold">
            <h2 className={css`
                opacity: 1;
                display: box;
                height: 0.5em;
                margin-top: 2em;
                margin-bottom: 2em;
                padding-left: 1em;
                animation-name: appear;
                animation-duration: 3s;
                animation-delay: ${1.5*index + 's'};
                animation-fill-mode: backwards;
              `}>
              <span className={css`
              padding-top: 0.5em;
              padding-bottom: 0.5em;
              border-radius: 0.5em;
              color: ${ color.styled==="light" ? ('#39435B') : ('#fff')};
              font-weight: 400;
              `}
              >
                {children}
              </span>
            </h2>
          </div>
    )
}