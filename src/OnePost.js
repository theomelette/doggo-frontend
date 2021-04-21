import React from 'react'

function OnePost({post}){
    return (
        <div>
            <h1>{post.username}</h1>
            <h2>{post.title}</h2>
            <p>{post.message}</p>
          
        </div>
    )

}









export default OnePost