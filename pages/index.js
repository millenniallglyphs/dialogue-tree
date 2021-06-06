import Head from 'next/head'
import { useState, useEffect } from 'react'
import { css } from '@emotion/css'
import Project from '../components/Project'
import Hold from '../components/Hold'
import DialogueTree from '../components/DialogueTree'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import { getSortedPostsData } from '../lib/projects'
import { getSortedWritingData } from '../lib/writing'

export async function getStaticProps() {

  
  const allWritingData = getSortedWritingData()
  const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData,
        allWritingData
      }
    }
  }


export default function Home({ allPostsData, allWritingData }) {

  const renderProject = () => {
    return(
      allPostsData.map(({id, title, image, date, description, tags}) => (
        <Project image={image} name={title} date={date} description={description} options={tags} id={'/projects/'+id} key={id}/>
      ))
    )
  }

  const renderWriting = () => {
    return(
      allWritingData.map(({title, id, date, description, tags}) => (
        <Project name={title} date={date} description={description} options={tags} id={'/writing/'+id} key={id}/>
      ))
    )
  }

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
      background: ${ color.styled==="light" ? ('#fff') : ('#161616')};
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
          {renderProject()}
        </div>
      ) : (
        <>
          <p>writing</p>
          {renderWriting()}
        </>
      )

      }
      </Hold>
      
    </div>
  )
}
