import React from 'react'

function OnePost({post}){
    
    
    // function handleDeleteClick({onDeleteClick,id}) {
    //     onDeleteClick(id)
    // }

    return (
        <div>
            <h4>Username: {post.username}</h4>
            <h3>Title: {post.title}</h3>
            <p>Message: {post.message}</p>
          <button >Delete</button>
        </div>
    )

}









export default OnePost