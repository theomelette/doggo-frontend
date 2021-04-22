import React from 'react'
import EditPostForm from './EditPostForm'

function OnePost({post, onDeletePost, handleUpdatedPost}){
    
  function handleDelete() {
    fetch(`http://localhost:3001/posts/${post.id}`, {
        method: "DELETE",
    })
  onDeletePost(post.id)
}


    return (
        <div >
            <h4>Username: {post.username}</h4>
            <h3>Title: {post.title}</h3>
            <p>Message: {post.message}</p>
          <button onClick={handleDelete}>Delete</button>
          <EditPostForm post={post} handleUpdatedPost={handleUpdatedPost}/>
        </div>
    )

}





export default OnePost