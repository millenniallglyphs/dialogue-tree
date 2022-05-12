import { css } from "@emotion/css"
import Meta from "./Meta"
import SimpleFooter from "./SimpleFooter"

export default function ContentLayout({children}) {
    return(
        <div>
            <Meta />
            <div className={css`
                min-height: 80vh;
                width: 100vw;
            `}>
                {children}
            </div>
            <SimpleFooter />
        </div>
    )
}