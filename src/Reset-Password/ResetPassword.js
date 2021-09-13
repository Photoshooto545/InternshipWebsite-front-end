import React from 'react';
import './ResetPassword.css'
import lock from "./images/lock.png"
const App =() =>{
  return(
  <div className="main">
    <div className="reset-password">
    
    <img src={lock} alt="" height="98px" width="98px"className="image" />
    <h2 className="Rp">Reset password</h2>
     <form>
      <input type="email" className="hi" name="useremail" id="userEmail" placeholder = "Email Address" /> <br />
      <input type="password" className="hi" name="userpassword" id="userPassword" placeholder="New Password" /> <br />
      <input type="password" className= "hi" name="confirmpassword" id="userPassword" placeholder="Confirm Password" /> <br />
      <div className="butt">
      <button className="but" type="submit">Back</button><button  className="but1" type="submit">Submit</button>
      </div>
     </form>
  </div>
 </div>
  );
}
export default App;