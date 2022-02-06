import Project from '../components/Project'
import { getSortedPostsData } from '../lib/projects'

import ListLayout from '../components/ListLayout'
import BasicLayout from '../components/BasicLayout'
import { css } from '@emotion/css';
import SEO from '../components/Seo'

export async function getStaticProps() {

  

  const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData,

      }
    }
  }

export default function Writing({ allPostsData }){


    const renderWriting = () => {
        return(
          allPostsData.map(({title, id, date, description, tags}, index) => (
            <li key={index}>
            <div  className={css`
              padding: 1em;
              border-radius: 8px;
              margin-bottom: 1em;
              background: #fff;
              margin-right: 1em;
              width: 100%;
                height: auto;
                scroll-snap-align: start;
              @media (max-width: 1000px) {
                height: 60vh;
                width: 91vw;
                padding: 74px 0em 1em 1em;
              }
            `}>
                <h1 className={css`
                  font-weight: 700;
                  margin: 0;
                `}>{title}</h1>
                <a>Read More</a>
            </div>
            </li>
          ))
        )
      }
    return(
      <>
      <SEO title="Product Design for a Complex World" description="Calvin Hutcheon is a product designer dedicated to delivering value to users by championing resilience, tolerance, and capacity for complexity." img="headshot.png"/>

      <div className={css`
        margin-top: 96px;
        @media (max-width: 1000px) {
          margin-top: 60px;
        }

      `}>
      <ul className={css`
        list-style-type: none;
        margin: 0;
        padding: 0;
      `}>
        <div className="projgrid">
          { /*renderWriting()*/}
        </div>
      </ul>
      </div>
      </>
    )
}

Writing.getLayout = function getLayout(page) {
  return (
    <BasicLayout>
      <ListLayout>
        {page}
      </ListLayout>
    </BasicLayout>
  )
}