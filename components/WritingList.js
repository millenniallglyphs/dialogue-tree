import { css } from "@emotion/css"
import LinkButton from "./LinkButton"

export default function WritingList() {
    return(
<div className={css`
          padding-top: 30vh;
          padding-bottom: 30vh;
          display: flex;
          align-items: center;
          background: #F8F8F8;
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
                padding: 0 1em;
            }
          `}>
            <div>
              <h3 className={css`
                margin: 0;
                padding: 0;
                color: #1A3448;
              `}>
                Writing is at the heart of my practice
              </h3>
              
              <p>

              </p>
            </div>
            <div className={css`
                display: flex;
                flex-direction: column;
                gap: 1em;
            `}>
                <p className={css`
                line-height: 1.8em;
              `}>
              Calvin is a product designer grounded in craft to step into uncharted technical futures. Calvin is a product designer grounded in craft to step into uncharted technical futures.
              </p>
            <LinkButton target="test">
                Waking to Enchantment
              </LinkButton>
              <LinkButton target="test">
                Work with Lore
              </LinkButton>
              <LinkButton target="test">
                The Future of Work
              </LinkButton>
              <LinkButton target="test">
                Transcending the Creative Cloud
              </LinkButton>

            </div>
          </div>
        </div>
    )
}