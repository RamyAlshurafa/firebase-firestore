import React, { Component } from 'react';
import Home from './Home';
import { addNewDish } from './firebase/functions';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    addNewDish();
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
