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
          <p className="language-paragraph">Under the Tenant Protection Ordinance, the landlord's notice must state one of 12 Just Cause reasons for termination. Learn more about the <a href="http://www.sanjoseca.gov/index.aspx?nid=5518">Tenant Protection Ordinance</a>.
          </p>
          <p className="language-paragraph">Please confirm with a legal advisor and refer to our <a href="/resources">resource guide</a>.
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
