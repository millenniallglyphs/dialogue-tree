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
            color: #fff;
            background: #04082B;
            border-radius: 0.5em;
            border: none;
            outline: none;
            font-size: 1em;
            animation-delay: ${(beep + 0.5) + 's'};
            animation-name: buttonappear;
            animation-duration: 0.5s;
            animation-fill-mode: backwards;
            font-weight: 600;
            transition: box-shadow 1s;
            box-shadow: none;
            cursor: pointer;
            &:hover  {
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
          `}
          onClick={check}
          >
          {children}
        </button>
    )
}