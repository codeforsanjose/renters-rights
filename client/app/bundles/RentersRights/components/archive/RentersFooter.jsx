//import { FormattedMessage } from 'react-intl';
import React from 'react';

export default class RentersFooter extends React.Component {
  render() {
 /* comment out for locale set up. uncomment this when app is ready for translation
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
*/
    return (
      <footer
        className="renters-footer"
      >
        <div className="content-container">
          <p className="text-center">
            <small>
              Renter's Rights Guide only covers San José, California. This website is for informational purposes only and is not intended to be legal advice or a substitute for San José ordinances. If you are seeking legal aid, please consult a lawyer immediately. Find a <a href="https://lawhelpca.org">legal aid office</a>.
            </small>
          </p>
          <p className="text-center">
            <small>
              © <a href="http://www.codeforsanjose.com">Code for San José</a>
            </small>
          </p>
        </div>
      </footer>
    )
  }
}
