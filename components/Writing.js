import { css } from '@emotion/css'
import Link from 'next/link';

export default function Writing({name, id, target, summary}) {
    return(
    <li id={id}>
        <div className={css`
                width: 100%;
                height: 500px;
                scroll-snap-align: start;
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
                    grid-template-rows: auto auto 1fr auto;
                    gap: 1em;
                    padding: 1em;
                    cursor: pointer;
                    border: 1px solid #04082B;
                    &:hover {
                        box-shadow: 0px 0px 12px 4px rgba(9, 9, 9, 0.28);
                        border-radius: 8px;
                    }
                    @media (max-width: 1000px) {
                        background-size: cover;
                    }
                `}>
                <div>
                    <p className={css`
                        margin: 0;
                        text-transform: uppercase;
                        font-size: 0.8em;
                        font-weight: 800;
                    `}>
                        Writing
                    </p>
                </div>
                <div>
                    <h3 className={css`
                        font-weight: 800;
                        font-size: 4em;
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
                <div className={css`
                    max-width: 750px;
                `}>
                    <p className={css`
                        font-size: 1.4em;
                        line-height: 2rem;
                        margin: 0;
                        @media (max-width: 600px) {
                            font-size: 1.4em;
                            line-height: 2rem;
                        }
                    `}>{summary}</p>
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