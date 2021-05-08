import Head from 'next/head'
import { useState, useEffect } from 'react'
import { css } from '@emotion/css'
import Project from '../components/Project'
import Hold from '../components/Hold'
import DialogueTree from '../components/DialogueTree'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';


export default function Home() {

  const color = useContext(StyleSelect)

  const beep = [
    {label:"Brand", target:"test"},
    {label:"Development", target:"test"}
  ]

  const testStyle = {
    width: '100%',
    textAlign: 'right',
  }

  const qSpan = {
    padding: '0.5em',
    borderRadius: '0.5em',
    color: '#204EF0',
    margin: '1em',
    animationName: 'appear',
    animationDuration: '0.5s',
    fontWeight: '400'
  }

  const noMarg = {
    width: '900px',
    padding: '0px',
    margin: 'auto'
  }

  const target = {
    display: 'flex'
  }

  const small = {
    fontSize: '0.8em',
    marginTop: '0',
    marginBottom: '0',
    color: '#909090'
  }


  const [proj, setProj] = useState(true)


  
  const renderProjToggle = () => {
    return(
      <Hold>
        <div style={target}>
          <div className={css`
          padding-bottom: 1em;
          border-bottom: ${ proj===true ? ('1px solid #909090') : ('none')};
          margin-right: 2em;
          cursor: pointer;
          `}>
            <p onClick={() => {
              setProj(true);
            }}
            style={small}>Projects</p>
          </div>
          <div className={css`
          padding-bottom: 1em;
          border-bottom: ${ proj===false ? ('1px solid #909090') : ('none')};
          margin-right: 2em;
          cursor: pointer;
          `}>
            <p onClick={() => {
              setProj(false);
            }}
            style={small}>Writing</p>
          </div>
        </div>
      </Hold>
    )
  }



  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DialogueTree/>
      <div className={css`
      position: -webkit-sticky;
      position: sticky;
      top: 78px;
      background: ${ color.styled==="light" ? ('#fff') : ('#000')};
      width: 100%;
      z-index: 5;
      padding-top: 1em;
      padding-bottom: 1em;
      `}>
        {renderProjToggle()}
      </div>
      <Hold>
      { proj ? (
        <div className={css`
          display: grid;
          grid-template-columns: 50% auto;
          grid-gap: 1em;
        `}>
          <Project image="brand-process-hero.jpg" name="A Community Driven Brand" date="Jun 12" description="lorem Ipsum" options={beep} />
          <Project image="moss.png" name="An Ecological Tradebot" date="Jun 12" description="lorem Ipsum" options={beep}/>
          <Project image="rm-panel.png" name="A Modular Assembly Pannel" date="Jun 12" description="lorem Ipsum" options={beep}/>
          <Project image="newdim_abacus_00.jpg" name="Responding to Climate" date="Jun 12" description="lorem Ipsum" options={beep}/>
          <Project image="components.png" name="Simple React Components" date="Jun 12" description="lorem Ipsum" options={beep}/>
          <Project image="mock.png" name="An app!" date="Jun 12" description="lorem Ipsum" options={beep}/>
        </div>
      ) : (
        <p>writing</p>
      )

      }
      </Hold>
      
    </div>
  )
}
