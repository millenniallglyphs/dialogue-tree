import { getSortedPostsData } from '../lib/projects'
import SEO from '../components/Seo'
import ListLayout from '../components/ListLayout'
import BasicLayout from '../components/BasicLayout'
import React, { useEffect } from "react";
import Router from 'next/router';

export async function getStaticProps() {

  const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData,
      }
    }
  }

  export default function Home() {

    useEffect(() => {
    
      Router.push('/work')
  
    });


  
  
    return (
      <>
        <SEO title="Product Design for a Complex World" description="Calvin Hutcheon is a product designer dedicated to delivering value to users by championing resilience, tolerance, and capacity for complexity." img="headshot.png"/>
      
          
        </>
    )
  }
  
  Home.getLayout = function getLayout(page) {
    return (
      <BasicLayout kind="light">
        <ListLayout>
          {page}
        </ListLayout>
      </BasicLayout>
    )
  }
  