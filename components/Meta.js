import Hold from './Hold'
import { css } from '@emotion/css';
import Link from 'next/link';

export default function Meta({kind, passStyle}) {
    const flex = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }

    const small = {
        fontSize: '0.8em',
        marginTop: '0',
        marginBottom: '0',
        color: '#909090'
    }

    const label = {
        fontSize: '0.8em',
        marginRight: '2em',
        color: '#909090',
        marginTop: '0',
        marginBottom: '0'
    }
    const favicon = {
        height: '12px',
        width: '12px',
        background: '#0500FF',
        marginRight: '2em'
    }

    const metapic = {
        width: '60px',
        marginRight: '2em'
    }

    const metahold = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1em',
        width: '100%',
        boxSizing: 'border-box',
        paddingLeft: '4em',
        paddingRight: '4em'
    }

    const btn = {
        border: '1px solid #000',
        padding: '0.5em',
        borderRadius: '2px',
        fontSize: '0.8em',
        background: 'white'
    }

    const home = {
        display: 'flex'
    }

    const target = {
        display: 'flex',
        justifyContent: 'flex-end'
    }

    const toggleStyling = () => {
        return (
            <button
                onClick={passStyle}
                className={css`
                    width: 20.5px;
                    background: ${ kind==="light" ? ('#F4F4F4') : ('#222222')};
                    border-radius: 4px;
                    border: 0px solid #909090;
                    cursor: pointer;
                `}
            >
                <p style={small}>{ kind==="light" ? ( "☽" ) : ("☼")}</p>
            </button>
        )
    }

    return (
        <div className={css`
            position: fixed;
            background: ${ kind==='light' ? ('#fff') : ('#161616') };
            width: 100%;
            top: 0;
        `}>
            <Hold>
                <div style={flex}>
                    <div style={home}>
                        <div style={favicon}></div>
                        <Link href="/">
                            <a>
                                <p style={small}>Calvin</p>
                            </a>
                        </Link>
                    </div>
                    <div className={css`
                        display: flex;
                    `}>
                            <div
                            className={css`
                                display: flex;
                            `}
                            >
                            
                                <div className={css`
                                padding-bottom: 0.5em;
                                border-bottom: 1px solid #909090;
                                margin-right: 2em;
                                cursor: pointer;
                                `}>
                                    <p style={small}>Projects</p>
                                </div>
                                <div className={css`
                                padding-bottom: 0.5em;
                                border-bottom: 1px solid #909090;
                                margin-right: 2em;
                                cursor: pointer;
                                `}>
                                    <p style={small}>Writing</p>
                                </div>
                                
                            </div>
                            <div style={target}>
                                {toggleStyling()}
                            </div>
                        </div>
                </div>
                <div />
            </Hold>
        </div>
    )
}