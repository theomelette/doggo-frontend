import React, { useEffect, useState } from 'react'
import PostContainer from './PostContainer'


function Feed() {
    const [posts, setPosts] =useState([])

    useEffect(()=> {
        fetch("http://localhost:3001/posts")
            .then(r=>r.json())
            .then((posts) => {
                setPosts(posts)
            })
    }, [])

 
    return (
        <div>
        <PostContainer posts={posts}/>
        </div>
    )
}

export default Feed
