import { css } from '@emotion/css'
import Link from 'next/link';

export default function Writing({name, id, target, summary}) {
    return(
    <li id={id}>
        <div className={css`
                width: 100%;
                height: 100vh;
                scroll-snap-align: start;
                border-radius: 8px;
                justify-content: space-between;
                @media (max-width: 1000px) {
                    height: 55vh;
                    width: 100vw;
                    padding: 0em;
                  }
            `}
        > 
            <Link href={target}>
                <div className={css`
                    background: #fff;
                    height: 100%;
                    display: grid;
                    grid-template-rows: auto auto 1fr auto;
                    gap: 1em;
                    padding: 2em;
                    cursor: pointer;
                    transition: box-shadow 1s;
                    box-shadow: none;
                    &:hover #activate {
                        margin-left: 1em;
                        transition: margin-left 1s;
                        
                    }
                    @media (max-width: 1000px) {
                        background-size: cover;
                        padding: 64px 1em 1em 1em;
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
                        font-size: 8vw;
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
                        overflow-y: hidden;
                        @media (max-width: 600px) {
                            font-size: 1.4em;
                            line-height: 2rem;
                        }
                    `}>{summary}</p>
                </div>
                <div className={css`
                    margin: 0;
                    padding: 0;
                    display: flex;
                    width: 120px;
                    font-weight: 800;
                        
                        color: #04082B;
                    @media (max-width: 600px) {
                        width: 120px;
                    }
                `}>
                    <p className={css`
                        margin: 0;
                        padding: 0;
                        
                        
                    `}> Read More</p>
                    <p id="activate" className={css`
                        margin: 0;
                        padding: 0;
                    `}>→</p>
                </div>
                </div>
            </Link>
        </div>
    </li>
    )
}