import { getAllPostIds, getPostData } from '../../lib/projects'
import ContentLeft from '../../components/contentLeft'
import BlockContent from '../../components/BlockContent';
import SEO from '../../components/Seo';
import PostLayout from '../../components/PostLayout';
import SideQuote from '../../components/SideQuote';
import BasicLayout from '../../components/BasicLayout';
import { MDXProvider } from '@mdx-js/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const components = { ContentLeft, BlockContent, SideQuote }

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
  return (
    <>
      <SEO title={postData.title} img={postData.image} description={postData.description}/>
      <PostLayout title={postData.title} image={postData.image} date={postData.date} team={postData.team} features={postData.features} tags={postData.tags} bgcolor={postData.color} kind={postData.kind}>
          <MDXProvider components={components}>
              <div className="wrapper">
                  <MDXRemote {...source} />
              </div>
          </MDXProvider>
        </PostLayout>
    </> 
  )
}

Post.getLayout = function getLayout(page) {
  return (
    <BasicLayout kind="light">
      {page}
    </BasicLayout>
  )
}
