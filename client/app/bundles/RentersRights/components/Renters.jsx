import React from 'react';
import RentersLayout from './RentersLayout'

export default class Renters extends React.Component {
  render() {
    const { token } = this.props;

    return (
      <RentersLayout>
        <div className="dashboard-container">
          <div className="dashboard-text">
            <h3>Learn More About Tenant Law & Rights</h3>
            <ul className="nav nav-pills">
              <li className="active"><a data-toggle="pill" href="#menu1">Apartment Rent Ordinance</a></li>
              <li><a data-toggle="pill" href="#menu2">Ellis Act Ordinance</a></li>
              <li><a data-toggle="pill" href="#menu3">Tenant Protection Ordinance</a></li>
              <li><a data-toggle="pill" href="#menu4">Mobilehome Ordinance</a></li>
            </ul>

            <div className="tab-content">
              <div id="menu1" className="tab-pane fade in active">
                <h3>Apartment Rent Ordinance (ARO) </h3>
                <p>The City of San José's Apartment Rent Ordinance (ARO) controls rent increases on apartments that are covered by the ordinance.</p>
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                        What is covered by ARO?</a>
                      </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse in">
                      <div className="panel-body">
                      <p><strong>Covered</strong></p>
                      <p>Properties covered under ARO include apartments:</p>
                        <ul>
                          <li>three or more units </li>
                          <li>built and occupied prior to September 7, 1979</li>
                        </ul>
                      <br/>
                      <p><strong>Not Covered</strong></p>
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
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                        How much can rent be increased?</a>
                      </h4>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse">
                      <div className="panel-body">
                      <p>The <strong>maximum annual allowable rent increase</strong> is <strong>5%.</strong></p>
                      <p>Rent increases may only be given once in a 12-month period. </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                        Exceptions to Allowable Rent Increase</a>
                      </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse">
                      <div className="panel-body">
                      <p>
                      <strong>Exempt rent increases include:</strong>
                      <ul>
                        <li> an increase after the rental unit has been voluntarily vacated by the tenant</li>
                        <li> an increase after eviction of a tenant </li>
                      </ul>
                      </p>

                      <strong> Petition</strong>
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
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                        Service Reductions</a>
                      </h4>
                    </div>

                    <div id="collapse4" className="panel-collapse collapse">
                      <div className="panel-body">
                      <p>
                      <strong> What is service reduction? </strong>
                      <p> When the level of service provided by the landlord has been reduced without a corresponding decrease in rent. </p>
                      <strong> Service Reduction Claim </strong>
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
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                        Housing Code Violation</a>
                      </h4>
                    </div>

                    <div id="collapse5" className="panel-collapse collapse">
                      <div className="panel-body">
                      <strong>What is a housing code violation?</strong>
                      <p>When there are health and safety defects which violate the San José Housing Code and/or California Civil Code Sections 1941.1 and 1941.2. </p>
                      <strong>Housing Violation Claim</strong>
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
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                        Freedom to Exercise Rights</a>
                      </h4>
                    </div>

                    <div id="collapse6" className="panel-collapse collapse">
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
                  <p>For more information, view the <a href="http://www.sanjoseca.gov/DocumentCenter/View/61137" target="_blank">Interim Ordinance</a> and the <a href="http://www.sanjoseca.gov/DocumentCenter/View/61137" target="_blank">Revised Interim Regulations</a>.</p>
                  <p>
                    The San José Housing Department released the draft <a href="http://www.sanjoseca.gov/DocumentCenter/View/71051" target="_blank">Apartment Rent Ordinance</a> and <a href="http://www.sanjoseca.gov/DocumentCenter/View/71125" target="_blank">Regulations</a>, which are available for public review and comment. The 30-day comment period will run from August 14, 2017 to September 15, 2017.
                    <a href="http://www.sanjoseca.gov/index.aspx?nid=1355" target="blank"> Learn more</a>.
                  </p>
                </div>
              </div>
              <div id="menu2" className="tab-pane">
                <h3>Ellis Act Ordinance</h3>
                <div className="panel-group" id="accordion">
                  <p>On April 18, 2017, the City Council recommended the approval of the Ellis Act Ordinance. </p>
                  <p>In San José, the most frequent use of the Ellis Act Ordinance would be the demolition and redevelopment of existing rent controlled housing.</p>
                  <p>The Ellis Act is a provision in California Law (Government Code section 7060-7060.7) that provides landlords in California with a legal way to go out of the rental market business. The Ellis Act was adopted by the California Legislature in 1985 after the California Supreme Court decision in the case of Nash v. City of Santa Monica. </p>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">
                        Who does this apply to?</a>
                      </h4>
                    </div>
                    <div id="collapse7" className="panel-collapse collapse in">
                      <div className="panel-body">
                      <p>This ordinance applies to all apartments four units or more covered by the Apartment Rent Ordinance and provides requirements for landlords removing these apartments from the rental housing market. </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse8">
                        Removal from the Rental Market</a>
                      </h4>
                    </div>
                    <div id="collapse8" className="panel-collapse collapse">

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
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse9">
                        Renter's Rights and Responsibilities</a>
                      </h4>
                    </div>
                    <div id="collapse9" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li><strong>120-Day Notice of Eviction:</strong> You are entitled to a 120-Day Notice of Eviction.
</li>
                          <li><strong>One-Year Extension:</strong> You may be entitled to a one-year extension from the date the landlord delivered the Notice of Intent to Withdraw if you are low-income, over the age of 62, disabled, terminally or catastrophically ill, or have school-aged children.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse10">
                        Relocation Assistance</a>
                      </h4>
                    </div>
                    <div id="collapse10" className="panel-collapse collapse">
                      <div className="panel-body">You may be entitled to relocation assistance. The City of San José’s Relocation Consultant will determine the amount of relocation benefits you are entitled to, otherwise the determination will be based on the information provided by your Landlord.</div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse11">
                        Interested in Returning to the Unit Should it Become Available?</a>
                      </h4>
                    </div>
                    <div id="collapse11" className="panel-collapse collapse">
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
              <div id="menu3" className="tab-pane">
                <h3>Tenant Protection Ordinance (TPO)</h3>

                <p>On May 9, 2017, San José City Council adopted the <strong>Tenant Protection Ordinance</strong> and an Urgency Ordinance making the new regulations effective immediately.
                TPO outlines landlord responsibilities and tenant rights regarding notices to terminate. </p>
                <br/>
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse12">
                        What is covered by TPO?</a>
                      </h4>
                    </div>
                    <div id="collapse12" className="panel-collapse collapse in">
                      <div className="panel-body">
                      <strong>Covered:</strong>
                        <ul>
                          <li>Rent stabilized apartments covered under ARO. Units within Apartments with 3+ units built on or before September 7, 1979</li>
                          <li>Multifamily dwellings with at least 3 units</li>
                          <li>Rental apartments except permitted hotels and motels</li>
                          <li>Guest rooms in any guesthouse and guesthouses</li>
                          <li>Units built without a permit</li>
                        </ul>
                      <strong>Not Covered:</strong>
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
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse13">
                        What does it mean to be covered under TPO?</a>
                      </h4>
                    </div>
                    <div id="collapse13" className="panel-collapse collapse">
                      <div className="panel-body">
                        Buildings are covered by Just Cause and any 30-60-90 day notice to vacate must list one of the 12 just-cause reasons for eviction.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse14">
                        What is Just Cause?</a>
                      </h4>
                    </div>
                    <div id="collapse14" className="panel-collapse collapse">
                      <div className="panel-body">
                      <em> View this information in <a href="http://www.sanjoseca.gov/DocumentCenter/View/69112" target="_blank">Spanish</a> or <a href="http://www.sanjoseca.gov/DocumentCenter/View/69113" target="_blank">Vietnamese</a></em>
                      <br/>
                      <p><strong> Under TPO, landlords must include one of the following 12 reasons for termination in any 30-60-90 notice to vacate to the tenant:</strong></p>
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
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse15">
                        No-cause Notice</a>
                      </h4>
                    </div>
                    <div id="collapse15" className="panel-collapse collapse">
                      <div className="panel-body">
                      No-cause notices received after May 10, 2017 are no longer valid. If you have received this and are covered under TPO, please contact the City of San José Rental Rights & Referrals Program at (408)975-4480 to learn about your rights.
                      </div>
                    </div>
                  </div>
                  <br/>
                  <p>To learn more, refer to the <a href="http://www.sanjoseca.gov/DocumentCenter/View/70042">Tenant Protection Ordinance Fact Sheet</a> and the <a href="http://www.sanjoseca.gov/DocumentCenter/View/70490">Tenant Protection Ordinance Frequently Asked Questions</a>.</p>
                </div>
              </div>

              <div id="menu4" className="tab-pane">
                <h3>Mobilehome Ordinance (MHO)</h3>
                <p>The City of San José Mobilehome Rent Ordinance and Mobilehome Regulations regulate rent increases on mobilehomes and mobilehome lots. </p>
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse16">
                        What is covered by the Mobilehome Ordinance?</a>
                      </h4>
                    </div>
                    <div id="collapse16" className="panel-collapse collapse in">
                      <div className="panel-body">
                      <p>The City of San José’s Mobilehome Rent Ordinance covers spaces in which the plumbing, electrical and sewer permits were issued prior to September 7, 1979. </p>
                      <p>Some mobilehome spaces may be exempted from complying with the Ordinance, including those with government subsidized rents or long term leases (over 12 months).</p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse16">
                        How much can rent be increased?</a>
                      </h4>
                    </div>
                    <div id="collapse16" className="panel-collapse collapse">
                      <div className="panel-body">
                      <p>
                      Under the Mobilehome Rent Ordinance, annual increases on space rents are set by the City of San José at 75% of the San Francisco-Oakland All Urban Consumers CPI, with a minimum of 3% and a maximum of 7%.
                      </p>
                      <p>Park owners must request a formal administrative hearing before going over this amount. If the rent on a mobilehome space was not increased in the prior year, the park may combine the percentages for the two years. There must be at least 12 months between any two rent increases.
                      </p>
                      <p>Rents may not, with a few exceptions, be increased when the mobilehome is sold or transferred. The exceptions are abandonments, an eviction by a court or a dealer pull-out.
                      </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse17">
                        Mobilehome Owners' Rights under the Ordinance - Rent Increases Above the Allowable Amount</a>
                      </h4>
                    </div>
                    <div id="collapse17" className="panel-collapse collapse">
                      <div className="panel-body">
                      <p>Mobilehome owners residing in park spaces that are under the Mobilehome Ordinance are not subject to rent increases above the maximum annual percentage unless a hearing is held and a decision is made.
                      Both the park owner and the Rental Rights and Referrals Program are required to notify all impacted park residents should a park owner petition for a hearing.
                      Should this happen, the Rental Rights & Referrals Program will provide you with additional information on the hearing process.
                      </p>
                      <p>
                      In the event that the park owner's request for the increase is granted, you may be required to pay the difference between the amount paid and the amount requested.
                      If the park owner imposes a rent increase above the allowable amount and has not requested a hearing the rent increase may violate the Mobilehome Rent Ordinance.
                      Usually, this is a bookkeeping or other error that can be corrected simply.
                      If it is not corrected then you may be able to seek civil penalties through the courts. </p>
                      <p>Contact the Rental Rights & Referrals Program for more information and assistance at (408) 975-4480. </p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse18">
                        Service Reductions</a>
                      </h4>
                    </div>
                    <div id="collapse18" className="panel-collapse collapse">
                      <div className="panel-body">
                      <strong>What is a service reduction?</strong>
                      <p>
                      A service reduction has occurred when the level of service provided by the park owner has been reduced without a corresponding decrease in rent.  The Ordinance does not allow residents to request an administrative hearing but you do have other rights under state and local laws.
                      The State Mobilehome Residency Law allows mobilehome park residents to make a written request for a meeting on service problems with the park owner or their representative.
                      </p>
                      <p>
                      If this meeting does not resolve the problem the Rental Rights & Referrals Program, in some situations, can assist both parties to negotiate a solution.
                      You may also be able to seek a remedy through small claims or other courts.
                      </p>
                      <p>If your park owner has filed a petition with the Rental Rights & Referrals Program, you will have an opportunity to file a written claim that a service reduction has occurred.</p>
                      <p>Based on the evidence provided by the mobilehome owner, a hearing officer will determine:</p>
                      <ul>
                        <li>if the service reduction is a type that may be considered under the Ordinance</li>
                        <li>if the reduction has occurred since the last opportunity the resident had to file a claim</li>
                        <li>what, if any, amount of the rent should be decreased in order to compensate for the value of the service</li>
                      </ul>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse19">
                        Resident's Waiver of Rights</a>
                      </h4>
                    </div>
                    <div id="collapse19" className="panel-collapse collapse">
                      <div className="panel-body">
                      <p>A resident may temporarily waive their rights under the Mobilehome Rent Ordinance only by entering into a long term lease with the park owner. The waiver of rights is valid only if all of the following criteria are met: </p>
                      <ul>
                        <li>The agreement was dated on or after January 1, 1986.</li>
                        <li>The duration of the lease exceeds twelve (12) months.</li>
                        <li>The owner of the mobilehome actually lives at the location on the lease.</li>
                        <li>The first paragraph of the rental agreement notifies the mobilehome owner that he/she will be losing their protection under the Ordinance by signing the lease.</li>
                      </ul>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse20">
                        Freedom to Exercise Rights</a>
                      </h4>
                    </div>
                    <div id="collapse20" className="panel-collapse collapse">
                      <div className="panel-body">
                      <p>                      Park owners may not do the following in retaliation for park residents demanding their rights under the Ordinance:</p>
                      <ul>
                        <li>Threaten to sue for possession of your coach.</li>
                        <li>Harass you until you leave. </li>
                        <li>Reduce your services. </li>
                        <li>Increase your rent. </li>
                        <li>Impose a security deposit or any other new charge. </li>
                      </ul>
                      <em>If any of these actions occur, provide a written complaint to the Rental Rights & Referrals Program.</em>
                      <p>San José City Hall</p>
                      <p>Housing, 12th Floor</p>
                      <p>200 East Santa Clara St.</p>
                      <p>San José, CA 95113</p>
                      </div>
                    </div>
                  </div>
                  <br/>
                  <p>Learn more about <a href="http://www.sanjoseca.gov/index.aspx?NID=4954" target="blank">policy updates</a>.</p>
                </div>
              </div>
            </div>
            <hr/>
            <br/>
            <p>We only cover the City of San José for now. To learn more about California law and tenant rights, see the <a href="http://www.dca.ca.gov/publications/landlordbook/index.shtml" target="_blank">California Tenants - A Guide to Residential Tenants' and Landlords' Rights and Responsibilities publication</a> by the California Department of Consumer Affairs.</p>
         </div>
        </div>
      </RentersLayout>
    )
  }
}
