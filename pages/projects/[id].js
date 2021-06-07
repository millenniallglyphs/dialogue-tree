import { getAllPostIds, getPostData } from '../../lib/projects'
import { useEffect, useState, useContext } from 'react'
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import Hold from '../../components/Hold'
import { css } from '@emotion/css'
import StyleSelect from '../../lib/StyleSelect';
import ContentLeft from '../../components/contentLeft'

const components = { ContentLeft }

export async function getStaticPaths() {

    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id) 
    const mdxSource = await renderToString(postData.mdxPath, {components})
    return {
      props: {
        postData,
        source: mdxSource,
      }
    }
  }



export default function Post({ postData, source }) {

const content = hydrate(source, { components });

const color = useContext(StyleSelect)

    

    return (
        <Hold>
            <div className={css`
                margin-top: 78px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 1em;
            `}>
                <div className={css`
                    background-image: url(${'/' + postData.image});
                    background-position: center;
                    background-size: cover;
                    height: 400px;
                    grid-area: 1 / 1 / 2 / 4;
                `}
                />
                <div />
                <div className={css`
                    grid-area: 2 / 1 / 3 / 3;
                `}>
                    <h1>{postData.title}</h1>
                </div>
                <div className={css`
                    grid-area: 2 / 4 / 3 / 5;
                `}>
                    <p>{postData.description}</p>
                </div>
            </div> 
            <div className={css`
                margin-top: 78px;
            `}>
                {content}
            </div>  
        </Hold>   
    )
  }
