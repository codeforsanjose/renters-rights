import EvictionWizard from './EvictionWizard';
import React from 'react';
import RentersLayout from './RentersLayout';

export default function Eviction() {
  return (
    <RentersLayout>
      <div className="content-container language-paragraph">
        <div className="page-header">
          <h1>Tenant Eviction</h1>
        </div>
        <EvictionWizard />
        <hr/>
        <h2> Special Situations </h2>

          <h3>Just Cause for Eviction in San José</h3>
          <p>Landlords renting properties covered by the Tenant Protection Ordinance to San José tenants must include one of 12 reasons for termination in any 30, 60, or 90-day eviction notice. </p>
          <br/>
          <div className="panel-group" id="accordion">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                  What is covered by the Tenant Protection Ordinance?</a>
                </h4>
              </div>
              <div id="collapse1" className="panel-collapse collapse">
                <div className="panel-body">
                <h5>Covered:</h5>
                  <ul>
                    <li>Rent stabilized apartments covered under Apartment Rent Ordinance. Units within Apartments with 3+ units built on or before September 7, 1979</li>
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
            <div className="panel panel-info">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                  What does it mean to be covered?</a>
                </h4>
              </div>
              <div id="collapse2" className="panel-collapse collapse">
                <div className="panel-body">
                  Buildings are covered by Just Cause and any 30-60-90 day notice to vacate must list one of the 12 just-cause reasons for eviction.
                </div>
              </div>
            </div>
            <div className="panel panel-info">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                  What is Just Cause?</a>
                </h4>
              </div>
              <div id="collapse3" className="panel-collapse collapse">
                <div className="panel-body">
                <em> View this information in <a href="http://www.sanjoseca.gov/DocumentCenter/View/69112" target="_blank">Spanish</a> or <a href="http://www.sanjoseca.gov/DocumentCenter/View/69113" target="_blank">Vietnamese</a></em>
                <br/>
                <h5> Under Tenant Protection Ordinance, landlords must include one of the following 12 reasons for termination in any 30-60-90 notice to vacate to the tenant:</h5>
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
            <div className="panel panel-info">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                  No-cause Notice</a>
                </h4>
              </div>
              <div id="collapse4" className="panel-collapse collapse">
                <div className="panel-body">
                No-cause notices received after May 10, 2017 are no longer valid. If you have received this and are covered under Tenant Protection Ordinance, please contact the City of San José Rental Rights & Referrals Program at (408)975-4480 to learn about your rights.
                </div>
              </div>
            </div>
            <br/>
            <p>To learn more, refer to the <a href="http://www.sanjoseca.gov/DocumentCenter/View/70042">Tenant Protection Ordinance Fact Sheet</a> and the <a href="http://www.sanjoseca.gov/DocumentCenter/View/70490">Tenant Protection Ordinance Frequently Asked Questions</a>.</p>
          </div>
        <h3>Other Situations</h3>
        <p>
          Learn more about <a href="http://www.courts.ca.gov/27953.htm" target="_blank">special situations</a> and other San José<a href="/renters">local ordinances</a>.
        </p>

        <h3> Find Help </h3>
        <ul>
          <li>Find a <a href="https://lawhelpca.org/issues/housing/landlord-and-tenant-issues" target="_blank">legal aid program</a></li>
          <li>Find help from your <a href="http://www.courts.ca.gov/selfhelp-courtresources.htm" target="_blank">court</a></li>
          <li>Refer to our list of <a href="/resources">resources</a> for more information</li>
        </ul>
        <h3> Resources</h3>
        <p> To learn more about the eviction process in California, visit <a href="http://www.courts.ca.gov/27798.htm" target="_blank">California Courts</a> or download
          <a href="http://www.courts.ca.gov/partners/documents/eviction_process_flowchart.pdf" target="_blank">
            <span className="glyphicon glyphicon-download-alt"></span> the Eviction Process PDF.
          </a>
        </p>
      </div>
    </RentersLayout>
  );
}
