import { css } from '@emotion/css'

export default function GridComp({children}){
    return(
        <div className={css`
         display: grid;
         grid-template-columns: 475px 1fr;
         @media (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: 60vh 40vh;
          }
        `}>
            {children}
        </div>
    )
}