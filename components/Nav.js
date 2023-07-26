
import { css } from '@emotion/css';
import Contact from './Contact';
import Link from 'next/link';

export default function Nav() {

    return(
        <div className={css`
        width: 100vw;
        background: rgba(255, 255, 255, 0.50);
        backdrop-filter: blur(8px);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        `}>
            <div className={css`
            width: 1000px;
            @media (max-width: 1000px) {
                width: 100%;
                padding: 0px 1em;
            }
            margin: auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: space-between;  
            align-items: center;
            `}>
                <div>
                    <Link href={"/"}>
                    <p className={css`   
                        color: #1A3448;
                        font-family: 'twkLausanne';
                        &:hover {
                             cursor: pointer;
                        }
                    `}>Calvin Hutcheon</p>
                    </Link>
                </div>
                <div className={css`
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                `}>
                    <a href="https://calendly.com/hello-calvin/30min" target="_blank">
          <button className={css`
              padding: 0.35em;
              padding-left: 0.5em;
              padding-right: 0.5em;
              margin: 0.65em;
              margin-left: 0.5em;
              margin-right: 0.5em;
              color: #f8f8f8;
              background: #1A3448;;
              border-radius: 0.5em 0.5em 0.5em 0.5em;
              border: none;
              outline: none;
              display: flex;
              font-size: 1em;
              animation-fill-mode: backwards;
              font-weight: 400;
              transition: margin 1s, padding 1s;
              box-shadow: none;
              cursor: pointer;
              align-items: center;
              gap: 0.5em;
              &:hover  {
                padding: 0.55em;
                padding-left: 1em;
                padding-right: 1em;
                margin: 0em;
                margin-left: 0em;
                margin-right: 0em;
              }
              `}>
                Let's Talk
          </button>
          </a>
                </div>
            </div>
        </div>
    )
}