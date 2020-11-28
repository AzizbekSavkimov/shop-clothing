import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
