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
              <a className="nav-link" href="#">Housing Expense Assistance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Emergency Housing & Shelters</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tenant & Landlord Assistance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Homeless Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Residential Housing Options</a>
            </li>
          </ul>
          
          <p className="text-center"> <em>Disclaimer:</em> This app informs you about your basic rights and resources. It is not a substitute for legal advice. Find a <a href="https://lawhelpca.org/issues/housing/landlord-and-tenant-issues">legal aid office</a>.</p>
        </div>
      </footer>
    )
  }
}
