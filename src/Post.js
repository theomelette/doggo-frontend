import React from 'react'

function Post({ post}) {
    console.log(post)
    return (
        <div>
            <div>
                <Post
                key={post.id}
                username={post.username}
                title={post.title}
                message={post.message}
                profilesrc={post.profilesrc}
                image={post.Postimage}
                />
            </div>
        </div>
    )
}

export default Post

