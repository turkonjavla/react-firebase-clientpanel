import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/clients/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <AppNavbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
