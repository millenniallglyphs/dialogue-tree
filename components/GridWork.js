import { css } from "@emotion/css";
import Link from 'next/link';
import FeatureWork from "./FeatureWork";

export default function GridWork({images}) {

    const renderCards = () => {
        return images.map((index, keys) => (
            <FeatureWork image={index.i} title={index.t} link={index.l} key={keys}/>
        ));
      };

      return(
        <div className={css`
            display: grid;
            grid-template-columns: 1fr;
            max-width: 100%;
            margin: auto;
            width: 100%;
            gap: 2em;
        `}>
            {renderCards()}
        </div>

      )

}