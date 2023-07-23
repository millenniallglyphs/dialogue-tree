import { css } from "@emotion/css"
import Preview from "./Preview"
import SimpleBlock from "./SimpleBlock"

export default function ReadMore() {
    return(

        <div className={css`
            margin-top: 1em;
            margin-bottom: 1em;
        `}>
            <p className={css`
                text-align: center;
                font-size: 0.8em;
                font-weight: 800;
                text-transform: uppercase;
                padding: 1em;
            `}>
                More Work
            </p>
            <div className={css`
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1em;
                width: 100vw;
                padding: 1em;
                width: 1000px;
                margin: auto;
                @media (max-width: 1000px) {
                  grid-template-columns: 1fr;
                  width: 100vw;
                }
            `}>
                <SimpleBlock caption="Building a Distributed Brand" image="/brand-process-hero.jpg" target="/projects/building-a-distributed-brand" />
                <SimpleBlock caption="Design System Wins" image="/components-material.png" target="/projects/design-system-wins" />
            </div>
        </div>
    )
}