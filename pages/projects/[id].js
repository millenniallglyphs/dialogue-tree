import { getAllPostIds, getPostData } from '../../lib/projects'
import { useEffect, useState, useContext } from 'react'
import Hold from '../../components/Hold'
import { css } from '@emotion/css'
import StyleSelect from '../../lib/StyleSelect';
import ContentLeft from '../../components/contentLeft'
import BlockContent from '../../components/BlockContent';
import FileBlock from '../../components/FileBlock';

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

const renderOptions = () => {
    return postData.tags.map(({ target, label, }, index) => (
      <a href={target} key={index}>
        <div className={css`
            padding: 0.5em;
            border-radius: 8px;
            background: ${ color.styled==="light" ? ('#FFF') : ('#000')};
            margin-right: 0.5em;
            color: ${ color.styled==="light" ? ('#909090') : ('#909090')};
            font-size: 0.8em;
        `}>
            {label}
        </div>
      </a>
    ));
  };

    

    return (
        <Hold>
            <div className={css`
                margin-top: 78px;
            `}>
                
            <h1 className={css`
                font-weight: 400;
                font-size: 3.4em;
                line-height: 1em;
                color: ${ color.styled==="light" ? ('#39435B') : ('#fff')};
            `}>{postData.title}</h1>
            <h3 className={css`
                font-weight: 400;
                font-size: 1.8em;
                line-height: 1em;
                color: ${ color.styled==="light" ? ('#39435B') : ('#fff')};
            `}>{postData.description}</h3>
            <div className={css`
                display: flex
                `}>
                {renderOptions()}
            </div>
            <p>
                Testing testing testing lorem ipsum
            </p>
            <div className={css`
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 1em;
                `}>
                    <FileBlock type="test" label='blah' target='blah' content="Epiphyte is a tradebot that uses lichen and moss as computational black boxes."/>
                    <FileBlock type="test" label='foo' target='bar' content="Epiphyte is a tradebot that uses lichen and moss as computational black boxes."/>
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
