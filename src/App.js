import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

import {useState, useEffect} from "react";

function App() {
    // initialize authToken state
    const [authToken, setAuthToken] = useState("");

    // on load, check for authToken in local storage.
   useEffect(() => {
       if (localStorage.getItem("authToken") != null || localStorage.getItem("authToken" !== "")){
           setAuthToken(localStorage.getItem("authToken"));
           console.log("We have an auth token.");
       } else {
           console.log("No auth token");
       }
   })

    return (
      <Router>
          <div className="App">
              <Navbar/>
              <div className="content">
                  <Routes>
                      <Route path={"/"} element={<Home />}/>
                      <Route path={"/home"} element={<Home />}/>
                      <Route path={"/login"} element={<Login />}/>
                      <Route path={"/about"} element={<About />}/>
                      <Route path={"/signup"} element={<Signup />}/>
                      <Route path={"/dashboard"} element={<Dashboard />}/>
                  </Routes>
              </div>
          </div>
      </Router>

  );
}

export default App;
