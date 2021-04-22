import React, { useState } from 'react'
import './NewPostForm.css'

function NewPostForm( { onAddPost }) {
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [username, setUsername] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3001/posts", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                message: message,
                username: username,
                user_id: 1
            })
        })
            .then(r => r.json())
            .then((newPost) => onAddPost(newPost))
    }


    return (
        <form onSubmit={handleSubmit} className="new-post-form">
            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
            <input className="form-submit" type="submit" value="New Post" />
        </form>
    )
}

export default NewPostForm
