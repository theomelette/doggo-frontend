import React from 'react'

function OnePost({post}){
    return (
        <div>
            <h1>Username: {post.username}</h1>
            <h2>Title: {post.title}</h2>
            <p>Message: {post.message}</p>
          
        </div>
    )

}









export default OnePost