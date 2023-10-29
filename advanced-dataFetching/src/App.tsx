import {get} from "./util/http.ts";
import {type ReactNode, useEffect, useState} from "react";
import BlogPosts, {BlogPost} from "./components/BlogPosts.tsx";
import fetchingImg from '../public/data-fetching.png'
import ErrorMessage from "./components/ErrorMessage.tsx";

type RawDataBlogPost = {
    id: number
    userId: number
    title: string
    body: string
}

function App() {
    // useState by default infers the undefined type
    const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>()
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState<string>()

    async function fetchPosts() {
        // if the get function doesn't have the generic type we would have
        // to use the "as" to cast the result from "await get" to the desired type
        // const data = await get('https://jsonplaceholder.typicode.com/posts') as RawDataBlogPost[]

        setIsFetching(true)
        try {
            const data = await get<RawDataBlogPost[]>('https://jsonplaceholder.typicode.com/posts')

            const blogPosts: BlogPost[] = data.map(rawPost => ({
                id: rawPost.id,
                title: rawPost.title,
                text: rawPost.body
            }))

            setFetchedPosts(blogPosts)
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        }
        setIsFetching(false)
    }

    useEffect(() => {
        void fetchPosts()
    }, [])

    let content: ReactNode
    if (fetchedPosts) {
        content = <BlogPosts posts={fetchedPosts}/>
    }
    if (isFetching) {
        content = <p id="loading-fallback">Fetching posts...</p>
    }
    if (error) {
        content = <ErrorMessage text={error}/>
    }

    return <main>
        <img src={fetchingImg} alt="An abstract image depicting a data fetching process."/>
        {content}
    </main>
}

export default App;
