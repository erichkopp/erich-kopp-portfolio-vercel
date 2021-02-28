
import { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import { FaArchway, FaDraftingCompass, FaUserTie, FaEnvelopeOpenText } from "react-icons/fa";

import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./styles.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("/");
  
  let location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname)
  },[location])

  return (
    <div className="App">
      <nav className="Nav">
        {/* <h1>
          <Link to="/">EK</Link>
        </h1> */}
        <ul>
          <li>
            <Link to="/"
            style={currentPage === "/" ? {borderBottom: "5px solid"}  : {borderBottom: ""}}
            >
              <FaArchway />
            </Link>
          </li>
          <li>
            <Link 
              to="/about"
              style={currentPage === "/about" ? {borderBottom: "5px solid"}  : {borderBottom: ""}}
            >
              <FaUserTie />
            </Link>
            </li>
          <li>
            <Link
              to="/portfolio"
              style={currentPage === "/portfolio" ? {borderBottom: "5px solid"}  : {borderBottom: ""}}
            >
              <FaDraftingCompass />
            </Link>
            </li>
          <li>
            <Link
              to="/contact"
              style={currentPage === "/contact" ? {borderBottom: "5px solid"}  : {borderBottom: ""}}
            >
              <FaEnvelopeOpenText />
            </Link>
            </li>
        </ul>
      </nav>

        
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio  />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Hero />
        </Route>
      </Switch>
    </div>
  );
}
