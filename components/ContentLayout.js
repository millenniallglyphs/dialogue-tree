import { css } from "@emotion/css"
import Meta from "./Meta"
import SimpleFooter from "./SimpleFooter"

export default function ContentLayout({invisible, children}) {
    return(
        <div className={css`
            width: 100vw
            overflow-x: none;
        `}>
            <div className={css`
                position: relative;
                right: ${invisible ? ('-200vw') : ('0vw')};
                transition: right 0.5s;
            `}>
                    <div className={css`
                        min-height: 80vh;
                        width: 100vw;
                       
                    `}>
                        {children}
                    </div>
            </div>
        </div>
    )
}