import { getSortedPostsData } from '../lib/projects'
import SEO from '../components/Seo'
import React from "react";
import BasicLayout from '../components/BasicLayout';
import ContentLayout from '../components/ContentLayout';
import { css } from '@emotion/css'
import Carousel from '../components/Carousel';
import ScrollAnimationComponent from '../components/ScrollAnimationComponent';
import SelfPic from '../components/SelfPic';
import Contact from '../components/Contact';
import GridWork from '../components/GridWork';
import HowWork from '../components/HowWork';
import WritingList from '../components/WritingList';
import DialogueTree from '../components/DialogueTree';
import Hero from '../components/Hero';


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
        <SEO title="Calvin Hutcheon Designs Products" description="My name&apos;s Calvin and I'm a product designer coming to you from beautiful Frog Creek Farm." img="/seo.png"/>  
      </>
    )
  }

  const images = [
    {
      t: "Designing for Trust and Transparency",
      i: "v2/trust/hero-trust.png",
      l: "/projects/designing-for-trust-and-transpernecy"
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
      i: "v2/decision/render-01.png",
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
        
       <Hero />
        <div>
          <GridWork images={images}/>
          {/*<GridWork images={images}/>*/}
        </div>
        <HowWork />
        <WritingList />
        <DialogueTree />
        
        
      <BasicLayout >
        <ContentLayout >
          {page}
        </ContentLayout>
      </BasicLayout>
      </div>
    )
  }
  
  
  