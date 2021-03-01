import { css } from '@emotion/css'

export default function Project({ image, date, name, description, options=[] }) {
    const renderOptions = () => {
        return options.map(({ target, label, }, index) => (
          <a href={target} key={index}>
            {label}
          </a>
        ));
      };
    return(
        <div
            className={css`
                margin-top: 2em;
            `}
        >
            <div className={css`
                width: 100%;
                height: 500px;
                background: red;
                background-image: url(${image});
                background-position: center;
                background-size: cover;
                margin-right: 1em;
                border-radius: 8px;
              `}/>
            <div>
                <p
                    className={css`
                        color: #909090;
                        font-size: 0.8em;
                    `}
                >
                    {date}
                </p>
                <h3>
                    {name}
                </h3>
                <p>
                    {description}
                </p>
                {renderOptions()}
            </div>
        </div>
    )
}