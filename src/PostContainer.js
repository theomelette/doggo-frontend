import React from 'react'
import OnePost from './OnePost'

function PostsContainer({posts, onDeletePost }) {
 
    const allPosts = posts.map((post) => {
        return (
            <div>
            <OnePost
                post={post}
                key={post.id}
                username={post.username}
                title={post.title}
                message={post.message}
                profilesrc={post.profilesrc}
                image={post.Postimage}
                onDeletePost={onDeletePost}
                />
                <button>Add New Post</button>
            </div>
        )
    })
    
return (
    <h1>{allPosts}</h1>
)

}

export default PostsContainer

