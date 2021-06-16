import Button from './Button'
import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';

export default function blockContent({title, img, paragraph, right, cta, label, target}) {
    const color = useContext(StyleSelect)
    return(
        right === 'true' ? (
        <div className={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1em;
        `}>
            <div className={css`
                align-self: center;
            `}>
                <h3>{title}</h3>
                <p>{paragraph}</p>
                { label ? (
                    <Button step="0">{label}</Button>
                 ) : (
                    null
                )}
            </div>
            <div className={css`
                    background-image: url(${'/' + img});
                    background-position: center;
                    background-size: cover;
                    height: 600px;
                `}>
            </div>
        </div>
        ) : (
            <p>other side</p>
        )
    )
}