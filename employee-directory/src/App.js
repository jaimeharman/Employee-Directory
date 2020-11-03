import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";

function App() {
  return (
<div>
      <header className="AppHeader">
        <h1>Employee Directory</h1>
        </header>
        <body>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
        </body>
    </div>
  );
}

export default App;