import { css } from '@emotion/css'
import Link from 'next/link';

export default function Writing({name, id, target}) {
    return(
    <li id={id}>
        <div className={css`
                width: 100%;
                height: 100vh;
                scroll-snap-align: start;
                padding: 94px 5.4em 1em 0em;
                border-radius: 8px;
                justify-content: space-between;
                @media (max-width: 1000px) {
                    height: 60vh;
                    width: 91vw;
                    padding: 74px 0em 1em 1em;
                  }
            `}
        > 
            <Link href={target}>
                <div className={css`
                    background: #fff;
                    height: 100%;
                    border-radius: 8px;
                    display: grid;
                    grid-template-rows: auto 1fr auto;
                    gap: 1em;
                    padding: 1em;
                    border: 1px solid #04082B;
                    @media (max-width: 1000px) {
                        background-size: cover;
                        &:hover {
                            background-size: cover;
                        }
                    }
                `}>
                <div>
                    <h3 className={css`
                        font-weight: 800;
                        font-size: 6em;
                        line-height: 1em;
                        margin: 0;
                        color: #04082B;
                        @media (max-width: 1000px) {
                            font-size: 4em;
                        }
                        @media (max-width: 600px) {
                            font-size: 2em;
                        }
                    `}>
                        {name}
                    </h3>
                    
                </div>
                <div>

                </div>
                <div>
                <p className={css`
                        margin: 0;
                        padding: 0;
                        font-weight: 800;
                        width: 120px;
                        color: #04082B;
                        @media (max-width: 600px) {
                            width: 80px;
                        }
                    `}> Read More →</p>
                </div>
                </div>
            </Link>
        </div>
    </li>
    )
}