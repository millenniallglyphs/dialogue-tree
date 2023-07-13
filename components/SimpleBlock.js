import Link from "next/link"
import { css } from '@emotion/css'

export default function SimpleBlock({caption, image, target, delay, ind, color, bg, bw}) {

  const beep = {
    background: bg,
    borderRadius: '16px',
    color: color
    }

    return(
        <div key={ind} className={css`
          
        `}>
            <div>
            <Link href={target}>
                <div className={ css`
                
                animation-fill-mode: both;
                width: auto;
                `}>
            <div className="holdhover" style={beep} >
            <div className={css`
                width: 0px;
                height: 00px;
                background-color: ${bg} !important;
                border-radius: 0px;
                padding: 0em;
                cursor: pointer;
                overflow: hidden;
                font-weight: 500;
            `}>

               
            </div>
            <div className={css`
                padding: 0.02em;
                padding-left: 0.75em;
                padding-right: 0.25em;
                color: ${color} !important;
            `}>
            {caption} 
            </div>
            <div className={css`
                margin: 0;
                padding: 0;
                padding-right: 1em;
                transition: margin 1s, padding 1s;
                font-weight: 200 !important;
                color: ${color} !important;
            `}>
                →
            </div>
            </div>
            </div>
            </Link>
            </div>
            <div></div>
            </div>
    )
} 