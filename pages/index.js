import { getSortedPostsData } from '../lib/projects'
import SEO from '../components/Seo'
import React from "react";
import BasicLayout from '../components/BasicLayout';

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
      </>
    )
  }

  Home.getLayout = function getLayout(page) {
    return (
      <BasicLayout >
          {page}
      </BasicLayout>
    )
  }
  
  
  