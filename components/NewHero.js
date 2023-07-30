import { css } from "@emotion/css"
import SelfPic from "./SelfPic"
import Contact from "./Contact"

export default function NewHero() {
    return(
        <div className={css`
        height: 50vw;
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: center;
          @media (max-width:   1000px) {
            height: 600px;
          }
          @media (max-width: 600px) {
            padding-top: 10vh;
          padding-bottom: 10vh;
          }
        `}>
          <div className={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100vw;
            gap: 1em;
            align-items: center;
            @media (max-width: 600px) {
                grid-template-columns: 1fr;
                padding: 0px 1em;
            }
          `}>
            
            <div className={css`
               
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
            `}>
                <div className={css`
                 max-width: 500px;
                `}>
                    <h1 className={css`
                    font-size: 2.6em;
                @media (max-width: 600px){
                    font-size: 1.6em;
                }
                `}>A <span className='callout'>craftsman</span> & <span className='callout'>designer</span> building experiences for an <span className='callout'>emergent</span> internet. </h1>
                <div className={css`
                    display: flex;
                    gap: 1em;
                `}>
                
                <Contact />
          </div>
           </div>
          </div>
          <SelfPic />
        </div>
        </div>
    )
}