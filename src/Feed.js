import React, { useEffect, useState } from 'react'
import PostContainer from './PostContainer'
import NewPostForm from './NewPostForm'


function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3001/posts")
            .then(r=>r.json())
            .then((posts) => {
                setPosts(posts)
            })
    }, [])

    function handleDeletePost(id) {
        const updatedPostsArray = posts.filter(posts => posts.id !== id)
        setPosts(updatedPostsArray)
        
    }
    function handleAddPost(newPost) {
        const updatedPostsArray = [...posts, newPost]
        setPosts(updatedPostsArray)
    }

    function handleUpdatedPost(updatedNewPost) {
        const updatedPost = posts.map(post => {
            if (post.id === updatedNewPost.id ) return updatedNewPost
            
            return post
        })

        setPosts(updatedPost)
    }
    
    return (
       <> 
        <div>
        <PostContainer key={posts.id} posts={posts} onDeletePost={handleDeletePost} handleUpdatedPost={handleUpdatedPost} onAddPost={handleAddPost}/>
        </div>
        <div><NewPostForm onAddPost={handleAddPost}/></div>
        </>  
    )
}

export default Feed
