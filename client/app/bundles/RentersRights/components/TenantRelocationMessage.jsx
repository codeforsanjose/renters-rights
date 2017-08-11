import React from 'react';
import RentersLayout from './RentersLayout';

export default function TenantReallocationMessage({
  className,
}) {
  return (
    <RentersLayout className={className}>
      <div className="home-links">
        <div className="container">
          <p className="language-paragraph">
          If any of the following Just Cause reasons were selected for termination, relocation benefits must be paid to the tenant.
          </p>
          <li className="list-group-item language-paragraph">Substantial rehabilitation of the apartment</li>
          <li className="list-group-item language-paragraph">Ellis Act removal or demolition</li>
          <li className="list-group-item language-paragraph">Owner move-in</li>
          <li className="list-group-item language-paragraph">Order to vacate</li>
          <li className="list-group-item language-paragraph">Leaving an unpermitted apartment</li>
          <br/>
          <p className="language-paragraph">Notice to vacate must be based on a cause included in the list of twelve just-cause terminations listed in the <a href="http://www.sanjoseca.gov/DocumentCenter/View/70490">Tenant Protection Ordinance</a>.
          </p>
          <br/>
          <p className="language-paragraph">Please confirm with a legal advisor and refer to our list of <a href="#">resources</a>.</p>
          <a href="/">
            &laquo; Back to home page
          </a>
        </div>
      </div>
    </RentersLayout>
  );
}
