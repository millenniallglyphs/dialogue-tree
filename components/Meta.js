import Hold from './Hold'
import { css } from '@emotion/css';
import Link from 'next/link';
import React from 'react';

export default function Meta() {

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
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 5;
        `}>
            <Hold>
                <div style={flex}>
                    <div style={home}>
                        <div className={css`
                            height: 3em;
                            width: 3em;
                            background-image: url('/headshot.jpg');
                            background-size: cover;
                            background-position: center;
                            border-radius: 2em;
                            margin-right: 1em;
                        `}></div>
                        <Link href="/work">
                            <a>
                                <p style={small}>Calvin Hutcheon</p>
                            </a>
                        </Link>
                    </div>
                    <div className={css`
                        display: flex;
                    `}>
                            <div
                            className={css`
                                display: flex;
                                align-items: center;
                                gap: 1em;
                            `}
                            >
                                <div className={css`
                            display: flex;
                            gap: 1em;
                                @media (max-width: 600px) {
                                    display: none;
                                }
                            `}>
                                
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
                                    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
                                }
                                &:active  {
                                    background: #f4f4f4;
                                    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
                                }
                            `}>
                                Get In Touch
                            </div>
                            </a>
                            {/*}
                            <div className={css`
                            display: none;
                                @media (max-width: 600px) {
                                    display: block
                                }
                            `}>
                                { !isOpen ? (
                                <button onClick={() => setIsOpen(true)} className="none">
                                    <svg width="24" height="14" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.41016H29" stroke="white"/>
                                        <path d="M1 9.41016H29" stroke="white" strokeLinecap="round"/>
                                        <path d="M1 17.4102H29" stroke="white"/>
                                    </svg>
                                </button>
                                ) : (
                                    <button onClick={() => setIsOpen(false)} className="none">
                                        <svg width="24" height="14" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L29.0018 17.0001" stroke="white"/>
                                        <path d="M1 17L29.0018 0.999869" stroke="white" strokeLinecap="round"/>
                                        </svg>
                                    </button>
                                )}
                                
                            </div>
                            */}
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
                    background: #04082B;
                    padding: 1em;
                    z-index: 5;
                    position: relative;
                    color: #fff;
                    text-align: right;
                    font-weight: 700;
                `}>
                    <div>
                    <Link href="/work">
                        <button onClick={() => setIsOpen(false)} className="none">
                        <h1 className={css`
                                color: #fff;
                                padding: 0;
                                margin: 0;
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
                                color: #fff;
                                padding: 0;
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