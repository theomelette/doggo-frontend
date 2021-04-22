import React, { useState } from 'react'

function EditPostForm({post, handleUpdatedPost}) {

const [editTitle, setEditTitle] = useState(post.title)
const [editMessage, setEditMessage] = useState(post.message)

    function handleTitleChange(event) {
        setEditTitle(event.target.value)
    }

    function handleMessageChange(event) {
        setEditMessage(event.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3001/posts/${post.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: editTitle,
                message: editMessage,
                username: post.username,
                user_id: 1
            })
        })
            .then(r => r.json())
            .then((newPost) => handleUpdatedPost(newPost))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleTitleChange} value={editTitle} />
            <textarea onChange={handleMessageChange} value={editMessage}/>
            <button type="submit">Edit Post</button>
        </form>
       
    )
}

export default EditPostForm
