import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import Link from 'next/link';

export default function Project({ image, date, name, description, id, bgcolor, target, options=[] }) {
    const color = useContext(StyleSelect)
    const renderOptions = () => {
        return options.map(({ target, label, }, index) => (
          <a href={target} key={index}>
            <div className={css`
                padding: 0.5em;
                border-radius: 8px;
                color: #04082B;
                font-size: 0.8em;
                background: #fff;
                border: 1px solid #04082B;

            `}>
                {label}
            </div>
          </a>
        ));
      };
    
    return(
        <li id={id}>
        { image ? (
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
            background: ${bgcolor};
            height: 100%;
            border-radius: 8px;
            display: grid;
            grid-template-rows: auto 1fr auto auto;
            gap: 1em;
            padding: 1em;
            cursor: pointer;
            border: 1px solid ${bgcolor};
            &:hover {
                box-shadow: 0px 0px 12px 4px rgba(9, 9, 9, 0.28);
border-radius: 8px;
            }
            @media (max-width: 1000px) {
                background-size: cover;
                &:hover {
                    background-size: cover;
                }
            }
        `}>
            <div>
                <p className={css`
                    margin: 0;
                    text-transform: uppercase;
                    font-size: 0.8em;
                    font-weight: 800;
                `}>
                    Case Study
                </p>
            </div>
            <div className={css`
                background-image: url(${image});
                background-position: center;
                background-size: contain;
                width: 100%;
                transition: background-size 3s, box-shadow 1s;
                background-repeat: no-repeat;
                cursor: pointer;
                
            `}>

            </div>

            <div className={css`
                display: flex;
                justify-content: space-between;
                
            `}>
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
                color: ${ color.styled==="light" ? ('#fff') : ('#000')};
                width: 60px;
                `}>
                    {/*
                    <p>{date}</p>
                    */}
                </div>
                
                
            </div>
            
            <div className={css`
                display: flex;
                padding-top: 1em;
                justify-content: space-between;
                color: ${ color.styled==="light" ? ('#fff') : ('#000')};
                align-items: flex-end;
            `}>
                <div className={css`
                    display: flex;
                    gap: 0.5em;
                    flex-wrap: wrap;
                `}>
                    {renderOptions()}
                </div>
                <div className={css`
                    margin: 0;
                    padding: 0;
                `}>
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
            </div>
            </Link>
        </div>
        ) : (
            null
        )}
        </li>
    )
}