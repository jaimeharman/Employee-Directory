import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";

function App() {
  return (
<div>
      <header>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </header>
    </div>
  );
}

export default App;