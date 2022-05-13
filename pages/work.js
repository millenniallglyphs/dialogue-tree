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
import SimpleBlock from '../components/SimpleBlock'
import ContentLayout from '../components/ContentLayout'


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
          <SimpleBlock caption={title} image={image} target={'/projects/'+id} ind={index}/>
        ) : (
          null
        )}
        
        </div>
      ))
    )
  }


  
    return(
      <>
      <SEO title="Calvin Hutcheon" description="Calvin Hutcheon helps teams discover emergent possibility, leverage collaborative potential, and deliver enchanting products." img="headshot.jpg"/>
      <div className={css`
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      gap: 1em;
                      width: 100vw;
                      padding: 1em;
                      padding-top: 5em;
                      width: 1000px;
                      margin: auto;
                      @media (max-width: 1000px) {
                        grid-template-columns: 1fr;
                        width: 100%;
                      }
                    `}>
              {renderProject()}
      </div>  
      

      </>

    
    )
}

Work.getLayout = function getLayout(page) {
  return (
    <BasicLayout display="true">
        <ContentLayout>
          {page}
        </ContentLayout>
    </BasicLayout>
  )
}