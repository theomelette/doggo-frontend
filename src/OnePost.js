import React from 'react'
import EditPostForm from './EditPostForm'
import './OnePost.css'

function OnePost({post, onDeletePost, handleUpdatedPost}){
    
  function handleDelete() {
    fetch(`http://localhost:3001/posts/${post.id}`, {
        method: "DELETE",
    })
  onDeletePost(post.id)
}


    return (
      <>
        <div className="post-card">
            <h2>{post.title}</h2>
            <p>{post.message}</p>
            <h6>{post.username}</h6>
          <button onClick={handleDelete}>Delete</button>
          <EditPostForm post={post} handleUpdatedPost={handleUpdatedPost}/>
        </div>
      </>
    )

}





export default OnePost