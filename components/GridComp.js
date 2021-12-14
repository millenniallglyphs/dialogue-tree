import { css } from '@emotion/css'

export default function GridComp({children}) {
    return(
        <div className={css`
            display: grid;
            grid-template-columns: 425px auto;
        `}>
            {children}
        </div>
    )
} 