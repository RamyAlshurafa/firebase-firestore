import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="col-md-6 mx-auto my-2" style={{ height: '400px' }}>
        <div className="card h-100">
          <img className="card-img-top h-75" src={image} alt="Card cap" style={{ objectFit: 'cover' }} />
          <div className="card-body h-25">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example</p>
          </div>
        </div>
      </div>
    );
  }
}
