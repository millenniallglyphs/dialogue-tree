import Meta from "./Meta"
import { css } from '@emotion/css'
import DialogueTree from "./DialogueTree"
import Nav from "./Nav"

export default function BasicLayout({display, children}) {
    return(
        <>  
            <div className={css`
                z-index: 7;
            `}>
                <Nav />
                <DialogueTree hidden={display} />
            </div>
            <div className={css`
                min-height: ${ display ? ('80vh') : ('0px')};
                z-index: 6;
            `}>
                {children}
            </div>
            <div className={css`
                position: fixed;
                top: 0;
                height: 100vh;
                max-width: 100vw;
                z-index: 5;
                pointer-events:none;
                overflow: none;
            `}>
                <div className={css`
                    animation: ${ display ? ('introanimation') : ('outroanimation')} 2s;
                    
                    background: #E3E1F9;
                    height: 200vh;
                    top: -50vh;
                    opacity: 0.5;
                    position: relative;
                    animation-fill-mode: backwards;
                `}>

                </div>

            </div>
        </>
    )
}