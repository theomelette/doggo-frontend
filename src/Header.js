import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'


function Header() {
    return (
    <div>
        <div className="header">
            <h1>Welcome to DogGO!</h1>
            <img src="https://i.pinimg.com/originals/30/cb/ad/30cbadfc1551e3dfbbd9d2a70b025528.png" alt="dog head logo"></img>
            <div className="header_buttons">
            < Link to="/pictures">Memories</Link> <br>
            </br>
            <br></br>
            < Link to="/friends">Man's Best Friend</Link> 
            </div>
        </div>
    </div>
    )
}

export default Header
