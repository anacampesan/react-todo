import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Dashboard from './containers/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Task name="My first task" id="0"></Task> */}
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App;
