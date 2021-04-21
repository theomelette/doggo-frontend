import React, { useEffect, useState } from 'react'
import Post from "./Post"

function Feed() {
    const [posts, setPosts] =useState([])

    useEffect(()=> {
        fetch("http://localhost:3001/posts")
            .then(r=>r.json())
            .then((posts) => {
                setPosts(posts)
            })
    }, [])

    const postComponents = posts.map((post) => {
        return( 
            <Post posts={posts}/>
        )
    })
    return (
        <div>{postComponents}</div>
    )
}

export default Feed
