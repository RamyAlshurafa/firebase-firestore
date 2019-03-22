import React, { Component } from 'react';
import Home from './Home';
import {
  initializeData,
} from './firebase/functions';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  componentDidMount() {
    initializeData();
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
