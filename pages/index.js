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


export async function getStaticProps() {

  const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData,
      }
    }
  }

  export default function Home() {

    let p1 = new Promise((resolve, reject) => {
      resolve("foo");
  });
  let p2 = new Promise((resolve, reject) => {
      reject("bar");
  });

  
  p1.then(val => {
      console.log(val);
      return p2;
    })
    .then(val => {
      console.log("baz");
    })
    .catch(err => {
      console.log(err);
    });
  
  console.log("bop");

  

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
        <div className={css`
          height: 70vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-content: center;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1em;
          background-position: center;
          background-size: cover;
          @media (max-width: 1000px) {
            padding: 0px 1em;
          }
        `}>
          <h1>A <span className='callout'>craftsman</span> & <span className='callout'>designer</span> building <br /> experiences for an <span className='callout'>emergent internet</span>. </h1>
          <div className={css`
            display: flex;
            gap: 1em;
          `}>
            <a href="https://calendly.com/hello-calvin/30min" target="_blank">
          <button className={css`
              padding: 0.5em;
              padding-left: 1em;
              padding-right: 1em;
              margin: 0.25em;
              margin-left: 1em;
              margin-right: 1em;
              color: #f8f8f8;
              background: #1A3448;;
              border-radius: 0.5em 0.5em 0.5em 0.5em;
              border: none;
              outline: none;
              display: flex;
              font-size: 1em;
              animation-fill-mode: backwards;
              font-weight: 400;
              transition: margin 1s, padding 1s;
              box-shadow: none;
              cursor: pointer;
              align-items: center;
              gap: 0.5em;
              &:hover  {
                padding: 0.75em;
                padding-left: 2em;
                padding-right: 2em;
                margin: 0em;
                margin-left: 0em;
                margin-right: 0em;
              }
              `}>
                Let's Talk
          </button>
          </a>
          </div>
        </div>
       
        <div>
          <Carousel images={images}/>
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
  
  
  