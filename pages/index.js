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
      i: "v2/trust/hero-alt.png",
      l: "/projects/designing-for-trust-and-transpernecy",
      f: "true",
      w: "Webb Bridge"
    },
    {
      t: "Design System Wins",
      i: "v2/win/hero-alt.png",
      l: "/projects/design-system-wins",
      w: "XF Material Components"
    },
    {
      t: "Informed Decision Making",
      i: "/v2/decision/alt-hero.png",
      l: "/projects/informed-decision-making",
      w: "Webb Stats"
    
    },
    {
      t: "Form Factors for Creativity",
      i: "v2/creative/alt-hero.png",
      l: "/projects/form-factor-for-creativity",
      w: "XF Rule Maker"
  },
    {
      t: "Reliability and Design Systems",
      i: "v2/reliability/alt-hero.png",
      l: "/projects/reliability-and-design-systems",
      w: "Webb Design System"
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
  
  
  