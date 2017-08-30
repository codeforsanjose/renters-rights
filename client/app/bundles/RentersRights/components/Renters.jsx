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
              <li className="active"><a data-toggle="pill" href="#menu1">Ellis Act Ordinance</a></li>
              <li><a data-toggle="pill" href="#menu2">Tenant Protection Ordinance</a></li>
              <li><a data-toggle="pill" href="#menu3">Apartment Rent Ordinance</a></li>
              <li><a data-toggle="pill" href="#menu4">Mobile Home Ordinance</a></li>
            </ul>

            <div className="tab-content">
              <div id="menu1" className="tab-pane fade in active">
                <h3>Ellis Act Ordinance</h3>
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                        What is covered by ARO?</a>
                      </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse in">
                      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</div>
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
                      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                        What can property owners and tenants file a petition for?</a>
                      </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse">
                      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                        Freedom to Exercise Rights</a>
                      </h4>
                    </div>
                    <div id="collapse4" className="panel-collapse collapse">
                      <div className="panel-body">
                      <p>Apartment owners may not do the following in retaliation for tenants demanding their rights under the Ordinance:</p>
                      <ul>
                        <li>Threaten to sue, evict or terminate the tenancy of the tenant(s).</li>
                        <li>Harass you until you leave. </li>
                        <li>Reduce your services. </li>
                        <li>Increase your rent. </li>
                        <li>Impose a security deposit or any other new charge. </li>
                      </ul>
                      <em>If any of these actions occur, provide a written complaint to the Rental Rights & Referrals Program.</em>
                      </div>
                    </div>
                  </div>
                  <br/>
                  <p>Learn more about the Apartment Rent Ordinance and draft changes <a href="http://www.sanjoseca.gov/index.aspx?nid=1355" target="blank">here</a>.</p>
                </div>
              </div>
              <div id="menu2" className="tab-pane">
                <h3>Tenant Protection Ordinance (TPO)</h3>
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                        What is covered by TPO?</a>
                      </h4>
                    </div>
                    <div id="collapse5" className="panel-collapse collapse in">
                      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                        How much can rent be increased?</a>
                      </h4>
                    </div>
                    <div id="collapse6" className="panel-collapse collapse">
                      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">
                        What can property owners and tenants file a petition for?</a>
                      </h4>
                    </div>
                    <div id="collapse7" className="panel-collapse collapse">
                      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse8">
                        Freedom to Exercise Rights</a>
                      </h4>
                    </div>
                    <div id="collapse8" className="panel-collapse collapse">
                      <div className="panel-body">
                      <p>Apartment owners may not do the following in retaliation for tenants demanding their rights under the Ordinance:</p>
                      <ul>
                        <li>Threaten to sue, evict or terminate the tenancy of the tenant(s).</li>
                        <li>Harass you until you leave. </li>
                        <li>Reduce your services. </li>
                        <li>Increase your rent. </li>
                        <li>Impose a security deposit or any other new charge. </li>
                      </ul>
                      <em>If any of these actions occur, provide a written complaint to the Rental Rights & Referrals Program.</em>
                      </div>
                    </div>
                  </div>
                  <br/>
                  <p>Learn more about the Apartment Rent Ordinance and draft changes <a href="http://www.sanjoseca.gov/index.aspx?nid=1355" target="blank">here</a>.</p>
                </div>
              </div>
              <div id="menu3" className="tab-pane fade">
                <h3>Apartment Rent Ordinance (ARO)</h3>
                <p>The City of San José's Apartment Rent Ordinance (ARO) controls rent increases on apartments that are covered by the ordinance.
                See the <a href="http://www.sanjoseca.gov/DocumentCenter/View/61137" target="_blank">Interim Ordinance</a> and the <a href="http://www.sanjoseca.gov/DocumentCenter/View/61137" target="_blank">Revised Interim Regulations</a> which are currently in effect.
                </p>
                <p>
                The San José Housing Department has released the draft <a href="http://www.sanjoseca.gov/DocumentCenter/View/71051" target="_blank">Apartment Rent Ordinance</a> and <a href="http://www.sanjoseca.gov/DocumentCenter/View/71125" target="_blank">Regulations</a> are available for public review and comment on August 14, 2017. The 30-day comment period will run from August 14, 2017 to September 15, 2017.</p>
                <a href="http://www.sanjoseca.gov/index.aspx?nid=1355" target="blank">Learn more</a>.
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse9">
                        What is covered by ARO?</a>
                      </h4>
                    </div>
                    <div id="collapse9" className="panel-collapse collapse-in">
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
                        <li>properties in unincorporated areas of San José.</li>
                      </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse10">
                        How much can rent be increased?</a>
                      </h4>
                    </div>
                    <div id="collapse10" className="panel-collapse collapse">
                      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse11">
                        What can property owners and tenants file a petition for?</a>
                      </h4>
                    </div>
                    <div id="collapse11" className="panel-collapse collapse">
                      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse12">
                        Freedom to Exercise Rights</a>
                      </h4>
                    </div>
                    <div id="collapse12" className="panel-collapse collapse">
                      <div className="panel-body">
                      <p>Apartment owners may not do the following in retaliation for tenants demanding their rights under the Ordinance:</p>
                      <ul>
                        <li>Threaten to sue, evict or terminate the tenancy of the tenant(s).</li>
                        <li>Harass you until you leave. </li>
                        <li>Reduce your services. </li>
                        <li>Increase your rent. </li>
                        <li>Impose a security deposit or any other new charge. </li>
                      </ul>
                      <em>If any of these actions occur, provide a written complaint to the Rental Rights & Referrals Program.</em>
                      </div>
                    </div>
                  </div>
                  <br/>
                </div>
              </div>
              <div id="menu4" className="tab-pane fade">
                <h3>Mobile Home Ordinance</h3>
                <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse13">
                        What is covered by ARO?</a>
                      </h4>
                    </div>
                    <div id="collapse13" className="panel-collapse collapse in">
                      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse14">
                        How much can rent be increased?</a>
                      </h4>
                    </div>
                    <div id="collapse14" className="panel-collapse collapse">
                      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse15">
                        What can property owners and tenants file a petition for?</a>
                      </h4>
                    </div>
                    <div id="collapse15" className="panel-collapse collapse">
                      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.</div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse16">
                        Freedom to Exercise Rights</a>
                      </h4>
                    </div>
                    <div id="collapse16" className="panel-collapse collapse">
                      <div className="panel-body">
                      <p>Apartment owners may not do the following in retaliation for tenants demanding their rights under the Ordinance:</p>
                      <ul>
                        <li>Threaten to sue, evict or terminate the tenancy of the tenant(s).</li>
                        <li>Harass you until you leave. </li>
                        <li>Reduce your services. </li>
                        <li>Increase your rent. </li>
                        <li>Impose a security deposit or any other new charge. </li>
                      </ul>
                      <em>If any of these actions occur, provide a written complaint to the Rental Rights & Referrals Program.</em>
                      </div>
                    </div>
                  </div>
                  <br/>
                  <p>Learn more about the Apartment Rent Ordinance and draft changes <a href="http://www.sanjoseca.gov/index.aspx?nid=1355" target="blank">here</a>.</p>
                </div>
              </div>
            </div>
            <hr/>
            <br/>
            <p><em>We only cover the City of San José for now. To learn more about California law and tenant rights, see the <a href="http://www.dca.ca.gov/publications/landlordbook/index.shtml" target="_blank">California Tenants - A Guide to Residential Tenants' and Landlords' Rights and Responsibilities publication</a> by the California Department of Consumer Affairs.</em></p>
         </div>
        </div>
      </RentersLayout>
    )
  }
}
