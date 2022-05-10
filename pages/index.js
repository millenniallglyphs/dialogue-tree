import { getSortedPostsData } from '../lib/projects'
import SEO from '../components/Seo'
import React, { useEffect } from "react";
import DialogueTree from '../components/DialogueTree'
import { css } from '@emotion/css'
import AnimantBackground from '../components/AnimantBackground';

export async function getStaticProps() {

  const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData,
      }
    }
  }

  export default function Home() {

   


  
  
    return (
      <>
        <SEO title="Product Design for a Complex World" description="Calvin Hutcheon is a product designer dedicated to delivering value to users by championing resilience, tolerance, and capacity for complexity." img="headshot.png"/>
        <div className={css`
        position: relative;
          z-index: 5;
        `}>
          <DialogueTree />
        </div>
        
          
      </>
    )
  }
  
  
  