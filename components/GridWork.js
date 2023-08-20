import { css } from "@emotion/css";
import Link from 'next/link';
import FeatureWork from "./FeatureWork";

export default function GridWork({images}) {

    const renderCards = () => {
        return images.map((index, keys) => (
            <FeatureWork image={index.i} title={index.t} link={index.l} key={keys} featured={index.l} work={index.w}/>
        ));
      };

      return(
        <>
        <div className={css`
        max-width: 750px;
        margin: auto;
        text-align: center;
        `}>
            <h3 className={css`
            color: #1A3448;
            `}>
            Work
            </h3>
        </div>
        <div className={css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
            gap: 1em;
            max-width: 1200px;
            margin: auto;
            padding: 1em;
            width: 100%;
            >:nth-child(1) {
                grid-column-start: 1;
                grid-column-end: 13;
            }
            >:nth-child(2) {
                grid-column-start: 1;
                grid-column-end: 7;
            }
            >:nth-child(3) {
                grid-column-start: 7;
                grid-column-end: 13;
            }
            >:nth-child(4) {
                grid-column-start: 1;
                grid-column-end: 9;
            }
            >:nth-child(5) {
                grid-column-start: 9;
                grid-column-end: 13;
            }
            @media (max-width: 600px) {
                display: flex;
                flex-direction: column;
            }
        `}>
            {renderCards()}
        </div>
        </>

      )

}