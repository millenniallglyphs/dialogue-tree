import Meta from "./Meta"
import Footer from "./Footer"
import { css } from '@emotion/css'

export default function BasicLayout({children}) {
    return(
        <>
            <Meta kind="light"/>
            <div className={css`
                min-height: 100vh;
                background-color: #F4F4F4;
            `}>
                {children}
            </div>
            <Footer />
        </>
    )
}