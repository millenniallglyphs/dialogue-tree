import { css } from '@emotion/css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from 'react';



export default function Contact() {

    const [step, setStep] = useState(false);

    const Roll = () => {
        setStep(true);
    }

return (
    <CopyToClipboard text="hello@calvin.ooo">
    <button className={css`
    padding: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
    color: #1A3448;
    background: #F8F8F8;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    border: none;
    outline: none;
    display: flex;
    font-size: 0.8em;
    font-family: monospace;
    animation-fill-mode: backwards;
    font-weight: 400;
    transition: background 1s;
    box-shadow: none;
    cursor: pointer;
    align-items: center;
    gap: 0.5em;
    &:hover  {
      background: #ECEAEA;
    }
    `}
    onClick={Roll}
    >
        <div>
         hello@calvin.ooo
        </div>
        <div className={css`
            overflow: hidden;
            height: 16px;
            width: 16px;
        `}>
        <div className={css`
            margin-top: ${ !step ? ("0px") : ("-19.5px")};
            transition: margin 1.5s;
        `}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4.66653 4.00004V2.00004C4.66653 1.63185 4.96501 1.33337 5.3332 1.33337H13.3332C13.7014 1.33337 13.9999 1.63185 13.9999 2.00004V11.3334C13.9999 11.7016 13.7014 12 13.3332 12H11.3332V13.9994C11.3332 14.368 11.0333 14.6667 10.662 14.6667H2.67111C2.30039 14.6667 2 14.3703 2 13.9994L2.00173 4.66729C2.0018 4.29878 2.30176 4.00004 2.67295 4.00004H4.66653ZM3.33495 5.33337L3.33346 13.3334H9.99987V5.33337H3.33495ZM5.99987 4.00004H11.3332V10.6667H12.6665V2.66671H5.99987V4.00004Z" fill="#1A3448"/>
            </svg>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2.66667 2H13.3333C13.7015 2 14 2.29848 14 2.66667V13.3333C14 13.7015 13.7015 14 13.3333 14H2.66667C2.29848 14 2 13.7015 2 13.3333V2.66667C2 2.29848 2.29848 2 2.66667 2ZM3.33333 3.33333V12.6667H12.6667V3.33333H3.33333ZM7.33507 10.6667L4.50666 7.83827L5.44947 6.8954L7.33507 8.78107L11.1063 5.00981L12.0491 5.95262L7.33507 10.6667Z" fill="#1A3448"/>
            </svg>
        </div>
        </div>
    </button>
    </CopyToClipboard>
)

}