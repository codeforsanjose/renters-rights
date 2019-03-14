import React from 'react';
import RentersLayout from './RentersLayout'

export default class MobileHomeOrdinance extends React.Component {

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
            <h1>Mobilehome Ordinance (MHO)</h1>
          </div>
          <p>The City of San José Mobilehome Rent Ordinance and Mobilehome Regulations regulate rent increases on mobilehomes and mobilehome lots. </p>
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse16">
                  What is covered by the Mobilehome Ordinance?</a>
                </h2>
              </div>
              <div id="collapse16" className="panel-collapse collapse">
                <div className="panel-body">
                <p>The City of San José’s Mobilehome Rent Ordinance covers spaces in which the plumbing, electrical and sewer permits were issued prior to September 7, 1979. </p>
                <p>Some mobilehome spaces may be exempted from complying with the Ordinance, including those with government subsidized rents or long term leases (over 12 months).</p>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse17">
                  How much can rent be increased?</a>
                </h2>
              </div>
              <div id="collapse17" className="panel-collapse collapse">
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
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse18">
                  Mobilehome Owners' Rights under the Ordinance - Rent Increases Above the Allowable Amount</a>
                </h2>
              </div>
              <div id="collapse18" className="panel-collapse collapse">
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
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse19">
                  Service Reductions</a>
                </h2>
              </div>
              <div id="collapse19" className="panel-collapse collapse">
                <div className="panel-body">
                <h5>What is a service reduction?</h5>
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
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse20">
                  Resident's Waiver of Rights</a>
                </h2>
              </div>
              <div id="collapse20" className="panel-collapse collapse">
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
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse21">
                  Freedom to Exercise Rights</a>
                </h2>
              </div>
              <div id="collapse21" className="panel-collapse collapse">
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
            <p>Learn more about <a href="http://www.sanjoseca.gov/index.aspx?NID=4954" target="blank">policy updates</a>.</p>
          </div>
        </div>
      </RentersLayout>
    )
  }
}
