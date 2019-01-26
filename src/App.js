import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Task name="My first task" id="0"></Task> */}
        <TaskList></TaskList>
      </div>
    );
  }
}

export default App;
