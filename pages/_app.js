import '../styles/globals.css'
import Meta from '../components/Meta'
import { useState } from 'react';
import StyleSelect from '../lib/StyleSelect';
import { css } from '@emotion/css'


function MyApp({ Component, pageProps }) {


const [styled, setStyled] = useState("light");

const getLayout = Component.getLayout || ((page) => page)

function handleStyleChange(){
  if ( styled === "light" ) {
    setStyled("dark");
  } else if ( styled === "dark" ) {
    setStyled("light")
  }
};

  return getLayout(
    <>
    <StyleSelect.Provider value={{styled, setStyled}}>
        <Component {...pageProps} />
    </StyleSelect.Provider>
    </>
  )
}

export default MyApp
