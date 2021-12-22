import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import Link from 'next/link';

export default function Project({ image, date, name, description, id, options=[] }) {
    const color = useContext(StyleSelect)
    const renderOptions = () => {
        return options.map(({ target, label, }, index) => (
          <a href={target} key={index}>
            <div className={css`
                padding: 0.5em;
                border-radius: 8px;
                color: ${ color.styled==="light" ? ('#fff') : ('#909090')};
                font-size: 0.8em;
                border: 1px solid #fff;
            `}>
                {label}
            </div>
          </a>
        ));
      };
    return(
        <>
        { image ? (
        <div className={css`
                border-radius: 8px;
                width: 100%;
                width: 100%;
                height: 380px;
                background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.64) 24.03%, rgba(0, 0, 0, 0) 48.29%), url(${image});
                background-position: center;
                background-size: cover;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 1em;
                &:hover {
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
            `}
        >
            <div className={css`
                display: flex;
                justify-content: space-between;
            `}>
                <div>
                <Link href={id}>
                    <a>
                    <h3 className={css`
                        font-weight: 400;
                        font-size: 1.8em;
                        line-height: 1em;
                        margin: 0;
                        color: ${ color.styled==="light" ? ('#fff') : ('#39435B')}
                    `}>
                        {name}
                    </h3>
                    </a>
                </Link>
                </div>
                <div>
                    <p>Date</p>
                </div>
                
                
            </div>
            <div className={css`
                display: flex;
                justify-content: space-between;
                color: #fff;
            `}>
                <div className={css`
                    display: flex;
                    gap: 0.5em;
                    flex-wrap: wrap;
                `}>
                    {renderOptions()}
                </div>
                <div>
                    <p> Read the case study</p>
                </div>
            </div>
        </div>
        ) : (
            null
        )}
        </>
    )
}