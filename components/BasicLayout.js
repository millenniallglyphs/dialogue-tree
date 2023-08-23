import Meta from "./Meta"
import { css } from '@emotion/css'
import DialogueTree from "./DialogueTree"
import Nav from "./Nav"
import Contact from "./Contact"

export default function BasicLayout({display, children}) {
    return(
        <>  
            <div className={css`
                z-index: 7;
            `}>
                <Nav />
            </div>
            <div className={css`
                min-height: ${ display ? ('80vh') : ('0px')};
                z-index: 0;
                position: relative;
            `}>
                {children}
                <div className={css`
                    margin-top: 0vh;
                    z-index: 0;
                    position: relative;
                `}>
                    <div className={css`
          padding-top: 1em;
          padding-bottom: 2em;
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: center;
          height: 160px;
        `}>
          <div className={css`
            width: 100%;
            margin: auto;
            gap: 1em;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            height: 160px;
          `}>
            <div>
              <Contact />
              <p>
                © 2023
              </p>
              <p>

              </p>
            </div>
            <div className={css`
            height: 30vh;
            `}>

            </div>
          </div>
        </div>

                </div>
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