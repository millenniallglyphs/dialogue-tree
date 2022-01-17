import { css } from '@emotion/css'
import Project from '../components/Project'
import { getSortedPostsData } from '../lib/projects'
import SEO from '../components/Seo'
import ListLayout from '../components/ListLayout'
import BasicLayout from '../components/BasicLayout'

export async function getStaticProps() {


  const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData,
      }
    }
  }


export default function Work({ allPostsData }) {

  const renderProject = () => {
    return(
      allPostsData.map(({id, title, image, date, description, tags}) => (
        <Project image={image} name={title} date={date} description={description} options={tags} id={'/projects/'+id} key={id}/>
      ))
    )
  }


  return (
    <>
      <SEO title="Product Design for a Complex World" description="Calvin Hutcheon is a product designer dedicated to delivering value to users by championing resilience, tolerance, and capacity for complexity." img="meta.png"/>
    
        <div>
          <ul className={css`
            list-style-type: none;
            margin: 0;
            padding: 0;
          `}>
          <div className="projgrid">
            {renderProject()}
          </div>
       
        </ul>
        </div>
      </>
  )
}

Work.getLayout = function getLayout(page) {
  return (
    <BasicLayout>
      <ListLayout>
        {page}
      </ListLayout>
    </BasicLayout>
  )
}
