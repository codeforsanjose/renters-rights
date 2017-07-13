import PropTypes from 'prop-types';
import React from 'react';
import Footer from './Footer'
import RentersHeader from './RentersHeader'

export default class Renters extends React.Component {
  render() {
    return (
      <div className="renters-container">
        <div className="renters-dashboard">
          <RentersHeader />
          <div className="dashboard-container">
            <div className="dashboard-title">
              <h1> Renter's Friend</h1>
            </div>
            <div className="dashboard-text">
            </div>
            <div className="dashboard-button-container">
              <a href="#">
                <div className="dashboard-button">
                  <p>Learn More</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Footer logo={this.props.logo} twitter={this.props.twitter} />
      </div>
    )
  }
}

