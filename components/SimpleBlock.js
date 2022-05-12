import Link from "next/link"
import { css } from '@emotion/css'

export default function SimpleBlock({caption, image, target, delay, ind}) {
    return(
        <div key={ind}>
            <Link href={target}>
            <div className={css`
                height: 250px;
                width: 100%;
                background: #fff;
                border-radius: 8px;
                background-image: url(${image});
                background-size: cover;
                background-position: center;
                animation-name: ${delay ? ('appearc') :('none')};
                animation-duration: 0.75s;
                animation-delay: ${delay + 's'};
                animation-fill-mode: both;
                cursor: pointer;
                @media (max-width: 1000px) {
                    height: 150px;
                    animation-name: ${delay ? ('appeard') :('none')};
                }
            `}></div>
            </Link>
                <p className={css`
                    margin: 0;
                    padding: 0;
                `}>
                    <Link href={target}>
                        <a className={css`
                            box-shadow: inset 0px -6px 0px #DEDBFF;
                            transition: box-shadow 1s;
                            &:hover {
                                box-shadow: inset 0px -1.2em 0px #DEDBFF;
                            }
                        `}> 
                            {caption} 
                        </a>
                    </Link>
                </p>
            </div>
    )
} 