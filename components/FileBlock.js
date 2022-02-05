import { css } from '@emotion/css'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import Icon from './Icon';

export default function FileBlock({type, title, label, target}) {
    const color = useContext(StyleSelect)
    return(
       <div className={css`
        display: flex;
        gap: 0.5em;
        justify-content: flex-end;
        @media (max-width: 1000px) {
            justify-content: flex-start;
          }
       `}>
                <a href={target} className={css`
                    color: ${ color.styled==="light" ? ('#39435B') : ('#2C67FF')};
                    font-weight: 800;
                `}>
                     {title}
                </a>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.1908 15.2075H15.7408C16.1274 15.2075 16.4408 14.8941 16.4408 14.5075V1.53252C16.4408 1.14592 16.1274 0.83252 15.7408 0.83252H3.1408C2.7542 0.83252 2.4408 1.14592 2.4408 1.53252V14.3325" stroke="#39435B" strokeLinecap="round"/>
<path d="M7.94379 4.39977L8.60671 3.73686C9.85519 3.7921 11.8881 4.05727 13.0372 3.37226L13.3355 3.67057C12.7057 5.05163 12.7941 6.68682 12.9046 8.03474L12.2417 8.69765L11.6119 5.83608L2.69574 14.7523L1.94444 14.001L10.8606 5.08478L7.94379 4.39977Z" fill="#39435B"/>
</svg>
        </div>
 
    )
}