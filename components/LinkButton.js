import { css } from "@emotion/css"
import Link from "next/link"

export default function LinkButton({children, target, external}) {
    return(
    <>
        <Link href={target}>
            <div className="linkbutton">
                <div className={css`
                    margin-bottom: 2px;
                    font-family: "twkLausanne";
                `}>
                    {children}
                </div>
                <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
        <path d="M11.1368 5.99072L6.56799 1.42186L7.77256 0.217285L14.3977 6.84248L7.77256 13.4676L6.56799 12.263L11.1368 7.69425H0.769531V5.99072H11.1368Z" fill="#1A3448"/>
        </svg>
                </div>
            </div>
        </Link>
    </>
    )
}