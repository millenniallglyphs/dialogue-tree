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

  export default function Home({ allPostsData }) {

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
      
        </>
    )
  }
  
  Home.getLayout = function getLayout(page) {
    return (
      <BasicLayout>
        <ListLayout>
          {page}
        </ListLayout>
      </BasicLayout>
    )
  }
  