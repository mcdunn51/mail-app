import React, { Component } from 'react';
import LogInContainer from './components/loginContainer';
import Radium from 'radium';





class App extends Component {
  render() {
    return (
      <LogInContainer />
    );
  }
}

export default Radium (App);
