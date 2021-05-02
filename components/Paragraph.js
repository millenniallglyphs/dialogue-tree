import { css } from '@emotion/css';
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';

export default function Paragraph({children}) {
    const color = useContext(StyleSelect)

    return(
        <p className={css`
            ${ color==="light" ? ('#656565') : ('#EBEBEB') }
        `}>
            {children}
        </p>
    )
}