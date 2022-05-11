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
        gap: '1em'
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
        `}>
            <div className={css`
                width: 1000px;
                margin: auto;
                padding: 1em;
            `}>
                <div style={home}>
                <Link href="/">
                            <a>
                                <p className={css`
                                    font-size: 1.5em;
                                    margin-top: 0;
                                    margin-bottom: 0;
                                    color: #04082B;
                                    font-weight: 400;
                                    border-radius: 30px;
                                    padding: 0.4rem;
                                    width: 46px;
                                    text-align: center;
                                    transition: background 1s, box-shadow 1s;
                                    :hover {
                                        background: #E3E1F9;
                                        cursor: pointer;
                                        box-shadow: 0px 0px 6px 6px #E3E1F9;
                                    }
                                `}>←</p>
                            </a>
                        </Link>
                        <div className={css`
                            height: 3em;
                            width: 3em;
                            background-image: url('/headshot.jpg');
                            background-size: cover;
                            background-position: center;
                            border-radius: 2em;
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
            </div>
        </div>
    </>
    )
}