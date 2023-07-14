import { getSortedPostsData } from '../lib/projects'
import SEO from '../components/Seo'
import React from "react";
import BasicLayout from '../components/BasicLayout';
import ContentLayout from '../components/ContentLayout';
import { css } from '@emotion/css'
import Carousel from '../components/Carousel';

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
      i: "v2/trust/hero-trust.png"
    },
    {
        t: "Form Factors for Creativity",
        i: "v2/creative/render-02.png"
    },
    {
      t: "Design System Wins",
      i: "v2/win/hero.png"
    },
    {
      t: "Informed Decision Making",
      i: "v2/decision/render-01.png"
    
    },
    {
      t: "Reliability and Design Systems",
      i: "v2/reliability/hero.png"
    }
  ];

  Home.getLayout = function getLayout(page) {
    return (
      <div>
        <div className={css`
          height: 80vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-content: center;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1em;
          background-image: url(/v2/transform-hero.png);
          background-position: center;
          background-size: cover
        `}>
          <h1>Grounded in craft. <br /> Stepping into the future.</h1>
          <p>
          Calvin is a product designer grounded in craft to step into uncharted technical futures. 
          </p>
          <button className={css`
            padding: 10px 24px;
            border-radius: 50px;
            background: #000;
            color: white;
            border: none;
          `}>Get in Touch</button>
        </div>
        <div>
          <Carousel images={images}/>
        </div>
        <div className={css`
          margin-top: 20vh;
          margin-bottom: 20vh;
          display: flex;
          align-items: center
          background: #fff;
          width: 100%;
          justify-content: center;
        `}>
          <div className={css`
            display: grid;
            grid-columns-template: 1fr 1fr;
            max-width: 1000px;
            gap: 1em;
          `}>
            <div>

            </div>
            <div>
              <h3>
                My Story
              </h3>
              <p>
              Calvin is a product designer grounded in craft to step into uncharted technical futures. Calvin is a product designer grounded in craft to step into uncharted technical futures.
              </p>
              <p>

              </p>
            </div>
          </div>
        </div>
      <BasicLayout >
        <ContentLayout invisible='true'>
          {page}
        </ContentLayout>
      </BasicLayout>
      </div>
    )
  }
  
  
  