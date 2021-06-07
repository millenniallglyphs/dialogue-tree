import { css } from '@emotion/css'
import Button from './Button'

export default function ContentLeft({img, title, paragraph, cta}) {

    return(
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
            </div>
            <div className={css`
                    background-image: url(${'/' + img});
                    background-position: center;
                    background-size: cover;
                    height: 400px;
                `}>
            </div>
        </div>
    )
}