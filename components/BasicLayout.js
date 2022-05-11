import Meta from "./Meta"
import { css } from '@emotion/css'
import DialogueTree from "./DialogueTree"

export default function BasicLayout({display, children}) {
    return(
        <>
            <DialogueTree hidden={display} />
            <div className={css`
                min-height: ${ display ? ('100vh') : ('0px')};
                background-color: #F4F4F4;
            `}>
                {children}
            </div>
        </>
    )
}