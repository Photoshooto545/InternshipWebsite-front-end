import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./Pages/Home/HomePage";
import ProgramsPage from "./Pages/Programs/ProgramsPage";
import AboutPage from "./Pages/About/AboutPage";
import ContactPage from "./Pages/Contact/ContactPage";
import LoginPage from "./Pages/Login/LoginPage";
import SignupPage from "./Pages/SignUp/SignupPage";
import NotfoundPage from "./Pages/NotfoundPage/NotfoundPage";
function App() {
  return (
    <Router>
      <NavBar />
       <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/programs" component={ProgramsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route component={NotfoundPage} />
       </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
