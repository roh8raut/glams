import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "../src/components/navbar/navbar";
// import Footer from '../src/components/footer/footer';
import Landing from "./components/landing/landing";
import About from "./components/about/about";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/"><Landing /></Route>
        <Route exact path="/about"><About /></Route>
      </Router>
    </div>
  );
}

export default App;
