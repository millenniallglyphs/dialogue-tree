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
                background: ${ color.styled==="light" ? ('#F4F4F4') : ('#000')};
                color: ${ color.styled==="light" ? ('#909090') : ('#909090')};
                font-size: 0.8em;
            `}>
                {label}
            </div>
          </a>
        ));
      };
    return(
        <div
            className={css`
                background: ${ color.styled==="light" ? ('#FFF') : ('#222222')};
                border-radius: 8px;
                width: 100%;
            `}
        >
            { image ? (
            <div className={css`
                width: 100%;
                height: 380px;
                background: #F4F4F4;
                background-image: url(${image});
                background-position: center;
                background-size: cover;
                margin-right: 1em;
                border-radius: 8px;
              `}/>
              ) : (
                  null
              )}
            <div className={css`
                padding: 1em;
            `}>
            
                <Link href={id}>
                    <a>
                    <h3 className={css`
                        font-weight: 400;
                        font-size: 1.8em;
                        line-height: 1em;
                        margin: 0;
                        color: ${ color.styled==="light" ? ('#39435B') : ('#fff')}
                    `}>
                        {name}
                    </h3>
                    </a>
                </Link>
                <p className={css`
                    color: ${ color.styled==="light" ? ('#909090') : ('#909090')}
                `}>
                    {description}
                </p>
                
            </div>
        </div>
    )
}