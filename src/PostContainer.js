import React from 'react'
import OnePost from './OnePost'

function PostsContainer({ posts }) {
   

    const allPosts = posts.map((post) => {
        return (
            <OnePost
                key={post.id}
                post={post}
                username={post.username}
                title={post.title}
                message={post.message}
                profilesrc={post.profilesrc}
                image={post.Postimage}
                />
        )
    })
    
return (
    <h1>{allPosts}</h1>
)

}

export default PostsContainer

