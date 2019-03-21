/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import Card from './Card';

const images = [
  'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1492683962492-deef0ec456c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=738&q=80',
  'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
];
export default class Main extends Component {
  render() {
    return (
      <div className="container-fluid w-100 bg-secondary d-flex flex-wrap">
        {images.map(image => <Card image={image} />)}
      </div>
    );
  }
}
