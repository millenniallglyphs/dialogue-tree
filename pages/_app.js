import '../styles/globals.css'
import Meta from '../components/Meta'
import { useState } from 'react';
import StyleSelect from '../lib/StyleSelect';
import { css } from '@emotion/css'


function MyApp({ Component, pageProps }) {


const [styled, setStyled] = useState("light");

function handleStyleChange(){
  if ( styled === "light" ) {
    setStyled("dark");
  } else if ( styled === "dark" ) {
    setStyled("light")
  }
};

  return (
    <>
    <StyleSelect.Provider value={{styled, setStyled}}>
      <div className={css`
        min-height: 100vh;
        background-color: ${styled==="light" ? ('#F4F4F4') : ('#000')};
      `}>
        <Meta passStyle={handleStyleChange} kind={styled}/>
        <Component {...pageProps} />
      </div>
    </StyleSelect.Provider>
    </>
  )
}

export default MyApp
