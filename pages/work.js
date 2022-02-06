import { css } from '@emotion/css'
import Project from '../components/Project'
import Writing from '../components/Writing'
import { getSortedPostsData } from '../lib/projects'
import SEO from '../components/Seo'
import ListLayout from '../components/ListLayout'
import BasicLayout from '../components/BasicLayout'
import { useState, useEffect } from 'react'

export async function getStaticProps() {

  const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData,
      }
    }
  }


export default function Work({ allPostsData }) {

  const pro = ["react-components", "modular-assembly", "community-driven-brand", "bitclaims"];

  const [count, setCount] = useState(0);

  const [line, setLine] = useState("start");




  


  const scrollDown = () => {
    const e = document.getElementById("scroll-element");
    const h = window.innerHeight;
    e.scrollBy(0, h);
    setCount(count+1);
  }

  const scrollUp = () => {
    const e = document.getElementById("scroll-element");
    const h = window.innerHeight;
    e.scrollBy(0, -h);
    setCount(count-1);
  }

  const renderProject = () => {
    return(
      allPostsData.map(({id, title, image, date, description, tags, color, kind, writingid, summary}, index) => (
        <div key={index}>
        { kind === "work" ? (
          <Project image={image} name={title} date={date} description={description} options={tags} target={'/projects/'+id} key={id} id={id} bgcolor={color}/>
        ) : (
          <Writing name={title} target={'/writing/'+writingid} id={writingid} summary={summary}/>
        )}
        
        </div>
      ))
    )
  }

  const renderButton = () => {
    return(
      <>
      <div className={css`
          position: fixed;
          display: block;
          top: 100px;
          right: 1em;
          z-index: 6;
          display: flex;
          flex-direction: column;
          gap: 1em;
          @media (max-width: 1000px) {
            display: none;
          }
        `}>
          <button onClick={() => scrollUp()} className={css`
            background: #ffffff;
            border: none;
            border-radius: 8px; 
            padding: 1em 1em 0.75em 1em;
          `}><svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97918 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM13.5 27L13.5 2L10.5 2L10.5 27L13.5 27Z" fill="#1F2034"/>
</svg>
</button>
          <button onClick={() => scrollDown()} className={css`
            background: #ffffff;
            border: none;
            border-radius: 8px; 
            padding: 0.75em 1em 1em 1em;`
          }><svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9393 26.9476C11.5251 27.5334 12.4749 27.5334 13.0607 26.9476L22.6066 17.4017C23.1924 16.8159 23.1924 15.8661 22.6066 15.2804C22.0208 14.6946 21.0711 14.6946 20.4853 15.2804L12 23.7656L3.51472 15.2804C2.92893 14.6946 1.97918 14.6946 1.3934 15.2804C0.807611 15.8661 0.807611 16.8159 1.3934 17.4017L10.9393 26.9476ZM10.5 0.886963L10.5 25.887L13.5 25.887L13.5 0.886963L10.5 0.886963Z" fill="#0F0F0F"/>
</svg></button>
        </div>
      </>
    )
  }


  return (
    <>
      <SEO title="Product Design for a Complex World" description="Calvin Hutcheon is a product designer dedicated to delivering value to users by championing resilience, tolerance, and capacity for complexity." img="headshot.png"/>
    
        <div id="another-test">
          <ul className={css`
            list-style-type: none;
            margin: 0;
            padding: 0;
          `} id="testing">
          <div className="projgrid" id="scroll-element">
            {renderProject()}
          </div>
       
        </ul>
        </div>
        {renderButton()}
      </>
  )
}

Work.getLayout = function getLayout(page) {
  return (
    <BasicLayout>
      <ListLayout>
        {page}
      </ListLayout>
    </BasicLayout>
  )
}
