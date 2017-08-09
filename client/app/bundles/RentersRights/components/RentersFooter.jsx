import React from 'react';

export default class RentersFooter extends React.Component {
  render() {
    return (
      <footer
        className="renters-footer"
      >
        <hr />

        <div className="container">
          <ul className="nav nav-pils nav-justified">
            <li className="nav-item">
              <a className="nav-link" href="#">Resources Cat #1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources Cat #2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources Cat #3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources Cat #4</a>
            </li>
          </ul>
          
          <p className="text-center"> <em>Disclaimer:</em> This app informs you about your basic rights. It is not a substitute for legal advice. </p>
        </div>
      </footer>
    )
  }
}
