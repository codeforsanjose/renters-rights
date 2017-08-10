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
          <div className="container">
            <h4> Who is behind this app? </h4>
            <p>Renter's Rights Guide is an open source web application built by Code for San José developers and designers to inform renters about their rights and resources. To learn more about the project visit our <a href="https://github.com/codeforsanjose/renters-rights/">Github repo</a>.</p>

            <h4> When can a tenant be evicted? Can a tenant be evicted for no cause? </h4>
            <p>On May 9, 2017, the City Council adopted the <strong>Tenant Protection Ordinance</strong>.  Additionally, the City Council adopted an Urgency Ordinance making the new regulations effective immediately. The Tenant Protection Ordinance outlines landlord responsibilities and tenant rights regarding notices to terminate.  Under the Tenant Protection Ordinance, landlords of multifamily dwellings, guesthouses and unpermitted units will only be authorized to terminate tenancy under one of the 12 listed <strong>just causes </strong> (view flyer in <a href="http://www.sanjoseca.gov/DocumentCenter/View/69126">English</a>, <a href="http://www.sanjoseca.gov/DocumentCenter/View/69112">Spanish</a> and <a href="http://www.sanjoseca.gov/DocumentCenter/View/69113">Vietnamese</a>). </p>
            <p>To learn more about the <strong>Tenant Protection Ordinance</strong>:</p>
            <ul>
              <li><a href="http://www.sanjoseca.gov/DocumentCenter/View/70042">Tenant Protection Ordinance Fact Sheet</a></li>
              <li><a href="http://www.sanjoseca.gov/DocumentCenter/View/70490">Tenant Protection Ordinance Frequently Asked Questions</a></li>
            </ul>

            <h4> Is my apartment covered under rent control? How much can my rent be raised? What can I submit a petition for?</h4>
            <p>The City of San José’s <a href="http://www.sanjoseca.gov/index.aspx?nid=1355">Apartment Rental Dispute Mediation and Arbitration Ordinance (ARO)</a> regulates the annual amount that rents can increase in apartments in San José with three or more units that were first rented before September 7, 1979. </p>

            <h4> How can I learn more about meditation programs in the City of San José and Santa Clara County?</h4>
            <p>Mediation is one of the alternatives for resolving differences in a fair and equitable way. The City of San José provides mediation services to assist tenants and landlords with the negotiation process. Learn more about the <a href="http://www.sanjoseca.gov/DocumentCenter/View/57816">Rental Rights & Referral Program</a>.</p>

            <div className="list-group">
              <a href="http://housing.org/community-mediation/">
                <h4 className="list-group-item-heading">Project Sentinel</h4>
              </a>
              <p className="list-group-item-text">
              <strong>Phone: </strong>408.720.9888
              </p>
              <p className="list-group-item-text">
              <strong>Address: </strong>1490 El Camino Real, Santa Clara, CA 95050
              </p>
            </div>
            <div className="list-group">
              <a href="http://sjhousing.org">
                <h4 className="list-group-item-heading">Rental Rights & Referrals</h4>
              </a>
              <p className="list-group-item-text">
                <strong>Phone: </strong>408.975.4480
              </p>
              <p className="list-group-item-text">
                <strong>Address: </strong>200 East Santa Clara Street, 12th Floor, San José, CA 95113
              </p>
            </div>
            <div className="list-group">
              <a href="https://www.sccgov.org/sites/ohr/mediation/Pages/mediation.aspx">
                <h4 className="list-group-item-heading">Santa Clara County Office of Human Relations</h4>
              </a>
              <p className="list-group-item-text">
                <strong>Phone: </strong>408.792.2300
              </p>
              <p className="list-group-item-text">
                <strong>Address: </strong>2310 North First Street, Suite 104, San José, CA 95131
              </p>
            </div>
            <h4> What area does this app cover?</h4>
            <p> Currently this application covers the City of San José. In the future, we hope to expand to other cities in Santa Clara County. </p>
          </div>
        </div>
      </RentersLayout>      
    )
  }
}

