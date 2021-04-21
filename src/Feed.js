import React, { useEffect, useState } from 'react'
import PostContainer from './PostContainer'
import NewPostForm from './NewPostForm'


function Feed() {
    const [posts, setPosts] =useState([])

    useEffect(()=> {
        fetch("http://localhost:3001/posts")
            .then(r=>r.json())
            .then((posts) => {
                setPosts(posts)
            })
    }, [])

    function handleAddPost(newPost) {
        const updatedPostsArray = [...posts, newPost]
        setPosts(updatedPostsArray)
    }
 
    return (
        <div>
        <PostContainer posts={posts} />
        <NewPostForm posts={posts} onAddPost={handleAddPost}/>
        </div>
    )
}

export default Feed
