import { getAllWritingIds, getWritingData } from '../../lib/writing'
import { css } from '@emotion/css'
import ContentLeft from '../../components/contentLeft'
import BlockContent from '../../components/BlockContent';
import SEO from '../../components/Seo';
import PostLayout from '../../components/PostLayout';
import BasicLayout from '../../components/BasicLayout';
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
    return (
      <>
      <SEO title={writingData.title} img={writingData.image} description={writingData.description}/>
          <PostLayout title={writingData.title} img={writingData.image} date={writingData.date} team={writingData.team} features={writingData.features} tags={writingData.tags}>
                <MDXProvider components={components}>
                    <div className="wrapper" className={css`
                     color: #39435B;
                    `}>
                        <MDXRemote {...source} />
                    </div>
                </MDXProvider>
          </PostLayout>
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
