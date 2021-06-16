import FileBlock from './FileBlock';
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
            grid-gap: 4em;
        `}>
            <div className={css`
                align-self: center;
            `}>
                <h3 className={css`
                    font-weight: 400;
                    font-size: 1.8em;
                    line-height: 1em;
                    color: ${ color.styled==="light" ? ('#39435B') : ('#fff')};
                `}>
                    {title}
                </h3>
                <p className={css`
                    color: ${ color.styled==="light" ? ('#39435B') : ('#fff')};
                `}>
                    {paragraph}
                </p>
                { label ? (
                    <FileBlock type="test" label={label} target={target} content="Epiphyte is a tradebot that uses lichen and moss as computational black boxes."/>
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