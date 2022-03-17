import Hold from './Hold'
import { css } from '@emotion/css';
import Link from 'next/link';
import React from 'react';

export default function Meta({kind}) {

    const [isOpen, setIsOpen] = React.useState(false);

    const flex = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }

    const small = {
        fontSize: '1em',
        marginTop: '0',
        marginBottom: '0',
        color: '#04082B',
        fontWeight: 600,
        mixBlendMode: 'difference',
    }


    const home = {
        display: 'flex',
        alignItems: 'center',
    }

    const target = {
        display: 'flex',
        justifyContent: 'flex-end'
    }

    return (
        <>
        <div className={css`
            position: absolute;
            width: 100%;
            top: 0;
            z-index: 5;
            rgba(255, 255, 255, 0);
            background: ${ isOpen === !"true" ? (
                "rgba(255, 255, 255, 0)"
            ) : (
                "rgba(255, 255, 255, 0.7)"
            )};
        `}>
            <Hold>
                <div className={css`
                    display: grid;
                    grid-template-columns: 475px 1fr;
                    @media (max-width: 1000px) {
                        grid-template-columns: 1fr 1fr;
                    }
                `}>
                    <div style={home}>
                        <div className={css`
                            height: 3em;
                            width: 3em;
                            background-image: url('/headshot.jpg');
                            background-size: cover;
                            background-position: center;
                            border-radius: 2em;
                            margin-right: 1em;
                            isolation: isolate;
                        `}></div>
                        <div>
                        <Link href="/">
                            <a>
                                <p className={css`
                                    font-size: 1em;
                                    margin-top: 0;
                                    margin-bottom: 0;
                                    color: #04082B;
                                    font-weight: 600;
                                `}>Calvin Hutcheon</p>
                            </a>
                        </Link>
                        </div>
                    </div>
                    <div className={css`
                        display: flex;
                        
                    `}>
                            <div
                            className={css`
                                display: flex;
                                align-items: center;
                                gap: 1em;
                                justify-content: space-between;
                                width: 100%;
                                @media (max-width: 1000px) {
                                    justify-content: flex-end;
                                }
                            `}
                            >
                                <div className={css`
                                display: flex;
                                align-items: center;
                                padding-left: 2em;
                                gap: 1em;
                                @media (max-width: 600px) {
                                    display: none;
                                }
                            `}>
                                <Link href="/work">
                                    <a className={css`
                                        font-size: 0.8em;
                                        font-weight: 600;
                                        text-transform: uppercase;
                                        color:  #04082B;
                                        opacity: ${ kind === "light" ? ("1") : ("0.5")};
                                        transition: opacity 1s;
                                        &:hover {
                                            opacity: 1;
                                            transition: opacity 1s;
                                        }
                                    `}>work</a>
                                </Link>
                                <Link href="/writing">
                                <a className={css`
                                        font-size: 0.8em;
                                        font-weight: 600;
                                        text-transform: uppercase;
                                        color:  #04082B;
                                        opacity: ${ kind === "light" ? ("0.5") : ("1")};
                                        transition: opacity 1s;
                                        &:hover {
                                            opacity: 1;
                                            transition: opacity 1s;
                                        }
                                    `}>writing</a>
                                </Link>
                                
                            </div>
                                <a href="mailto:hello@calvin.ooo">
                                <div className={css`
                                padding: 0.5em;
                                padding-left: 1em;
                                padding-right: 1em;
                                color: #04082B;
                                background: #fff;
                                border-radius: 0.5em;
                                border: none;
                                outline: none;
                                font-size: 1em;
                                font-weight: 600;
                                transition: box-shadow 1s, background 1s;
                                box-shadow: none;
                                cursor: pointer;
                                box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.14);
                                &:hover  {
                                    background: #f4f4f4;
                                    box-shadow: 0px 0px 14px 10px rgba(0, 0, 0, 0.24);
                                }
                                &:active  {
                                    background: #f4f4f4;
                                    box-shadow: 0px 0px 14px 10px rgba(0, 0, 0, 0.24);
                                }
                            `}>
                                Get In Touch
                            </div>
                            </a>
                            
                            <div className={css`
                            display: none;
                                @media (max-width: 600px) {
                                    display: block;
                                    padding-top: 4px;
                                }
                            `}>
                                { !isOpen ? (
                                <button onClick={() => setIsOpen(true)} className="none">
                                    <svg width="24" height="15" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.41016H29" stroke="#04082B"/>
                                        <path d="M1 9.41016H29" stroke="#04082B" strokeLinecap="round"/>
                                        <path d="M1 17.4102H29" stroke="#04082B"/>
                                    </svg>
                                </button>
                                ) : (
                                    <button onClick={() => setIsOpen(false)} className="none">
                                        <svg width="24" height="14" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L29.0018 17.0001" stroke="#04082B"/>
                                        <path d="M1 17L29.0018 0.999869" stroke="#04082B" strokeLinecap="round"/>
                                        </svg>
                                    </button>
                                )}
                                
                            </div>
                            
                            </div>
                            {/*
                            <div style={target}>
                                {toggleStyling()}
                            </div>
                            */}
                            
                        </div>
                </div>
                <div />
            </Hold>
        </div>
        <div className={css`
            position: fixed;
            top: 60px;
            left: 0px;
            z-index: 6;
        `}>
            
            <div className={ !isOpen ? ("hidden") : ("nothidden")}>
                
                <div className={css`
                    width: 100vw; 
                    height: 100vh;
                    background-color: rgba(255, 255, 255, 0.7);
                    padding: 1em;
                    z-index: 5;
                    position: relative;
                    color: #04082B;
                    text-align: right;
                    font-weight: 700;
                `}>
                    <div>
                    <Link href="/work">
                        <button onClick={() => setIsOpen(false)} className="none">
                        <h1 className={css`
                                color: #04082B;
                                padding: 0;
                                margin: 0;
                                font-size: 5em;
                            `}>
                            Work
                        </h1>
                        </button>
                    </Link>
                    </div>
                    <div>
                        <Link href="/writing">
                            <button onClick={() => setIsOpen(false)} className='none'>
                            <h1 className={css`
                                color: #04082B;
                                padding: 0;
                                margin: 0;
                                font-size: 5em;
                            `}>
                               Writing
                            </h1>
                            </button>
                        </Link>
                    </div>
                </div>
            
            </div>    
        </div>
    </>
    )
}