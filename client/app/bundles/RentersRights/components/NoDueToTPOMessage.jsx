import React from 'react';
import RentersLayout from './RentersLayout';

export default function NoDueToTPOMessage({
  className,
}) {
  return (
    <RentersLayout
      className={className}
    >
      <div className="home-links">
        <div className="container">
          <h4>No, your landlord cannot legally evict you because under the Tenant Protection Ordinance, the landlord's notice must state one of 12 Just Cause reasons for termination. </h4>
          <p><a href="http://www.sanjoseca.gov/index.aspx?nid=5518">Learn more about the Tenant Protection Ordinance</a>.</p>
          <p>
            <h4>Please confirm with a legal advisor and refer to our <a href="/resources">resource guide</a>.</h4>
          </p>
          <br/>
          <p>
            <a href="/">
              &laquo; Back to home page
            </a>
          </p>
        </div>
      </div>
    </RentersLayout>
  );
}
