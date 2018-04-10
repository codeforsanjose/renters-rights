import React from 'react';
import RentersLayout from './RentersLayout'

export default class ApartmentRentOrdinance extends React.Component {

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
            <h1>Apartment Rent Ordinance (ARO) </h1>
          </div>
                      <p>The City of San José's Apartment Rent Ordinance (ARO) controls rent increases on apartments that are covered by the ordinance.</p>
                      <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                              Recent Policy Updates</a>
                            </h4>
                          </div>
                          <div id="collapse1" className="panel-collapse collapse">
                            <div className="panel-body">
                              <p>On Tuesday, November 14, 2017, San Jose City Council took action on the following agenda items:</p>
                              <strong>Amendment to the Tenant Protection Ordinance (TPO):</strong>
                              <ul>
                                <li>Include dependent child; foster child; minor in the tenant's care; spouse or domestic partner; or parent of a tenant under exempted categories of additional family members allowed under TPO's Just Cause reason for material or habitual rental agreement violation; and</li>
                                <li>Reduce the maximum occupancy limit for adults to the number allowed by the rental agreement or two adults per bedroom, whichever is greater.</li>
                              </ul>
                              <br/><br/>
                              <strong>Revised Apartment Rent Ordinance (ARO) and Regulations:</strong>
                              <ul>
                                <li>Retain the limit on annual general increases as 5% with no banking; </li>
                                <li>Implement a capital improvement pass through petition process for specified capital improvements; </li>
                                <li>Defer action on Ratio Utility Billing System (RUBS) to March 2018 with additional research from staff;</li>
                                <li>Continue to exclude duplexes from the ARO; </li>
                                <li>Allow tenant buyout agreements; and</li>
                                <li>Maintain the rent registry as recommended by staff.  </li>
                              </ul>
                              <br/><br/>
                              <strong>Staffing Plan and Associated Fee Increase: </strong>
                              <ul><li>Approve Phase I and Phase II of the proposed staffing plan for the Rental Rights and Referrals Program with a fee increase effective on January 1, 2018.</li></ul>
                              <br/>
                              <p>The second reading of the Tenant Protection Ordinance and Apartment Rent Ordinance took place Tuesday, November 28, 2017, and Council approved the changes above so the ordinances will go into effect on December 28, 2017. In the weeks following, staff will begin implementing a plan to reach out to constituents with informational materials and opportunities for additional assistance and education.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                              What is covered by ARO?</a>
                            </h4>
                          </div>
                          <div id="collapse2" className="panel-collapse collapse">
                            <div className="panel-body">
                            <p><h5>Covered</h5></p>
                            <p>Properties covered under ARO include apartments:</p>
                              <ul>
                                <li>three or more units </li>
                                <li>built and occupied prior to September 7, 1979</li>
                              </ul>
                            <br/>
                            <p><h5>Not Covered</h5></p>
                            <ul>
                              <li>Single family homes</li>
                              <li>in-law units/granny flats/accessory dwelling units</li>
                              <li>duplexes</li>
                              <li>condominiums</li>
                              <li>townhomes</li>
                              <li>hotels</li>
                              <li>boarding houses rented to transient guests for periods of less than 30 days</li>
                              <li>nonprofit homes for the aged</li>
                              <li>school dormitories</li>
                              <li>rental units owned and operated by any government agency</li>
                              <li>new rental units first rented after September 7, 1979</li>
                              <li>properties in unincorporated areas of San José</li>
                            </ul>
                            <p>If you have questions or want to confirm the status of a particular property, you can contact San José staff at (408) 975-4480.</p>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                              How much can rent be increased?</a>
                            </h4>
                          </div>
                          <div id="collapse3" className="panel-collapse collapse">
                            <div className="panel-body">
                            <p>The maximum annual allowable rent increase is 5%.</p>
                            <p>Rent increases may only be given once in a 12-month period. </p>
                            <RentCalculator/>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                              Exceptions to Allowable Rent Increase</a>
                            </h4>
                          </div>
                          <div id="collapse4" className="panel-collapse collapse">
                            <div className="panel-body">
                            <p>
                            <h5>Exempt rent increases include:</h5>
                            <ul>
                              <li> an increase after the rental unit has been voluntarily vacated by the tenant</li>
                              <li> an increase after eviction of a tenant </li>
                            </ul>
                            </p>

                            <h5> Petition</h5>
                            <p>Tenants and property owners may file a petition.
                            Property owners who file a petition to increase rent in excess 5% must submit a cost worksheet to the Rental Rights and Referrals Program.
                            Pending a decision by the Hearing Officer, the amount of rent in excess of 5% is deferred and only an 5% rent increase should be demanded or paid.
                            </p>
                            <p>Landlords may file a <a href="http://www.sanjoseca.gov/index.aspx?nid=1356" target="_blank">Fair Return petition</a> if they would like to request the ability to increase rent more than 5% because of substantial capital improvements or capital expenses,
                            unusually low rents, uninsured damage or vandalism, or other reasons.
                            </p>
                            <p>Tenants with a rent increase subject to review and/or service reduction claims or housing code violations may file a petition.</p>
                            </div>
                          </div>
                        </div>

                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                              Service Reductions</a>
                            </h4>
                          </div>

                          <div id="collapse5" className="panel-collapse collapse">
                            <div className="panel-body">
                            <p>
                            <h5> What is service reduction? </h5>
                            <p> When the level of service provided by the landlord has been reduced without a corresponding decrease in rent. </p>
                            <h5> Service Reduction Claim </h5>
                            <p> ARO allows tenants to request an administrative hearing for a service reduction claim. </p>
                            <p> The tenant has the burden of proof to their claim by submitting evidence such as maintenance record requests, photographs, and/or testimony.</p>
                            <p>If the claim is proven, the Hearing Officer will determine the percentage that the usability of the rental unit was reduced and the duration of the reduction.</p>
                            If the rent increase is unreasonable, the Hearing Officer may reduce a rent increase, order a credit against the paid and/or permanent or temporary reduction in future rent.</p>
                            </div>
                          </div>
                        </div>

                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                              Housing Code Violation</a>
                            </h4>
                          </div>

                          <div id="collapse6" className="panel-collapse collapse">
                            <div className="panel-body">
                            <h5>What is a housing code violation?</h5>
                            <p>When there are health and safety defects which violate the San José Housing Code and/or California Civil Code Sections 1941.1 and 1941.2. </p>
                            <h5>Housing Violation Claim</h5>
                            <p>The tenant has the burden to prove their claim by submitting evidence such as a Code Enforcement Inspection which is considered presumptive evidence.</p>
                            <p> Unless there is sufficient evidence to the contrary, violations listed in the report are considered to have been proven to exist. </p>
                            <p>Issues of this type may also be classified as 'service reductions' under ARO. </p>
                            <p>The Hearing Officer may reduce, disallow or reasonably condition any rent increase based on the severity of any Housing Code violations. </p>
                            </div>
                          </div>
                        </div>

                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">
                              Freedom to Exercise Rights</a>
                            </h4>
                          </div>

                          <div id="collapse7" className="panel-collapse collapse">
                            <div className="panel-body">
                            <p>Apartment owners may not do the following in retaliation for tenants demanding their rights under the Ordinance:</p>
                            <ul>
                              <li>Threaten to sue, evict or terminate the tenancy of the tenant(s).</li>
                              <li>Harass you until you leave. </li>
                              <li>Reduce your services. </li>
                              <li>Increase your rent. </li>
                              <li>Impose a security deposit or any other new charge. </li>
                            </ul>
                            <em>If any of these actions occur, provide a written complaint to the Rental Rights & Referrals Program at 200 East Santa Clara Street, 12th Floor, San José, CA 95113. To contact staff call (408)975-4480.</em>
                            </div>
                          </div>
                        </div>

                        <br/>
                      </div>
        </div>
      </RentersLayout>
    )
  }
}
