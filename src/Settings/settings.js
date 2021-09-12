import React from 'react';
import './settings.css';
import Toggle from './toggleSwitch';

function settings() {
    return (
        <div>
            <div className="card">
                <h1>Settings</h1>
                <div className="settings">
                    <div className="blogs">
                        <div>
                            <div className="heading">Push Notifications</div>
                            {/* <p>Notifications of newsletter and and other important notifications will be turned off </p> */}
                        </div>
                        <div>
                            <Toggle name="normal" />
                        </div>
                    </div>
                    <div className="cookies">
                        <div className="heading">Cookie Settings</div>
                        <div>
                            <label htmlFor="accept">Accept all cookies</label>
                            <input type="checkbox" id="accept"></input>
                            <span></span>
                        </div>
                    </div>
                    <div className="others">
                        <div>
                            <h4>Strictly Necessary</h4>
                            <p>These cookies are necessary for the website and can’t be deactivated.</p>
                        </div>
                        <div id="locked"></div>
                    </div>
                    <div className="others">
                        <div>
                            <h4>Management and Analytics</h4>
                            <p>These cookies can be set by our advertising partners through our website.</p>
                        </div>
                        <Toggle name="normal" />
                    </div>
                    <div className="others">
                        <div>
                            <h4 id="third">Preferences</h4>
                            <p>To individualize your content, we use tools that personalize your web experience.</p>
                        </div>
                        <Toggle name="normal" />
                    </div>
                    <div className="pass">
                        <div className="heading">Change Password</div>
                        <div>
                            <button>Change</button>
                        </div>
                    </div>
                    <div id="save">
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default settings