import React, { useState } from 'react'

function EditPostForm() {

const [editTitle, setEditTitle] = useState([])
const [editMessage, setEditMessage] = useState([])

    function handleTitleChange(event) {
        setEditTitle(event.target.value)
    }

    function handleMessageChange(event) {
        setEditMessage(event.target.value)
    }

    return (
        <form>
            <input type="text" onChange={handleTitleChange} value={title} />
            <textarea onChange={handleMessageChange} value={message}/>
            <button type="submit">Edit Post</button>
        </form>
       
    )
}

export default EditPostForm
