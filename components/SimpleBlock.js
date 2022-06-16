import Link from "next/link"
import { css } from '@emotion/css'

export default function SimpleBlock({caption, image, target, delay, ind, bw}) {
    return(
        <div key={ind}>
            <Link href={target}>
                <div className={ css`
                 background: #fff;
                 border-radius: 8px;
                 width: 100%;
                 overflow: hidden;
                 animation-name: ${delay ? ('appearc') :('none')};
                animation-duration: 0.75s;
                animation-delay: ${(delay) + 's'};
                animation-fill-mode: both;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                `}>
            <div className="holdhover">
            <div className={css`
                width: 80px;
                height: 80px;
                background: #fff;
                border-radius: 8px;
                padding: 0.5em;
                background-image: url(${image});
                
                background-position: bottom;
                background-repeat: no-repeat;
                background-size: 160%;
                cursor: pointer;
                overflow: hidden;
                font-weight: 500;
                color: ${ bw ? ("#F5F5F5") : ("#04082B")};
                transition: background-size 1s;
                
                :hover {
                    background-size: 180%;
                }
                @media (max-width: 1000px) {
                    animation-name: ${delay ? ('appeard') :('none')};
                }
            `}>

               
            </div>
            <div className={css`
                padding: 1em;
            `}>
            {caption} 
            </div>
            <div className={css`
                margin: 0;
                padding: 0;
                height: 23px;
                transition: margin 1s;
            `}>
            <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.0607 12.4292C27.6464 11.8434 27.6464 10.8937 27.0607 10.3079L17.5147 0.761929C16.9289 0.176142 15.9792 0.176142 15.3934 0.761929C14.8076 1.34772 14.8076 2.29746 15.3934 2.88325L23.8787 11.3685L15.3934 19.8538C14.8076 20.4396 14.8076 21.3893 15.3934 21.9751C15.9792 22.5609 16.9289 22.5609 17.5147 21.9751L27.0607 12.4292ZM0.566406 12.8685H26V9.86853H0.566406V12.8685Z" fill="black"/>
</svg>
            </div>
            </div>
            </div>
            </Link>
            </div>
    )
} 