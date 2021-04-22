
import './App.css';
import React, { useEffect, useState } from 'react';

import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {



  return (
    <div className="App" >
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />

          <Route path="*" component={NotFound} />

        </Switch>
      </Router>


    </div>
  );
}

export default App;
