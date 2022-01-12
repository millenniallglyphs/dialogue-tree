import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const writingDirectory = path.join(process.cwd(), 'writing')

export function getSortedWritingData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(writingDirectory)
  const allWritingData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(writingDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allWritingData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllWritingIds() {
    const fileNames = fs.readdirSync(writingDirectory)
  
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
  

  export async function getWritingData(id) {
    const fullPath = path.join(writingDirectory, `${id}.mdx`)
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

  
  