import Head from 'next/head'
import { useState, useEffect } from 'react'
import { css } from '@emotion/css'
import Project from '../components/Project'
import Hold from '../components/Hold'
import DialogueTree from '../components/DialogueTree'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import { getSortedPostsData } from '../lib/projects'
import { getSortedWritingData } from '../lib/writing'
import GridComp from '../components/GridComp'

export async function getStaticProps() {

  
  const allWritingData = getSortedWritingData()
  const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData,
        allWritingData
      }
    }
  }

export default function Writing({ allPostsData, allWritingData }){
    const renderWriting = () => {
        return(
          allWritingData.map(({title, id, date, description, tags}) => (
            <div>
                <h1>{title}</h1>
                <a>Read More</a>
            <Project name={title} date={date} description={description} options={tags} id={'/writing/'+id} key={id}/>
            </div>
          ))
        )
      }
    return(
        <GridComp>
            <div>
                
            </div>
            <div>
              <ul>

              {renderWriting()}
              </ul>
          </div>
        </GridComp>
    )
}