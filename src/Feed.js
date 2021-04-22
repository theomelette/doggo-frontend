import React, { useEffect, useState } from 'react'
import PostContainer from './PostContainer'
import NewPostForm from './NewPostForm'
import Pictures from "./Pictures"
import Friends from "./Friends"
import { Switch, Route, Link } from "react-router-dom";
import "./Feed.css"



function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3001/posts")
            .then(r=>r.json())
            .then((posts) => {
                setPosts(posts)
            })
    }, [])

    function handleDeletePost(id) {
        const updatedPostsArray = posts.filter(posts => posts.id !== id)
        setPosts(updatedPostsArray)
        
    }
    function handleAddPost(newPost) {
        const updatedPostsArray = [ newPost,...posts]
        setPosts(updatedPostsArray)
    }

    function handleUpdatedPost(updatedNewPost) {
        const updatedPost = posts.map(post => {
            if (post.id === updatedNewPost.id ) return updatedNewPost
            
            return post
        })

        setPosts(updatedPost)
    }
    
    return (
       
        <div className="feed">
             <Switch>
           <Route exact path="/">
        <NewPostForm onAddPost={handleAddPost}/>
        <PostContainer key={posts.id} posts={posts} onDeletePost={handleDeletePost} handleUpdatedPost={handleUpdatedPost} onAddPost={handleAddPost}/>  </Route>
       

        <Route exact path="/pictures">
          <Pictures />
        </Route>

        <Route exact path="/friends">
          <Friends />
        </Route>
      </Switch>
           
        </div>
     
         
    )
}

export default Feed
