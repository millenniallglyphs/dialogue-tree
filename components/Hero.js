import { css } from "@emotion/css"
import { useEffect, useState } from "react"

export default function Hero() {

    const [grid, setGrid] = useState([10, 4, 6]);
    const [row, setRow] = useState([4, 5, 2]);
    const [img, setImg] = useState(0);

    const formGrid = () => {
        setGrid([randomNumberInRange(1, 11), randomNumberInRange(1, 11), randomNumberInRange(1, 11)]);
        setRow([randomNumberInRange(1, 5), randomNumberInRange(1, 5), randomNumberInRange(1, 5)]);
        trackImg();
    }

    const trackImg = () => {
        setImg((prevCount) => (prevCount + 1) % 3);
    }

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    useEffect(() => {
        // Start the interval when the component mounts
        const intervalId = setInterval(formGrid, 5000);
    
        // Clear the interval when the component unmounts to avoid memory leaks
        return () => clearInterval(intervalId);
      }, []);


    

    return(
        <>
        <div className={css`
            height: 800px;
            width: 100%;
            position: relative;
            display: grid;
            z-index: 1 !important;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
            @media (max-width: 600px) {
                grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
            }
        `}>
            <div className={css`
                    grid-column-start: ${grid[0]};
                    grid-column-end: ${grid[0]+1};
                    grid-row-start: ${row[0]};
                    grid-row-end: ${row[0]+1};   
                    background: url(/v2/hero/${ img === 0 ? ("trunnel") : img === 1 ? ("old-time") : ("stream")}.png); 
                    background-size: cover; 
                    animation: heroimage 5s infinite;  
                    z-index: 0;     
            `}>

            </div>
            <div className={css`
                    grid-column-start: ${grid[1]};
                    grid-column-end: ${grid[1]+1};
                    grid-row-start: ${row[1]};
                    grid-row-end: ${row[1]+1};   
                    background: url(/v2/hero/${ img === 0 ? ("craft") : img === 1 ? ("scribe") : ("field")}.png); 
                    background-size: cover;
                    animation: heroimageb 5s infinite;    
                    z-index: 0;       
            `}>

            </div>
            <div className={css`
                    grid-column-start: ${grid[2]};
                    grid-column-end: ${grid[2]+1};
                    grid-row-start: ${row[2]};
                    grid-row-end: ${row[2]+1};   
                    background:  url(/v2/hero/${ img === 0 ? ("prayer") : img === 1 ? ("meadow") : ("mage")}.png); 
                    background-size: cover;
                    animation: heroimagec 5s infinite;  
                    z-index: 0;         
            `}>

            </div>
        </div>
        <div className={css`
          max-width: 1000px;
          min-height: 800px;
          display: flex;
          flex-direction: column;
          align-content: center;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1em;
          margin: auto;
          padding: 10em 0;
          top: 0;
          position: relative;
          z-index: 2 !important;
          background-position: center;
          margin-top: -800px;
          background-size: cover;
          @media (max-width: 1000px) {
            padding: 0px 1em;
            height: auto;
            padding-top: 7.5vh;
            padding-bottom: 7.5vh;
          }
        `}>
          <h1 className={css`
           @media (max-width: 600px){
            font-size: 2em;
           }
          `}>A <span className='callout'>craftsman</span> & <span className='callout'>designer</span> building experiences for an <span className='callout'>emergent</span> internet. </h1>
          <div className={css`
            display: flex;
            gap: 1em;
          `}>
            <a href="https://calendly.com/hello-calvin/30min" target="_blank">
          <button className={css`
              padding: 0.5em;
              padding-left: 1em;
              padding-right: 1em;
              margin: 0.25em;
              margin-left: 1em;
              margin-right: 1em;
              color: #f8f8f8;
              background: #1A3448;;
              border-radius: 0.5em 0.5em 0.5em 0.5em;
              border: none;
              outline: none;
              display: flex;
              font-size: 1em;
              animation-fill-mode: backwards;
              font-weight: 400;
              transition: margin 1s, padding 1s;
              box-shadow: none;
              cursor: pointer;
              align-items: center;
              
              gap: 0.5em;
              &:hover  {
                padding: 0.75em;
                padding-left: 2em;
                padding-right: 2em;
                margin: 0em;
                margin-left: 0em;
                margin-right: 0em;
              }
              `}>
                Let's Talk
          </button>
          </a>
          </div>
        </div>
        </>
    )
}