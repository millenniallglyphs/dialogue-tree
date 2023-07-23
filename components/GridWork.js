import { css } from "@emotion/css";
import Link from 'next/link';

export default function GridWork({images}) {
    const renderCards = () => {
        return images.map((index, keys) => (
            <>
                <Link href={index.l}>
                    <div className={css`
                        display: flex;
                        flex-direction: column;
                        gap: 1em;
                    `}>
                        <div className={css`
                            overflow: hidden;
                            height: 20vw;
                            width: 30vw;
                        `}>
                        <div className={css`
                        height: 20vw;
                        width: 30vw;
                        background: ${index.i ? ( "url(" + index.i + ")") : ("red")};
                        background-size: cover;
                        background-position: center;
                        transform: scale(1, 1);
                        transition: transform 2s;
                        &:hover {
                            z-index: +1;
                            box-shadow: 48px 48px 48px 0px rgba(0, 0, 0, 0.33);
                            cursor: pointer;
                            transform: scale(1.1, 1.1);
                        }
                        `} key={index.t}>
                        
                        </div>
                        </div>
                        <h3 className={css`
                            margin: 0;
                            padding: 0;
                            color: #1A3448;
                        `}>
                            {index.t}
                        </h3>
                    </div>
                </Link>
                
            </>
        ));
      };

      return(
        <div className={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 1000px;
            margin: auto;
            width: 100%;
            gap: 2em;
        `}>
            {renderCards()}
        </div>

      )

}