import DialogueTree from "./DialogueTree"
import GridComp from "./GridComp"
import { css } from '@emotion/css'

export default function ListLayout({children}) {
    return(
        <GridComp>
        <div className={css`
          height: 100vh;
          position: -webkit-sticky;
          position: sticky;
          top: 0px;
          padding-top: 56.5px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          grid-area: 1 / 1 / 2 /2;
          z-index: 1;
          @media (max-width: 1000px) {
            height: 40vh;
            grid-area: 2 / 1 / 3 /2;
            padding-top: 0px;
          }
        `}>
          <DialogueTree/>
        </div>
        <div>
            {children}
        </div>
      </GridComp>
    )
}