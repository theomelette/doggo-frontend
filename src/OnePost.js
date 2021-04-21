import React from 'react'

function OnePost({post}){
    return (
        <div>
            <h4>Username: {post.username}</h4>
            <h3>Title: {post.title}</h3>
            <p>Message: {post.message}</p>
          
        </div>
    )

}









export default OnePost