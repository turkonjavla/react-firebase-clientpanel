import React, { Component } from 'react';
import './App.css';

import AppNavbar from './components/layout/AppNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <h3>Hello world</h3>
      </div>
    );
  }
}

export default App;
