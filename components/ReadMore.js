import { css } from "@emotion/css"
import Preview from "./Preview"

export default function ReadMore() {
    return(

        <div className={css`
            margin-top: 4em;
            margin-bottom: 4em;
        `}>
            <p className={css`
                text-align: center;
                font-size: 0.8em;
                font-weight: 800;
                text-transform: uppercase;
                padding: 1em;
            `}>
                See More Work
            </p>
            <Preview/ >
        </div>
    )
}