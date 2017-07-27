import PropTypes from 'prop-types';
import React from 'react';

export default class RentersHeader extends React.Component {
  render() {
    return (
      <header className="renters-Header">
        <div className="header-server-logo">
        </div>
        <div className="header-button-container">
				<a href="#">
            <div className="renters-button resources">
              <p>Resources</p>
            </div>
          </a>
				<a href="#">
            <div className="renters-button disclaimer">
              <p>Disclaimer</p>
            </div>
          </a>
          <a href="#">
            <div className="renters-button about">
              <p>About</p>
            </div>
          </a>
        </div>
      </header>
    )
  }
}
