import { css } from "@emotion/css"
import PhotoTransition from "./PhotoTransition"

export default function AboutMe() {
    return(
        <>
          <div className={css`
        max-width: 750px;
        margin: auto;
        text-align: center;
        padding-top: 20vh;
        padding-bottom: 1em;
        `}>
            <h3 className={css`
            color: #1A3448;
            `}>
            Philosophy 
            </h3>
        </div>
          <div className={css`
          max-width: 1200px;
          
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          
          padding-bottom: 12em;
          background-position: center;
          margin: auto;
          gap: 1em;
          @media (max-width: 600px) {
            padding: 0 1em;
            gap: 1em;
          }
        `}>
          <div className={css`
            background: #EEEEEE;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            padding: 2em;
            justify-content: center;
            align-items: center;
            grid-column-start: 1;
            grid-column-end: 13;
          `}>
          <div className={css`
            width: 20vw;
            height: 28vw; 
            margin: auto;
            margin-bottom: 2vw;
            transform: scale(0.8);
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
          <h2 className={css`
              text-align: center;
            `}>Grounded in craft <br /> Stepping into the future. </h2>
            <div className={css`
            
            max-width: 450px;
            `}>
            <p className={css`
                line-height: 1.8em;
                text-align: center;
              `}>
             I’m a UX/UI designer, a creative technologist, and a wood-worker. These skillsets give me both technical insight, and an intuitive form-finding impulse. I'm guided by three principles:
              </p>

              </div>

          </div>

          <div className={css`
          height: 480px;
          grid-column-start: 1;
            grid-column-end: 7;
            padding: 2em;
            background: url(/v2/craft-comp.png);
            background-size: cover;
            background-position: top;
            border-radius: 8px;
          `}>
          <h4>
                    Craft
                </h4>
                <div className={css`
                max-width: 380px;
                `}>
                <p className={css`
                line-height: 1.8em;
              `}>
              Craft means setting a high standard of quality. But it also means cultivating a relationship with tools. Tools must be understood as agentic, both objects of design processes and agents in creation. 
 
              </p>
              </div>

          </div>

          <div className={css`
          height: 480px;
          grid-column-start: 7;
            grid-column-end: 13;
            padding: 2em;
            background-image: url(/v2/connection-copm.png);
            background-color: #E3E1C9;
            background-size: 89%;
            background-position: bottom;
            background-repeat: no-repeat;
            border-radius: 8px;
          `}>
          <h4>
                    Connection
                </h4>
                <div className={css`
                max-width: 380px;
                `}>
                <p className={css`
                line-height: 1.8em;
              `}>
              Lasting design emerges from patterns of habitation, community, ecology, and history. When deep, Intuitive patterns are uncovered and applied in novel technical contexts, magic happens. 
              </p>
              </div>

          </div>

          <div className={css`
          height: 650px;
          grid-column-start: 1;
            grid-column-end: 13;
            padding: 2em;
            background: url(/v2/emerge-comp.png);
            background-size: cover;
            background-position: top;
            border-radius: 8px;
          `}>
          <h4>
                    Emergence
                </h4>
                <div className={css`
                max-width: 380px;
                `}>
                <p className={css`
                line-height: 1.8em;
              `}>
              Building for an emergent internet means outcomes are unknown. When it's unclear how people will use technology, design must work to ensure emergence coincides with community and communion. 
              </p>
              </div>

          </div>
            

            

            

        </div>
        
        </>
    )
}