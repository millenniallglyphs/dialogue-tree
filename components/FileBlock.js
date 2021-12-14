import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import Icon from './Icon';

export default function FileBlock({type, title, label, target}) {
    const color = useContext(StyleSelect)
    return(
        <div className={css`
            color: #909090;
            background: #fff;
            border-radius: 8px;
            padding: 1em;
        `}>
            
            
            <div>
            <h3 className={css`
                        font-weight: 400;
                        font-size: 1.2em;
                        line-height: 1em;
                        margin: 0;
                        color: ${ color.styled==="light" ? ('#39435B') : ('#fff')}
                    `}>
                    {title}
                </h3>
                {/*
                <p>
                    {content}
                </p>
                */}
                <a href={target} className={css`
                    color: ${ color.styled==="light" ? ('#204EF0') : ('#2C67FF')};
                `}>
                    {label}
                </a>
            </div>
        </div>
    )
}