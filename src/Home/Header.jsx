/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';

export default class Header extends Component {
  state = {
    modalDisplay: false,
    newDishName: '',
    newDishRate: 0,
    imageFile: {},
  }

  fileInput = React.createRef();

  handleOpenModal = () => {
    this.setState({ modalDisplay: true });
  }

  handleCloseModal = () => {
    this.setState({ modalDisplay: false });
  }

  handleInputChange = (event) => {
    const key = event.target.name;
    const { value } = event.target;

    this.setState({
      [key]: value,
    });
  }

  handleUploadImage = (event) => {
    const image = event.target.files && event.target.files[0];
    this.setState({
      imageFile: image,
    });
  }

  handleSubmit =() => {

  }

  render() {
    const {
      newDishRate, newDishName, imageFile, modalDisplay,
    } = this.state;

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

          {/* Add Button */}
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.handleOpenModal}>Add New Dish</button>
        </nav>

        <div className="fade modal show " id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: modalDisplay ? 'block' : 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title" id="exampleModalLabel">Add New Dish</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleCloseModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="dish-name" className="col-form-label">Dish Name:</label>
                    <input type="text" className="form-control" id="dish-name" name="newDishName" value={newDishName} onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">Rate:</label>
                    <input type="number" className="form-control" id="dish-rate" name="newDishRate" value={newDishRate} onChange={this.handleInputChange} />
                  </div>
                  <div className="input-group">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" name="imageFile" onChange={this.handleUploadImage} />
                      <label className="custom-file-label" htmlFor="inputGroupFile01">{imageFile.name || 'Choose file'}</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer  border-0">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleCloseModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
