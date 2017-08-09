import React from 'react';

export default class RentersFooter extends React.Component {
  render() {
    return (
      <footer
        className="renters-Header"
      >
        <hr />
        <div className="header-server-logo">
        </div>
        <div className="header-button-container">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">Resource</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Disclaimer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}
