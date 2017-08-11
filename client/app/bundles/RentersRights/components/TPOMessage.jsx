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
          <p className="language-paragraph">The Tenant Protection Ordinance specifies requirements for providing notices to vacate for tenants living in apartments with three units or more in San José. The ordinance eliminates no-cause notices and requires a just cause for all notices to vacate.</p>
          <br/>
          <li className="list-group-item language-paragraph active language-paragraph">Just Cause Terminations. <br/>The reasons for no-cause notice to vacate that signify fault on the part of the tenant are:</li>
          <li className="list-group-item language-paragraph">1. Nonpayment of rent</li>
          <li className="list-group-item language-paragraph">2. Material or habitual violation of the lease</li>
          <li className="list-group-item language-paragraph">3. Substantial damage to the apartment</li>
          <li className="list-group-item language-paragraph">4. Refusal to agree to a like or new rental agreement</li>
          <li className="list-group-item language-paragraph">5. Nuisance behavior</li>
          <li className="list-group-item language-paragraph">6. Refusing access to the apartment, requested in accordance in law</li>
          <li className="list-group-item language-paragraph">7. Unapproved holdover subtenant</li>
          <li className="list-group-item language-paragraph active language-paragraph">No-Fault Just Causes. <br/>Relocation benefits must be paid when a Tenant is being removed from an apartment for reasons 8-12.</li>
          <li className="list-group-item language-paragraph">8. Substantial rehabilitation of the apartment</li>
          <li className="list-group-item language-paragraph">9. Ellis Act removal or demolition</li>
          <li className="list-group-item language-paragraph">10. Owner move-in</li>
          <li className="list-group-item language-paragraph">11. Order to vacate</li>
          <li className="list-group-item language-paragraph">12. Leaving an unpermitted apartment</li>
          <br/>
          <p className="language-paragraph">
          Learn more about the <a href="http://www.sanjoseca.gov/index.aspx?nid=5518">Tenant Protection Ordinance</a>.
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
