import { getAllWritingIds, getWritingData } from '../../lib/writing'
import { useEffect, useState, useContext } from 'react'
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import Hold from '../../components/Hold'
import { css } from '@emotion/css'
import StyleSelect from '../../lib/StyleSelect';

export async function getStaticPaths() {

    const paths = getAllWritingIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const writingData = await getWritingData(params.id) 
    const mdxSource = await renderToString(writingData.mdxPath)
    return {
      props: {
        writingData,
        source: mdxSource,
      }
    }
  }



export default function Writing({ writingData, source }) {

const content = hydrate(source);

const color = useContext(StyleSelect)

    

    return (
        <Hold>
            <div className={css`
                margin-top: 78px;
                background: ${ color.styled==="light" ? ('#fff') : ('#161616')};
                display: grid;
                grid-template-columns: 50% auto;
                grid-gap: 1em;
            `}>
                {content}
            </div>  
        </Hold>   
    )
  }
