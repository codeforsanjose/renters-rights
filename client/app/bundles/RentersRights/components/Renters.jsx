import PropTypes from 'prop-types';
import React from 'react';
import RentersFooter from './RentersFooter'

export default class Renters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {city: ""};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
 }

 handleInputChange(event) {
   this.setState({
     city: event.target.value
   });
 }

 handleClick(event){
  if (this.state.city.toUpperCase() != "SAN JOSE") {
      window.location.assign("not-applicable");
  } else {
      window.location.assign("renters-reasons-form");
  }

 }

  render() {
    return (
      <div className="renters-container">
        <div className="renters-dashboard">

          <div className="dashboard-container">
            <div className="dashboard-title">
              <h1>Renter's Rights</h1>
            </div>

            <div className="dashboard-text">
              <p> Get started by completing the form below </p>
              <form className="form-horizontal">
                <h3> What is your address?</h3>
                <div className="form-group">
                  <label for="streetAddress">Street Address:</label>
                  <input type="streetAddress" className="form-control"/>
                </div>
                <br/>
                <div className="form-group">
                  <label for="aptOrUnit">Apt/Unit:</label>
                  <input type="aptOrUnit" className="form-control"/>
                </div>
                <br/>
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-6">

                    <label for="city">City:</label>
                    <input
                      name="city"
                      type="text"
                      value={this.state.city}
                      onChange={this.handleInputChange}
                      className="form-control"/>

                    </div>
                    <div className="col-xs-3">

                      <label for="state">State:</label>
                        <input type="text" className="form-control"/>

                    </div>
                  </div>
                </div>
                <br/>
                <div className="col-xs-3">
                  <div className="form-group">
                  <label for="zip">Zip:</label>
                    <input type="text" className="form-control"/>
                  </div>
                </div>


                <button
                  className="btn btn-primary"
                  onClick={this.handleClick}
                  type="button"
                >
                  Get Started
                </button>
              </form>

            </div>

          </div>
          <RentersFooter />
        </div>
      </div>
    )
  }
}
