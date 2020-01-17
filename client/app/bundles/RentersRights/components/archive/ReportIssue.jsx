import React from 'react';
import RentersLayout from '../RentersLayout'

export default class ReportIssue extends React.Component {

 /*  render() {
    const { locale } = this.props;

    <Renters Layout locale={locale}>
  */
  render() {

  const {} = this.props;

  return (
      <RentersLayout>
        <div className="content-container language-paragraph">
          <div className="page-header">
            <h1>Are you a renter in San José, California with issues with your rental?</h1> 
          </div>
          <p>Contact the City of San José Rental Rights and Referrals Program via <a href="mailto:rrrp@sanjoseca.gov">email</a> or call <a href="tel:+4089754480">(408)975-4480</a>.</p>
        </div>
      </RentersLayout>
    )
  }
}
