import { css } from "@emotion/css"
import { useEffect, useState } from "react"
import LinkButton from "./LinkButton";

export default function ConciseWork({images}) {
    

   {/* handle the state of the image while rotating*/} 

  const [img, setImg] = useState(0);
  
  const [isMouseInside, setIsMouseInside] = useState(false);


 

{/* handle the state of the images depending on mouse position*/}
  
    const handleMouseEnter = (keys) => {
      setIsMouseInside(true);
      setImg(keys);
    };
  
    const handleMouseLeave = () => {
      setIsMouseInside(false);
    };



    useEffect(() => {
        const interval = setInterval(() => {
          if (!isMouseInside) {
            formVisible()
          }
        }, 5000);
    
        return () => clearInterval(interval);
      }, [isMouseInside]);


  const formVisible = () => {
   
    trackImg()

}

 const trackImg = () => {
       setImg((prevCount) => (prevCount + 1) % 5);
}

   
    const renderTitle = () => {
        return images.map((index, keys) => (
            <LinkButton target={index.l} key={keys} active={isMouseInside} imgstate={img} phase={keys} external={true}>
                <div
                    onMouseEnter={() => handleMouseEnter(keys)}
                    onMouseLeave={handleMouseLeave}
                    id={keys}
                >
                {index.t}
                </div>
            </LinkButton>
        ));
    }


    const renderImages =() => {
        return images.map((index, keys) => (
            <div key={keys} className={css`
                height: 100%;
                width: 100%;
                overflow: hidden;
                opacity: ${
                    keys === img ? ("1") : ("0")
                };
                transition: opacity 2s;
                margin-top: ${
                    keys === img ? ("0") : ("-50vw")
                };
                z-index: ${
                    keys === img ? ("2") : ("-1")
                };
                background: url(${index.i});
                background-size: cover;
                background-position: center;
            `}>
            </div>
        ))
    }

    return(
        <div className={css`
            width: 100%;
            display: grid;
            height: 50vw;
            grid-template-columns: 1fr 1fr;
            gap: 4em;
            align-items: center;
            background: #fff;
        `}>
            <div className={css`
             height: 50vw;
             width: 100%;
             overflow: hidden;
            `}>
                {renderImages()}
            </div>
            <div className={css`
                display: flex;
                flex-direction: column;
                gap: 1em;
            `}>
                <h3>
                    Featured Work
                </h3>
                {renderTitle()}
            </div>
        
        </div>
    )
}