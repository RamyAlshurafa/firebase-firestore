/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import Card from './Card';

export default class Main extends Component {
  render() {
    const { dishes } = this.props;

    return (
      <div className="container-fluid w-100 bg-secondary d-flex flex-wrap">
        {dishes.map(dish => <Card dish={dish} />)}
      </div>
    );
  }
}
