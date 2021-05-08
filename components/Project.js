import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';

export default function Project({ image, date, name, description, options=[] }) {
    const color = useContext(StyleSelect)
    const renderOptions = () => {
        return options.map(({ target, label, }, index) => (
          <a href={target} key={index}>
            <div className={css`
                padding: 0.5em;
                border-radius: 8px;
                background: ${ color.styled==="light" ? ('#fff') : ('#000')};
                margin-right: 0.5em;
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
                background: ${ color.styled==="light" ? ('#F4F4F4') : ('#222222')};
                border-radius: 8px;
            `}
        >
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
            <div className={css`
                padding: 1em;
            `}>
                <div className={css`
                    display: flex;
                    justify-content: space-between;
                `}>
                <div className={css`
                display: flex
                `}>
                    {renderOptions()}
                </div>
                <p
                    className={css`
                        color: #909090;
                        font-size: 0.8em;
                    `}
                >
                    {date}
                </p>
                </div>
                <h3 className={css`
                    font-weight: 400;
                    font-size: 1.8em;
                    line-height: 1em;
                    margin: 0;
                    color: ${ color.styled==="light" ? ('#39435B') : ('#fff')}
                `}>
                    {name}
                </h3>
                <p className={css`
                    color: ${ color.styled==="light" ? ('#909090') : ('#909090')}
                `}>
                    {description}
                </p>
                
            </div>
        </div>
    )
}