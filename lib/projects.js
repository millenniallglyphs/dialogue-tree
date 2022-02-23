import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const postsDirectory = path.join(process.cwd(), 'projects')
const writingDirectory = path.join(process.cwd(), 'writing')

export function getSortedPostsData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })

  const writingNames = fs.readdirSync(writingDirectory)
  const allWritingData = writingNames.map(writingName => {
    // Remove ".md" from file name to get id
    const writingid = writingName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const writingPath = path.join(writingDirectory, writingName)
    const writingContents = fs.readFileSync(writingPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const writingResult = matter(writingContents)

    // Combine the data with the id
    return {
      writingid,
      ...writingResult.data
    }
  })

  // const combinedAll = allPostsData.concat(allWritingData)
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.mdx$/, '')
        }
      }
    })
  }
  

  export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    
    

    const mdxPath = matterResult.content
 

    // console.log(MDXContent)
  
    // Combine the data with the id and contentHtml
    return {
      id,
      ...matterResult.data,
      mdxPath
    }
  }

  
  