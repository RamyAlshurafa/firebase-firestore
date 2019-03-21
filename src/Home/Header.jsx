import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-primary bg-primary">
          <h5 className="text-white">
            <span className="badge badge-primary"><i className="fas fa-utensils" /></span>
              Yummiewheels
          </h5>
          <div className="w-100" />
          <form className="form-inline w-100">
            <input className="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </nav>
      </>
    );
  }
}
