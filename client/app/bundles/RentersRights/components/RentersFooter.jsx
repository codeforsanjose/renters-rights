import { FormattedMessage } from 'react-intl';
import React from 'react';

export default class RentersFooter extends React.Component {
  render() {
    return (
      <footer
        className="renters-footer"
      >
        <br/>
        <br/>
        <div className="content-container">
          <p className="text-center">
            <FormattedMessage
              defaultMessage="{label} This app only covers San José, California. This app is not a substitute for legal advice. If you are seeking legal aid, please consult a lawyer immediately. Find a {link}."
              id="footer.disclaimer"
              values={{
                label: (
                  <em>
                    <FormattedMessage
                      defaultMessage="Disclaimer"
                      id="footer.label"
                    />
                    :
                  </em>
                ),
                link: (
                  <a href="https://lawhelpca.org/issues/housing/landlord-and-tenant-issues">
                    <FormattedMessage
                      defaultMessage="legal aid office"
                      id="footer.link"
                    />
                  </a>
                ),
              }}
            />
          </p>
          <p className="text-center">© 2017 Code for San José</p>
        </div>
      </footer>
    )
  }
}
