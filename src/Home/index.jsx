import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';

import { getAllDishes } from '../firebase/functions';

export default class Home extends Component {
  state = {
    dishes: [],
  }

  componentDidMount() {
    getAllDishes()
      .then((dishes) => {
        this.setState({ dishes });
      });
  }

  render() {
    const { dishes } = this.state;
    return (
      <>
        <Header />
        <Main dishes={dishes} />
      </>
    );
  }
}
