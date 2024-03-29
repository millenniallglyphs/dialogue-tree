import { css } from '@emotion/css';
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';

export default function Button({children, step, check}) {

    const color = useContext(StyleSelect)
    console.log(step.length)
    const beep = step.length

    return (
        <button
          className={css`
            padding: 0.5em;
            padding-left: 1em;
            padding-right: 1em;
            color: #fff;
            background: ${ color.styled==="light" ? ('#204EF0') : ('#2C67FF')};
            border-radius: 0.5em;
            border: none;
            outline: none;
            font-size: 1em;
            animation-delay: ${((beep*1.5) + 1) + 's'};
            animation-name: buttonappear;
            animation-duration: 0.5s;
            animation-fill-mode: backwards;
            font-weight: 400;
            margin-left: 0.5em;
            cursor: pointer;
            margin-bottom: 1em;
          `}
          onClick={check}
          >
          {children}
        </button>
    )
}