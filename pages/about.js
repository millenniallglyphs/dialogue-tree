import ContentLayout from "../components/ContentLayout"
import BasicLayout from "../components/BasicLayout"
import { css } from "@emotion/css"
import Carousel from "../components/Carousel"
import DialogueTree from "../components/DialogueTree"


const images = [
    {
      t: "Designing for Trust and Transparency",
      i: "v2/trust/hero-trust.png",
      l: "/projects/designing-for-trust-and-transpernecy"
    },
    {
        t: "Form Factors for Creativity",
        i: "v2/creative/render-02.png",
        l: "/projects/form-factor-for-creativity"
    },
    {
      t: "Design System Wins",
      i: "v2/win/hero.png",
      l: "/projects/design-system-wins"
    },
    {
      t: "Informed Decision Making",
      i: "v2/decision/render-01.png",
      l: "/projects/informed-decision-making"
    
    },
    {
      t: "Reliability and Design Systems",
      i: "v2/reliability/hero.png",
      l: "/projects/reliability-and-design-systems"
    }
  ];

export default function About() {
    return(
        <div>
            <div className={css`
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-content: center;
          align-items: center;
          justify-content: center;
          gap: 4em;
          padding-top: 20vh;
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
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            max-width: 1000px;
            gap: 0em;
            height: 35vw;
            align-items: center;
            transition: gap 2s;
            &:hover {
                gap: 2em;
            }
            >:nth-child(1) {
                transform: rotate(-10deg);
                transition: margin 2s, transform 2s;
                margin-top: 7.5vw;
                padding-left: -5vw;
              }
              &:hover>:nth-child(1) {
                transform: rotate(0deg);
                margin-top: 0vw;
              }
              &:hover>:nth-child(3) {
                transform: rotate(0deg);
                margin-top: 0vw;
              }
              >:nth-child(3) {
                transform: rotate(10deg);
                transition: margin 1s;
                margin-top: 7.5vw;
                transition: margin 2s, transform 2s;
              }

          `}>

            <div className={css`
             background: url(/v2/craft.png);
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
             background: url(/v2/emergence.png);
             background-size: cover;
             width: 20vw;
             height: 28vw;
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

              <Carousel images={images}/>
              <div>
                <DialogueTree />
              </div>

        </div>



        </div>

    )

    
}

About.getLayout = function getLayout(page) {
    return(
        <BasicLayout display="true">
        <ContentLayout>
        {page}
        </ContentLayout>
        </BasicLayout>
    )
}