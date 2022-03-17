import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import Link from 'next/link';

export default function Preview() {
    const color = useContext(StyleSelect)
    const options = [
        {label: 'UX', target: 'test'},
        {label: 'UI', target: 'test'},
        {label: 'Technical Writing', target: 'test'},
        {label: 'Dev', target: 'test'}
    ]

    const renderOptions = () => {
        return options.map(({ label, }, index) => (
          <a key={index}>
            <div className={css`
                border-radius: 8px;
                color: #04082B;
                line-height: 1rem;
                font-size: 0.8rem;
                padding: 0.5rem;
                background: #fff;
                box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
            `}>
                {label}
            </div>
          </a>
        ));
      };
    
    return(
        <div>
        <div className={css`
                width: 100%;
                height: 500px;
                scroll-snap-align: start;
                border-radius: 8px;
                justify-content: space-between;
                box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.14);
                @media (max-width: 1000px) {
                    height: 55vh;
                    width: 100vw;
                    padding: 0em;
                    border-radius: 0px;
                  }
            `}
        > 
        <Link href="/projects/react-components">
        <div className={css`
            background: #fff;
            border-radius: 8px;
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
            <div>
                
            </div>
            

            <div className={css`
                display: flex;
                justify-content: space-between;
                padding-left: 1em;
                padding-right: 0em;
                @media (max-width: 1000px) {
                    padding-left: 1em;
                    padding-right: 0em;
                }
            `}>
                <div>
                    <h3 className={css`
                        font-weight: 800;
                        font-size: 3em;
                        line-height: 1em;
                        margin-left: 0;
                        padding: 0;
                        max-width: 100%;
                        color: #04082B;
                        @media (max-width: 1000px) {
                            font-size: 4em;
                        }
                        @media (max-width: 600px) {
                            font-size: 2em;
                        }
                    `}>
                        Simple Modular Components
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
                background: radial-gradient(172.81% 172.81% at 50% 10.6%, rgba(0, 0, 0, 0) 33.24%, #000000 65.87%),  url("/yarn.png");
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
                padding: 1em;
               
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
                    padding: 0.2em;
                    display: flex;
                    min-width: 100px;
                    font-weight: 600;
                    color: #04082B;
                    font-size: 1rem;
                    border-radius: 8px;
                `}>
                    <p className={css`
                        margin: 0;
                        padding: 0;
                        color: #fff;
                        
                    `}> Read More</p>
                    <p id="activate" className={css`
                        margin: 0;
                        padding: 0;
                        color: #fff;
                    `}>→</p>
                </div>
            </div>

            </div>
            
            
            </div>
            </Link>
        </div>
        
        </div>
    )
}