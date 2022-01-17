import Project from '../components/Project'
import { getSortedPostsData } from '../lib/projects'
import { getSortedWritingData } from '../lib/writing'
import ListLayout from '../components/ListLayout'
import BasicLayout from '../components/BasicLayout'
import { css } from '@emotion/css';

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
            <div className={css`
              border: 1px solid #000;
              padding: 1em;
              border-radius: 8px;
              margin-bottom: 1em;
            `}>
                <h1 className={css`
                  font-weight: 700;
                  margin: 0;
                `}>{title}</h1>
                <a>Read More</a>
            <Project name={title} date={date} description={description} options={tags} id={'/writing/'+id} key={id}/>
            </div>
          ))
        )
      }
    return(
      <>
      <div className={css`
        margin-top: 96px;
      `}>
       </div>
      <ul className={css`
      list-style-type: none;
      `}>
        <div className="projgrid">
          {renderWriting()}
        </div>
      </ul>
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