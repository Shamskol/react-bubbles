import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import bubbles from './imgs/bubbles.png';



function App() {
  return (
    <Router>
      <div className="App">
      <img src={bubbles} alt=" Playing with bubbles" style={{height: 300}} />
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
       <PrivateRoute exact path='/bubblepage' component={BubblePage}/> 
      </div>
    </Router>
  );
}

export default App;
