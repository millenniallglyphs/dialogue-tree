import { getSortedPostsData } from '../lib/projects'
import SEO from '../components/Seo'
import React from "react";
import BasicLayout from '../components/BasicLayout';
import ContentLayout from '../components/ContentLayout';
import { css } from '@emotion/css'

import DialogueTree from '../components/DialogueTree';
import NewHero from '../components/NewHero';
import ConciseWork from '../components/ConciseWork';
import AboutMe from '../components/AboutMe';
import GridWork from '../components/GridWork'


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
        <SEO title="Calvin Hutcheon Utopian Craftsman" description="Calvin Hutcheon is a craftsman and designer building experiences for an emergent internet." img="/seo.png"/>  
      </>
    )
  }

  const images = [
    {
      t: "Designing for Trust and Transparency",
      i: "v2/trust/hero-trust.png",
      l: "/projects/designing-for-trust-and-transpernecy",
      f: "true"
    },
    {
        t: "Form Factors for Creativity",
        i: "v2/creative/render-02.png",
        l: "/projects/form-factor-for-creativity"
    },
    {
      t: "Design System Wins",
      i: "v2/win/hero.png",
      l: "/projects/design-system-wins"
    },
    {
      t: "Informed Decision Making",
      i: "/v2/decision/hero.png",
      l: "/projects/informed-decision-making"
    
    },
    {
      t: "Reliability and Design Systems",
      i: "v2/reliability/hero.png",
      l: "/projects/reliability-and-design-systems"
    }
  ];

  Home.getLayout = function getLayout(page) {
    return (
      <div>
        
       <NewHero />
        <div>
          <GridWork images={images}/>
        </div>

        <AboutMe />

        <DialogueTree />
        
        
      <BasicLayout >
        <ContentLayout >
          {page}
        </ContentLayout>
      </BasicLayout>
      </div>
    )
  }
  
  
  