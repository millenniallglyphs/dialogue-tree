import { css } from '@emotion/css'

export default function UpButton() {

    const scrollDown = () => {
        const e = document.getElementById("scroll-element");
        const h = window.innerHeight;
        e.scrollBy(0, h);
      }
    
      const scrollUp = () => {
        const e = document.getElementById("scroll-element");
        const h = window.innerHeight;
        e.scrollBy(0, -h);
      }

    return(
<div className={css`
          position: fixed;
          height: 100vh;
          top: 0;
          right: 0;
          display: flex;
          align-content: space-between;
          justify-content: space-between;
          flex-direction: column;
          padding-right: 1em;
          @media (max-width: 1000px) {
            display: none;
          }
        `}>
          <div/>
          <div className={css`
            display: flex;
            flex-direction: column;
            gap: 1em;
          `}>
            <button onClick={() => scrollUp()} className={css`
              padding: 1em 1em 0.75em 1em;
              border: none;
              border-radius: 8px;
              background: #fff;
              box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.14);
              cursor: pointer;
              transition: box-shadow 1s, background 1s;
              &:hover  {
                background: #f4f4f4;
                box-shadow: 0px 0px 14px 10px rgba(0, 0, 0, 0.24)
            }
            `}>
            <svg width="14" height="16" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97918 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM13.5 27L13.5 2L10.5 2L10.5 27L13.5 27Z" fill="#1F2034"/>
</svg>

            </button>
            <button onClick={() => scrollDown()} className={css`
              padding: 1em 1em 0.75em 1em;
              border: none;
              border-radius: 8px;
              background: #fff;
              box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.14);
              cursor: pointer;
              transition: box-shadow 1s, background 1s;
              &:hover  {
                background: #f4f4f4;
                box-shadow: 0px 0px 14px 10px rgba(0, 0, 0, 0.24)
            }
            `}>
            <svg width="14" height="14" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9393 26.9476C11.5251 27.5334 12.4749 27.5334 13.0607 26.9476L22.6066 17.4017C23.1924 16.8159 23.1924 15.8661 22.6066 15.2804C22.0208 14.6946 21.0711 14.6946 20.4853 15.2804L12 23.7656L3.51472 15.2804C2.92893 14.6946 1.97918 14.6946 1.3934 15.2804C0.807611 15.8661 0.807611 16.8159 1.3934 17.4017L10.9393 26.9476ZM10.5 0.886963L10.5 25.887L13.5 25.887L13.5 0.886963L10.5 0.886963Z" fill="#0F0F0F"/>
</svg>

            </button>
            </div>
          <div/>
        </div>
    )
}