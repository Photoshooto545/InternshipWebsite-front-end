import React from 'react'
import './Links.css'
import logo from '../Images/Logo.svg'
import profile from '../Images/Profile.svg'
import vector from '../Images/Vector.svg'
import exit from '../Images/Exit.svg'


const Links = () => {
    return (
        <div>
            <header className="head container-fluid">
                <div className="name"><img src={logo} alt="logo" /></div>
                <span className="icons">
                    <a href="/"><img className="spacing img-fluid" src={profile} alt="profile-pic" /></a>
                    <a href="/"><img className="spacing img-fluid" src={vector} alt="bell-icon" /></a>
                    <a href="/"><img className="spacing img-fluid" src={exit} alt="exit-icon" /></a>
                </span>
            </header>
            <ul className="rectangle">
                <li className="link"><a href="/" >My Account</a></li>
                <li className="link"><a href="/">Internship</a></li>
                <li className="link"><a href="/">Application</a></li>
                <li className="link"><a href="/">Document</a></li>
                <li className="link"><a href="/">Setting</a></li>
            </ul>
            <div className="offset"></div>
        </div>
    )
}
export default Links
