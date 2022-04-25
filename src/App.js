import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";

function App() {
    
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
                  </Routes>
              </div>
          </div>
      </Router>

  );
}

export default App;
