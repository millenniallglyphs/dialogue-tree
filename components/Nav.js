
import { css } from '@emotion/css';
import Contact from './Contact';
import Link from 'next/link';

export default function Nav() {

    return(
        <div className={css`
        width: 100%;
        background: rgba(255, 255, 255, 0.50);
        backdrop-filter: blur(8px);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        `}>
            <div className={css`
            width: 1000px;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: space-between;  
            align-items: center;
            `}>
                <div>
                    <Link href={"/"}>
                    <p>Calvin Hutcheon</p>
                    </Link>
                </div>
                <div className={css`
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                `}>
                    <Contact />
                </div>
            </div>
        </div>
    )
}