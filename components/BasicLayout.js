import Meta from "./Meta"
import { css } from '@emotion/css'

export default function BasicLayout({kind, children}) {
    return(
        <>
            <Meta kind={kind}/>
            <div className={css`
                min-height: 100vh;
                background-color: #F4F4F4;
            `}>
                {children}
            </div>
        </>
    )
}