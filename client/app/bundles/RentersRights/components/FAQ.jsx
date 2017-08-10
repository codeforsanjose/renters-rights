import React from 'react';
import RentersLayout from './RentersLayout'

export default class FAQ extends React.Component {
  render() {
    const { } = this.props;

    return (
      <RentersLayout>
        <br/>
        <div className="page-header"> 
          <h1>Frequently Asked Questions
          </h1>
        </div>
        <br/>
        <div className="home-links">
          <h4> Who is behind this app? </h4>
          <p>Renter's Rights Guide is a web application built by Code for San José developers and designers to inform renters about their rights and resources.</p>
          <h4> What is the Apartment Rental Dispute Mediation and Arbitration Ordinance (ARO)? </h4>
          <p>The City of San José’s Apartment Rental Dispute Mediation and Arbitration Ordinance (ARO) regulates the annual amount that rents can increase in apartments in San José with three or more units that were first rented before September 7, 1979. <a href="http://www.sanjoseca.gov/DocumentCenter/View/57816">Learn more</a> about the Rental Rights & Referral Program. 
          </p>
          <h4> What area does this app cover?</h4>
          <p>Currently this application covers the City of San José. In the future, we hope to expand to other cities in Santa Clara County. Interested in collaboration? Reach out and learn more on our <a href="https://github.com/codeforsanjose/renters-rights">Github repo</a>.</p> 
        </div>
      </RentersLayout>      
    )
  }
}
