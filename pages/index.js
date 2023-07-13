import { getSortedPostsData } from '../lib/projects'
import SEO from '../components/Seo'
import React from "react";
import BasicLayout from '../components/BasicLayout';
import ContentLayout from '../components/ContentLayout';

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
  
  console.log("bip");
  
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

  Home.getLayout = function getLayout(page) {
    return (
      <BasicLayout >
        <ContentLayout invisible='true'>
          {page}
        </ContentLayout>
      </BasicLayout>
    )
  }
  
  
  