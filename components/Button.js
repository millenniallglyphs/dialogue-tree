import { css } from '@emotion/css';
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';

export default function Button({children, step, check}) {

    const color = useContext(StyleSelect)
    const beep = step.length

    return (
        <button
          className={css`
            padding: 0.5em;
            padding-left: 1em;
            padding-right: 1em;
            color: #DFDCFF;
            background: #2F20D6;
            border-radius: 0.5em 0.5em 0em 0.5em;
            border: none;
            outline: none;
            font-size: 1em;
            animation-delay: ${(beep + 0.5) + 's'};
            animation-name: buttonappear;
            animation-duration: 0.5s;
            animation-fill-mode: backwards;
            font-weight: 400;
            transition: background 1s;
            box-shadow: none;
            cursor: pointer;
            &:hover  {
              background: #5B4FE0;
            }
          `}
          onClick={check}
          >
          {children}
        </button>
    )
}