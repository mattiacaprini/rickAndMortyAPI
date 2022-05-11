import React from "react";
import logo from '../../img/img_logo.png'
import './header.css'


function Header(){
    return(
        <div className='headerSite'>
            <div className='insideHeaderUp'>
            
            <div className='container_logo'>
                <img className="img_logo" src = {logo} alt='logo'/>
            </div>

            <div className='menu'>
                <li><a>docs</a></li>
                <li><a>about</a></li>
                <li className="support_us" ><a>support us</a></li>
            </div>
            </div>

            <div className='title' >
            <h1>The Rick and Morty API</h1>
            </div>
        </div>   
    )
}

export default Header