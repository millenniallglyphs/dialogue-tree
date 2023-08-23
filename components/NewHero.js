import { css } from "@emotion/css"
import SelfPic from "./SelfPic"
import Contact from "./Contact"
import LinkButton from "./LinkButton"

export default function NewHero() {
    return(
      <>
        <div className={css`
            display: none;
            @media (max-width:   600px) {
              display: block;
            }
          `}>
          <div className={css`
          height: 50vw;
            display: flex;
            align-items: center;
            width: 100vw;
            overflow: none;
            justify-content: center;
            @media (max-width:   1000px) {
              height: 700px;
            }
            @media (max-width: 600px) {
              padding-top: 10vh;
            padding-bottom: 10vh;
            }
          `}>
            <div className={css`
              display: grid;
              grid-template-columns: 1fr;
              width: 100vw;
              gap: 1em;
              align-items: center;
              @media (max-width: 600px) {
                  grid-template-columns: 1fr;
                  padding: 0px 1em;
                  grid-template-rows: 1fr auto; 
              }
            `}>
              
              <div className={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                  align-items: flex-end;
                  grid-column-start: 1;
                  grid-column-end: 1;
                  grid-row-start: 1;
                  grid-row-end: 2;
                  @media (max-width: 600px) {
                      grid-column-start: 1;
                      grid-column-end: 1;
                      grid-row-start: 2;
                      grid-row-end: 3;
                      align-content: center;
                      align-items: center;
                  }
              `}>
                  <div className={css`
                  max-width: 500px;
                  display: flex;
                  flex-direction: column;
                  @media (max-width: 600px) {
                      align-content: center;
                      align-items: center;
                  }
                  `}>
                      <h1 className={css`
                      font-size: 2.6em;
                  @media (max-width: 600px){
                      font-size: 1.6em;
                      text-align: center;
                  }
                  `}>A craftsman & designer building experiences for an emergent internet. </h1>
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
        </div>
        <div className={css`
          display: block;
          display: flex;
          flex-direction: column;
          padding-bottom: 8em;
          @media (max-width:   600px) {
            display: none;
          }
        `}>
            <div className={css`
              width: 100vw;
              height: 38vw;
              overflow: hidden;
            `}>
              <div className={css`
              margin-top: -4vw;
              width: 100%;
              height: 42vw;
              background: url(/v2/hero/large/hero-00.png);
              background-size: cover;
              background-position: center;
              animation-name: hero1;
              animation-duration: 2s;
              animation-fill-mode: backwards;
            `}>
            </div>
            <div className={css`
              margin-top: -42vw;
              width: 100%;
              height: 42vw;
              background: url(/v2/hero/large/hero-01.png);
              background-size: cover;
              background-position: center;
              animation-name: hero1;
              animation-duration: 2s;
              animation-fill-mode: backwards;
              animation-delay: 1s;
            `}>
            </div>
            <div className={css`
              margin-top: -42vw;
              width: 100%;
              height: 42vw;
              background: url(/v2/hero/large/hero-02.png);
              background-size: cover;
              background-position: center;
              animation-name: hero1;
              animation-duration: 2s;
              animation-fill-mode: backwards;
              animation-delay: 2s;
            `}>
            </div>
            <div className={css`
              margin-top: -42vw;
              width: 100%;
              height: 42vw;
              background: url(/v2/hero/large/hero-03.png);
              background-size: cover;
              background-position: center;
              animation-name: hero1;
              animation-duration: 2s;
              animation-fill-mode: backwards;
              animation-delay: 3s;
            `}>
            </div>
            <div className={css`
              margin-top: -42vw;
              width: 100%;
              height: 42vw;
              background: url(/v2/hero/large/hero-05.png);
              background-size: cover;
              background-position: center;
              animation-name: hero1;
              animation-duration: 2s;
              animation-fill-mode: backwards;
              animation-delay: 4s;
            `}>
            </div>
            <div className={css`
              margin-top: -42vw;
              width: 100%;
              height: 42vw;
              background: url(/v2/hero/large/hero-06.png);
              background-size: cover;
              background-position: center;
              animation-name: hero1;
              animation-duration: 2s;
              animation-fill-mode: backwards;
              animation-delay: 5s;
            `}>
            </div>
            <div className={css`
              margin-top: -42vw;
              width: 100%;
              height: 42vw;
              background: url(/v2/hero/large/hero-07.png);
              background-size: cover;
              background-position: center;
              animation-name: hero1;
              animation-duration: 2s;
              animation-fill-mode: backwards;
              animation-delay: 6s;
            `}>
            </div>
            <div className={css`
              margin-top: -42vw;
              width: 100%;
              height: 42vw;
              background: url(/v2/hero/large/hero-04.png);
              background-size: cover;
              background-position: center;
              animation-name: hero1;
              animation-duration: 2s;
              animation-fill-mode: backwards;
              animation-delay: 7s;
            `}>
            </div>

            </div>
            <div className={css`
              max-width: 1000px;
              margin: auto;
              margin-top: -4em;
            `}>
            <h1 className={css`
                      text-align: center;
                  @media (max-width: 600px){
                      font-size: 1.6em;
                      text-align: center;
                  }
                  `}>A craftsman & designer building experiences for an emergent internet. </h1>
                  <div className={css`
                      display: flex;
                      gap: 0.5em;
                      align-items: center;
                      align-content: center;
                      display-content: center;
                      justify-content: center;
                  `}>
                  
                  <button className={css`
                    padding: 0.5em;
                    padding-left: 1em;
                    padding-right: 1em;
                    color: #fff;
                    background: #1A3448;
                    border-radius: 0.5em 0.5em 0.5em 0.5em;
                    border: none;
                    outline: none;
                    display: flex;
                    font-size: 0.85em;
                    font-family: monospace;
                    animation-fill-mode: backwards;
                    font-weight: 400;
                    transition: background 1s;
                    box-shadow: none;
                    cursor: pointer;
                    align-items: center;
                    gap: 0.5em;
                    &:hover  {
                      background: #545B69;
                    }
                    `}
                  
                    >
                        Let's Connect
                    </button>
                  <Contact />
                  
                  </div>
            </div>
        </div>
        </>
    )
}