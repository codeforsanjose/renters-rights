import React from 'react';

export default class RentersFooter extends React.Component {
  render() {
    return (
      <footer
        className="renters-footer"
      >
        <br/>
        <br/>
        <div className="container">
          <p className="text-center"> <em>Disclaimer:</em> This app only covers San José, California. This app is not a substitute for legal advice. If you are seeking legal aid, please consult a lawyer immediately. Find a <a href="https://lawhelpca.org/issues/housing/landlord-and-tenant-issues">legal aid office</a>.</p>
          <p className="text-center">© 2017 Code for San José</p>
        </div>
      </footer>
    )
  }
}
