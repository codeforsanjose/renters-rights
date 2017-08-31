import React from 'react';
import RentersLayout from './RentersLayout';

export default class Eviction extends React.Component {

    render() {
      const { } = this.props;
      return (
        <RentersLayout>
          <div className="container">

            <h3>Tenant Eviction</h3>

            <br/>
            <h4>Eviction Process for California Residents</h4>
            <p>The following chart provides general instructions that apply to most tenants. Learn more about <a href="http://www.courts.ca.gov/27953.htm" target="_blank">special situations</a> and <a href="/renters">local San José ordinances</a>.</p>


            <h4> Find Help </h4>
            <ul>
              <li>Find a <a href="https://lawhelpca.org/issues/housing/landlord-and-tenant-issues" target="_blank">legal aid program</a></li>
              <li>Find help from your <a href="http://www.courts.ca.gov/selfhelp-courtresources.htm" target="_blank">court</a></li>
              <li>Refer to our list of <a href="/resources">resources</a> for more information.</li>
            </ul>

            <br/>
            <p> To learn more about the Eviction Process in the State of California, visit the <a href="http://www.courts.ca.gov/27798.htm" target="_blank">California Courts</a> website.</p>

            <button type="button" className="btn btn-default">
              <a href="http://www.courts.ca.gov/partners/documents/eviction_process_flowchart.pdf">
                <span className="glyphicon glyphicon-download-alt"></span> Download Eviction Process PDF
              </a>
            </button>
          </div>
        </RentersLayout>
      );
    }
}
