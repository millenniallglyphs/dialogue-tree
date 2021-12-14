import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';

export default function DialogueText({children, index}) {
    const color = useContext(StyleSelect)

    return (
        
          <div className={css`
              display: inline-block;
              padding: 0.5em 1em 0.5em 1em;
              border-radius: 0.75em 0.75em 0.75em 0.12em;
              color: ${ color.styled==="light" ? ('#39435B') : ('#fff')};
              font-weight: 400;
              background: #fff;
              opacity: 1;
              margin-top: 0em;
              animation-name: appear;
              animation-duration: 0.75s;
              animation-delay: ${index + 's'};
              animation-fill-mode: backwards;
              `}>
                <p className='animationInternal'>
                {children}
                </p>
            </div>
    )
}