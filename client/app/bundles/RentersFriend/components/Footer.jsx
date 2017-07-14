import PropTypes from 'prop-types';
import React from 'react';

export default class rentersFooter extends React.Component {

  render() {
    return (
      <footer className="renters-footer-container row">
        <div className="renters-logos-container">
          <p>Made by Code for San Jose</p>
          <div>
            <img src={this.props.twitter} alt="logo" className="social-media-logos" />
          </div>
        </div>
        <div className="renters-links-container">
          <div className="renters-link-column non-mobile">
            <a href="#">
              <p>Resources</p>
            </a>
            <a href="#">
              <p>Disclaimer</p>
            </a>
            <a href="#">
              <p>About</p>
            </a>
          </div>
          <div className="renters-link-column">
            <p>About</p>
            <p>Resources</p>
            <p>Disclaimer</p>
          </div>
        </div>
      </footer>
    )
  }
}
