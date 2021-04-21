import React, { useState } from 'react'
import OnePost from './OnePost'

function PostsContainer({ posts }) {
   

    // const [deletePosts, setDeletePosts] = useState([])

    // function handleDeleteClick(id) {

    //     fetch(`http://localhost:3000/posts/${id}`, {
    //         method: "DELETE",
    //     })
    //     .then((r) => r.json())
    //     .then(() => {
    //         const updatedPosts = deletePosts.filter((p) => p.id !== id)
    //         setDeletePosts(updatedPosts)
    //     })
    // }

    const allPosts = posts.map((post) => {
        return (
            <div>
            <OnePost
                key={post.id}
                post={post}
                username={post.username}
                title={post.title}
                message={post.message}
                profilesrc={post.profilesrc}
                image={post.Postimage}
                // onDeleteClick={handleDeleteClick}
                />
                <button>Add New Post</button>
                <button >Delete Post</button>
            </div>
        )
    })
    
return (
    <h1>{allPosts}</h1>
)

}

export default PostsContainer

