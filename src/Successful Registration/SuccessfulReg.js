import React from 'react'
import './successfulReg.css';
import logo from './logo.png';
import photo from './Group (1).png';
import check from './Group 930.png';

function SuccessfulRegistraion() {
    return (
        <div>
            <div className="container">
                <div className="logo">
                    <img src={logo} id="logo" alt="" />
                    <div>
                        <span id="name">Photoshooto</span>
                        <span id="line">"Your Memories, Our Promise"</span>
                    </div>
                </div>
                <div className="content">
                    <img src={photo} id="photo" alt="" />
                    <div className="card">
                        <img src={check} id="check" alt="" />
                        <div>
                            <h1>Successful Registration</h1>
                        </div>
                        <div>
                            <p>Your registration has been successful.</p>
                            <p>You can now log in.</p>
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessfulRegistraion
