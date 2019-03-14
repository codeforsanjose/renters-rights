import React from 'react';
import RentersLayout from './RentersLayout'

export default class Eviction extends React.Component {
  render() {

{/* Locale set up. Remove comment when app is translated.
    const { locale } = this.props;
    <RentersLayout locale={locale}>
  */}

    const {} = this.props;

    return (
      <RentersLayout>
        <div className="content-container language-paragraph">
          <div className="page-header">
            <h1>How to Deal with an Eviction Notice</h1>
          </div>
          <div className="row">
            <div className="col-md-3">
              <h2>STEP ONE</h2>
            </div>
            <div className="col-md-9">
              <h2>VERIFY THAT IT’S AN OFFICIAL EVICTION NOTICE</h2>
              <br/>
              <span className="glyphicon glyphicon-unchecked"></span> 
              Is it in writing?
              <br/>
              <span className="glyphicon glyphicon-unchecked"></span> 
              Does it have the title “Three Day Notice to Pay Rent or Quit”? 
              <br/>
              <span className="glyphicon glyphicon-unchecked"></span> 
              Is it signed and dated? 
              <br/>
              <span className="glyphicon glyphicon-unchecked"></span> 
              Does it give you three days to pay the rent or move out? 
              <br/>
              <span className="glyphicon glyphicon-unchecked"></span> 
              Does it say that your lease will be forfeited if rent is not paid in three days? 
              <br/>
              <span className="glyphicon glyphicon-unchecked"></span> 
              Was it served properly?
              <br/>
              <span className="glyphicon glyphicon-unchecked"></span> 
              Does it include the name and address of the tenant? 
              <br/>
              <span className="glyphicon glyphicon-unchecked"></span> 
              Does it include a reason for the eviction?
              <br/><br/>
              <div className="row">
                <div className="col-md-10">
                  Learn more about San José Tenant Rights Policies:
                  <p><a href="/tenant-protection-ordinance" target="_blank">Just Cause - <em>Tenant Protection Ordinance</em></a></p>
                  <p><a href="/ellis-act-ordinance" target="_blank">Ellis Act Ordinance</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <h2>STEP TWO</h2>
            </div>
            <div className="col-md-9">
              <h2>RESPOND WITHIN FIVE DAYS</h2>
              <br/>
              <p>
              After confirming that the notice is official, respond by filing an answer to the unlawful detainer within <em>five days</em>. 
              </p>
              <p>
File an answer by filling out the following forms supplied by Santa Clara County’s Superior Court of California:</p>
              <p> (1) <a href="http://www.courts.ca.gov/ud105.pdf" target="_blank"> Answer to Unlawful Detainer</a>; and
              </p>
              <p> (2) <a href="http://www.courts.ca.gov/pos030.pdf" target="_blank"> Proof of Service by First Class Mail.</a>
              </p>
              <br/>
              <h4>PROCESSING FEE: $225 to $435</h4>
              <p>
              As of January 2018, it costs $225 to $435 (depending on amount owed) to file an answer to an unlawful detainer. Check the <a href="http://www.scscourt.org/self_help/civil/ud/ud_answering.shtml#cost" target="_blank">Santa Clara County website</a> for the latest fees. 
              </p>
              <p>Make checks payable to the Court Clerk. 
              </p>
              <p>If you are low-income, you can apply for this fee to be waived. Find fee waiver forms on the <a href="http://www.scscourt.org/self_help/civil/ud/ud_answering.shtml#where" target="_blank">Santa Clara County website.</a>
              </p>
              <br/>
              <h4> How to serve the answer </h4>
              <p>The answer must be served by an individual that is not you, the tenant, 18 years or older. File it twice.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <h2>STEP THREE</h2>
            </div>
            <div className="col-md-9">
              <h2>WAIT</h2>
              <br/>
              <p>After you file an answer, your landlord can request a trial. Since evictions are on “fast-tracks” your trial will be scheduled in approximately 20 days.</p>
              <p className="text-center">
              TYPICAL DAYS TO TRIAL:
              </p>
              <h4 className="text-center">
              20 DAYS
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <h2>STEP FOUR</h2>
            </div>
            <div className="col-md-9">
              <h2>SEEK ASSISTANCE</h2>
              <br/>
              Find local <a href="/resources/all">legal aid resources</a>
            </div>
          </div>
          <br/>
          <br/>
          <p>
          <em>This is for information purposes only. It is not intended to be legal advice. Source of information: <a href="http://www.scscourt.org/self_help.shtml/" target="_blank">Santa Clara County - Self Help section</a>.</em>
          </p>
        </div>
      </RentersLayout>
    )
  }
}
