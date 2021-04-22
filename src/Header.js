import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'


function Header() {
    return (
    <div>
        <div className="header">
            <div className="header_buttons">
            < Link to="/pictures">Pictures</Link> <br>
            </br>
            < Link to="/friends">Friends</Link> 
            </div>
            <h1>Welcome to DogGO!</h1>
        </div>
    </div>
    )
}

export default Header
