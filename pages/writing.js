import { css } from '@emotion/css'
import WritingPrev from '../components/Writing'
import Footer from '../components/Footer'
import { getSortedWritingData } from '../lib/writing'
import SEO from '../components/Seo'
import ListLayout from '../components/ListLayout'
import BasicLayout from '../components/BasicLayout'
import UpButton from '../components/UpButton'

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
      allWritingData.map(({id, title,  summary, kind}, index) => (
        <div key={index}>
        {  kind === "writing" ? (
          <WritingPrev name={title} target={'/writing/'+id} id={id} summary={summary} key={index}/>
        ): ( null)
        }
        </div>
      ))
    )
  }


    return(
      <>
        <SEO title="Product Design for a Complex World" description="Calvin Hutcheon is a product designer dedicated to delivering value to users by championing resilience, tolerance, and capacity for complexity." img="headshot.png"/>
        <div id="another-test">
            <ul className={css`
              list-style-type: none;
              margin: 0;
              padding: 0;
            `} id="testing">
            <div className="projgrid" id="scroll-element">
              
              {renderWriting()}
              <Footer />
         
            </div>
         
          </ul>
          </div>
          <UpButton />
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
