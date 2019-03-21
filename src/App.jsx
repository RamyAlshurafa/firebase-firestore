import React, { Component } from 'react';
import Home from './Home';
import {
  addNewDish, uploadImage, getImageURL, initializeData,
} from './firebase/functions';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  componentDidMount() {
    initializeData();
  }

  handleUploadFile = (e) => {

  }

  render() {
    return (
      <div className="App">
        <Home />
        <input type="file" onChange={this.handleUploadFile} />
      </div>
    );
  }
}

export default App;
