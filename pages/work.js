
import React, { useEffect } from "react";
import Router from 'next/router'
import SEO from '../components/Seo'



  

  
export default function Work(){

  useEffect(() => {
    
    Router.push('/')

  });

    return(
      <SEO title="Product Design for a Complex World" description="Calvin Hutcheon is a product designer dedicated to delivering value to users by championing resilience, tolerance, and capacity for complexity." img="headshot.png"/>

    
    )
}