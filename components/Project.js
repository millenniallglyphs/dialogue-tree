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
                box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
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
            grid-template-rows: auto auto 1fr;
            gap: 1em;
            padding: 0em;
            cursor: pointer;
            transition: box-shadow 1s;
            box-shadow: none;
            &:hover #activate {
                margin-left: 1em;
                transition: margin-left 1s;
            }
            @media (max-width: 1000px) {
                background-size: cover;
                padding: 0em;
                gap: 0.5em;
                padding-top: 34px;
                &:hover {
                    background-size: cover;
                }
            }
        `}>
            <div className={css`
                padding: 2em;
                padding-bottom: 0;
                @media (max-width: 1000px) {
                    
                    padding: 1em;
                padding-bottom: 0;
                }
            `}>
                <p className={css`
                    margin: 0;
                    text-transform: uppercase;
                    font-size: 0.8em;
                    font-weight: 800;
                    color: #fff;
                `}>
                    Case Study
                </p>
            </div>
            

            <div className={css`
                display: flex;
                justify-content: space-between;
                padding-left: 2em;
                padding-right: 0em;
                @media (max-width: 1000px) {
                    padding-left: 1em;
                    padding-right: 0em;
                }
            `}>
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
                color: ${ color.styled==="light" ? ('#fff') : ('#000')};
                width: 60px;
                `}>
                    {/*
                    <p>{date}</p>
                    */}
                </div>
                
                
            </div>
            <div className={css`
                background-image: url(${image});
                background-position: top;
                background-size: cover;
                width: 100%;
                transition: background-size 3s, box-shadow 1s;
                background-repeat: no-repeat;
                cursor: pointer;
                align-items: flex-end;
                display: flex;
                @media (max-width: 1000px) {
                    background-size: cover;
                }
                
            `}>
                <div className={css`
                display: flex;
                width: 100%;
                padding-top: 1em;
                justify-content: space-between;
                color: ${ color.styled==="light" ? ('#fff') : ('#000')};
                align-items: flex-end;
                padding: 2em;
               
                @media (max-width: 1000px) {
                   padding: 1em;
                }
            `}>
                <div className={css`
                    display: flex;
                    gap: 0.5em;
                    flex-wrap: wrap-reverse;
                `}>
                    {renderOptions()}
                </div>
                <div className={css`
                    margin: 0;
                    padding: 0;
                    display: flex;
                    min-width: 100px;
                    font-weight: 600;
                    color: #f3f9ff;
                    mix-blend-mode: exclusion;
                    @media (max-width: 600px) {
                        width: 70px;
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