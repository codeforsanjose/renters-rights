import React from 'react';
import RentersLayout from './RentersLayout'

export default class EllisActOrdinance extends React.Component {

 /*  render() {
    const { locale } = this.props;

    <Renters Layout locale={locale}>
  */ 
  render() {
  
  const {} = this.props;
  
  return (
      <RentersLayout>
        <div className="content-container language-paragraph">
          <h3>Ellis Act Ordinance</h3>
                  <div className="panel-group" id="accordion">
                    <p>The City of San José Ellis Act Ordinance provides requirements for landlords removing apartments covered by the ordinance from the rental housing market.</p>
                    
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                          Who does this apply to?</a>
                        </h4>
                      </div>
                      <div id="collapse1" className="panel-collapse collapse">
                        <div className="panel-body">
                        <p>This ordinance applies to all apartments with 4+ units covered by the Apartment Rent Ordinance in the City of San José. </p>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                          Removal from the Rental Market</a>
                        </h4>
                      </div>
                      <div id="collapse2" className="panel-collapse collapse">

                        <div className="panel-body">
                        <p>
                        A property owner may recover possession of a rental unit to either demolish a rental unit or to remove the rental unit permanently from rental housing use.
                        </p>
                        <p>
                        If you receive an eviction notice from your landlord because your landlord wishes to recover possession of the rental unit, you can expect the following:
                        </p>
                        <ul>
                          <li>You will receive a Notice to Withdraw that has been filed by your landlord.</li>
                          <li>Your case will be referred to the City’s Relocation Consultant to provide you support during your relocation.</li>
                          <li>The amount of relocation fees you may be entitled to will be determined.</li>
                        </ul>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                          Renter's Rights and Responsibilities</a>
                        </h4>
                      </div>
                      <div id="collapse3" className="panel-collapse collapse">
                        <div className="panel-body">
                          <ul>
                            <li><h5>120-Day Notice of Eviction:</h5> You are entitled to a 120-Day Notice of Eviction.
  </li>
                            <li><h5>One-Year Extension:</h5> You may be entitled to a one-year extension from the date the landlord delivered the Notice of Intent to Withdraw if you are low-income, over the age of 62, disabled, terminally or catastrophically ill, or have school-aged children.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                          Relocation Assistance</a>
                        </h4>
                      </div>
                      <div id="collapse4" className="panel-collapse collapse">
                        <div className="panel-body">You may be entitled to relocation assistance. The City of San José’s Relocation Consultant will determine the amount of relocation benefits you are entitled to, otherwise the determination will be based on the information provided by your Landlord.</div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                          Interested in Returning to the Unit Should it Become Available?</a>
                        </h4>
                      </div>
                      <div id="collapse5" className="panel-collapse collapse">
                        <div className="panel-body">
                        <p>
                        For units re-rented within five years, rent will be set at the rent paid when the Notice of Intent to Withdraw is given, escalated by the annual allowable rate for the number of years the unit was not occupied. </p>
                        <p>For units re-rented after 10 years, tenants will have the right to return only. </p>
                        <p>If apartments were demolished and rebuilt, tenants do not have a right to return to the newly constructed apartments.
                        </p>
                        </div>
                      </div>
                    </div>
                    <br/>
                    <p>View the <a href="http://www.sanjoseca.gov/index.aspx?NID=5517" target="blank">Ellis Act Ordinance Fact Sheet</a> for more information.</p>
                  </div>
        </div>
      </RentersLayout>
    )
  }
}
