import { getAllPostIds, getPostData } from '../../lib/projects'
import { useEffect, useState, useContext } from 'react'
import Hold from '../../components/Hold'
import { css } from '@emotion/css'
import StyleSelect from '../../lib/StyleSelect';
import ContentLeft from '../../components/contentLeft'
import BlockContent from '../../components/BlockContent';
import FileBlock from '../../components/FileBlock';
import GridComp from '../../components/GridComp';

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
            background: ${ color.styled==="light" ? ('#FFF') : ('#000')};
            color: ${ color.styled==="light" ? ('#909090') : ('#909090')};
            font-size: 0.8em;
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
      <GridComp>
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
            `}>
              <p>My Roles</p>
          <div className={css`
                display: flex;
                flex-wrap: wrap;
                gap: 0.5em;
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
            <p>Deliverables</p>
            <div className={css`
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 1em;
                `}>
                  { postData.features ? (
                    renderFeatures()
                  ) : (
                    null
                  )
                  }
              </div>
        </div>
        
          <div className={css`
           max-width: 750px;
           padding: 1em;
          `}>
            <div className={css`
                margin-top: 78px;
            `}>
                
            <h1 className={css`
                font-weight: 800;
                font-size: 4em;
                line-height: 1em;
                color: ${ color.styled==="light" ? ('#000') : ('#fff')};
            `}>{postData.title}</h1>
        
           
            </div> 
            <div className={css`
                margin-top: 0px;
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
      </GridComp> 
    )
  }
