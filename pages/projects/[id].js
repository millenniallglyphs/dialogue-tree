import { getAllPostIds, getPostData } from '../../lib/projects'
import { useEffect, useState, useContext } from 'react'
import { css } from '@emotion/css'
import StyleSelect from '../../lib/StyleSelect';
import ContentLeft from '../../components/contentLeft'
import BlockContent from '../../components/BlockContent';
import FileBlock from '../../components/FileBlock';
import Button from '../../components/Button';


import { MDXProvider } from '@mdx-js/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'


const components = { ContentLeft, BlockContent }

export async function getStaticPaths() {

    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id) 
    const mdxSource = await serialize(postData.mdxPath)
    return {
      props: {postData,
        source: mdxSource,
      }
    }
  }



export default function Post({ source, postData }) {

const color = useContext(StyleSelect)

const renderOptions = () => {
    return postData.tags.map(({ target, label, }, index) => (
      <a href={target} key={index}>
        <div className={css`
            padding: 0.5em;
            border-radius: 8px;
            color: ${ color.styled==="light" ? ('#39435B') : ('#909090')};
            font-size: 0.8em;
            border: 1px solid #39435B;
        `}>
            {label}
        </div>
      </a>
    ));
  };

const renderFeatures = () => {
  return postData.features.map(({title, label, target, type}, index) => (
    <FileBlock type="test" label={label} target={target} title={title} type={type} key={index}/>
  ));
}  

const renderTeam = () => {
  return postData.team.map(({name, target}, index) => (
    <a href={target} key={index}>{name}</a>
  ));
}

    

    return (
      <>
      <div className={css`
         display: grid;
         grid-template-columns: 475px 1fr;
         margin-top: 78px;
                background-image: linear-gradient(360deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0) 59.19%), linear-gradient(180deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0) 48.29%), url(${postData.image});
                background-size: cover;
                background-position: center;
        
         @media (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
          }
        `}>
          <div />
          <div className={css`
                
                padding: 1em;
                max-width: 750px;
                height: 400px;
                display: flex;
                flex-direction: column;
            justify-content: space-between;
                @media (max-width: 1000px) {
                  margin-top: 0px;
                }

            `}>
              <div>
                <p className={css`
                  color: #fff;
                `}>{postData.date}</p>
              </div>
            <div>
              <h1 className={css`
                  font-weight: 800;
                  font-size: 4em;
                  line-height: 1em;
                  color: ${ color.styled==="light" ? ('#fff') : ('#fff')};
              `}>{postData.title}</h1>
            </div>
        
           
            </div> 

        </div>
      <div className={css`
         display: grid;
         grid-template-columns: 475px auto 1fr;
         @media (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
          }
        `}>
        <div className={css`
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 1em;
                padding-left: 1em;
                padding-top: 1em;
                align-content: start;
                position: -webkit-sticky;
                position: sticky;
                top: 0px;
                padding-top: 86.5px;
                height: 100vh;
                text-align: right;
                align-content: space-between;
                @media (max-width: 1000px) {
                  height: auto;
                  padding-top: 65.5px;
                }
            `}>
              <div className={css`
                border-right: 1px solid #39435B;
                padding-right: 1em;
                margin-top: 1em;
              `}>
              <p className={css`
                margin-top: 0em;
              `}><b>My Roles</b></p>
                <div className={css`
                      display: flex;
                      flex-wrap: wrap;
                      gap: 0.5em;
                      color: #fff;
                      justify-content: flex-end;
                      `}>
                        { postData.tags ? (
                          renderOptions()
                        ) : (
                          null
                        )
                        }
                  </div>
            
            { postData.team ? (
              <>
              <p>Team</p>
              {renderTeam()}
            </>
            ) : (
              null
            )}
            <p><b>Deliverables</b></p>
            <div className={css`
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 1em;
                justify-content: flex-end;
                `}>
                  { postData.features ? (
                    renderFeatures()
                  ) : (
                    null
                  )
                  }
              </div>
            </div>
            <div>
              <div className={css`
              border-right: 1px solid #39435B;
              padding-right: 1em;
              margin-bottom: 1em;
              `}>
                <p><b>Share</b></p>
                <div>
              <Button step='0' >Copy URL</Button>
              </div>
              <div>
              <Button step='0' >Download </Button>
              </div>
              </div>
            </div>
        </div>
        
          <div className={css`
           max-width: 750px;
          `}>
            <div className={css`
                margin-top: 0px;
                padding: 1em;
            `}>
                <MDXProvider components={components}>
                    <div className="wrapper" className={css`
                     color: ${ color.styled==="light" ? ('#39435B') : ('#fff')};
                    `}>
                        <MDXRemote {...source} />
                    </div>
                </MDXProvider>
            </div>  
            </div>
            <div className={css`
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 1em;
                padding-left: 1em;
                padding-top: 1em;
                align-content: start;
                position: -webkit-sticky;
                position: sticky;
                top: 0px;
                padding-top: 86.5px;
                height: 100vh;
                @media (max-width: 1000px) {
                  height: auto;
                  padding-top: 65.5px;
                }
            `}>
              <div>
              <Button step='0' >Copy URL</Button>
              </div>
              <div>
              <Button step='0' >Download </Button>
              </div>
            </div>
      </div>
      </> 
    )
  }
