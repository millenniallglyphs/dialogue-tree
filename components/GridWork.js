import { css } from "@emotion/css";
import Link from 'next/link';
import FeatureWork from "./FeatureWork";

export default function GridWork({images}) {


    const renderCards = () => {
        return images.map((index, keys) => (
            <FeatureWork index={images[index]}/>
        ));
      };

      return(
        <div className={css`
            display: grid;
            grid-template-columns: 1fr;
            max-width: 1000px;
            margin: auto;
            width: 100%;
            gap: 2em;
        `}>
            {renderCards()}
        </div>

      )

}