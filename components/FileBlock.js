import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import Icon from './Icon';

export default function FileBlock({type, content, label, target}) {
    const color = useContext(StyleSelect)
    return(
        <div className={css`
            display: flex;
            color: #909090;
            align-items: center;
        `}>
            
                { type ? (
                    <div className={css`
                        margin-right: 1em;
                    `}>
                        <Icon type="paper"/>
                    </div>

                    ) : (
                        null
                    )
                }
            
            <div>
                <p>
                    {content}
                </p>
                <a href={target} className={css`
                    color: ${ color.styled==="light" ? ('#204EF0') : ('#2C67FF')};
                `}>
                    {label}
                </a>
            </div>
        </div>
    )
}