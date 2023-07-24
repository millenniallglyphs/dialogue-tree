import SelfPic from "./SelfPic"
import { css } from "@emotion/css"
import LinkButton from "./LinkButton"

export default function HowWork() {
    return(
        <div className={css`
          padding-top: 20vh;
          padding-bottom: 20vh;
          display: flex;
          align-items: center;
          background: #fff;
          width: 100%;
          justify-content: center;
          @media (max-width: 600px) {
            padding-top: 10vh;
          padding-bottom: 10vh;
          }
        `}>
          <div className={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 1000px;
            gap: 1em;
            align-items: center;
            @media (max-width: 600px) {
                grid-template-columns: 1fr;
                padding: 0px 1em;
            }
          `}>
            <SelfPic />
            <div>
              <h3 className={css`
                margin: 0;
                padding: 0;
                color: #1A3448;
              `}>
                Grounded in <span className='callout'>craft</span>. <br />
                Stepping into the <span className='callout'>future</span>.
              </h3>
              <p className={css`
                line-height: 1.8em;
              `}>
              Calvin is a product designer grounded in craft to step into uncharted technical futures. Calvin is a product designer grounded in craft to step into uncharted technical futures.
              </p>
              <LinkButton target="/about">
                How I work
              </LinkButton>
            </div>
          </div>
        </div>
    )
}