import { css } from '@emotion/css'
import WritingPrev from '../components/Writing'
import Footer from '../components/Footer'
import { getSortedWritingData } from '../lib/writing'
import SEO from '../components/Seo'
import ListLayout from '../components/ListLayout'
import BasicLayout from '../components/BasicLayout'
import UpButton from '../components/UpButton'
import SimpleBlock from '../components/simpleBlock'
import ContentLayout from '../components/ContentLayout'

export async function getStaticProps() {

  const allWritingData = getSortedWritingData()
    return {
      props: {
        allWritingData,
      }
    }
  }
  

  
export default function Writing({ allWritingData }){

  const renderWriting = () => {
    return(
      allWritingData.map(({id, title, kind, image}, index) => (
        <div key={index}>
        {  kind === "writing" ? (
          <SimpleBlock caption={title} target={'/writing/'+id} key={index} image={image}/>
        ): ( null)
        }
        </div>
      ))
    )
  }


    return(
      <>
        <SEO title="Product Design for a Complex World" description="Calvin Hutcheon is a product designer dedicated to delivering value to users by championing resilience, tolerance, and capacity for complexity." img="headshot.png"/>
       <div className={css`
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      gap: 1em;
                      width: 100vw;
                      padding: 1em;
                      padding-top: 5em;
                      width: 1000px;
                      margin: auto;
                      @media (max-width: 1000px) {
                        grid-template-columns: 1fr;
                        width: 100%;
                      }
                    `}>
              
              {renderWriting()}
              
              
        </div>
           
      </>
    
    )
}

Writing.getLayout = function getLayout(page) {
  return (
    <BasicLayout display="true">
        <ContentLayout>
          {page}
        </ContentLayout>
    </BasicLayout>
  )
}
