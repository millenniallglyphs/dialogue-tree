import { css } from "@emotion/css";
import Link from 'next/link';
import FeatureWork from "./FeatureWork";

export default function GridWork({images}) {

    const renderCards = () => {
        return images.map((index, keys) => (
            <FeatureWork image={index.i} title={index.t} link={index.l} key={keys} featured={index.l}/>
        ));
      };

      return(
        <div className={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1em;
            max-width: 100%;
            padding: 1em;
            width: 100%;
            >:nth-child(1) {
                grid-column-start: 1;
                grid-column-end: 3;
            }
            @media (max-width: 600px) {
                display: flex;
                flex-direction: column;
            }
        `}>
            {renderCards()}
        </div>

      )

}