import { getAllWritingIds, getWritingData } from '../../lib/writing'
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

    const paths = getAllWritingIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const writingData = await getWritingData(params.id) 
    const mdxSource = await serialize(writingData.mdxPath)
    return {
      props: {
        writingData,
        source: mdxSource,
      }
    }
  }



export default function Writing({ writingData, source }) {


const color = useContext(StyleSelect)

    

    return (
        <Hold>
            <div className={css`
                margin-top: 78px;
                color: ${ color.styled==="light" ? ('#39435B') : ('#fff')};
                display: grid;
                grid-gap: 1em;
                max-width: 600px;
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
