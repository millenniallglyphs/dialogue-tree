import { css } from '@emotion/css'

export default function GridComp({children}){
    return(
        <div className={css`
         display: grid;
         grid-template-columns: 475px 1fr;
        `}>
            {children}
        </div>
    )
}