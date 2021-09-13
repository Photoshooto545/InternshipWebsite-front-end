

import Cards from './components/cards';
import "./App.css"

import img1 from "./assets/images/approve.jpg"
import img2 from "./assets/images/mobile-phone.png"
import img3 from "./assets/images/document.png"
import img4 from "./assets/images/interview.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <h2 className="title">Internship</h2>
        <div className="container">

          <Cards step = "1" image ={img1} info = "Application Submission" />
          <div className="line1"></div>
          
          <Cards step = "2" image = {img2} info = "Documents Verified"/>
          <div className="line2"></div>

          <Cards step = "3" image = {img3} info = "Application Shortlisted"/>
          <div className="line3"></div>

          <Cards step = "4" image = {img4} info = "Interview Schedule"/>
     
          
        </div>
      
      </header>
    </div>
  );
}

export default App;
