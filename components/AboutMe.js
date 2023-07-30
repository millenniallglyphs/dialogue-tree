import { css } from "@emotion/css"

export default function AboutMe() {
    return(
        <>
          <div className={css`
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-content: center;
          align-items: center;
          justify-content: center;
          gap: 4em;
          padding-top: 20vh;
          padding-bottom: 12em;
          background-position: center;
          margin: 0 !important;
          @media (max-width: 600px) {
            padding: 0 1em;
          }
        `}>
            <h2 className={css`
              text-align: center;
            `}>Grounded in <span className='callout'>craft</span> <br /> Stepping into the <span className='callout'>future</span>. </h2>
            <div className={css`
            
            max-width: 450px;
            `}>
            <p className={css`
                line-height: 1.8em;
                text-align: center;
              `}>
              Calvin is a product designer grounded in craft to step into uncharted technical futures. Calvin is a product designer grounded in craft to step into uncharted technical futures.
              </p>

              </div>
              <div className={css`
            width: 20vw;
            height: 28vw; 
            margin: auto;
            margin-bottom: 6vw;
            @media (max-width: 600px) {
              width: 100vw;
              overflow: hidden;
              height: 60vw;
              margin: auto;
              display: none;
            }
            &:hover {
                gap: 2em;
            }
            >:nth-child(2) {
                transform: rotate(-10deg);
                transition: margin 2s, transform 2s;
              }
              &:hover>:nth-child(2) {
                transform: rotate(0deg);
                margin-top: -28vw;
                margin-left: -22vw;
              }
              &:hover>:nth-child(3) {
                transform: rotate(0deg);
                margin-top: -28vw;
                margin-left: 22vw;
              }
              >:nth-child(3) {
                transform: rotate(10deg);
                transition: margin 2s, transform 2s;
              }

          `}>
            <div className={css`
             background: url(/v2/connection.png);
             background-size: cover;
             width: 20vw;
             height: 28vw;
             @media (max-width: 600px) {
            width: 35vw;
             height: 43vw;
             }
            `}>

            </div>

            <div className={css`
             background: url(/v2/craft.png);
             background-size: cover;
             width: 20vw;
             height: 28vw;
             margin-top: -24vw;
             margin-left: -20vw;
             @media (max-width: 600px) {
              width: 35vw;
             height: 43vw;
             }
            `}>

            </div>
            
            <div className={css`
             background: url(/v2/emergence.png);
             background-size: cover;
             width: 20vw;
             height: 28vw;
             margin-top: -28vw;
             margin-left: 20vw;
             @media (max-width: 600px) {
              width: 35vw;
             height: 43vw;
             }
            `}>

            </div>
          </div>

              <div className={css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            max-width: 1000px;
            gap: 1em;
            align-items: center;
            @media (max-width: 600px) {
              grid-template-columns: 1fr;
            }
          `}>
            <div>
            <div className={css`
             background: url(/v2/craft.png);
             background-size: cover;
             transform: rotate(-6deg);
             display: none;
             margin: auto;
             margin-bottom: 2em;
             @media (max-width: 600px) {
                width: 50vw;
                height: 70vw;
             display: block;
             }
            `}>

            </div>
                <h4>
                    Craft
                </h4>
                <p className={css`
                line-height: 1.8em;
              `}>
              Calvin is a product designer grounded in craft to step into uncharted technical futures. Calvin is a product designer grounded in craft to step into uncharted technical futures.
              </p>
            </div>
            <div>
            <div className={css`
             background: url(/v2/connection.png);
             background-size: cover;
             transform: rotate(6deg);
             display: none;
             margin: auto;
             margin-bottom: 2em;
             @media (max-width: 600px) {
                width: 50vw;
                height: 70vw;
             display: block;
             }
            `}>

            </div>
                <h4>
                    Connection
                </h4>
                <p className={css`
                line-height: 1.8em;
              `}>
              Calvin is a product designer grounded in craft to step into uncharted technical futures. Calvin is a product designer grounded in craft to step into uncharted technical futures.
              </p>
            </div>
            <div>
            <div className={css`
             background: url(/v2/emergence.png);
             background-size: cover;
             transform: rotate(-6deg);
             display: none;
             margin: auto;
             margin-bottom: 2em;
             @media (max-width: 600px) {
                width: 50vw;
                height: 70vw;
             display: block;
             }
            `}>

            </div>
                <h4>
                    Emergence
                </h4>
                <p className={css`
                line-height: 1.8em;
              `}>
              Calvin is a product designer grounded in craft to step into uncharted technical futures. Calvin is a product designer grounded in craft to step into uncharted technical futures.
              </p>
            </div>



            </div>
            

            

        </div>
        
        </>
    )
}