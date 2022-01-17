import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function SEO ({img, title, description, tags=[]}) {
    
    const [tagstring, SetTagstring] = useState("")

    {/*default tags are declared here*/}

    const tagsList = [
        {tag: "Calvin"},
        {tag: "Hutcheon"},
        {tag: "Calvin Hutcheon"},
        {tag: "Product Design"},
        {tag: "UX"},
        {tag: "UI"},
        {tag: "User Interface"},
        {tag: "User Experience"},
        {tag: "HCI"},
        {tag: "Human Computer Interaction"},
        {tag: "Design"},
        {tag: "Product"},
        {tag: "Open Source"},
        {tag: "Free Software"},
        {tag: "Appropriate Technology"},
        {tag: "Interface"},
        {tag: "Neighborhood"},
        {tag: "Neighborhood Scale Design"},
        {tag: "Complexity"},
        {tag: "Climate"},
        {tag: "Value"},
        {tag: "User"},
        {tag: "User Research"},
        {tag: "Research"},
        {tag: "Resilience"},
        {tag: "Resilient"},
        {tag: "Web3"},
        {tag: "Mobile"},
        {tag: "Desktop"},
        {tag: "Application"},
    ]

    {/*checks to see if custom tags are passed by a blog post, if not, will concatenate with the const tagList*/}
    
    const renderTags = () => {
        tags[0] ? (
        tags.map(({tag}) => {
            SetTagstring(tagstring => tagstring.concat(tag + ", "))
        }) 
        ) : (
        tagsList.map(({tag}) => {
            SetTagstring(tagstring => tagstring.concat(tag + ", "))
        }) 
        )
    }

    useEffect(() => {
        renderTags() 
    }, []);

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={description} />


            {/*Google SEO*/}
            <meta itemprop="name" content={title}/>
            <meta itemprop="description" content={description}/>
            <meta itemprop="image" content={"https://ecstatic-ramanujan-505715.netlify.app/" + img}/>

            {/*Twitter SEO*/}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image:src" content={"https://ecstatic-ramanujan-505715.netlify.app/" + img}/>

            {/*Open Graph SEO*/}
            <meta property="og:title" content={title}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content=""/>
            <meta property="og:image" content={"https://ecstatic-ramanujan-505715.netlify.app/" + img}/>
            <meta property="og:image:width" content=""/>
            <meta property="pg:image:height" content=""/>
            <meta property="og:description" content={description}/>
            <meta property="og:site_name" content=""/>
            <meta property="article:tag" content={tagstring}/>

        </Head>
    )
}
