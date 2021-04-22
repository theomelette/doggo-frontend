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
            <br></br>
            < Link to="/friends">Friends</Link> 
            </div>
            <img src="https://i.pinimg.com/originals/30/cb/ad/30cbadfc1551e3dfbbd9d2a70b025528.png"></img>
            <h1>Welcome to DogGO!</h1>
        </div>
    </div>
    )
}

export default Header
