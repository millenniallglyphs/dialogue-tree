import { getAllPostIds, getPostData } from '../../lib/projects'
import { useEffect, useState, useContext } from 'react'
import Hold from '../../components/Hold'
import { css } from '@emotion/css'
import StyleSelect from '../../lib/StyleSelect';
import ContentLeft from '../../components/contentLeft'
import BlockContent from '../../components/BlockContent';

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

console.log(postData)

const color = useContext(StyleSelect)

    

    return (
        <Hold>
            <div className={css`
                margin-top: 78px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 4em;
            `}>
                <div className={css`
                    background-image: url(${'/' + postData.image});
                    background-position: center;
                    background-size: cover;
                    height: 400px;
                    grid-area: 1 / 2 / 2 / 3;
                `}
                />
                <div />
                <div className={css`
                    grid-area: 1 / 1 / 2 / 2;
                `}>
                    <h1 className={css`
                    font-weight: 400;
                    font-size: 2.4em;
                    line-height: 1em;
                    color: ${ color.styled==="light" ? ('#39435B') : ('#fff')};
                `}>{postData.title}</h1>
                <p>{postData.description}</p>
                </div>
            </div> 
            <div className={css`
                margin-top: 78px;
            `}>
                <MDXProvider components={components}>
                    <div className="wrapper">
                        <MDXRemote {...source} />
                    </div>
                </MDXProvider>
            </div>  
        </Hold>   
    )
  }
