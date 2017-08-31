import React from 'react';
import RentersLayout from './RentersLayout'

export default class Resources extends React.Component {
  render() {
    const { } = this.props;

    return (
      <RentersLayout>
        <div className="content-container">
          <br/>
          <div className="page-header">
            <h1>Resources
            </h1>
          </div>

          <h3>Tenant & Landlord Assistance</h3>
          <p><a href="http://www.dca.ca.gov/publications/landlordbook/catenant.pdf">California Tenants - A Guide to Residential Tenants’ and Landlords’ Rights and Responsibilities</a></p>
          <p>Just Cause reasons in <a href="http://www.sanjoseca.gov/DocumentCenter/View/69126">English</a>, <a href="http://www.sanjoseca.gov/DocumentCenter/View/69112">Spanish</a> and <a href="http://www.sanjoseca.gov/DocumentCenter/View/69113">Vietnamese</a>. </p>
          <p><a href="http://www.sanjoseca.gov/DocumentCenter/View/70042">Tenant Protection Ordinance Fact Sheet</a></p>
          <p><a href="http://www.sanjoseca.gov/DocumentCenter/View/70490">Tenant Protection Ordinance Frequently Asked Questions</a></p>
          <p>The City of San José’s <a href="http://www.sanjoseca.gov/index.aspx?nid=1355">Apartment Rental Dispute Mediation and Arbitration Ordinance (ARO)</a></p>
          <h4>Mediation Programs</h4>
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
          <br/>
          <h3>Housing Resources</h3>
          <div className="list-group">
            <p className="list-group-item-text">
            <a href="www.sjhousing.org">The City of San José Housing Department</a>- Serving San José's lower- and moderate-income families by increasing, preserving, and improving housing that is affordable and livable, and to the extent possible, ensuring long-term affordability and contributing to neighborhood revitalization.   
            </p>
            <br/>
            <p className="list-group-item-text">
            <a href="http://www.hacsc.org/">Housing Authority of Santa Clara County (HACS)</a> - Provides rental subsidies and develops affordable housing for low income families, seniors and persons with disabilities living in Santa Clara County, California, the heart of Silicon Valley.   
            </p>
            <br/>
            <p className="list-group-item-text">
            <a href="http://www.211bayarea.org/">211SCC</a> - Searchable database of health and human service providers in Santa Clara County.   
            </p>
            <br/>
            <p className="list-group-item-text">
            <a ref="https://www.housingca.org/">Housing Califorrnia</a> - Mission is to prevent homelessness and increase the supply of decent, safe, accessible and permanently affordable homes for homeless low-income Californians.   
            </p>
            <br/>
            <p className="list-group-item-text">
            <a href="http://www.housingchoices.org/">Housing Choices Coalition</a> - Housing Choices creates and implements innovative strategies to provide quality living options for people with developmental disabilities in Santa Clara County.   
            </p>
            <br/>
            <p className="list-group-item-text">
            <a href="https://portal.hud.gov/hudportal/HUD">U.S. Dept. of Housing and Urban Development</a> - HUD's mission is to create strong, sustainable, inclusive communities and quality affordable homes for all.   
            </p>
            <br/>
            <p className="list-group-item-text">
            <a href="https://portal.hud.gov/hudportal/HUD?src=/program_offices/housing/mfh">U.S. Dept. of Housing and Urban Development Multifamily Housing</a> - This inventory is designed to assist prospective applicants with locating units in HUD insured and HUD subsidized multifamily properties that serve the elderly and/or persons with disabilities. 
            </p>

          </div>
        </div>
      </RentersLayout>
    )
  }
}
