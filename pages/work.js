import { css } from '@emotion/css'
import Project from '../components/Project'
import WritingPrev from '../components/Writing'
import Footer from '../components/Footer'
import { getSortedPostsData } from '../lib/projects'
import SEO from '../components/Seo'
import ListLayout from '../components/ListLayout'
import BasicLayout from '../components/BasicLayout'
import UpButton from '../components/UpButton'
import React, { useEffect } from "react";


export async function getStaticProps() {

  const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData,
      }
    }
  }
  
export default function Work({allPostsData}){

  const renderProject = () => {
    return(
      allPostsData.map(({id, title, image, date, description, tags, color, kind, writingid, summary}, index) => (
        <div key={index}>
        { kind === "work" ? (
          <Project image={image} name={title} date={date} description={description} options={tags} target={'/projects/'+id} key={id} id={id} bgcolor={color}/>
        ) : kind === "writing" ? (
          <WritingPrev name={title} target={'/writing/'+writingid} id={writingid} summary={summary}/>
        ) : (
          null
        )}
        
        </div>
      ))
    )
  }


  
    return(
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
              <Footer />
         
            </div>
         
          </ul>
          </div>
          <UpButton />
      

      </>

    
    )
}

Work.getLayout = function getLayout(page) {
  return (
    <BasicLayout kind="light">
      <ListLayout>
        {page}
      </ListLayout>
    </BasicLayout>
  )
}