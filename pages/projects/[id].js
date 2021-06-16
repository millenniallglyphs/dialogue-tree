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
    const source = await getPostData(params.id) 
    const mdxSource = await serialize(source.mdxPath)
    console.log(source)
    return {
      props: {
        source: mdxSource,
      }
    }
  }



export default function Post({ source }) {



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
                    background-image: url(${'/' + source.image});
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
                    <h1>{source.title}</h1>
                </div>
                <div className={css`
                    grid-area: 2 / 4 / 3 / 5;
                `}>
                    <p>{source.description}</p>
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
