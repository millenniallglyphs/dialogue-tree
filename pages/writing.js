import { css } from '@emotion/css'
import WritingPrev from '../components/Writing'
import Footer from '../components/Footer'
import { getSortedWritingData } from '../lib/writing'
import SEO from '../components/Seo'
import ListLayout from '../components/ListLayout'
import BasicLayout from '../components/BasicLayout'
import UpButton from '../components/UpButton'
import SimpleBlock from '../components/simpleBlock'

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
      allWritingData.map(({id, title, kind}, index) => (
        <div key={index}>
        {  kind === "writing" ? (
          <SimpleBlock caption={title} target={'/writing/'+id} key={index} />
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
                      width: 100%;
                      padding: 1em;
                      width: 1000px;
                      margin: auto;
                      @media (max-width: 1000px) {
                        grid-template-columns: 1fr;
                      }
                    `}>
              
              {renderWriting()}
              
              
        </div>
           
      </>
    
    )
}

Writing.getLayout = function getLayout(page) {
  return (
    <BasicLayout>
        {page}
    </BasicLayout>
  )
}
