import React from 'react';
import RentersLayout from './RentersLayout'

export default class TenantProtectionOrdinance extends React.Component {

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
            <h1>Determine If You Live Within San José limits </h1>
          </div>
          <h3>Tenant Protection Ordinance (TPO)</h3>

                  <p>The City of San José Tenant Protection Ordinance (TPO) outlines landlord responsibilities and tenant rights regarding notices to terminate for properties covered by the ordinance. </p>
                  <br/>
                  <div className="panel-group" id="accordion">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                          Recent Policy Updates</a>
                        </h4>
                      </div>
                      <div id="collapse6" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>On Tuesday, November 14, 2017, San Jose City Council voted to make an <strong>Amendment to the Tenant Protection Ordinance (TPO):</strong></p>
                          <ul>
                            <li>Include dependent child; foster child; minor in the tenant's care; spouse or domestic partner; or parent of a tenant under exempted categories of additional family members allowed under TPO's Just Cause reason for material or habitual rental agreement violation; and</li>
                            <li>Reduce the maximum occupancy limit for adults to the number allowed by the rental agreement or two adults per bedroom, whichever is greater.</li>
                          </ul>
                          <br/><br/>
                          <p>The second reading of the Tenant Protection Ordinance and Apartment Rent Ordinance took place Tuesday, November 28, 2017, and Council approved the changes above so the ordinances will go into effect on December 28, 2017. In the weeks following, staff will begin implementing a plan to reach out to constituents with informational materials and opportunities for additional assistance and education.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">
                          What is covered by TPO?</a>
                        </h4>
                      </div>
                      <div id="collapse7" className="panel-collapse collapse">
                        <div className="panel-body">
                        <h5>Covered:</h5>
                          <ul>
                            <li>Rent stabilized apartments covered under ARO. Units within Apartments with 3+ units built on or before September 7, 1979</li>
                            <li>Multifamily dwellings with at least 3 units</li>
                            <li>Rental apartments except permitted hotels and motels</li>
                            <li>Guest rooms in any guesthouse and guesthouses</li>
                            <li>Units built without a permit</li>
                          </ul>
                        <h5>Not Covered:</h5>
                          <ul>
                            <li>Duplexes</li>
                            <li>Single-family homes</li>
                            <li>Permitted Second units</li>
                            <li>Single family Condominiums</li>
                            <li>Townhouses</li>
                          </ul>
                        <br/>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse14">
                          What does it mean to be covered under TPO?</a>
                        </h4>
                      </div>
                      <div id="collapse14" className="panel-collapse collapse">
                        <div className="panel-body">
                          Buildings are covered by Just Cause and any 30-60-90 day notice to vacate must list one of the 12 just-cause reasons for eviction.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse8">
                          What is Just Cause?</a>
                        </h4>
                      </div>
                      <div id="collapse8" className="panel-collapse collapse">
                        <div className="panel-body">
                        <em> View this information in <a href="http://www.sanjoseca.gov/DocumentCenter/View/69112" target="_blank">Spanish</a> or <a href="http://www.sanjoseca.gov/DocumentCenter/View/69113" target="_blank">Vietnamese</a></em>
                        <br/>
                        <p><h5> Under TPO, landlords must include one of the following 12 reasons for termination in any 30-60-90 notice to vacate to the tenant:</h5></p>
                        <li className="list-group-item active"><h4>Just Cause Terminations </h4> <p>The reasons for no-cause notice to vacate that signify fault on the part of the tenant are:</p></li>
                        <li className="list-group-item">1. Nonpayment of rent</li>
                        <li className="list-group-item">2. Material or habitual violation of the lease</li>
                        <li className="list-group-item">3. Substantial damage to the apartment</li>
                        <li className="list-group-item">4. Refusal to agree to a like or new rental agreement</li>
                        <li className="list-group-item">5. Nuisance behavior</li>
                        <li className="list-group-item">6. Refusing access to the apartment, requested in accordance in law</li>
                        <li className="list-group-item">7. Unapproved holdover subtenant</li>
                        <li className="list-group-item active"><h4>No-Fault Just Causes </h4><p>Relocation benefits must be paid when a Tenant is being removed from an apartment for reasons 8-12.</p></li>
                        <li className="list-group-item">8. Substantial rehabilitation of the apartment</li>
                        <li className="list-group-item">9. Ellis Act removal or demolition</li>
                        <li className="list-group-item">10. Owner move-in</li>
                        <li className="list-group-item">11. Order to vacate</li>
                        <li className="list-group-item">12. Leaving an unpermitted apartment</li>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse9">
                          No-cause Notice</a>
                        </h4>
                      </div>
                      <div id="collapse9" className="panel-collapse collapse">
                        <div className="panel-body">
                        No-cause notices received after May 10, 2017 are no longer valid. If you have received this and are covered under TPO, please contact the City of San José Rental Rights & Referrals Program at (408)975-4480 to learn about your rights.
                        </div>
                      </div>
                    </div>
                    <br/>
                    <p>To learn more, refer to the <a href="http://www.sanjoseca.gov/DocumentCenter/View/70042">Tenant Protection Ordinance Fact Sheet</a> and the <a href="http://www.sanjoseca.gov/DocumentCenter/View/70490">Tenant Protection Ordinance Frequently Asked Questions</a>.</p>

                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapse10">
                          Landlord and Tenant Responsibilities</a>
                        </h4>
                      </div>
                      <div id="collapse10" className="panel-collapse collapse">
                        <div className="panel-body">
                          <strong>Landlord Responsibilities:</strong>
                          <ul>
                            <li>If giving a notice of termination, serve a written copy to the tenant with the proper amount of notice according to State law. Ensure that the applicable 12 just causes are included on the notice.</li>
                            <li>Provide a copy to the City within 3 days of service to the tenant. <a href="http://www.sanjoseca.gov/FormCenter/Housing-19/Online-Notice-of-Termination-of-Tenancy-301" target="_blank">You can submit a copy of the notice online.</a></li>
                            <li> Provide relocation benefits at the time of service to the tenant, if applicable.</li>
                            </ul>
                          <br/>
                          <strong>Tenant Responsibilities:</strong>
                          <ul>
                            <li>Ensure that if you receive a notice of termination, that it is in writing and with the proper amount of notice according to State law.</li>
                            <li>Ensure that the notice has at least one of the 12 just causes listed as the reason for the notice being served.</li>
                            <li> Contact the Rent Stabilization Program to ensure that the landlord submitted the notice to the City correctly. If not, contact the Law Foundation of Silicon Valley's Eviction Assistance Clinic at 408-280-2424.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
      </RentersLayout>
    )
  }
}
