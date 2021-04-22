import React from 'react'
import { Link } from "react-router-dom"



function Header() {
    return (
        <div>
            <div className="header_buttons">
            < Link to="/pictures">Pictures</Link> 
            < Link to="/friends">Friends</Link> 
            </div>
            <h1>Welcome to DogGO!</h1>
        </div>
    )
}

export default Header
