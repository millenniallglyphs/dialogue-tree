import { css } from '@emotion/css';
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';

export default function Button({children, step, check}) {

    const color = useContext(StyleSelect)


    return (
        <button
          className={css`
            padding: 0.5em;
            color: #fff;
            background: ${ color.styled==="light" ? ('#204EF0') : ('#2C67FF')};
            border-radius: 0.5em;
            border: none;
            outline: none;
            font-size: 1em;
            animation-delay: ${((step.length*1.5) + 2) + 's'};
            animation-name: appear;
            animation-duration: 0.5s;
            animation-fill-mode: backwards;
            font-weight: 400;
            margin-left: 0.5em;
            cursor: pointer;
          `}
          onClick={check}
          >
          {children}
        </button>
    )
}